package com.portal.apiinventory.controller;

import com.portal.apiinventory.dto.CreateApiRequest;
import com.portal.apiinventory.entity.Api;
import com.portal.apiinventory.service.ApiService;

import jakarta.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/v1/apis")
public class ApiController {

    private final ApiService apiService;

    public ApiController(ApiService apiService) {
        this.apiService = apiService;
    }

    // Get all APIs
    @GetMapping
    public ResponseEntity<List<Api>> getAllApis() {
        return ResponseEntity.ok(apiService.getAllApis());
    }

    // Get API by ID
    @GetMapping("/{id}")
    public ResponseEntity<Api> getApiById(@PathVariable UUID id) {
        return apiService.getApiById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // Register a new API
    @PostMapping
    public ResponseEntity<Api> createApi(
            @Valid @RequestBody CreateApiRequest request) {

        Api createdApi = apiService.createApi(request);

        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(createdApi);
    }
}
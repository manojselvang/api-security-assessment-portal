package com.portal.apiinventory.service;

import com.portal.apiinventory.dto.CreateApiRequest;
import com.portal.apiinventory.entity.Api;
import com.portal.apiinventory.repository.ApiRepository;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class ApiService {

    private final ApiRepository apiRepository;

    public ApiService(ApiRepository apiRepository) {
        this.apiRepository = apiRepository;
    }

    // Retrieve all APIs
    public List<Api> getAllApis() {
        return apiRepository.findAll();
    }

    // Retrieve API by ID
    public Optional<Api> getApiById(UUID id) {
        return apiRepository.findById(id);
    }

    // Create a new API
    public Api createApi(CreateApiRequest request) {

        Api api = new Api();

        api.setName(request.name());
        api.setDescription(request.description());
        api.setBaseUrl(request.baseUrl());
        api.setApiType(request.apiType());
        api.setOwner(request.owner());
        api.setEnvironment(request.environment());
        api.setAuthenticationType(request.authenticationType());
        api.setDataClassification(request.dataClassification());
        api.setCriticality(request.criticality());
        api.setStatus("ACTIVE");

        return apiRepository.save(api);
    }
}
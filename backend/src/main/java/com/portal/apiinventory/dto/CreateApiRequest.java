package com.portal.apiinventory.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record CreateApiRequest(

    @NotBlank
    @Size(max = 150)
    String name,

    String description,

    @NotBlank
    @Size(max = 500)
    String baseUrl,

    @NotBlank
    String apiType,

    String owner,

    @NotBlank
    String environment,

    String authenticationType,

    String dataClassification,

    @NotBlank
    String criticality

) {}
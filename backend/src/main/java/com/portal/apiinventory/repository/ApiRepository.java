package com.portal.apiinventory.repository;

import com.portal.apiinventory.entity.Api;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface ApiRepository extends JpaRepository<Api, UUID> {
}
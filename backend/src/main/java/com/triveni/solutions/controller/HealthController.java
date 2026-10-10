package com.triveni.solutions.controller;

import com.triveni.solutions.dto.ApiResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/health")
public class HealthController {

    @GetMapping
    public ResponseEntity<ApiResponse<Map<String, Object>>> getHealthStatus() {
        Map<String, Object> healthInfo = new HashMap<>();
        healthInfo.put("status", "ACTIVE");
        healthInfo.put("activeMonitors", 24);
        healthInfo.put("uptime", "99.99%");
        healthInfo.put("systemCheck", "All Security Systems Operational");

        return ResponseEntity.ok(ApiResponse.success("Security System Health Active", healthInfo));
    }
}

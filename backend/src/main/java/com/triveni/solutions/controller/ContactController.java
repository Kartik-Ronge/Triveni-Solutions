package com.triveni.solutions.controller;

import com.triveni.solutions.dto.ApiResponse;
import com.triveni.solutions.dto.ContactRequest;
import com.triveni.solutions.entity.ContactInquiry;
import com.triveni.solutions.service.ContactService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/contact")
public class ContactController {

    private final ContactService contactService;

    @Autowired
    public ContactController(ContactService contactService) {
        this.contactService = contactService;
    }

    @PostMapping
    public ResponseEntity<ApiResponse<ContactInquiry>> submitInquiry(
            @Valid @RequestBody ContactRequest request,
            BindingResult bindingResult) {

        if (bindingResult.hasErrors()) {
            String errorMessage = bindingResult.getAllErrors().get(0).getDefaultMessage();
            return ResponseEntity.badRequest().body(ApiResponse.error(errorMessage));
        }

        ContactInquiry saved = contactService.saveInquiry(request);
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(ApiResponse.success("Transmission received. Our security team will review your inquiry shortly.", saved));
    }

    @GetMapping
    public ResponseEntity<ApiResponse<List<ContactInquiry>>> getAllInquiries() {
        List<ContactInquiry> inquiries = contactService.getAllInquiries();
        return ResponseEntity.ok(ApiResponse.success("Inquiries retrieved successfully", inquiries));
    }
}

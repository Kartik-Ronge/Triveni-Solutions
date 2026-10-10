package com.triveni.solutions.service;

import com.triveni.solutions.dto.ContactRequest;
import com.triveni.solutions.entity.ContactInquiry;
import com.triveni.solutions.repository.ContactInquiryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ContactService {

    private final ContactInquiryRepository repository;

    @Autowired
    public ContactService(ContactInquiryRepository repository) {
        this.repository = repository;
    }

    public ContactInquiry saveInquiry(ContactRequest request) {
        ContactInquiry inquiry = new ContactInquiry(
                request.getName(),
                request.getEmail(),
                request.getPhone(),
                request.getServiceType() != null ? request.getServiceType() : "General Inquiry",
                request.getMessage()
        );

        return repository.save(inquiry);
    }

    public List<ContactInquiry> getAllInquiries() {
        return repository.findAll();
    }
}

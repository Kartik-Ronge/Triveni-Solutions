package com.triveni.solutions;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class TriveniApplication {

    public static void main(String[] args) {
        SpringApplication.run(TriveniApplication.class, args);
        System.out.println("=================================================");
        System.out.println("🚀 Triveni Solutions Security Backend Active!");
        System.out.println("📡 Server listening on: http://localhost:8080");
        System.out.println("💾 H2 Console available at: http://localhost:8080/h2-console");
        System.out.println("=================================================");
    }
}

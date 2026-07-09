package org.example.controller;
import org.example.dto.AuthRequest;
import org.example.dto.AuthResponse;
import org.example.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
@RestController
public class AuthController {
    @Autowired
    private AuthService authService;
    @PostMapping("/login")
    public AuthResponse login(@RequestBody AuthRequest request) {
        String token = authService.authenticate(
                request.getUsername(),
                request.getPassword());
        return new AuthResponse(token);
    }
}
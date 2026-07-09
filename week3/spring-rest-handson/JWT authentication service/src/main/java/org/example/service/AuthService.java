package org.example.service;
import org.example.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
@Service
public class AuthService {
    @Autowired
    private JwtUtil jwtUtil;
    public String authenticate(String username, String password) {
        if ("admin".equals(username) &&
                "admin123".equals(password)) {
            return jwtUtil.generateToken(username);
        }
        return "Invalid Username or Password";
    }
}
package com.cognizant.accountservice.controller;
import com.cognizant.accountservice.model.Account;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController
public class AccountController {
    @GetMapping("/account")
    public Account getAccount() {
        return new Account(
                1023,
                "Balajivasun",
                250000.0
        );
    }
}
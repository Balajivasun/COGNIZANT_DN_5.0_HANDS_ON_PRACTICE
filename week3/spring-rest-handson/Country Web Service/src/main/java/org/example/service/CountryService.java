package org.example.service;

import org.example.model.Country;
import org.springframework.stereotype.Service;

@Service
public class CountryService {

    public Country getCountry() {

        return new Country("IN", "India");

    }

}
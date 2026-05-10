package com.example.backend.Controllers;

import com.example.backend.Models.Places;
import com.example.backend.Repository.PlacesRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/place")
public class PlacesController {

    private final PlacesRepository placesRepository;
    public PlacesController(PlacesRepository placesRepository) {this.placesRepository = placesRepository;}

    @GetMapping("/all")
    public ResponseEntity<List<Places>> getAllPlaces(){
        List<Places> places= placesRepository.findAll();
        return new ResponseEntity<>(places, HttpStatus.OK);
    }


    @PostMapping(value = "/add")
    public ResponseEntity<Places> addPlace(@RequestBody Places places){
        return new ResponseEntity<>(placesRepository.save(places),HttpStatus.CREATED);
    }

}
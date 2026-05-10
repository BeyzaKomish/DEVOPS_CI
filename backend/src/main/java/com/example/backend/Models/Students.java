package com.example.backend.Models;


import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Students {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(length = 16)
    private String name;
    @Column(length = 16)
    private String department;




    //@JsonBackReference
    @JsonIgnore
    @OneToMany(mappedBy = "students", cascade = CascadeType.ALL)
    private List<Reservation> reservations;


}


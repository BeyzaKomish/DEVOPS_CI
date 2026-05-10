package com.example.backend.Models;


import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class Places {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long placeid;
    @Column(length = 32)
    private String building;
    @Column(length = 32)
    private String floor;
    @Column (length=32)
    private String room;
    @Column(length = 32)
    private String seat;


    @OneToMany(mappedBy = "places", cascade = CascadeType.ALL)
    //@JsonBackReference
    @JsonIgnore
    private List<Reservation> reservations;

    public Long getId() {
        return placeid;
    }
    public void setId(Long placeid) {
        this.placeid = placeid;
    }
}


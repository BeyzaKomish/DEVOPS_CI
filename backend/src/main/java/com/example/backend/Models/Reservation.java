package com.example.backend.Models;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.time.LocalTime;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class Reservation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long reservation_id;

    @Column(name = "date")
    private LocalDateTime Date;

    @Column(name = "duration")
    private LocalTime Duration;


    @JsonProperty("students")
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "id")
    private Students students;

    @JsonProperty("places")
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "placeid")
    private Places places;



    public Long getId() {
        return reservation_id;
    }

    public void setId(Long reservationId) {
        this.reservation_id = reservationId;
    }



    @JsonProperty("student_id")
    public Long getStudent_id() {
        return students != null ? students.getId() : null;
    }

    @JsonProperty("place_id")
    public Long getPlace_id() {
        return places != null ? places.getPlaceid():null;}


    public Long getPlaceid() {
        return places != null ? places.getPlaceid() : null;
    }

    public Long getStudentid() {
        return places != null ? students.getId() : null;
    }


}

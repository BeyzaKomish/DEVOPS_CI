package com.example.backend.Repository;

import com.example.backend.Models.Places;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PlacesRepository extends JpaRepository<Places, Long> {
//    @Query(value = "SELECT p FROM Places p WHERE p.isDeleted=FALSE")
//    List<Places> getUndeleted();
}

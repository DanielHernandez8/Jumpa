package com.jumpa.Jumpa.repository;

import com.jumpa.Jumpa.model.Juego;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface JuegoRepository extends JpaRepository<Juego, Long> {

}


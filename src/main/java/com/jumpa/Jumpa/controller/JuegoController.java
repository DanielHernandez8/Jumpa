package com.jumpa.Jumpa.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jumpa.Jumpa.model.Juego;
import com.jumpa.Jumpa.service.GameService;


@RestController
@RequestMapping("/api")
public class JuegoController {
	
	@Autowired
	private GameService gameService;

    @GetMapping
    public ResponseEntity<Resource> showGamePage() {
        Resource resource = new ClassPathResource("static/game.html");
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.TEXT_HTML);
        return new ResponseEntity<>(resource, headers, HttpStatus.OK);
    }

    @GetMapping(value = "/juegos")
	public ResponseEntity<?> showGames() {
		try {
			List<Juego> result = gameService.getGames();
			return new ResponseEntity<List<Juego>>(result, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<String>(e.getMessage(), HttpStatus.BAD_REQUEST);
		}
	}
    
    //POst
    
    
    //Put
    
    
    //Delete
}



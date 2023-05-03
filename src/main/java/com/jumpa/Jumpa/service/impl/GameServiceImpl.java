package com.jumpa.Jumpa.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jumpa.Jumpa.model.Juego;
import com.jumpa.Jumpa.repository.JuegoRepository;
import com.jumpa.Jumpa.service.GameService;


@Service
public class GameServiceImpl implements GameService{
	
	@Autowired
	private JuegoRepository juegoRepository;

	@Override
	public List<Juego> getGames() {
		return juegoRepository.findAll();
	}

	@Override
	public Juego createGame(Juego juego) {
		return juegoRepository.save(juego);
	}

	@Override
	public Juego updateGame(Juego juego) {
		return juegoRepository.saveAndFlush(juego);
	}

	@Override
	public void deleteGame(Long id) {
		juegoRepository.deleteById(id);
	}

}

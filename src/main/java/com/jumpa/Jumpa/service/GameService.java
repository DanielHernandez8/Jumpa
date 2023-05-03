package com.jumpa.Jumpa.service;

import java.util.List;

import com.jumpa.Jumpa.model.Juego;

public interface GameService {
	
	public List<Juego> getGames();
	public Juego createGame(Juego juego);
	public Juego updateGame(Juego juego);
	public void deleteGame(Long id);

}

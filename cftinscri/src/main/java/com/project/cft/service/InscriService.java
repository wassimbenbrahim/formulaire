package com.project.cft.service;

import java.util.Collection;

import com.project.cft.entities.inscription;

public interface InscriService {

	 Iterable<inscription> listAlletudients();

	 inscription getetudientById(Long id);

	 void saveinscri(inscription inscription);

	 String deleteetudient(Long id);
	 void sendSimpleEmail(String toEmail,
             String body,
             String subject);
	 inscription findById(Long id);
	 inscription retrieveacceptÃ©(Long id);
	 Collection<inscription> findAllacceptedstudent();
	 Collection<inscription> listeattente();
	 inscription retrieverefusÃ©(Long id);
	 Collection<inscription> listerefuse();
	 String generateRandomPassword(int len);
	 inscription login(String username, String password);
}

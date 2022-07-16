package com.project.cft.repo;

import java.util.Collection;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.project.cft.entities.inscription;
@Repository


public interface inscridao extends CrudRepository<inscription, Long> {

	
	@Query(
			  value = "SELECT * FROM inscription u WHERE u.status = 1 AND u.refuse = 0", 
			  nativeQuery = true)
	Collection<inscription> findAllacceptedstudent();


@Query(
		  value = "SELECT * FROM inscription u WHERE u.status = 0 AND u.refuse = 0", 
		  nativeQuery = true)
Collection<inscription> listeattente();

@Query(
		  value = "SELECT * FROM inscription u WHERE u.refuse = 1 AND u.status = 0", 
		  nativeQuery = true)
Collection<inscription> listerefuse();
}
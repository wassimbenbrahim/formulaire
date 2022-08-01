package com.project.cft.payload;

import javax.validation.constraints.NotBlank;

public class LoginRequest {
	@NotBlank
  private String nom;

	@NotBlank
	private String password;

	public String getUsername() {
		return nom;
	}

	public void setUsername(String username) {
		this.nom = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
}

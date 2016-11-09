package com.stefanini.model;
// Generated 07/11/2016 12:04:56 by Hibernate Tools 4.3.1.Final

import static javax.persistence.GenerationType.IDENTITY;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

/**
 * Agente generated by hbm2java
 */
@Entity
@Table(name = "Agente")
public class Agente implements  Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = IDENTITY)
	private Integer idAgente;
	
	@Column(name = "nome", length = 100)
	private String nome;
	
	@Temporal(TemporalType.DATE)
	@Column(name = "dtContratacao", length = 10)
	private Date dtContratacao;
	private Integer tempoServico;

	public Agente() {
	}

	public Agente(String nome, Date dtContratacao, Integer tempoServico) {
		this.nome = nome;
		System.out.println("nome"+nome);
		this.dtContratacao = dtContratacao;
		this.tempoServico = tempoServico;
	}


	public Integer getIdAgente() {
		return this.idAgente;
	}

	public void setIdAgente(Integer idAgente) {
		this.idAgente = idAgente;
	}

	public String getNome() {
		return this.nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public Date getDtContratacao() {
		//System.out.println("data +"+dtContratacao);
		return this.dtContratacao;
	}

	public void setDtContratacao(Date dtContratacao) {
		this.dtContratacao = dtContratacao;
	}

	public Integer getTempoServico() {
		return this.tempoServico;
	}

	public void setTempoServico(Integer tempoServico) {
		this.tempoServico = tempoServico;
	}
	


}

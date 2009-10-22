package br.com.cadasilva.inss.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name="funcionario")
@SequenceGenerator(name="sqc_funcionario",sequenceName="sqc_funcionario")
public class Funcionario {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO, generator="sqc_funcionario")
	private Long Id;
	
	@Column()
	private String nome;
	
	@Column()
	private String cpf;
	
	@Column()
	private String identidade;
	
	@Column()
	private String pis;
	
	@Column()
	private String cartProfissional;
	
	@Column()
	private String nrSerie;
	
	@Column()
	private String orgaoExpCartProf;
	
	@Column()
	private String dataInicial;
	
	@Column()
	private String dataFinal;
	
	@Column()
	private String cargoInicial;
	
	@Column()
	private String cargoFinal;
	
	@Column()
	private double salInicial;
	
	@Column()
	private Float salFinal;
	
	@Column()
	private Float tempoServico;

	public Float getTempoServico() {
		return tempoServico;
	}

	public void setTempoServico(Float tempoServico) {
		this.tempoServico = tempoServico;
	}

	public Long getId() {
		return Id;
	}

	public void setId(Long id) {
		Id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getCpf() {
		return cpf;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
	}

	public String getIdentidade() {
		return identidade;
	}

	public void setIdentidade(String identidade) {
		this.identidade = identidade;
	}

	public String getPis() {
		return pis;
	}

	public void setPis(String pis) {
		this.pis = pis;
	}

	public String getCartProfissional() {
		return cartProfissional;
	}

	public void setCartProfissional(String cartProfissional) {
		this.cartProfissional = cartProfissional;
	}

	public String getNrSerie() {
		return nrSerie;
	}

	public void setNrSerie(String nrSerie) {
		this.nrSerie = nrSerie;
	}

	public String getOrgaoExpCartProf() {
		return orgaoExpCartProf;
	}

	public void setOrgaoExpCartProf(String orgaoExpCartProf) {
		this.orgaoExpCartProf = orgaoExpCartProf;
	}

	public String getDataInicial() {
		return dataInicial;
	}

	public void setDataInicial(String dataInicial) {
		this.dataInicial = dataInicial;
	}

	public String getDataFinal() {
		return dataFinal;
	}

	public void setDataFinal(String dataFinal) {
		this.dataFinal = dataFinal;
	}

	public String getCargoInicial() {
		return cargoInicial;
	}

	public void setCargoInicial(String cargoInicial) {
		this.cargoInicial = cargoInicial;
	}

	public String getCargoFinal() {
		return cargoFinal;
	}

	public void setCargoFinal(String cargoFinal) {
		this.cargoFinal = cargoFinal;
	}

	public double getSalInicial() {
		return salInicial;
	}

	public void setSalInicial(Double salInicial2) {
		this.salInicial = salInicial2;
	}

	public Float getSalFinal() {
		return salFinal;
	}

	public void setSalFinal(Float salFinal) {
		this.salFinal = salFinal;
	}
	

}

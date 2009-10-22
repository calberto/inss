package br.com.cadasilva.inss.model;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name="cidades")
@SequenceGenerator(name="sqc_cidades", sequenceName="sqc_cidades" )
public class Cidades {
	
	public Cidades() {}
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO, generator="sqc_cidades")
	private Long id;
	
	@Column()
	private String cidade;
	
	@Column()
	private String estado;
	
	@Column()
	private Long idestado;
	/*
	@ManyToOne()
	@JoinColumn(name = "idestado", insertable=false, updatable=false)
	private Estado uf;

	public Estado getUf() {
		return uf;
	}

	public void setUf(Estado uf) {
		this.uf = uf;
	}
*/
	public Long getIdestado() {
		return idestado;
	}

	public void setIdestado(Long idestado) {
		this.idestado = idestado;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getCidade() {
		return cidade;
	}

	public void setCidade(String cidade) {
		this.cidade = cidade;
	}

	public String getEstado() {
		return estado;
	}

	public void setEstado(String estado) {
		this.estado = estado;
	}

}

package br.com.cadasilva.inss.model;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name="estados")
@SequenceGenerator(name="sqc_estado", sequenceName="sqc_estado")
public class Estado {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO, generator="sqc_estado")
	private Long id;
	
	@Column()
	private String sigla;
	
	@Column()
	private String descricao;
	
	@Column()
	private Long idestado;
	
	public Long getIdestado() {
		return idestado;
	}

	public void setIdestado(Long idestado) {
		this.idestado = idestado;
	}

	@OneToMany()
	@JoinColumn(name = "idestado",insertable=false, updatable=false)
	private List<Cidades> cidades;
	
	
	public List<Cidades> getCidades() {
		return cidades;
	}

	public void setCidades(List<Cidades> cidades) {
		this.cidades = cidades;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getSigla() {
		return sigla;
	}

	public void setSigla(String sigla) {
		this.sigla = sigla;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}
}

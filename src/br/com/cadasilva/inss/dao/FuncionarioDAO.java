package br.com.cadasilva.inss.dao;

import java.io.Serializable;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.hibernate.HibernateException;
import org.hibernate.criterion.DetachedCriteria;
import org.hibernate.criterion.Restrictions;
import org.springframework.dao.DataAccessException;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

import br.com.cadasilva.inss.exception.PersistenceException;

import br.com.cadasilva.inss.model.Empresa;
import br.com.cadasilva.inss.model.Funcionario;
import br.com.cadasilva.inss.util.Conexao;
public class FuncionarioDAO extends HibernateDaoSupport implements
		GenericDAO<Funcionario, Long> {
	
	public Serializable id;
	
	public void save(Funcionario funcionario) throws PersistenceException {
		try {
			id = getHibernateTemplate().save(funcionario);
		} catch (DataAccessException exception) {
			throw new PersistenceException("Ocorre um erro ao salvar: " + funcionario.getNome(),exception);
		}
	}
	
	public void update(Funcionario funcionario) throws PersistenceException {
		try {
			getHibernateTemplate().update(funcionario);
		} catch (DataAccessException exception) {
			throw new PersistenceException("Ocorreu um erro ao atualizar: " + funcionario.getNome(),exception);
		}
	}
	
	public void delete(Funcionario funcionario) throws PersistenceException {
		try {
			getHibernateTemplate().delete(funcionario);
		} catch (DataAccessException exception) {
			throw new PersistenceException("Ocorreu um erro ao excluir: " + funcionario.getNome(),exception);
		}
	}
	
	public List<Funcionario> findAll(Funcionario funcionario, Class clazz) throws PersistenceException {
		DetachedCriteria criteria = null;
		try {
			criteria = DetachedCriteria.forClass(clazz);
			if (funcionario != null && !"".equals(funcionario.getNome())) {
				criteria.add(Restrictions.eq("nome", funcionario.getNome()));
			}
			return getHibernateTemplate().findByCriteria(criteria);

		} catch (DataAccessException exception) {
			throw new PersistenceException("Ocorre um erro ao pesquisar",exception);
		}
	}
	
	public List<Funcionario> findEmpresa(Class<Funcionario> clazz) throws PersistenceException {
		try {
			DetachedCriteria criteria = DetachedCriteria.forClass(clazz);
			return getHibernateTemplate().findByCriteria(criteria);
		} catch (DataAccessException exception) {
			throw new PersistenceException("Ocorreu um erro ao recuperar o nome:",exception);
		}
	}
	
	public Funcionario findById(Long primaryKey, Class<Funcionario> clazz) throws PersistenceException {
		try {
			return (Funcionario) getHibernateTemplate().get(clazz, primaryKey);
		} catch (HibernateException e) {
			throw new PersistenceException("Ocorreu um erro ao recuperar o objeto: " + clazz.getName() + "com o id:" + primaryKey,e);
		}
	}
	
	public List<Funcionario> getLista() throws SQLException {
		Connection conn = Conexao.getConexaoPostgreSQL();
		PreparedStatement stmt = conn.prepareStatement("select * from empresa");
		ResultSet rs = stmt.executeQuery();
		
		List<Funcionario> empresas = new ArrayList();
		
		while (rs.next()) {
			// Criando o objeto Empresa
			Funcionario empresa = new Funcionario();
			empresa.setNome(rs.getString("nome"));
			empresa.setCargoInicial(rs.getString("cargoInicial"));
			empresa.setCargoFinal(rs.getString("cargoFinal"));
			empresa.setCpf(rs.getString("cpf"));
			empresa.setIdentidade(rs.getString("identidade"));
			empresa.setPis(rs.getString("pis"));
			
			empresas.add(empresa);
		}
		rs.close();
		stmt.close();
		
		return empresas;
	}

	public Serializable getId() {
		return id;
	}

	public void setId(Serializable id) {
		this.id = id;
	}
	
	public List<Funcionario> findAll(Class<Funcionario> clazz) throws PersistenceException {
		return null;
	}
	
	public List<Funcionario> findOpcao(Class<Funcionario> clazz) throws PersistenceException {
		return null;
	}


// 11/09/2009
	
	public static List selectAllCpfCode() throws Throwable, Exception {
		Connection conn = Conexao.getConexaoPostgreSQL();
		List<Funcionario> dadosFuncionarioList = new ArrayList();
		PreparedStatement stmt = null;
		ResultSet rs = null;
		stmt = conn.prepareStatement("select id, cpf from funcionario order by cpf asc");
		rs = stmt.executeQuery();
		Funcionario funcionario = null;
		
		while (rs.next()) {
			funcionario = new Funcionario();
			Long id = rs.getLong("id");
			String cpf = rs.getString("cpf");
			
			funcionario.setId(id);
			funcionario.setCpf(cpf);
			dadosFuncionarioList.add(funcionario);
		}
		stmt.close();
		rs.close();
		conn.close();
		
		return dadosFuncionarioList;
		
	}
	
	
	public static Funcionario selectSomeCpfCode(String cpfs) throws Throwable,Exception {
		Funcionario funcionario = null;
		Connection conn = Conexao.getConexaoPostgreSQL();
		PreparedStatement stmt = null;
		ResultSet rs = null;
		String cpf = cpfs;
		StringBuffer sql = new StringBuffer();
		sql.append("select id, nome,pis, identidade, cartProfissional,nrSerie, orgaoExpCartProf,dataInicial,dataFinal,")
		   .append("cargoInicial,cargoFinal,salInicial,salFinal,tempoServico from funcionario")
		.append(" where cpf LIKE '%")
		.append(cpf)
		.append("%'");
		
		stmt = conn.prepareStatement(sql.toString());
		rs = stmt.executeQuery();
		
		while (rs.next()) {
			funcionario = new Funcionario();
			Long id = rs.getLong("id");
			String nome = rs.getString("nome");
			String pis = rs.getString("pis");
			String identidade = rs.getString("identidade");
			String cartProfissional = rs.getString("cartProfissional");
			String nrSerie = rs.getString("nrSerie");
			String orgaoExpCartProf = rs.getString("orgaoExpCartProf");
			String dataInicial = rs.getString("dataInicial");
			String dataFinal = rs.getString("dataFinal");
			String cargoInicial = rs.getString("cargoInicial");
			String cargoFinal = rs.getString("cargoFinal");
			Double salInicial = rs.getDouble("salInicial");
			Float salFinal = rs.getFloat("salFinal");
			Float tempoServico = rs.getFloat("tempoServico");
			
			
			funcionario.setId(id);
			funcionario.setNome(nome);
			funcionario.setPis(pis);
			funcionario.setIdentidade(identidade);
			funcionario.setCartProfissional(cartProfissional);
			funcionario.setNrSerie(nrSerie);
			funcionario.setOrgaoExpCartProf(orgaoExpCartProf);
			funcionario.setDataInicial(dataInicial);
			funcionario.setDataFinal(dataFinal);
			funcionario.setCargoInicial(cargoInicial);
			funcionario.setCargoFinal(cargoFinal);
			funcionario.setSalInicial(salInicial);
			funcionario.setSalFinal(salFinal);
			funcionario.setTempoServico(tempoServico);
		}
		
		rs.close();
		stmt.close();
		conn.close();
		
		return funcionario;
	}

}

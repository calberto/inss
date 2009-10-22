package br.com.cadasilva.inss.dao;

import java.io.Serializable;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.criterion.DetachedCriteria;
import org.hibernate.criterion.Restrictions;
import org.springframework.dao.DataAccessException;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

import br.com.cadasilva.inss.exception.PersistenceException;
import br.com.cadasilva.inss.model.AgenciaEmpregos;
import br.com.cadasilva.inss.model.Cidades;
import br.com.cadasilva.inss.model.Estado;
import br.com.cadasilva.inss.util.Conexao;
public class AgenciaEmpregosDAO extends HibernateDaoSupport implements
		GenericDAO<AgenciaEmpregos, Long> {
	
	public Serializable id;
	Session session = null;
	
	public void save(AgenciaEmpregos agenciaEmpregos) throws PersistenceException {
		
		try {
			id = getHibernateTemplate().save(agenciaEmpregos);
		} catch (DataAccessException exception) {
			throw new PersistenceException("Ocorreu um erro ao salvar: " + agenciaEmpregos.getAgencia(),exception);
		}
	}
	
	public void update(AgenciaEmpregos agenciaEmpregos) throws PersistenceException {
		try {
			getHibernateTemplate().update(agenciaEmpregos);
		} catch (DataAccessException exception) {
			throw new PersistenceException("Erro ao atualizar:" + agenciaEmpregos.getAgencia(),exception);
		}
	}
	
	public void delete(AgenciaEmpregos agenciaEmpregos) throws PersistenceException {
		try {
			getHibernateTemplate().delete(agenciaEmpregos);
		} catch (DataAccessException exception) {
			throw new PersistenceException("Ocorreu um erro ao excluir: "  + agenciaEmpregos.getAgencia(),exception);
		}
	}
	
	public List<AgenciaEmpregos> findAll(AgenciaEmpregos agenciaEmpregos, Class clazz) throws PersistenceException {
		DetachedCriteria criteria = null;
		try {
			criteria = DetachedCriteria.forClass(clazz);
			if (agenciaEmpregos != null && !"".equals(agenciaEmpregos.getAgencia())) {
				criteria.add(Restrictions.eq("agencia", agenciaEmpregos.getAgencia()));
			}
			return getHibernateTemplate().findByCriteria(criteria);
		} catch(DataAccessException exception) {
			throw new PersistenceException("Ocorreu um erro ao pesquisar", exception);
		}
	}
	

	public List<AgenciaEmpregos> findCidades(Class<AgenciaEmpregos> clazz) throws PersistenceException {
		try {
			DetachedCriteria criteria = DetachedCriteria.forClass(clazz);
			return getHibernateTemplate().findByCriteria(criteria);
		} catch (DataAccessException exception) {
			throw new PersistenceException("Ocorreu um erro ao recuperar o nome:",exception);
		}
	}
	
	public AgenciaEmpregos findById(Long primaryKey, Class<AgenciaEmpregos> clazz) throws PersistenceException {
		try {
			return (AgenciaEmpregos) getHibernateTemplate().get(clazz, primaryKey);
		} catch (HibernateException e) {
			throw new PersistenceException("Ocorreu um erro ao recuperar o objeto: " + clazz.getName() + "com o id:" + primaryKey,e);
		}
	}
	
	public List<Estado> getListaUnidades() throws SQLException {
		Connection conn = Conexao.getConexaoPostgreSQL();
		PreparedStatement stmt = conn.prepareStatement("select id,sigla from estados order by sigla asc");
		ResultSet rs = stmt.executeQuery();
		List<Estado> estados = new ArrayList<Estado>();
		
		while (rs.next()) {
			Estado estado = new Estado();
			estado.setId(rs.getLong("id"));
			estado.setSigla(rs.getString("sigla"));
			
			estados.add(estado);
		}
		rs.close();
		stmt.close();
		
		return estados;
	}
	
	public List<Cidades> popularCity(Long id) throws SQLException {
		Connection conn = Conexao.getConexaoPostgreSQL();
		String sql = "select cidade from cidades where idestado = "  + id +" "+"order by cidade";
		PreparedStatement stmt = conn.prepareStatement(sql);
		ResultSet rs = stmt.executeQuery();
		List<Cidades> cidades = new ArrayList<Cidades>();
		
		while (rs.next()) {
			Cidades cidade = new Cidades();
			cidade.setCidade(rs.getString("cidade"));
			
			cidades.add(cidade);
		}
		
		rs.close();
		stmt.close();
		
		return cidades;
	}
	
	public Serializable getId() {
		return id;
	}

	public void setId(Serializable id) {
		this.id = id;
	}
	
	public List<AgenciaEmpregos> findAll(Class<AgenciaEmpregos> clazz) throws PersistenceException {
		return null;
	}
	
	public List<AgenciaEmpregos> findOpcao(Class<AgenciaEmpregos> clazz) throws PersistenceException {
		return null;
	}

	

	public void setSession(Session session) {
		this.session = session;
	}



	/**
	 * MŽtodo que faz um simples select no banco e retorna um list bean AgenciaEmpregos
	 * @return dados AgenciaEmpregosList do objeto Bean AgenciaEmpregos
	 * @param session
	 */
	
	public static List selectOnlyState(Long id) throws Throwable, Exception {
		Connection conn = Conexao.getConexaoPostgreSQL();
		List<AgenciaEmpregos> dadosAgenciaEmpregosList = new ArrayList();
		PreparedStatement stmt = null;
		ResultSet rs = null;
		
		StringBuffer sql = new StringBuffer();
		sql.append("select id, uf, cidade from agenciaempregos where id ='");
		sql.append(id);
		sql.append("'");
		
		stmt = conn.prepareStatement(sql.toString());
		rs = stmt.executeQuery();
		
		AgenciaEmpregos agenciaEmpregos = null;
		
		while (rs.next()) {
			agenciaEmpregos = new AgenciaEmpregos();
			Long nr = rs.getLong("id");
			String uf = rs.getString("uf");
			String cidade = rs.getString("cidade");
			
			agenciaEmpregos.setId(nr);
			agenciaEmpregos.setUf(uf);
			agenciaEmpregos.setCidade(cidade);
			
			dadosAgenciaEmpregosList.add(agenciaEmpregos);
			
		}
		stmt.close();
		rs.close();
		conn.close();
		return dadosAgenciaEmpregosList;
	}
	
	// Em 03/09/2009
	public static List selectAllZipCode() throws Throwable, Exception {
		Connection conn = Conexao.getConexaoPostgreSQL();
		List<AgenciaEmpregos> dadosAgenciaEmpregosList = new ArrayList();
		PreparedStatement stmt = null;
		ResultSet rs = null;
		stmt = conn.prepareStatement("select id, cep from agenciaempregos order by cep asc");
		rs = stmt.executeQuery();
		AgenciaEmpregos agenciaEmpregos = null;
		
		while (rs.next()) {
			agenciaEmpregos = new AgenciaEmpregos();
			Long id = rs.getLong("id");
			String cep = rs.getString("cep");
			
			agenciaEmpregos.setId(id);
			agenciaEmpregos.setCep(cep);
			dadosAgenciaEmpregosList.add(agenciaEmpregos);
		}
		stmt.close();
		rs.close();
		conn.close();
		
		return dadosAgenciaEmpregosList;
		
	}
	
	public static AgenciaEmpregos selectSomeZipCodes(String zipCode) throws Throwable, Exception {
		AgenciaEmpregos agenciaEmpregos = null;
		Connection conn = Conexao.getConexaoPostgreSQL();
		//List<AgenciaEmpregos> dadosAgenciaEmpregosList = new ArrayList();
		PreparedStatement stmt = null;
		ResultSet rs = null;
		String cep = zipCode;
		StringBuffer sql = new StringBuffer();
		
		sql.append("select id,agencia,email,telefone from agenciaempregos")
		.append(" where cep LIKE '%")
		.append(cep)
		.append("%'");
		
	
		
		stmt = conn.prepareStatement(sql.toString());
		rs = stmt.executeQuery();
		
		
		
		while (rs.next()) {
			agenciaEmpregos = new AgenciaEmpregos();
			Long id = rs.getLong("id");
			String agencia = rs.getString("agencia");
			String email = rs.getString("email");
			String telefone = rs.getString("telefone");
			
			agenciaEmpregos.setId(id);
			agenciaEmpregos.setAgencia(agencia);
			agenciaEmpregos.setEmail(email);
			agenciaEmpregos.setTelefone(telefone);
			
			//dadosAgenciaEmpregosList.add(agenciaEmpregos);
		}
		
		rs.close();
		stmt.close();
		conn.close();
		
		return agenciaEmpregos;
	}
		
	
}

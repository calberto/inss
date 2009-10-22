package br.com.cadasilva.inss.dao;

import java.io.Serializable;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.criterion.DetachedCriteria;
import org.hibernate.criterion.Restrictions;
import org.springframework.dao.DataAccessException;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

import br.com.cadasilva.inss.exception.PersistenceException;
import br.com.cadasilva.inss.model.Estado;
import br.com.cadasilva.inss.util.Conexao;
public class EstadoDAO extends HibernateDaoSupport implements GenericDAO<Estado, Long> {
	
	public Serializable id;
	Session session;	
	
	public void save(Estado estado) throws PersistenceException {
		
		try {
			id = getHibernateTemplate().save(estado);
		} catch (DataAccessException exception) {
			throw new PersistenceException("Ocorreu um erro ao atualizar: " + estado.getSigla(),exception);
		}
	}
	
	public void update(Estado estado) throws PersistenceException {
		try {
			getHibernateTemplate().update(estado);
		} catch (DataAccessException exception) {
			throw new PersistenceException("Ocorreu um erro ao atualizar: " + estado.getSigla(),exception);
		}
	}
	
	public void delete(Estado estado) throws PersistenceException {
		try {
			getHibernateTemplate().delete(estado);
		} catch (DataAccessException exception) {
			throw new PersistenceException("Ocorreu um erro ao excluir: " + estado.getSigla(),exception);
		}
	}
	
	public List<Estado> findAll(Estado estado, Class clazz) throws PersistenceException {
		DetachedCriteria criteria = null;
		try {
		    criteria = DetachedCriteria.forClass(clazz);
		    if (estado != null && !"".equals(estado.getSigla())) {
				criteria.add(Restrictions.eq("sigla", estado.getSigla()));
			}
			return getHibernateTemplate().findByCriteria(criteria);
		} catch (DataAccessException exception) {
			throw new PersistenceException("Ocorreu um erro ao pesquisar", exception);
		}
	}
	
	public List<Estado> findEstado(Class<Estado> clazz) throws PersistenceException {
		try {
			DetachedCriteria criteria = DetachedCriteria.forClass(clazz);
			return getHibernateTemplate().findByCriteria(criteria);
		} catch (DataAccessException exception) {
			throw new PersistenceException("Ocorreu um erro ao recuperar o nome:",exception);
		}
	}
	
	public Estado findById(Long primaryKey, Class<Estado> clazz) throws PersistenceException {
		try {
			return (Estado) getHibernateTemplate().get(clazz, primaryKey);
		} catch (HibernateException e) {
			throw new PersistenceException("Ocorreu um erro ao recuperar o objeto: " + clazz.getName() + "com o id:" + primaryKey,e);
		}
	}
	
	public List<Estado> listaTudo(Class<Estado> clazz) throws PersistenceException {
		try {
			DetachedCriteria criteria = DetachedCriteria.forClass(clazz);
			return getHibernateTemplate().findByCriteria(criteria);
		} catch (DataAccessException e) {
			throw new PersistenceException("Ocorreu um erro ao recuperar opcao",e);
		}
	}
	
	/**
	 * MŽtodo que faz um simples select no banco e retorna um list bean Estado
	 * @return dados EstadoList do Objeto Bean Estado
	 * @param session
	 */
	public static List selectAllEstado() throws Throwable, Exception {
		Connection conn = Conexao.getConexaoPostgreSQL();
		List<Estado> dadosEstadoList = new ArrayList();
		PreparedStatement stmt = null;
		ResultSet rs = null;
		
		stmt = conn.prepareStatement("select id, sigla from estados order by sigla asc");
		rs = stmt.executeQuery();
		
		Estado estado = null;
		
		while (rs.next()) {
			estado = new Estado();
			Long id = rs.getLong("id");
			String sigla = rs.getString("sigla");
			
			estado.setId(id);
			estado.setSigla(sigla);
			
			dadosEstadoList.add(estado);
		}
		stmt.close();
		rs.close();
		conn.close();
		return dadosEstadoList;
	}
	
	//Um map com os valores(id,sigla)
	public static Map selectEstadoMap() throws Throwable, Exception {
		Connection conn = Conexao.getConexaoPostgreSQL();
		Map dadosEstado = new HashMap();
		PreparedStatement stmt = null;
		ResultSet rs = null;
		stmt = conn.prepareStatement("select id,sigla from estados order by sigla asc");
		rs = stmt.executeQuery();
		
		while (rs.next()) {
			Long id = rs.getLong("id");
			String sigla = rs.getString("sigla");
			dadosEstado.put(id, sigla);
		}
		
		stmt.close();
		rs.close();
		conn.close();
		return dadosEstado;
		
	}

	

	public void setSession(Session session) {
		this.session = session;
	}

	
	
	public Serializable getId() {
		return id;
	}

	public void setId(Serializable id) {
		this.id = id;
	}
	
	public List<Estado> findAll(Class<Estado> clazz) throws PersistenceException {
		return null;
	}
	
	public List<Estado> findOpcao(Class<Estado> clazz) throws PersistenceException {
		return null;
	}


}

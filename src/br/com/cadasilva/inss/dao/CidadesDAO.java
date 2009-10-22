package br.com.cadasilva.inss.dao;

import java.io.Serializable;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.apache.log4j.Logger;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.criterion.DetachedCriteria;
import org.hibernate.criterion.Restrictions;
import org.springframework.dao.DataAccessException;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

import br.com.cadasilva.inss.exception.PersistenceException;
import br.com.cadasilva.inss.model.Cidades;
import br.com.cadasilva.inss.model.Estado;
import br.com.cadasilva.inss.util.Conexao;
public class CidadesDAO extends HibernateDaoSupport implements
		GenericDAO<Cidades, Long> {
	
	private static CidadesDAO instancia = null;
	private static Logger logger = Logger.getLogger(CidadesDAO.class.toString());
	private Estado estado;
	public Serializable id;
	Session session = null;
	
	public List<Cidades> popularCidades(Long id) throws SQLException {
		Connection conn = Conexao.getConexaoPostgreSQL();
		String sql = "select cidade from cidades where idestado = " + id +" "+"order by cidade";
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
	
	public static CidadesDAO getInstancia() {
		if (instancia == null) {
			instancia = new CidadesDAO();
		}
		return instancia;
	}
	
	// Construtor...
	private CidadesDAO() {
		
	}
	
	public void save(Cidades cidades) throws PersistenceException {
		try {
			id = getHibernateTemplate().save(cidades);
		} catch (DataAccessException exception) {
			throw new PersistenceException("Ocorreu um erro ao salvar: " + cidades.getCidade(),exception);
		}
	}
	
	public void update(Cidades cidades) throws PersistenceException {
		try {
			getHibernateTemplate().update(cidades);
		} catch (DataAccessException exception) {
			throw new PersistenceException("Ocorre um erro ao atualizar: " + cidades.getCidade(),exception );
		}
	}
	
	public void delete(Cidades cidades) throws PersistenceException {
		try {
			getHibernateTemplate().delete(cidades);
		} catch (DataAccessException exception) {
			throw new PersistenceException("Ocorreu um erro ao excluir: " + cidades.getCidade(),exception);
		}
	}
	
	public List<Cidades> findAll(Cidades cidades, Class clazz) throws PersistenceException {
		DetachedCriteria criteria = null;
		try {
			criteria = DetachedCriteria.forClass(clazz);
			if (cidades != null && !"".equals(cidades.getCidade())) {
				criteria.add(Restrictions.eq("cidade", cidades.getCidade()));
			}
			return getHibernateTemplate().findByCriteria(criteria);
		} catch(DataAccessException exception) {
			throw new PersistenceException("Ocorreu um erro ao pesquisar", exception);
		}
	}
	

	
	public List<Cidades> listaTudo(Class<Cidades> clazz) throws PersistenceException {
		DetachedCriteria criteria = null;
		try {
			criteria = DetachedCriteria.forClass(clazz);
			return getHibernateTemplate().findByCriteria(criteria);
		} catch (DataAccessException e) {
			throw new PersistenceException("Ocorreu um erro ao recuperar opcao",e);
		}
	}
	
	

	public void setSession(Session session) {
		this.session = session;
	}

	public Estado getEstado() {
		return estado;
	}

	public void setEstado(Estado estado) {
		this.estado = estado;
	}

	public List<Cidades> findCidades(Class<Cidades> clazz) throws PersistenceException {
		try {
			DetachedCriteria criteria = DetachedCriteria.forClass(clazz);
			return getHibernateTemplate().findByCriteria(criteria);
		} catch (DataAccessException exception) {
			throw new PersistenceException("Ocorreu um erro ao recuperar o nome:",exception);
		}
	}
	
	public Cidades findById(Long primaryKey, Class<Cidades> clazz) throws PersistenceException {
		try {
			return (Cidades) getHibernateTemplate().get(clazz, primaryKey);
		} catch (HibernateException e) {
			throw new PersistenceException("Ocorreu um erro ao recuperar o objeto: " + clazz.getName() + "com o id:" + primaryKey,e);
		}
	}
	
	public Serializable getId() {
		return id;
	}

	public void setId(Serializable id) {
		this.id = id;
	}
	
	public List<Cidades> findAll(Class<Cidades> clazz) throws PersistenceException {
		return null;
	}
	
	public List<Cidades> findOpcao(Class<Cidades> clazz) throws PersistenceException {
		return null;
	}

	public List<Cidades> getListaEstado(String strUf) throws SQLException {
		Connection conn = Conexao.getConexaoPostgreSQL();
		StringBuffer sql = new StringBuffer();
		sql.append("select cidade from cidades where estado = ").append(strUf).append("order by cidade");
		PreparedStatement stmt = conn.prepareStatement(sql.toString());

		ResultSet rs = stmt.executeQuery();
		
		List<Cidades> estado = new ArrayList();
		
		while (rs.next()) {
			// Criando o objeto Empresa
			Cidades uf = new Cidades();
			uf.setEstado(rs.getString("estado"));
			//uf.setDescricao(rs.getString("descricao"));
						
			estado.add(uf);
		}
		rs.close();
		stmt.close();
		
		return estado;
	}

	public ArrayList carregaComboCidades(Long id) throws Exception {
		Connection conn = Conexao.getConexaoPostgreSQL();
		PreparedStatement stmt = null;
		ResultSet rs = null;
		List lista = new ArrayList();
		ArrayList tabelaRetorno = null;
		
		try {
			
			StringBuffer query = new StringBuffer();
			query.append("select id COLUNA_1,cidade COLUNA_2 from cidades where idestado =")
				.append(id)
				.append("order by cidade");
			if (conn != null) {conn.setAutoCommit(true);}
			stmt = conn.prepareStatement(query.toString());
			int j = 0;
			stmt.setLong(++j, id);
			rs = stmt.executeQuery();
			
			while(rs.next()) {
				HashMap dados = new HashMap();
				dados.put("COLUNA_1",rs.getString("COLUNA_1") != null ? rs.getString("COLUNA_1"):"");
				dados.put("COLUNA_2",rs.getString("COLUNA_2") != null ? rs.getString("COLUNA_2"):"");
				lista.add(dados);
			}
			tabelaRetorno = resultSetParaList(lista);
		} catch (Exception e) {
			logger.error("MŽtodo carregaComboCidades", e);
			throw e;
		} finally {
			if (rs != null) {
				rs.close();
				rs = null;
			}
			if (stmt != null) {
				stmt.close();
				stmt = null;
			}
			if (conn != null) {
				conn.close();
				conn = null;
			}
		}
		return tabelaRetorno;
	}
	
	private ArrayList resultSetParaList(List listaDados) throws SQLException {
		ArrayList lista = new ArrayList();
		HashMap dados = null;
		/*
		 * Vari‡veis auxiliares para a passagem dos dados entre 
		 * as estruturas de dados
		 */
		String cdResposta = null;
		String dsResposta = null;
		
		for (int i = 0;i < listaDados.size();i++) {
			dados = (HashMap) listaDados.get(i);
			cdResposta = (String) dados.get("COLUNA_1");//COLUNA_1
			dsResposta = (String) dados.get("COLUNA_2");//COLUNA_2
			
			List option = new ArrayList();
			option.add(cdResposta);
			option.add(dsResposta);
			lista.add(option);
		}
		return lista;
	}
	
	public static List selectSomeCities(String uf) throws Throwable, Exception {
		Connection conn = Conexao.getConexaoPostgreSQL();
		List<Cidades> dadosCidadesList = new ArrayList();
		PreparedStatement stmt = null;
		ResultSet rs = null;
		StringBuffer sql = new StringBuffer(); 
		sql.append("select id, cidade from cidades where estado =  '");
		sql.append(uf);
		sql.append("'");
		sql.append("order by cidade");
		
		stmt = conn.prepareStatement(sql.toString());
		rs = stmt.executeQuery();
		
		Cidades cidades = null;
		
		while (rs.next()) {
			cidades = new Cidades();
			Long id = rs.getLong("id");
			String cidade = rs.getString("cidade");
			
			cidades.setId(id);
			cidades.setCidade(cidade);
			
			dadosCidadesList.add(cidades);
			
		}
		stmt.close();
		rs.close();
		conn.close();
		return dadosCidadesList;
	}

	public static List selectSomeCitiesEmpresa(int uf) throws Throwable, Exception {
		Connection conn = Conexao.getConexaoPostgreSQL();
		List<Cidades> dadosCidadesList = new ArrayList();
		PreparedStatement stmt = null;
		ResultSet rs = null;
		StringBuffer sql = new StringBuffer(); 
		sql.append("select id, cidade from cidades where idestado =  '");
		sql.append(uf);
		sql.append("'");
		sql.append("order by cidade");
		
		stmt = conn.prepareStatement(sql.toString());
		rs = stmt.executeQuery();
		
		Cidades cidades = null;
		
		while (rs.next()) {
			cidades = new Cidades();
			Long id = rs.getLong("id");
			String cidade = rs.getString("cidade");
			
			cidades.setId(id);
			cidades.setCidade(cidade);
			
			dadosCidadesList.add(cidades);
			
		}
		stmt.close();
		rs.close();
		conn.close();
		return dadosCidadesList;
	}

	
}

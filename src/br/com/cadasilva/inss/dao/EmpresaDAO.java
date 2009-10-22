package br.com.cadasilva.inss.dao;

import java.io.Serializable;
import java.sql.Connection;
import java.sql.DriverManager;
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
import br.com.cadasilva.inss.model.AgenciaEmpregos;
import br.com.cadasilva.inss.model.Empresa;
import br.com.cadasilva.inss.util.Conexao;


public class EmpresaDAO extends HibernateDaoSupport implements
		GenericDAO<Empresa, Long> {
	
	
	public Serializable id;
	String cdResposta = "";
	String dsResposta = "";
	
	public void save(Empresa empresa) throws PersistenceException {
		try {
			id = getHibernateTemplate().save(empresa);
		} catch (DataAccessException exception) {
			throw new PersistenceException("Ocorreu um erro ao salvar: " + empresa.getNome(),exception);
		}
	}
	
	public void update(Empresa empresa) throws PersistenceException {
		try {
			getHibernateTemplate().update(empresa);
		} catch (DataAccessException exception) {
			throw new PersistenceException("Ocorreu um erro ao atualizar: " + empresa.getNome(),exception);
		}
	}
	
	public void delete(Empresa empresa) throws PersistenceException {
		try {
			getHibernateTemplate().delete(empresa);
		} catch(DataAccessException exception) {
			throw new PersistenceException("Ocorreu um erro ao excluir: " + empresa.getNome(),exception);
		}
	}
	
	public List<Empresa> findAll(Empresa empresa, Class clazz) throws PersistenceException {
		DetachedCriteria criteria = null;
		try {
			criteria = DetachedCriteria.forClass(clazz);
			if (empresa != null && !"".equals(empresa.getNome())) {
				criteria.add(Restrictions.eq("nome", empresa.getNome()));
			}
			return getHibernateTemplate().findByCriteria(criteria);

		} catch (DataAccessException exception) {
			throw new PersistenceException("Ocorreu um erro ao pesquisar",exception);
		}
	}
	
	public List<Empresa> findEmpresa(Class<Empresa> clazz) throws PersistenceException {
		try {
			DetachedCriteria criteria = DetachedCriteria.forClass(clazz);
			return getHibernateTemplate().findByCriteria(criteria);
		} catch (DataAccessException exception) {
			throw new PersistenceException("Ocorreu um erro ao recuperar o nome:",exception);
		}
	}
	
	public Empresa findById(Long primaryKey, Class<Empresa> clazz) throws PersistenceException {
		try {
			return (Empresa) getHibernateTemplate().get(clazz, primaryKey);
		} catch (HibernateException e) {
			throw new PersistenceException("Ocorreu um erro ao recuperar o objeto: " + clazz.getName() + "com o id:" + primaryKey,e);
		}
	}
	

	public List<Empresa> getLista() throws SQLException {
		
		Connection conn = Conexao.getConexaoPostgreSQL();
		PreparedStatement stmt = conn.prepareStatement("select * from empresa");
		ResultSet rs = stmt.executeQuery();
		
		List<Empresa> empresas = new ArrayList();
		
		while (rs.next()) {
			// Criando o objeto Empresa
			Empresa empresa = new Empresa();
			empresa.setNome(rs.getString("nome"));
			empresa.setEndereco(rs.getString("endereco"));
			empresa.setComplemento(rs.getString("complemento"));
			empresa.setBairro(rs.getString("bairro"));
			empresa.setCidade(rs.getString("cidade"));
			empresa.setUf(rs.getString("uf"));
			
			empresas.add(empresa);
		}
		rs.close();
		stmt.close();
		
		return empresas;
	}
	
	
	public ArrayList carregaComboProduto(Connection conn)  throws Exception{ 
		  
		ArrayList tabelaRetorno = new ArrayList();
		PreparedStatement prmt = null;
		ResultSet rs = null;
		 try{

			StringBuffer sql = new StringBuffer();
			sql.append(" select id, nome " )
			   .append(" from empresa  ") 
			   .append(" order by nome" )
			   .append(" WITH UR ");
	        
	      
			prmt = conn.prepareStatement(sql.toString());
			
			rs = prmt.executeQuery();
	        
			while(rs.next()) {
	        	
				String cdResposta = rs.getString("id");
				String dsResposta = rs.getString("nome");
				
				List option = new ArrayList();
				option.add(cdResposta);
				option.add(dsResposta);
				tabelaRetorno.add(option);	

			}
	        

		  } catch(Exception e) {
			throw e;
		  } finally {
		  	
			if (rs != null) {
				rs.close();
				rs = null;
			}
		  	
			if (prmt != null) {
				prmt.close();
				prmt = null; 
			}
		  	
		  }
		 return tabelaRetorno;
	  }

	

	public Serializable getId() {
		return id;
	}

	public void setId(Serializable id) {
		this.id = id;
	}
	
	public List<Empresa> findAll(Class<Empresa> clazz) throws PersistenceException {
		return null;
	}
	
	public List<Empresa> findOpcao(Class<Empresa> clazz) throws PersistenceException {
		return null;
	}
	
	// 11/09/2009
	
	public static List selectAllCnpjCode() throws Throwable, Exception {
		Connection conn = Conexao.getConexaoPostgreSQL();
		List<Empresa> dadosEmpresaList = new ArrayList();
		PreparedStatement stmt = null;
		ResultSet rs = null;
		stmt = conn.prepareStatement("select id, cnpj from empresa order by cnpj asc");
		rs = stmt.executeQuery();
		Empresa empresa = null;
		
		while (rs.next()) {
			empresa = new Empresa();
			Long id = rs.getLong("id");
			String cnpj = rs.getString("cnpj");
			
			empresa.setId(id);
			empresa.setCnpj(cnpj);
			dadosEmpresaList.add(empresa);
		}
		stmt.close();
		rs.close();
		conn.close();
		
		return dadosEmpresaList;
		
	}
	
	
	public static Empresa selectSomeCnpjCode(String cnpjs) throws Throwable,Exception {
		Empresa empresa = null;
		Connection conn = Conexao.getConexaoPostgreSQL();
		PreparedStatement stmt = null;
		ResultSet rs = null;
		String cnpj = cnpjs;
		StringBuffer sql = new StringBuffer();
		sql.append("select id,cnpj, nome,endereco,complemento,bairro,cidade,uf,razaoSocial,status,insc_estadual, telefone from empresa")
		.append(" where cnpj LIKE '%")
		.append(cnpj)
		.append("%'");
		
		stmt = conn.prepareStatement(sql.toString());
		rs = stmt.executeQuery();
		
		while (rs.next()) {
			empresa = new Empresa();
			Long id = rs.getLong("id");
			String nome = rs.getString("nome");
			String endereco = rs.getString("endereco");
			String complemento = rs.getString("complemento");
			String bairro = rs.getString("bairro");
			String cidade = rs.getString("cidade");
			String uf = rs.getString("uf");
			String razaoSocial = rs.getString("razaoSocial");
			String status = rs.getString("status");
			String insc_estadual = rs.getString("insc_estadual");
			String telefone = rs.getString("telefone");
			
			empresa.setId(id);
			empresa.setNome(nome);
			empresa.setEndereco(endereco);
			empresa.setComplemento(complemento);
			empresa.setBairro(bairro);
			empresa.setCidade(cidade);
			empresa.setUf(uf);
			empresa.setRazaoSocial(razaoSocial);
			empresa.setStatus(status);
			empresa.setInsc_estadual(insc_estadual);
			empresa.setTelefone(telefone);
		}
		
		rs.close();
		stmt.close();
		conn.close();
		
		return empresa;
	}
	
		



}

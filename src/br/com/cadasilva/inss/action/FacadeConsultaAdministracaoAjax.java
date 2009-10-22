package br.com.cadasilva.inss.action;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import org.apache.log4j.Logger;

import br.com.cadasilva.inss.dao.AgenciaEmpregosDAO;
import br.com.cadasilva.inss.dao.CidadesDAO;
import br.com.cadasilva.inss.dao.EmpresaDAO;
import br.com.cadasilva.inss.dao.EstadoDAO;
import br.com.cadasilva.inss.dao.FuncionarioDAO;
import br.com.cadasilva.inss.model.AgenciaEmpregos;
import br.com.cadasilva.inss.model.Cidades;
import br.com.cadasilva.inss.model.Empresa;
import br.com.cadasilva.inss.model.Estado;
import br.com.cadasilva.inss.model.Funcionario;
import br.com.cadasilva.inss.model.TOCombo;
import br.com.cadasilva.inss.util.Conexao;



public class FacadeConsultaAdministracaoAjax {

private static Logger logger = Logger.getLogger(FacadeConsultaAdministracaoAjax.class.toString());
	
	public List carregaComboCidades(Long i) throws Exception {
			
		List listaDadosCombo = new ArrayList();
		if(i != null && !i.equals(0)){
			listaDadosCombo = NgcInss.getInstancia().carregaComboCidades(i);
		}
			 			
		return listParaListBean(listaDadosCombo);
	}
	   
	   
	public List listParaListBean (List dadosCombo){
		List<TOCombo> listaDadosCombo = new ArrayList(); 
		
		TOCombo primeiroDado = new TOCombo();
		primeiroDado.setValorOption("");
		primeiroDado.setNomeOption("-- selecione opção --");
		listaDadosCombo.add(primeiroDado);
	    
		for (int i=0; i< dadosCombo.size(); i++){
			List dados = (List)dadosCombo.get(i);
			TOCombo combo = new TOCombo();
			combo.setValorOption(dados.get(0).toString());
			combo.setNomeOption(dados.get(1).toString());
			listaDadosCombo.add(combo);
		}
	    	
		return listaDadosCombo;
	}
	
	
	@SuppressWarnings("unchecked")
	public List selectAllEstado() throws Throwable,Exception {
		List<Estado> listResult = new ArrayList();
	
		listResult = EstadoDAO.selectAllEstado();
		
		return listResult;
		
	}
	
	
	
	public List selectSomeCities(String sigla) throws Throwable, Exception {
		List<Cidades> listResult = new ArrayList();
		String uf = sigla;
		listResult = CidadesDAO.selectSomeCities(uf);
		
		return listResult;
	}
	
	public List selectSomeCitiesEmpresa(int indice) throws Throwable, Exception {
		List<Cidades> listResult = new ArrayList();
		int uf = indice;
		listResult = CidadesDAO.selectSomeCitiesEmpresa(uf);
		
		return listResult;
	}
	
	// Rotina para encontrar O nr de registros de uma tabela...
	public int  numberRecords(String tabela) throws SQLException {
		
		int rows = 0 ;
		
			Connection conn = Conexao.getConexaoPostgreSQL();

			Statement stmt =  conn.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE,  
	        ResultSet.CONCUR_READ_ONLY);  
			
			String sql = "select * from cidades where estado='";
			sql =sql+tabela;
			sql = sql+"'";
			
			
			ResultSet rs = stmt.executeQuery(sql);
		try {	
			
			
			
			rs.last();                 
			rows = rs.getRow();  
			
			rs.beforeFirst();
	
			//System.out.println("Nr. Total de Registros: " + rows);	
		} catch (SQLException e) {
			System.out.println(e.getMessage());
		} finally {
			conn.close();
			rs.close();
		}
		
		return rows;
		
	}

	
	public List selectOnlyState(Long id) throws Throwable, Exception {
		List<AgenciaEmpregos> listResult = new ArrayList();
		listResult = AgenciaEmpregosDAO.selectOnlyState(id);
		return listResult;
	}
	
	//Em 03/09/2009
	public List selectAllZipCode() throws Throwable, Exception {
		List<AgenciaEmpregos> listResult = new ArrayList();
		listResult = AgenciaEmpregosDAO.selectAllZipCode();
		return listResult;
	}

	public AgenciaEmpregos selectSomeZipCodes(String cep) throws Throwable, Exception {
		//List<AgenciaEmpregos> listResult = new ArrayList();
		AgenciaEmpregos agenciaEmpregos = new AgenciaEmpregos();
		String zipCode = cep;
		 agenciaEmpregos=AgenciaEmpregosDAO.selectSomeZipCodes(zipCode);
		return agenciaEmpregos;
	}
	
	//08/09/2009
	public Funcionario getFuncionario() {
		Funcionario funcionario = new Funcionario();
		funcionario.setNome("Carlos Alberto");
		funcionario.setPis("10426464440");
		return funcionario;
		
	}
	
	//10/09/2009
	public List selectAllCnpjCode() throws Throwable,Exception {
		List<Empresa> listResult = new ArrayList();
		listResult = EmpresaDAO.selectAllCnpjCode();
		return listResult;
	}
	
	public Empresa selectSomeCnpjCode(String cnpj) throws Throwable,Exception {
		Empresa empresa = new Empresa();
		String cnpjs = cnpj;
		empresa = EmpresaDAO.selectSomeCnpjCode(cnpjs);
		return empresa;
	}
	
    //11/09/2009
	public List selectAllCpfCode() throws Throwable,Exception {
		List<Funcionario> listResult = new ArrayList();
		listResult = FuncionarioDAO.selectAllCpfCode();
		return listResult;
	}
	
	public Funcionario selectSomeCpfCode(String cpf) throws Throwable,Exception {
		Funcionario funcionario = new Funcionario();
		String cpfs = cpf;
		funcionario = FuncionarioDAO.selectSomeCpfCode(cpfs);
		return funcionario;
	}
	
	
}

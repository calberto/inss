package br.com.cadasilva.inss.dao;

import net.sf.jasperreports.engine.*;
import net.sf.jasperreports.view.JasperViewer;

import java.sql.*;
import java.util.*;

import br.com.cadasilva.inss.util.Conexao;
public class RelatorioBibliotecaPessoal {
	
	Connection conn = Conexao.getConexaoPostgreSQL();
	
	public void geraRelatorio()throws JRException,Exception {
		
		Statement stmt = conn.createStatement();
		String query = "Select * from funcionario";
		ResultSet rs = stmt.executeQuery(query);
		
		//A implementação da interface JRDataSource para DataSource ResultSet
		JRResultSetDataSource jrRS = new JRResultSetDataSource(rs);
		
		//HasMap de parâmetros utilizados no relatório. Sempre instanciados
		Map parametros = new HashMap();
		/* Preenche o relatório com os dados. Gera o arquivo Funcionario.jrprint*/
		JasperFillManager.fillReportToFile("funcionarios.jasper",parametros,jrRS);// Problemas aqui...16/09/2009
		
		/*Exporta para o formato PDF*/
		JasperExportManager.exportReportToPdfFile("Funcionarios.jrprint");
		
		
		/*Preenche o relatório e o salva diretamente em arquivo PDF. Sem a necessida do .jrprint */
		// JasperRunManager.runReportToPDFFile("funcionarios.jasper",parameteros,jrRS);
		
		// Visualiza o relatório em formato PDF 
		JasperViewer.viewReport("Funcionarios.pdf",false);
	}

	/**
	 * @param args
	 */
	public static void main(String[] args) throws JRException, Exception {
		// TODO Auto-generated method stub
		new RelatorioBibliotecaPessoal().geraRelatorio();

	}

}

package br.com.cadasilva.inss.dao;

import java.sql.SQLException;
import java.sql.*;

import br.com.cadasilva.inss.util.Conexao;
public class Metadados1 extends SQLException {

	/**
	 * @param args
	 * @throws SQLException 
	 */
	public static void main(String[] args) throws SQLException {
		// TODO Auto-generated method stub
		Connection conn = Conexao.getConexaoPostgreSQL();
		
		// recuperar a classe DatabaseMetaData a partir da conexão criada...
		DatabaseMetaData dbmd = conn.getMetaData();
		
		System.out.println("Versão do driver JDBC = " + dbmd.getDriverVersion());
		System.out.println("Versão do banco de dados = "+ dbmd.getDatabaseProductVersion());
		System.out.println("Suporta Select for Update? = "+ dbmd.supportsSelectForUpdate());
		System.out.println("Suporta Transações? = " + dbmd.supportsTransactions());
		
		// retorna todos os schemas (usuários) do banco de dados...
		ResultSet rs = dbmd.getSchemas();
		while (rs.next()) {
			System.out.println("SCHEMA DO BD:=" + rs.getString(1));
		}
		colunas("empresa");
		linhas("empresa");
		

	}
	
	private static void colunas(String tabela) throws SQLException {
		Connection conn = Conexao.getConexaoPostgreSQL();
		Statement stmt = conn.createStatement();
		ResultSet rs = stmt.executeQuery("select * from "+tabela+";");
		
		ResultSetMetaData rsmd = rs.getMetaData();
		
		// retorna o número total de colunas...
		int numColumns = rsmd.getColumnCount();
		
		//loop para recuperar os metadados de cada coluna
		for (int i=0; i < numColumns; i++) {
			System.out.println("Nome da Coluna: " + rsmd.getColumnName(i + 1));
			System.out.println("Tipo: " + rsmd.getColumnType(i + 1));
			System.out.println("Tamanho: " + rsmd.getColumnDisplaySize(i + 1));
			System.out.println("Casas Decimais: " + rsmd.getScale(i + 1));
			
		}
		
	}
	
	private static void linhas(String tabela) throws SQLException {
		Connection conn = Conexao.getConexaoPostgreSQL();
		PreparedStatement pstm = conn.prepareStatement("select * from "+tabela+";");
		ResultSetMetaData rsmd = pstm.getMetaData();
		ResultSet rs = pstm.executeQuery();
		
		// retorna o número total de colunas...
		int numColumns = rsmd.getColumnCount();
	
		System.out.println("Total de Colunas: " + numColumns);
		
	}
	


}

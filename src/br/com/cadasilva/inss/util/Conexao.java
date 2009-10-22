package br.com.cadasilva.inss.util;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;
public class Conexao {
	
	private static Connection conn;
	private static ResultSet rs;
	private static Statement st;
	int alt = 0;
	private static String msg = "";
	
	private final static String url = "jdbc:postgresql://localhost/postgres";
	private final static String usuario = "postgres";
	private final static String senha = "calberto";
	private final static String driver = "org.postgresql.Driver";
	
	public static Connection getConexaoPostgreSQL() {

		

		 // Atributo do MŽtodo

       java.sql.Connection conn = null;

       

       try{

           // Configurando o Driver de conex‹o

           Class.forName(driver);

           

           // Criando uma conex‹o

           conn = java.sql.DriverManager.getConnection(url, usuario, senha);

       } catch (Exception e){

           e.printStackTrace();                

           System.exit(0);

       }

       return conn;

	}

	

	public static Connection getConexaoMysql() {

		try {

			Class.forName("org.gjt.mm.mysql.Driver");

			conn = DriverManager.getConnection("jdbc:mysql://localhost/test","root","");

			st = conn.createStatement();

		}

		catch (ClassNotFoundException e1) {

			msg = "N‹o acho driver!!";

		}

		catch (SQLException e2) {

			msg = "N‹o conectou ao banco!!";

		

		}

		return conn;

	}
	
	

}

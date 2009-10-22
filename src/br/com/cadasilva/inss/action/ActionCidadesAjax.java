package br.com.cadasilva.inss.action;

import java.io.IOException;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import br.com.cadasilva.inss.util.Conexao;

public class ActionCidadesAjax extends HttpServlet {

	public void doGet(HttpServletRequest request, HttpServletResponse response) 
	throws ServletException, IOException {
		
		String uf = request.getParameter("uf");
		if (uf != null) {
			if (existsEstado(uf)) {
				response.setContentType("text/xml");
				response.setHeader("Cache-Control", "no-cache");
				response.getWriter().write("true");
			}
		} else {
			// Se a tecla voltar com um null, retornar‡ uma mensagem
			response.setContentType("text/xml");
			response.setHeader("Cache-Control", "no-cache");
			response.getWriter().write("Uf null");
		}
	}
	
	private boolean existsEstado(String uf) {
		ResultSet result = null;
		
		try {
			Statement select = Conexao.getConexaoPostgreSQL().createStatement();
			result = select.executeQuery("SELECT descricao FROM cidades WHERE estado = '" + uf + "';");
			if (result == null || result.next()) {
				return true;
			}
		} catch (SQLException e) {
			System.out.printf("N‹o foi poss’vel!!!", e);
		}
		return false;
	}
}

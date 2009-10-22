package br.com.cadasilva.inss.action;

import java.util.ArrayList;
import java.util.List;

import com.opensymphony.xwork2.ActionSupport;

public class CheckBoxList extends ActionSupport {
	
	
		  private List opcoes;
		    
		  public String execute()throws Exception{
		    opcoes = new ArrayList();
		    opcoes.add("UF");
		    opcoes.add("Cidade");
		    opcoes.add("Cep");
		    opcoes.add("CNPJ");
		    opcoes.add("CPF");

		  
		    return SUCCESS;

		  }

		public List getOpcoes() {
			return opcoes;
		}

		public void setOpcoes(List opcoes) {
			this.opcoes = opcoes;
		}

}

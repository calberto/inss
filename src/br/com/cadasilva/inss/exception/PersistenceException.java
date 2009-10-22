package br.com.cadasilva.inss.exception;

public class PersistenceException extends Exception {
	
	public PersistenceException(String msg) {
		super(msg);
	}
	
	public PersistenceException(String msg, Throwable throwable) {
		super(msg,throwable);
	}
	
	public PersistenceException(Throwable throwable) {
		super(throwable);
	}

}

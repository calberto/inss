package br.com.cadasilva.inss.dao;

import java.io.Serializable;
import java.util.List;

import br.com.cadasilva.inss.exception.PersistenceException;

public interface GenericDAO<T, PK extends Serializable> {
	
	void save(T t) throws PersistenceException;
	
	void update(T t) throws PersistenceException;
	
	void delete(T t) throws PersistenceException;
	
	List<T> findAll(T t, Class clazz) throws PersistenceException;
	
	T findById(PK primaryKey, Class<T> clazz) throws PersistenceException;
	
	List<T> findOpcao(Class<T> clazz) throws PersistenceException;

}

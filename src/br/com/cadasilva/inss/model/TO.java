package br.com.cadasilva.inss.model;

import java.io.StringWriter;

import org.apache.commons.*;
import org.apache.commons.betwixt.io.BeanWriter;
public class TO {
	
	protected String critica = "";
    /**
     * Tranfer Object
     */
    public TO() {
        super();
    }
    
    /**
     * @return Retorna o valor de critica.
     */
    public String getCritica() {
        return critica;
    }
    /**
     * @param critica The critica to set.
     */
    public void setCritica(String critica) {
        this.critica = critica;
    }
    /**
     * Retorna uma String de uma Xml representando o bean . 
     * @param root Nome da Raiz do Xml resultante
     * @return Uma String com a xml representando o bean
     * @throws Exception
     */
    public String beanToXml(String root) throws Exception{
        //Xml resultante do bean
        StringWriter xml = new StringWriter(); 
        
        // Criação da primeira linha do xml para que este seja um documento bem formatado.


        BeanWriter beanWriter = new BeanWriter(xml);
        
        // Configurações o betwixt, para mais informações, acesse o javadoc
        beanWriter.getXMLIntrospector().getConfiguration().setAttributesForPrimitives(false);
        beanWriter.getBindingConfiguration().setMapIDs(false);
        beanWriter.enablePrettyPrint();
        
        // Transformar o bean em um xml cuja raiz é o root
        beanWriter.write(root, this);
        
        //System.out.println("[XML RETORNADO] ::\n" +xml.toString());
        return xml.toString();
    }

}

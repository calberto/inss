package br.com.cadasilva.inss.dao;

import java.awt.GraphicsConfiguration;
import java.awt.HeadlessException;
import java.io.File;
import java.sql.Connection;
import java.util.HashMap;
import java.util.Map;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JOptionPane;
import javax.swing.JPanel;

import net.sf.jasperreports.engine.JRException;
import net.sf.jasperreports.engine.JasperFillManager;
import net.sf.jasperreports.engine.JasperPrint;
import net.sf.jasperreports.view.JasperViewer;
import br.com.cadasilva.inss.util.Conexao;
public class ShowReports  extends JFrame{
	private static final long serialVersionUID=1L;
	private JPanel jContentPanel = null;
	private JButton btAbreRel = null;
	
	public ShowReports() throws HeadlessException {
		super();
		initialize();
	}
	
	public ShowReports(GraphicsConfiguration gc) {
		super(gc);
		initialize();
	}
	
	public ShowReports(String title) throws HeadlessException {
		super(title);
		initialize();
	}
	
	public ShowReports(String title, GraphicsConfiguration gc) {
		super(title,gc);
		initialize();
	}
	
	private Connection getConexao() throws ClassNotFoundException {
		Connection conn = null;
		
		conn = Conexao.getConexaoPostgreSQL();
		return conn;
	}
	
	private void abreRelatorio() throws JRException, Exception {
		Connection conn = Conexao.getConexaoPostgreSQL();
		Map parameters = new HashMap();
		String path = "inss/WebContent/relatorios/funcionarios.jasper";
		File file = new File(path);
		file = file.getAbsoluteFile();
		String repStr2 = file.getPath();
		
		try {
			JasperFillManager.fillReportToFile(repStr2,parameters,conn);
			JasperPrint jasperPrint = JasperFillManager.fillReport(repStr2, parameters, conn); // Nova c—pia 18/09/2009
			JasperViewer viewer = new JasperViewer(jasperPrint,false);
			viewer.setVisible(true);
			
		} catch (JRException jex) {
			mostrarErro("JasperException: "+ jex.getMessage());
		} catch (Exception ex) {
			mostrarErro("" + ex.getStackTrace());
		}
			
	}
	
	private JButton getBrAbreRel() {
		if (btAbreRel == null) {
			btAbreRel = new JButton();
			btAbreRel.setBounds(new java.awt.Rectangle(78,58,123,40));
			btAbreRel.setText("AbreRelatorio");
			btAbreRel.addActionListener(new java.awt.event.ActionListener() {
				public void actionPerformed(java.awt.event.ActionEvent e) {
					try {
						abreRelatorio();
					} catch (JRException jre) {
						mostrarErro("Jasper Exception: " +jre.getMessage());
					} catch (Exception ex) {
						mostrarErro(" "+ex.getStackTrace());
					}
					
				}
			});
		}
		return btAbreRel;
	}
	
	public static void main(String[] args) {
		new ShowReports().setVisible(true);
	}
	
	private void initialize() {
		this.setSize(300, 200);
		this.setContentPane(getJContentPane());
		this.setTitle("Relatorio de Funcionarios");
		this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
			java.awt.Dimension screenSize = java.awt.Toolkit.getDefaultToolkit().getScreenSize();
			java.awt.Dimension frameSize = this.getSize();
			if (frameSize.height>screenSize.height) {
				frameSize.height = screenSize.height;
				
			}
			if (frameSize.width>screenSize.width) {
				frameSize.width = screenSize.width;
			}
			
			this.setLocation((screenSize.width - frameSize.width)/2, (screenSize.height - frameSize.height)/2);
			
	}
	
	private JPanel getJContentPane() {
		if (jContentPanel == null) {
			jContentPanel = new JPanel();
			jContentPanel.setLayout(null);
			jContentPanel.add(getBrAbreRel(),null);
			
		}
		return jContentPanel;
	}
	
	private void mostrarErro(String msg) {
		JOptionPane.showMessageDialog(null,
		msg,
		"Erro Encontrado",
		JOptionPane.ERROR_MESSAGE);
	}

}

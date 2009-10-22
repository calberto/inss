function carregaEstadoConsult() {
	//alert('estou na carregaEstadoConsult');
	FacadeConsultaAdministracaoAjax.selectAllEstado(montaEstadoConsult);
}
function montaEstadoConsult(listBeans) {
	DWRUtil.removeAllOptions("comboEstadoConsult");
	dwr.util.addOptions("comboEstadoConsult",listBeans,"sigla");
}

//02/09/2009
function carregaEstadoConsult1() {
	
	FacadeConsultaAdministracaoAjax.selectAllEstado(montaEstadoConsult1);
}
function montaEstadoConsult1(listBeans) {
	DWRUtil.removeAllOptions("comboUf");
	dwr.util.addOptions("comboUf",listBeans,"sigla");
}

function carregaCidadeConsult() {
	
	uf = document.getElementById("comboUf");
	DWRUtil.removeAllOptions("comboEstadoConsult");
	FacadeConsultaAdministracaoAjax.selectSomeCities(uf.value,montaCidadeConsult);
}

function montaCidadeConsult(listBeans) {
	DWRUtil.removeAllOptions("comboCity");
	dwr.util.addOptions("comboCity",listBeans,"cidade");
}
function numRecordsConsult() {
	
	tabela = document.getElementById("comboUf");
	//alert(tabela.value);
	FacadeConsultaAdministracaoAjax.numberRecords(tabela.value,montaRegistrosConsult);
}

function montaRegistrosConsult(rows) {
	DWRUtil.removeAllOptions("textEstados");
	dwr.util.addOptions("textEstados",rows,"estados");
	document.getElementById('textEstados').value=rows;
}



/*
function clearAddOptions(local) {
	dwr.util.removeAllOptions(local);
}

function carregaEstado() {
	
	FacadeConsultaAdministracaoAjax.selectAllEstado(montaEstado);
}


function limparEstado() {
	DWRUtil.removeAllOptions("comboEstado");
}

function montaEstado(listBeans) {
	DWRUtil.removeAllOptions("comboEstado");
	dwr.util.addOptions("comboEstado",listBeans,"sigla");
}
// em 21/07/2009 
function loadOnlyAState() {
	id = document.getElementById("id");
	alert('Identificador:' + id.value);
	FacadeConsultaAdministracaoAjax.selectOnlyState(id.value, setOnlyAStateAndCity);
}

function setOnlyAStateAndCity(listBeans) {
	DWRUtil.removeAllOptions("comboEstado");
	DWRUtil.removeAllOptions("comboCidade");
	
	DWRUtil.addOptions("comboEstado",listBeans,"uf");
	DWRUtil.addOptions("comboCidade",listBeans,"cidade");
}



function carregaCidade() {
	
	uf = document.getElementById("comboEstado");
	alert( uf.value);
	FacadeConsultaAdministracaoAjax.selectSomeCities(uf.value,montaCidade);
}

//25/08/2009
function numRecords() {
	
	tabela = document.getElementById("comboEstado");
	//alert(tabela.value);
	FacadeConsultaAdministracaoAjax.numberRecords(tabela.value,montaRegistros);
}

function montaRegistros(rows) {
	DWRUtil.removeAllOptions("textEstados");
	dwr.util.addOptions("textEstados",rows,"estados");
	document.getElementById('textEstados').value=rows;
}

function carregaCidadeEmpresa() {
	
	uf = document.getElementById("comboEstado");
	
	alert( uf.value);
	FacadeConsultaAdministracaoAjax.selectSomeCitiesEmpresa(uf.value,montaCidadeEmpresa);
}

function montaCidadeEmpresa(listBeans) {
	DWRUtil.removeAllOptions("comboCidade");
	dwr.util.addOptions("comboCidade",listBeans,"cidade");
}

function montaCidade(listBeans) {
	DWRUtil.removeAllOptions("comboCidade");
	dwr.util.addOptions("comboCidade",listBeans,"cidade");
}

*/


// em 03/09/2009
function carregaAgenciaConsultCep() {
	FacadeConsultaAdministracaoAjax.selectAllZipCode(montaCepConsult);
	
}

function montaCepConsult(listBeans) {
	DWRUtil.removeAllOptions("comboCep");
	dwr.util.addOptions("comboCep",listBeans,"cep");
}

function carregaCepConsult() {
	cep = document.getElementById("comboCep");
	//alert(cep.value);
	//DWRUtil.removeAllOptions("comboCep");
	FacadeConsultaAdministracaoAjax.selectSomeZipCodes(cep.value,montaDadosCepConsult);
}

function montaDadosCepConsult(agenciaEmpregos) {
	
	DWRUtil.removeAllOptions("txtId");
	DWRUtil.removeAllOptions("txtAgencia");
	DWRUtil.removeAllOptions("txtEmail");
	DWRUtil.removeAllOptions("txtTelefone");
	
	
	dwr.util.setValue("txtId",agenciaEmpregos.id);
	dwr.util.setValue("txtAgencia",agenciaEmpregos.agencia);
	dwr.util.setValue("txtEmail",agenciaEmpregos.email);
	dwr.util.setValue("txtTelefone",agenciaEmpregos.telefone);
}	

// 10/09/2009

function carregaAgenciaConsultCnpj() {
	FacadeConsultaAdministracaoAjax.selectAllCnpjCode(montaCnpjConsult);
}	

function montaCnpjConsult(listBeans) {
	DWRUtil.removeAllOptions("comboCnpj");
	dwr.util.addOptions("comboCnpj",listBeans,"cnpj");
}

function carregaCnpjConsult() {
	cnpj = document.getElementById("comboCnpj");
	FacadeConsultaAdministracaoAjax.selectSomeCnpjCode(cnpj.value,montaDadosCnpjConsult);
}

function montaDadosCnpjConsult(empresa) {
	DWRUtil.removeAllOptions("txtCnpjId");
	DWRUtil.removeAllOptions("txtCnpjAgencia");
	DWRUtil.removeAllOptions("txtCnpjEmail");
	DWRUtil.removeAllOptions("txtCnpjRazaoSocial");
	DWRUtil.removeAllOptions("txtCnpjEndereco");
	DWRUtil.removeAllOptions("txtCnpjComplemento");
	DWRUtil.removeAllOptions("txtCnpjBairro");
	DWRUtil.removeAllOptions("txtCnpjCidade");
	DWRUtil.removeAllOptions("txtCnpjEstado");
	DWRUtil.removeAllOptions("txtCnpjTelefone");
	DWRUtil.removeAllOptions("txtCnpjStatus");
	
	
	
	dwr.util.setValue("txtCnpjId",empresa.id);
	dwr.util.setValue("txtCnpjAgencia",empresa.nome);
	dwr.util.setValue("txtCnpjEmail",empresa.insc_estadual);
	dwr.util.setValue("txtCnpjRazaoSocial",empresa.razaoSocial);
	dwr.util.setValue("txtCnpjEndereco",empresa.endereco);
	dwr.util.setValue("txtCnpjComplemento",empresa.completo);
	dwr.util.setValue("txtCnpjBairro",empresa.bairro);
	dwr.util.setValue("txtCnpjCidade",empresa.cidade);
	dwr.util.setValue("txtCnpjEstado",empresa.estado);
	dwr.util.setValue("txtCnpjTelefone",empresa.telefone);
	dwr.util.setValue("txtCnpjStatus",empresa.status);
	
}

function carregaAgenciaConsultCpf() {
	FacadeConsultaAdministracaoAjax.selectAllCpfCode(montaCpfConsult);
}	

function montaCpfConsult(listBeans) {
	DWRUtil.removeAllOptions("comboCpf");
	dwr.util.addOptions("comboCpf",listBeans,"cpf");
}

function  carregaCpfConsult() {
	cpf = document.getElementById("comboCpf");
	FacadeConsultaAdministracaoAjax.selectSomeCpfCode(cpf.value,montaDadosCpfConsult);
}

function montaDadosCpfConsult(funcionario) {
	DWRUtil.removeAllOptions("txtCpfId");
	DWRUtil.removeAllOptions("txtCpfAgencia");
	DWRUtil.removeAllOptions("txtCpfEmail");
	DWRUtil.removeAllOptions("txtCpfTelefone");
	DWRUtil.removeAllOptions("txtCartProfissional");
	DWRUtil.removeAllOptions("txtNrSerie");
	DWRUtil.removeAllOptions("txtOrgaoExpCartProf");
	DWRUtil.removeAllOptions("txtDataInicial");
	DWRUtil.removeAllOptions("txtDataFinal")
	DWRUtil.removeAllOptions("txtCargoInicial");
	DWRUtil.removeAllOptions("txtCargoFinal");
	DWRUtil.removeAllOptions("txtSalarioInicial");
	DWRUtil.removeAllOptions("txtSalarioFinal");
	DWRUtil.removeAllOptions("txtTempoServico");	
	
	dwr.util.setValue("txtCpfId",funcionario.id);
	dwr.util.setValue("txtCpfAgencia",funcionario.nome);
	dwr.util.setValue("txtCpfEmail",funcionario.pis);
	dwr.util.setValue("txtCpfTelefone",funcionario.identidade);
	dwr.util.setValue("txtCartProfissional",funcionario.cartProfissional);
	dwr.util.setValue("txtNrSerie",funcionario.nrSerie);
	dwr.util.setValue("txtOrgaoExpCartProf",funcionario.orgaoExpCartProf);
	dwr.util.setValue("txtDataInicial",funcionario.dataInicial);
	dwr.util.setValue("txtDataFinal",funcionario.dataFinal);
	dwr.util.setValue("txtCargoInicial",funcionario.cargoInicial);
	dwr.util.setValue("txtCargoFinal",funcionario.cargoFinal);
	dwr.util.setValue("txtSalarioInicial",funcionario.salarioInicial);
	dwr.util.setValue("txtSalarioFinal",funcionario.salarioFinal);
	dwr.util.setValue("txtTempoServico",funcionario.tempoServico);
}

Ext.onReady(function(){
	var exampleData = [['','Selecione']];
    var ds  = new Ext.data.SimpleStore({
    fields: ['cdSubProduto', 'nmSubProduto'],
    data : exampleData //deve carregar o array de arrays contendos os objetos a serem motrados
						//deveremos pegar este array via DWR
	});
	
    // Custom rendering Template
    var resultTpl = new Ext.XTemplate(
        '<tpl for="."><div class="search-item">',
            '<h3><span>{nmSubProduto}</span></h3>',
            '{excerpt}',
        '</div></tpl>'
    );
    
    var search = new Ext.form.ComboBox({
        store: ds,//objeto Store contendo os dados
        displayField:'nmSubProduto',
        emptyText:'Selecione',
        width: 150,
        hideTrigger:true,
        tpl: '<tpl for="."><div ext:qtip="{cdSubProduto}. {nmSubProduto}" class="x-combo-list-item">{nmSubProduto}</div></tpl>',
        applyTo: 'nmSubProduto',//campo que será usado para criação do ComboBox
        mode: 'local',//indica que o Store possui valores de um array local, não remoto
        validateOnBlur: true,//valida campo on-blur 
        allowBlank:false,
        forceSelection:true,//para forçar seleção de um valor do combo
		typeAhead : true, //indica que o primeiro item da lista de sugestões será selecionado após os milisegundo indicados em typeAheadDelay
		typeAheadDelay :2000,//milisegundos para ativar auto-seleção do primeiro valor sugerido
		onSelect: selectedValue //função executada no momento em que um campo é selecionado
		
        
    });
    getListaSubProduto(ds);
});
function selectedValue(record){ 
     		
     		vform = document.forms[0];
			this.setValue(record.data.nmSubProduto);

            Ext.select('cdSubProduto');
            vform.cdSubProduto.value = record.data.cdSubProduto;             
            this.collapse();       
			
}
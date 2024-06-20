itensTools = {
    myModal: function () {
        FLUIGC.modal({
            title: 'Atenção',
            content: 'Se o boleto vence em 1 ou 2 dias é necessário <strong>comunicar a Unidade de Contabilidade, Orçamento e Finanças - UCOF</strong> <strong style="color: red">imediatamente !</strong>',
            id: 'fluig-modal',
            size: 'large ',
            actions: [{
                    'label': 'Cancelar',
                    'autoClose': true
                },{
                    'bind': 'data-run-my-method',
                    'label': 'Confirmar',
                    'autoClose': true
                }]
            }, function(err, data) {
                if(err) {
            // do error handling
                } else {
                    console.log(data)
                }
            });
            $(document).on('click', '[data-run-my-method]', function(ev) {
            //    alert("Started from Message Page");
                    console.log(window)
            });
    },
    myToast: function (tp, title) {
        FLUIGC.toast({
            title: title,   //'Ação realizada com sucesso!',
            message: '',
            type: tp        //success, danger, info and warning.
            });
    }
}
function dataTableConfig(){
    /*** Configure Input Object Options ***/
    this.configField = {                                                                            // Caso configField não seja configurado. As opçãoes Default serão apresentadas.
            inputId:          'dataSelected',                                                       // Nome do campo que será utilizado para receber o valor selecionado na dataTable.
            validationStyle:  'has-warning has-feedback',                                           // Estilo de apresentação do campo. Style-guide: 'has-success has-feedback', 'has-error has-feedback'.
            col:              'col-md-1',                                                           // Configuração de GRID style-guide. 
            colInnerDistri:   'pull-left',                                                          // Determina a posição do campo dentro da COL. Default: 'pull-right'.
            setLabel: {                                                                             // Caso não configurado não será apresentado.
                enabled:      false,                                                                // Default: false. true: Apresnta Label | false: Não apresenta.
                value:        'dataSelected',
                innerText:    'Input with success'
            },                                                                              
            setIcone: {                                                                             // Caso não configurado será apresentado o valor padrão: true, 'flaticon flaticon-check-circle icon-sm form-control-feedback'.
                enabled:      true,                                                                 // Default: true. true: Apresnta Icone | false: Não apresenta. 
                value:        'flaticon flaticon-alert icon-sm form-control-feedback'               // Caso não configurado será apresentado o valor padrão 'flaticon flaticon-check-circle icon-sm form-control-feedback'.
            },
            setHelpBlock: {                                                                         // Caso não configurado será apresentado o valor padrão: true, 'Valor Selecionado.'.
                enabled:      true,                                                                 // Default: true. true: Apresnta HelpBlock | false: Não apresenta. 
                innerText:    'Selecione um Item.'                                                  // Determina o texto de Auxilio. Default 'Valor Selecionado.'.
            }
        }
    /*** End Input Object Configuration ***/
    var configButton = {
        type: 'button',
        id: 'btn1',
        innerText: ' Enviar Deliberação ',
        setIcon: 'fluigicon fluigicon-checked icon-sm', 
        col: 'col-md-1',
        wid: 'width: 13%',
        class: 'btn btn-primary mrk',
        disabled: true
    }
    var configButton1 = {
        type: 'button',
        id: 'btn2',
        innerText: '',
        setIcon: 'flaticon flaticon-refresh icon-sm', 
        col: 'col-md-1',
        wid: 'width: 5%',
        class: 'btn btn-primary mrk',
        disabled: true
    }
    var configButton2 = {
        type: 'button',
        id: 'btn3',
        innerText: ' Nova Pauta ',
        setIcon: 'fluigicon fluigicon-fileadd icon-sm', 
        col: 'col-md-1',
        wid: 'width: 13%',
        class: 'btn btn-success mrk',
        disabled: false,
        setAtt: {
            'data-bs-toggle': 'modal',
            'data-bs-target': '#novaPauta'
        }
    }
     /**
     *  targetState:    11  = Analise Assr
     *                  9   = Ajuste
     *                  14  = Incluir
     *                  17  = Excluir
    */
    var configDropdowns = {
        type: 'dropdown',
        id: 'btnDrpDwn1',
        innerText: 'Ações Assessoria ',
        col: 'col-md-2',
        wid: 'width: 13%',
        ul: [
            {
                id: 'AprovarAssr',
                innerText: 'Aprovar Inserção de Item',
                value: '14',
                icon: 'flaticon flaticon-file-check icon-sm'//'fluigicon fluigicon-checked icon-sm'        
            },
            {
                id: 'ReprovarAssr',
                innerText: 'Reprovar Inserção de Item',
                value: '19',
                icon: 'flaticon flaticon-file-delete icon-sm'        
            },
            {
                id: 'ReverterAssr',
                innerText: 'Puxar Item para Analise',
                value: '11',
                icon: 'fluigicon fluigicon-file-bell-empty icon-sm'    
            },
            {
                id: 'AjusteAssr',
                innerText: 'Solicitar Ajuste',
                value: '8',
                icon: 'fluigicon fluigicon-fileedit icon-sm'        
            },
            {
                class: 'divider'    
            },
            {
                id: 'ExcluirAssr',
                innerText: 'Excluir Item',
                value: '17',
                icon: 'fluigicon fluigicon-trash icon-sm'        
            }
        ]
    }

    this.itensConfigs       = [configDropdowns, configButton, configButton1, configButton2];//configButton                  // Determina os itens criados
    this.orderSuper         = ["dataSelected", "btnDrpDwn1", "btn1", "btn2", "btn3", "datatable-area-search"];//"btn1"              // Determina a ordem dos elementos no linha superior. Deve ser determinado da esquerda para direita indicando os elementos por 'id'. Ex: ['btn1', 'btnDrpDwn1', ...]

    this.statesWorkflow     = {
        Ajustes: 8,
        AnaliseAssr: 11,
        RealizaReuniao: 14,
        DespachoDeliber: 19,
        ItemDescartado: 17
    }
    this.APImethods         = new orderMethods();                                                                           // se carregado pelo arquivo ServiceAPI: APImethods= window.orderMethodsMi. Construtor iniciado aqui.
    this.resAPI             = window.res
    this.initMyInterval     = true;
    this.setChangeEvent		= true;
    this.tableReference     = window.objDataTable;
    this.itensBuilt         = {
        name: []
    };
    this.funcsChange        = {
        Name: []
    }
    this.setConfigExecution();  
}
dataTableConfig.prototype.initialize = function () {
    this.orderLineSuper(this.configField, this.itensConfigs, this.orderSuper);
    changeEvent = this.setChangeEvent;
    if(changeEvent){
        this.changeEventInput();
        this.changeEventTable();
        if(this.tableReference.myTable.getData().length != 0){
            this.loadEventTable();
        }
        this.itensBuiltFunctions();
    }
}
dataTableConfig.prototype.setConfigExecution = function () {
    var order = this.initialize()
    this.initMyInterval = setInterval(order, 2000) 
}
dataTableConfig.prototype.constructInputValueSelected = function (configField){
    var config = {}
        config = this.determineObjConfig(configField, config);
    var dataSelected = document.getElementById(config.inputId);
        dataSelected.setAttribute('style', 'color: black');
    var objDivCol = document.createElement('div');
        objDivCol.setAttribute('class', config.col);
    var objDivInnerCol = document.createElement('div');
        objDivInnerCol.setAttribute('class', config.colInnerDistri);
    var objDivClassValidate = document.createElement('div');
        objDivClassValidate.setAttribute('class', config.validationStyle);
    var objLabel = document.createElement('label');
        objLabel.setAttribute('class', config.setLabel.enabled ? 'control-label' : 'control-label sr-only');
        objLabel.setAttribute('for', config.inputId);
        objLabel.innerText = config.setLabel.innerText;
    var objIconeV = document.createElement('i');
        objIconeV.setAttribute('class', config.setLabel.enabled ? config.setIcone.value : config.setIcone.value);  /**  <-------------------------Verificar a Necessidade */
        objIconeV.setAttribute('aria-hidden', 'true'); 
    var objP_helpBlok = document.createElement('p');
        objP_helpBlok.setAttribute('class', 'help-block');
        objP_helpBlok.innerText = config.setHelpBlock.innerText;
    //Montagem da estrutura do Campo.
    objDivClassValidate.appendChild(objLabel);
    objDivClassValidate.appendChild(dataSelected);
    objDivClassValidate.appendChild(objIconeV);
    objDivClassValidate.appendChild(objP_helpBlok);
    objDivInnerCol.appendChild(objDivClassValidate);
    objDivCol.appendChild(objDivInnerCol);

    this.setitensBuilt(objDivCol, 'dataSelected')
    return objDivCol;
}
dataTableConfig.prototype.constructButton = function (configButton){
    var buttonV = document.createElement('button');
        buttonV.setAttribute('type', 'button');
        buttonV.setAttribute('class', configButton.class);
        if(configButton.disabled){ buttonV.setAttribute('disabled','disabled'); }
        if(configButton.setAtt != undefined){
            let setAtt = configButton.setAtt
            for(x in setAtt){
                elemAtt = x
                value   = setAtt[x]
                buttonV.setAttribute(elemAtt, value);
            }
        }
        buttonV.innerText = configButton.innerText;
    var iV = document.createElement('i');
        iV.setAttribute('class', configButton.setIcon + ' mrk');
        iV.setAttribute('aria-hidden', 'true');
    var divV = document.createElement('div');
        divV.setAttribute('id', configButton.id);
        divV.setAttribute('class', configButton.col);
        divV.setAttribute('style', configButton.wid);

        buttonV.appendChild(iV);
        divV.appendChild(buttonV)
    
    this.setitensBuilt(divV, configButton.id);   
    return divV;
}
dataTableConfig.prototype.constructButtonDropDown = function (configButtonDrpDwn){
    var divColV = document.createElement('div');
        divColV.setAttribute('class', configButtonDrpDwn.col);
        divColV.setAttribute('style', configButtonDrpDwn.wid);
    var divV = document.createElement('div');
        divV.setAttribute('id', configButtonDrpDwn.id);
        divV.setAttribute('class', 'dropdown');
    var buttonV = document.createElement('button');
        buttonV.setAttribute('type', 'button');
        buttonV.setAttribute('class','btn btn-primary dropdown-toggle mrk');
        buttonV.setAttribute('disabled','disabled');
        buttonV.setAttribute('data-bs-toggle','dropdown');
        buttonV.setAttribute('aria-expanded','false');
        buttonV.innerText = configButtonDrpDwn.innerText; 
    var ulV = document.createElement('ul');
        ulV.setAttribute('class', 'dropdown-menu mrk');
    for(let i = 0; i < configButtonDrpDwn.ul.length; i++){
        if(configButtonDrpDwn.ul[i].class == 'divider'){
            var liV = document.createElement('li');
            liV.setAttribute('class', configButtonDrpDwn.ul[i].class+' mrk');
            ulV.appendChild(liV);
        }else{
            var liV = document.createElement('li');
                liV.setAttribute('class', 'mrk');
                liV.setAttribute('id', configButtonDrpDwn.ul[i].id);
                liV.setAttribute('value', configButtonDrpDwn.ul[i].value);
                if(configButtonDrpDwn.ul[i].id == 'AjusteAssr'){
                    liV.setAttribute('data-bs-toggle', 'modal');
                    liV.setAttribute('data-bs-target', '#exampleModalPopovers');
                }
            var aV = document.createElement('a');
                aV.setAttribute('class', 'dropdown-item mrk');
                aV.setAttribute('href', '#');
                if(configButtonDrpDwn.ul[i].icon != undefined){
                    var iconV = this.constructIcon().construct(configButtonDrpDwn.ul[i].icon);
                    aV.appendChild(iconV);
                    aV.innerHTML = aV.innerHTML + '|' + configButtonDrpDwn.ul[i].innerText;
                    liV.appendChild(aV);
                }else{
                    aV.innerText = configButtonDrpDwn.ul[i].innerText;
                    liV.appendChild(aV);
                }
            ulV.appendChild(liV);
        }
    }

    //buttonV.appendChild(spanV);
    divV.appendChild(buttonV);
    divV.appendChild(ulV);
    divColV.appendChild(divV);
    
    this.setitensBuilt(divV, configButtonDrpDwn.id);   
    return divColV;
}
dataTableConfig.prototype.constructIcon = function (configIcon){
    icon = {}
    icon = {
        construct: function (configIcon) {
            var iV = document.createElement('i');
            iV.setAttribute('class', configIcon);
            iV.setAttribute('aria-hidden', 'true');
            return iV
        }
    }  
    return icon;
}
dataTableConfig.prototype.determineObjConfig = function (configField, config){
    var configDefaut = {
        inputId: 'dataSelected',
        validationStyle: 'has-success has-feedback',
        col: 'col-md-2',
        colInnerDistri: 'pull-right',
        setLabel: {
            enabled: false,
            value: 'dataSelected',
            innerText: 'Input with success'
        },
        setIcone: {
            enabled: true,
            value: 'flaticon flaticon-check-circle icon-sm form-control-feedback'
        },
        setHelpBlock: {
            enabled: true,
            innerText: 'Valor Selecionado.'
        }
    }
    if(typeof configField != 'object' || configField == null || configField == undefined){
        return config = configDefaut
    }else if(typeof configField == 'object'){
        let propObj  = ['inputId', 'validationStyle', 'col', 'colInnerDistri', 'setLabel', 'setIcone', 'setHelpBlock']
        let subPropObj  = ['enabled', 'value', 'col', 'innerText']
        let arrRequire = ['inputId', 'validationStyle', 'col']
        for(i = 0; i < propObj.length; i++){
            let prop = propObj[i]
            // Require
            for(j = 0; j < arrRequire.length; j++){
                if(arrRequire[j] == prop){
                    let valueProp = configField[prop]
                    if(valueProp != null || valueProp != undefined ||  valueProp != ''){
                        config[prop] = valueProp
                    }else{
                        console.log('Propriedade(s) '+ prop +' do Object configField obrigatório não informado')
                        return 
                    }
                }
            }
             //define prop
             if(configField[prop] == null || configField[prop] == undefined || configField[prop] == ''){
                config[prop] = configDefaut[prop]   
            }else{
                config[prop] = configField[prop]
            }
        }
        return config
    }
}      
dataTableConfig.prototype.orderLineSuper = function (objConfig, itensConfigs, orderSuper) {
    /**
     *  Determina a ordem dos elementos na linha superior do dataTable.
     */
    var divIn   = document.getElementsByClassName('row fs-no-margin');          // div onde estarão contidos os elementos.
    var divAll  = divIn[0].parentElement.parentElement;                         // div contendo todo o componete. Linha superior, linha inferior e dataTable.
    var elementsBuilt = {id: []};                                               // Array que recebe os elementos HTML já criados.
    if(divAll.id == 'target'){
        if(itensConfigs.length != 0){
            for(let i = 0; i < itensConfigs.length; i++){
                let ElemItem = itensConfigs[i];
                if(ElemItem.type == 'button'){  
                    elementsBuilt.id.push(ElemItem.id); 
                    elementsBuilt[ElemItem.id] = this.constructButton(ElemItem); 
                }else if(ElemItem.type == 'dropdown'){ 
                    elementsBuilt.id.push(ElemItem.id);  
                    elementsBuilt[ElemItem.id] = this.constructButtonDropDown(ElemItem); 
                };
            }
        }
        var inpDefaut  = this.constructInputValueSelected(objConfig) /**  <-------------------------this.configField in  dataTableConfig*/  
        
        let rowSuper                    = divIn[0];
        let tempr                       = divIn[0].children[0];                 // Obtem o elem 'barra de pesquisa'. Obs: Esse elemnto é criado juntamente com a dataTable.
        tempr.className                 = 'col-md-3';
        tempr.children[0].className     = '';
        rowSuper.removeChild(rowSuper.children[0]);                             // Limpa toda a linha para reordenar.

        elementsBuilt.id.push('dataSelected');
        elementsBuilt['dataSelected'] = inpDefaut;
        elementsBuilt.id.push('datatable-area-search');
        elementsBuilt['datatable-area-search'] = tempr;                         // datatable-area-search

        for(let j = 0; j < orderSuper.length; j++){
            let elemNow = orderSuper[j];
            let elemBuilt = elementsBuilt[elemNow];
            rowSuper.appendChild(elemBuilt);
        }

        clearInterval(this.initMyInterval) /**  <-------------------------this.myInterval in  dataTableConfig*/
    }
}
dataTableConfig.prototype.changeEventInput = function () {
    let itens       = this.itensBuilt;
    let wrkflw      = this.statesWorkflow;
    let arrAssr     = ['Diretoria Superintendencia', 'Diretoria Administrativa Financeira', 'Diretoria Técnica'] 
    let objFunc = {
        fnc: ['formatDinamic', 'disabledOptions', 'enabledButton', 'statusAsr'],
        statusAsr: async function(){ await dataTablemi.statusAsr() },
        formatDinamic: function () {
            var configFormat = {
                inputId: 'dataSelected',
                validationStyle: 'has-success has-feedback',
                col: 'col-md-1',
                colInnerDistri: 'pull-left',
                setLabel: {
                    enabled: false,
                    value: 'dataSelected',
                    innerText: 'Input with success'
                },
                setIcone: {
                    enabled: true,
                    value: 'flaticon flaticon-check-circle icon-sm form-control-feedback'
                },
                setHelpBlock: {
                    enabled: true,
                    innerText: 'Item Selecionado.'
                }
            }
            
            if(configFormat != undefined){
                var divCol      = document.getElementById(configFormat.inputId).parentElement.parentElement.parentElement
                var divInCol    = document.getElementById(configFormat.inputId).parentElement.parentElement
                var divFeedBack = document.getElementById(configFormat.inputId).parentElement
                var labelInp    = divFeedBack.children[0]
                var iconInp     = divFeedBack.children[2]
                var pInp        = divFeedBack.children[3]
        
                divCol.className        = configFormat.col
                divInCol.className      = configFormat.colInnerDistri
                divFeedBack.className   = configFormat.validationStyle
                labelInp.value          = configFormat.setLabel.value
                labelInp.innerText      = configFormat.setLabel.innerText
                iconInp.className       = configFormat.setIcone.value
                pInp.innerText          = configFormat.setHelpBlock.innerText
            }
        },
        disabledOptions: function () {              //Disabilita opções de botão 'Ações Assessoria'
            drpDwn  = itens['btnDrpDwn1'];
            let States      = [wrkflw.AnaliseAssr, wrkflw.Ajustes, wrkflw.RealizaReuniao, wrkflw.ItemDescartado]
            let refEnabled  = [
                [wrkflw.AnaliseAssr],
                [wrkflw.Ajustes, ,wrkflw.AnaliseAssr, wrkflw.RealizaReuniao, wrkflw.ItemDescartado, 19],
                [wrkflw.Ajustes, wrkflw.RealizaReuniao, wrkflw.ItemDescartado, 19],
                [wrkflw.Ajustes, wrkflw.RealizaReuniao, wrkflw.ItemDescartado, 19]
            ] 
            let dataSelected = document.getElementById('dataSelected').value;
            let cntrts          = DatasetFactory.createConstraint("txt_NumProcess", dataSelected, dataSelected, ConstraintType.MUST); 
            let itenPauta       = DatasetFactory.getDataset('Pauta DIREX', null, new Array(cntrts), null).values[0];
            if(itenPauta['hdn_aprvAssr'] != null || itenPauta['hdn_aprvAssr'] != undefined){
                drpDwn.getElementsByTagName('button')[0].disabled = false
                let lis = drpDwn.getElementsByTagName('li');
                let assrAp = itenPauta['hdn_aprvAssr'];
                if (assrAp == wrkflw.DespachoDeliber){
                    drpDwn.getElementsByTagName('button')[0].disabled = 'disabled'
                } else {
                    for(let k = 0; k < lis.length; k++){ 
                        if(lis[k].hasAttribute("hidden")){
                            lis[k].removeAttribute("hidden");
                        }
                    }
                    for(let i = 0; i < States.length; i++){
                        if(States[i] == assrAp){
                            let itns = refEnabled[i];
                            for(let l = 0; l < lis.length; l++){
                                for(let j = 0; j < itns.length; j++){
                                    if(itns[j] == lis[l].value){
                                        lis[l].hidden = 'true';
                                    }
                                }
                            }
                        }
                    }  
                }
            }
        },
        enabledButton: function (){
            var iten = itens['btn1'];
            let dataSelected = document.getElementById('dataSelected').value;
            let cntrts          = DatasetFactory.createConstraint("txt_NumProcess", dataSelected, dataSelected, ConstraintType.MUST); 
            let itenPauta       = DatasetFactory.getDataset('Pauta DIREX', null, new Array(cntrts), null).values[0];
            console.log(itenPauta)
            console.log('-------------------------------------*********************************************************** 451')
            if(itenPauta['hdn_aprvAssr'] != null || itenPauta['hdn_aprvAssr'] != undefined){
                let assrAp          = itenPauta['hdn_aprvAssr'];
                let resAnalis       = itenPauta['txt_resultAnalis'];                                        // <---- Campo resultado da Analise assessoria defini o Se foi para status 19 devido Deliberação ou devido Reprovação 
                let inps            = document.getElementsByClassName('inpDlbr')                            // < ------------- OBTEM OS INPUTS NO HTML 
                arrNamesIt          = ['slc_demandante', 'slc_DISUP_vt', 'slc_UCOF_vt', 'slc_DITEC_vt', 'txt_Deliberacao', 'txt_Justificativa', 'txt_obsDlbrDIRAF', 'txt_obsDlbrDITEC', 'txt_obsDlbrDISUP'] 
                arrAlt              = ['hdn_DIRAF_vt', 'hdn_DISUP_vt', 'hdn_DITEC_vt', 'slc_demandante']
                document.getElementById('just_demandante').style.display = 'block'
                for(x in arrAssr){
                    console.log(arrAssr[x])
                    if(itenPauta['zm_UnidadeSolicitante'] == arrAssr[x]){
                        document.getElementById('just_demandante').style.display = 'none'
                    }
                }
                if(wrkflw.AnaliseAssr == assrAp){
                    document.getElementById('Delibr').style.display = 'block';
                    iten.getElementsByTagName('button')[0].disabled = true;
                    for(let i = 0; i < inps.length; i++){
                        let nowInp = inps[arrNamesIt[i]];
                        /**************************************************************************************** */
                        if(nowInp.tagName == 'SELECT' && nowInp.id == 'slc_demandante'){ // < ---- especialmente para slc_demandante
                            for(let j = 0; j < nowInp.options.length; j++){
                                if(nowInp.options[j].value == itenPauta['slc_demandante']){
                                    nowInp.options[j].selected = true;
                                    nowInp.value = itenPauta['slc_demandante'];
                                    nowInp.disabled = false;
                                    /*this.funcsChange        = {
                                    Name: []
                                    }*/
                                    for(let i = 0; i < dataTablemi.funcsChange.Name.length; i++){
                                        let name 		= dataTablemi.funcsChange.Name[i];
                                        if(dataTablemi.funcsChange.Name[i] == 'a'){
                                            dataTablemi.funcsChange[name](0);
                                        }else{
                                            dataTablemi.funcsChange[name]();
                                        }
                                    }
                                }
                                if(itenPauta['slc_demandante'] == ''){
                                    nowInp.options[0].selected = true;
                                    inps[arrNamesIt[i]].value = itenPauta[arrAlt[i]];
                                    nowInp.disabled = false;
                                }
                            }
                            nowInp.style.color = 'black';
                            nowInp.disabled = false;
                            /**************************************************************************************** */
                        }else{
                            nowInp.value = '';
                            nowInp.disabled = true;
                        }
                    } 
                    console.log(itenPauta)
                    inps['txt_Justificativa'].disabled = false
                    inps['txt_Deliberacao'].disabled = false
                    inps['txt_Justificativa'].value = itenPauta['txt_Justificativa']; inps['txt_Justificativa'].style.color = 'black';
                    inps['txt_Deliberacao'].value = itenPauta['txt_Deliberacao']; inps['txt_Deliberacao'].style.color = 'black';
                    console.log(myEditor)
                    myEditor.cleanEditor(document.getElementById('txt_Justificativa'))
                    myEditor.setDataInput(document.getElementById('txt_Justificativa'))
                    myEditor.cleanEditor(document.getElementById('txt_Deliberacao'))
                    myEditor.setDataInput(document.getElementById('txt_Deliberacao'))
                    //myEditor.disabledEditor(document.getElementById('txt_Deliberacao'))


                    myEditor.setDataInput(document.getElementById('txt_obsDlbrDIRAF'))
                    myEditor.disabledEditor(document.getElementById('txt_obsDlbrDIRAF'))
                    myEditor.setDataInput(document.getElementById('txt_obsDlbrDITEC'))
                    myEditor.disabledEditor(document.getElementById('txt_obsDlbrDITEC'))
                    myEditor.setDataInput(document.getElementById('txt_obsDlbrDISUP'))
                    myEditor.disabledEditor(document.getElementById('txt_obsDlbrDISUP'))
                    
                    window["zm_emailsCopia"].clear()
                    window["zm_emailsCopia"].disable(true)                  // < ------ adicionado
                }else if(wrkflw.ItemDescartado == assrAp){
                    document.getElementById('Delibr').style.display = 'block';
                    iten.getElementsByTagName('button')[0].disabled = true;
                    for(let i = 0; i < inps.length; i++){
                        let nowInp = inps[arrNamesIt[i]]
                        if(nowInp.id == 'slc_UCOF_vt'){
                            nck = 'DIRAF'    
                        }else{
                            nck = nowInp.id.split('_')[1]    
                        }
                       
                        ckSlcN = 0;
                        if(nowInp.tagName == 'SELECT'){
                            nowInp.options[0].selected = true;
                            for(let j = 0; j < nowInp.options.length; j++){
                                for(k = 0; k < arrAlt.length; k++){
                                    if(nowInp.options[j].value == itenPauta[arrAlt[k]] && arrAlt[k].indexOf(nck) != -1){
                                        nowInp.options[j].selected = true;
                                        nowInp.value = itenPauta[arrAlt[k]];
                                        ckSlcN++
                                        /*this.funcsChange        = {
                                        Name: []
                                        }*/
                                        for(let i = 0; i < dataTablemi.funcsChange.Name.length; i++){
                                            let name 		= dataTablemi.funcsChange.Name[i];
                                            if(dataTablemi.funcsChange.Name[i] == 'a'){
                                                dataTablemi.funcsChange[name](1);
                                            }else{
                                                dataTablemi.funcsChange[name]();
                                            }
                                        }
                                        break;
                                    }
                                }
                                if(ckSlcN != 0){ break }
                            }
                            nowInp.disabled = 'disabled';
                        }else{  inps[arrNamesIt[i]].value = itenPauta[arrNamesIt[i]]; nowInp.style.color = 'black'; nowInp.disabled = 'disabled'; }
                    }
                    console.log(myEditor)
                    myEditor.setDataInput(document.getElementById('txt_Justificativa'))
                    myEditor.disabledEditor(document.getElementById('txt_Justificativa'))
                    myEditor.setDataInput(document.getElementById('txt_Deliberacao'))
                    myEditor.disabledEditor(document.getElementById('txt_Deliberacao'))
                    
                    myEditor.setDataInput(document.getElementById('txt_obsDlbrDIRAF'))
                    myEditor.disabledEditor(document.getElementById('txt_obsDlbrDIRAF'))
                    myEditor.setDataInput(document.getElementById('txt_obsDlbrDITEC'))
                    myEditor.disabledEditor(document.getElementById('txt_obsDlbrDITEC'))
                    myEditor.setDataInput(document.getElementById('txt_obsDlbrDISUP'))
                    myEditor.disabledEditor(document.getElementById('txt_obsDlbrDISUP'))

                    window["zm_emailsCopia"].clear()
                    window["zm_emailsCopia"].disable(true)                  // < ------ adicionado
                }else if(wrkflw.RealizaReuniao == assrAp){
                    document.getElementById('Delibr').style.display = 'block';
                    iten.getElementsByTagName('button')[0].disabled = false;
                    for(let i = 0; i < inps.length; i++){
                        let nowInp = inps[arrNamesIt[i]];
                        if(nowInp.id == 'slc_UCOF_vt'){
                            nck = 'DIRAF'    
                        }else{
                            nck = nowInp.id.split('_')[1]    
                        }
                        ckSlcN = 0;
                        if(nowInp.tagName == 'SELECT'){
                            nowInp.options[0].selected = true;
                                for(let j = 0; j < nowInp.options.length; j++){
                                    for(k = 0; k < arrAlt.length; k++){
                                        if(nowInp.options[j].value == itenPauta[arrAlt[k]] && arrAlt[k].indexOf(nck) != -1){
                                            console.log(nowInp.options[j].value)
                                            console.log(itenPauta[arrAlt[k]])
                                            console.log( inps[arrNamesIt[k]].value)
                                            nowInp.options[j].selected = true;
                                            nowInp.value = itenPauta[arrAlt[k]];
                                            nowInp.disabled = false;
                                            console.log( nowInp) 
                                            console.log( nowInp.value) 
                                            ckSlcN++
                                            /*this.funcsChange        = {
                                            Name: []
                                            }*/
                                            for(let i = 0; i < dataTablemi.funcsChange.Name.length; i++){
                                                console.log(i)
                                                let name 		= dataTablemi.funcsChange.Name[i];
                                                if(dataTablemi.funcsChange.Name[i] == 'a'){
                                                    dataTablemi.funcsChange[name](0);
                                                }else{
                                                    dataTablemi.funcsChange[name]();
                                                }
                                            }
                                            break;
                                        }
                                        if(itenPauta[arrAlt[k]] == ''){
                                            console.log('== vazio')
                                            nowInp.options[0].selected = true;
                                            inps[arrNamesIt[i]].value = itenPauta[arrAlt[k]];
                                            nowInp.disabled = false;
                                        }
                                    }
                                    if(ckSlcN != 0){ break }
                                }
                            nowInp.style.color = 'black';
                            nowInp.disabled = false;
                        }else{  console.log(itenPauta[arrNamesIt[i]]); inps[arrNamesIt[i]].value = itenPauta[arrNamesIt[i]]; nowInp.style.color = 'black'; }
                    }
                    console.log(myEditor)
                    myEditor.cleanEditor(document.getElementById('txt_Justificativa'))
                    myEditor.setDataInput(document.getElementById('txt_Justificativa'))
                    myEditor.cleanEditor(document.getElementById('txt_Deliberacao'))
                    myEditor.setDataInput(document.getElementById('txt_Deliberacao'))

                    myEditor.cleanEditor(document.getElementById('txt_obsDlbrDIRAF'))
                    myEditor.setDataInput(document.getElementById('txt_obsDlbrDIRAF'))
                    myEditor.cleanEditor(document.getElementById('txt_obsDlbrDITEC'))
                    myEditor.setDataInput(document.getElementById('txt_obsDlbrDITEC'))
                    myEditor.cleanEditor(document.getElementById('txt_obsDlbrDISUP'))
                    myEditor.setDataInput(document.getElementById('txt_obsDlbrDISUP'))

                    window["zm_emailsCopia"].clear()
                    window["zm_emailsCopia"].disable(false)                  // < ------ adicionado
                }else if(wrkflw.DespachoDeliber == assrAp && resAnalis == 2){
                    console.log(itenPauta)
                    for(let i = 0; i < inps.length; i++){
                        let nowInp = inps[arrNamesIt[i]]
                        if(nowInp.id == 'slc_UCOF_vt'){
                            nck = 'DIRAF'    
                        }else{
                            nck = nowInp.id.split('_')[1]    
                        }
                        ckSlcN = 0;
                        if(nowInp.tagName == 'SELECT'){
                            nowInp.options[0].selected = true;
                            for(let j = 0; j < nowInp.options.length; j++){
                                for(k = 0; k < arrAlt.length; k++){
                                    if(nowInp.options[j].value == itenPauta[arrAlt[k]] && arrAlt[k].indexOf(nck) != -1){
                                        nowInp.options[j].selected = true;
                                        nowInp.value = itenPauta[arrAlt[k]];
                                        ckSlcN++
                                        /*this.funcsChange        = {
                                        Name: []
                                        }*/
                                        for(let i = 0; i < dataTablemi.funcsChange.Name.length; i++){
                                            let name 		= dataTablemi.funcsChange.Name[i];
                                            //dataTablemi.funcsChange[name]();
                                            if(dataTablemi.funcsChange.Name[i] == 'a'){
                                                dataTablemi.funcsChange[name](1);
                                            }else{
                                                dataTablemi.funcsChange[name]();
                                            }
                                        }
                                        break;
                                    }
                                }
                                if(ckSlcN != 0){ break }
                            }
                            nowInp.style.color = 'black';
                            nowInp.disabled = 'disabled';
                        }else{  inps[arrNamesIt[i]].value = itenPauta[arrNamesIt[i]]; nowInp.style.color = 'black'; nowInp.disabled = 'disabled'; }
                    }
                    document.getElementById('Delibr').style.display = 'block'
                    iten.getElementsByTagName('button')[0].disabled = true 
                    console.log(myEditor)

                    myEditor.setDataInput(document.getElementById('txt_Justificativa'))
                    myEditor.disabledEditor(document.getElementById('txt_Justificativa'))
                    myEditor.setDataInput(document.getElementById('txt_Deliberacao'))
                    myEditor.disabledEditor(document.getElementById('txt_Deliberacao'))
                    
                    myEditor.setDataInput(document.getElementById('txt_obsDlbrDIRAF'))
                    myEditor.disabledEditor(document.getElementById('txt_obsDlbrDIRAF'))
                    myEditor.setDataInput(document.getElementById('txt_obsDlbrDITEC'))
                    myEditor.disabledEditor(document.getElementById('txt_obsDlbrDITEC'))
                    myEditor.setDataInput(document.getElementById('txt_obsDlbrDISUP'))
                    myEditor.disabledEditor(document.getElementById('txt_obsDlbrDISUP'))

                    emails = itenPauta["zm_emailsCopia"].split(',');
                    console.log(emails)
                    arrE = [];
                    for(forE = 0; forE < emails.length; forE++){
                        arrE.push(emails[forE])
                    }
                    console.log(arrE)
                    window["zm_emailsCopia"].clear()
                    window["zm_emailsCopia"].setValues(arrE)
                    window["zm_emailsCopia"].disable(true)                  // < ------ adicionado
                }else if(wrkflw.DespachoDeliber == assrAp && resAnalis == 1){
                    for(let i = 0; i < inps.length; i++){
                        let nowInp = inps[arrNamesIt[i]];
                        if(nowInp.id == 'slc_UCOF_vt'){
                            nck = 'DIRAF'    
                        }else{
                            nck = nowInp.id.split('_')[1]    
                        }
                        ckSlcN = 0;
                        if(nowInp.tagName == 'SELECT'){
                            nowInp.options[0].selected = true;
                            for(let j = 0; j < nowInp.options.length; j++){
                                for(k = 0; k < arrAlt.length; k++){
                                    if(nowInp.options[j].value == itenPauta[arrAlt[k]] && arrAlt[k].indexOf(nck) != -1){
                                        nowInp.options[j].selected = true;
                                        nowInp.value = itenPauta[arrAlt[k]];
                                        ckSlcN++
                                        /*this.funcsChange        = {
                                        Name: []
                                        }*/
                                        for(let i = 0; i < dataTablemi.funcsChange.Name.length; i++){
                                            let name 		= dataTablemi.funcsChange.Name[i];
                                            if(dataTablemi.funcsChange.Name[i] == 'a'){
                                                dataTablemi.funcsChange[name](1);
                                            }else{
                                                dataTablemi.funcsChange[name]();
                                            }
                                        }
                                        break;
                                    }
                                }
                                if(ckSlcN != 0){ break }
                            }
                            nowInp.disabled = 'disabled';
                        }else{  inps[arrNamesIt[i]].value = itenPauta[arrNamesIt[i]]; nowInp.style.color = 'black'; nowInp.disabled = 'disabled'; }
                    }
                    document.getElementById('Delibr').style.display = 'block'
                    iten.getElementsByTagName('button')[0].disabled = true 
                    console.log(myEditor)

                    myEditor.setDataInput(document.getElementById('txt_Justificativa'))
                    myEditor.disabledEditor(document.getElementById('txt_Justificativa'))
                    myEditor.setDataInput(document.getElementById('txt_Deliberacao'))
                    myEditor.disabledEditor(document.getElementById('txt_Deliberacao'))
                    
                    myEditor.setDataInput(document.getElementById('txt_obsDlbrDIRAF'))
                    myEditor.disabledEditor(document.getElementById('txt_obsDlbrDIRAF'))
                    myEditor.setDataInput(document.getElementById('txt_obsDlbrDITEC'))
                    myEditor.disabledEditor(document.getElementById('txt_obsDlbrDITEC'))
                    myEditor.setDataInput(document.getElementById('txt_obsDlbrDISUP'))
                    myEditor.disabledEditor(document.getElementById('txt_obsDlbrDISUP'))

                    window["zm_emailsCopia"].clear()
                    window["zm_emailsCopia"].disable(true)                  // < ------ adicionado
                }else{
                    console.log('* / * * /* /*/ */ * /* /* /* /* /* / */ */ * /* / * /*/ * /* /* /* /*/')
                    document.getElementById('Delibr').style.display = 'none'
                    iten.getElementsByTagName('button')[0].disabled = true 
                }
            }
        }
    }
    this.tableReference.onselectrow(this.tableReference.myTable, objFunc);
}

                                   /****** Metodos com Necessidade de Tratamento******** */

dataTableConfig.prototype.changeEventTable = function () {
    var TableFluig          = this.TableFluig();
    var constructIcon       = this.constructIcon(); 
    let wrkflw              = this.statesWorkflow
    let itens               = this.itensBuilt;
    let tableReference      = this.tableReference
    let objFunc = {
        fnc: [
                {'fncName': 'openItem', 'metodhParam': 'reload'},
                {'fncName': 'statusAsr', 'metodhParam': 'reload'},
                {'fncName': 'enabledButton', 'metodhParam': 'reload'},
                {'fncName': 'formatDinamic', 'metodhParam': 'reload'},
                {'fncName': 'setCountItens', 'metodhParam': 'reload'}         
        ], 
        formatDinamic: function () {
            var configFormat = {                                                                            // Caso configField não seja configurado. As opçãoes Default serão apresentadas.
                inputId:          'dataSelected',                                                       // Nome do campo que será utilizado para receber o valor selecionado na dataTable.
                validationStyle:  'has-warning has-feedback',                                           // Estilo de apresentação do campo. Style-guide: 'has-success has-feedback', 'has-error has-feedback'.
                col:              'col-md-1',                                                           // Configuração de GRID style-guide. 
                colInnerDistri:   'pull-left',                                                          // Determina a posição do campo dentro da COL. Default: 'pull-right'.
                setLabel: {                                                                             // Caso não configurado não será apresentado.
                    enabled:      false,                                                                // Default: false. true: Apresnta Label | false: Não apresenta.
                    value:        'dataSelected',
                    innerText:    'Input with success'
                },                                                                              
                setIcone: {                                                                             // Caso não configurado será apresentado o valor padrão: true, 'flaticon flaticon-check-circle icon-sm form-control-feedback'.
                    enabled:      true,                                                                 // Default: true. true: Apresnta Icone | false: Não apresenta. 
                    value:        'flaticon flaticon-alert icon-sm form-control-feedback'               // Caso não configurado será apresentado o valor padrão 'flaticon flaticon-check-circle icon-sm form-control-feedback'.
                },
                setHelpBlock: {                                                                         // Caso não configurado será apresentado o valor padrão: true, 'Valor Selecionado.'.
                    enabled:      true,                                                                 // Default: true. true: Apresnta HelpBlock | false: Não apresenta. 
                    innerText:    'Selecione um Item.'                                                  // Determina o texto de Auxilio. Default 'Valor Selecionado.'.
                }
            }
            if(configFormat != undefined){
                document.getElementById(configFormat.inputId).value = ''
                var divCol      = document.getElementById(configFormat.inputId).parentElement.parentElement.parentElement
                var divInCol    = document.getElementById(configFormat.inputId).parentElement.parentElement
                var divFeedBack = document.getElementById(configFormat.inputId).parentElement
                var labelInp    = divFeedBack.children[0]
                var iconInp     = divFeedBack.children[2]
                var pInp        = divFeedBack.children[3]
        
                divCol.className        = configFormat.col
                divInCol.className      = configFormat.colInnerDistri
                divFeedBack.className   = configFormat.validationStyle
                labelInp.value          = configFormat.setLabel.value
                labelInp.innerText      = configFormat.setLabel.innerText
                iconInp.className       = configFormat.setIcone.value
                pInp.innerText          = configFormat.setHelpBlock.innerText
            }
        },
        openItem: async function () {
            //var secIntervalOpenItem = setInterval(pushOpenItem, 20)
            //console.log(secIntervalOpenItem)
            await pushOpenItem()
            async function pushOpenItem(){    
                var url = window.origin+"/portal/p/1/pageworkflowview?app_ecm_workflowview_detailsProcessInstanceID=" //https://myweb.am.sebrae.com.br
                var arrColumnsRender = ['N° Solicitação', 'Data Solicitação', 'Nome Solicitante', 'Unidade', 'Assunto', 'Justificativa']
                var indexLink = []
                var divIn = document.getElementsByClassName('row fs-no-margin')
                var divAll = divIn[0].parentElement.parentElement       //DIV com o componente dataTable
                var tableBody   = divAll.getElementsByTagName('tbody')[0]    
                var nomeCol     = divAll.getElementsByTagName('thead')[0].rows[0].cells
                var rows = tableBody.rows   //Linhas da pagina atual da dataTable
                var textLink = 0        
                console.log(rows)                   
                for(i = 0; i < rows.length; i++){
                    let row = rows[i]
                    let cells = row.cells
                    //indexLink[i] = cells[0]
                    console.log(cells)
                    console.log(cells[0])
                    if(cells[0].innerText != ''){
                        textLink = cells[0].innerText
                        let inHTML = "<a href=\""+ url + textLink +"\""+ "class=\"cad-link\""+"target=\"_blank\""+"style=\"color:blue\" ml=\"true\">"+"<i class=\"flaticon flaticon-link icon-md\"></i>"+
                        textLink+"</a>"
                        cells[0].innerHTML = inHTML
                        console.log(inHTML)
                    }
                }
                //clearInterval(secIntervalOpenItem)
            }
        },
        statusAsr: async function () {  await dataTablemi.statusAsr() },
        enabledButton: function (){
            var iten = itens['btn1'];
            drpDwnIn = itens['btnDrpDwn1']
            document.getElementById('Delibr').style.display = 'none'
            iten.getElementsByTagName('button')[0].disabled = true
            drpDwnIn.getElementsByTagName('button')[0].disabled = true
        },
        setCountItens: function () {
            let areaNavBtns = TableFluig.table.lastElementChild;
            let divCountShow = areaNavBtns.children['countShow'];

            let finalCount  = tableReference.objData.indIten    + 1
            let initCount   = tableReference.objData.indItenB   + 1
            let total       = tableReference.objData.arrItensAll.length
            let text        = ''

            if(initCount == total){
                text = 'Apresentando <b>'+initCount+'</b> de <b>'+total+' itens no total</b>'
            }else{
                text = 'Apresentando <b>'+initCount+'</b> a <b>'+finalCount+'</b> de <b>'+total+' itens no total</b>'
            }
           
         
            divCountShow.innerHTML = text
			
            /*divButtonsNav.appendChild(btnCollection[0])
            divButtonsNav.appendChild(btnCollection[0])

            areaNavBtns.appendChild(divCountShow)
            areaNavBtns.appendChild(divButtonsNav)
            */
        }
    }
    this.tableReference.setFunc(objFunc);
}
dataTableConfig.prototype.loadEventTable = function () {
    var TableFluig          = this.TableFluig();
    var constructIcon       = this.constructIcon(); 
    let itens               = this.itensBuilt;
    let wrkflw              = this.statesWorkflow
    let itensConfigsUpd     = this.itensConfigs
    let tableReference      = this.tableReference
    let dtConfig            = this                          // Necessário passar o obj dataTableConfig para utilizar statusAsr() no momento em que a tabela carrega. dataTableConfig é carregador depois da tableFluig por isso não é possivel executar a func direto. 
    console.log(itens)
    let objFuncload = {
        fnc: [
                {'fncName': 'openItem', 'metodhParam': 'load'},
                {'fncName': 'statusAsr', 'metodhParam': 'load'},
                {'fncName': 'enabledRefresh', 'metodhParam': 'load'},
                {'fncName': 'setCountItens', 'metodhParam': 'load'}   
        ],
        openItem: function () {
            var url = window.origin+"/portal/p/1/pageworkflowview?app_ecm_workflowview_detailsProcessInstanceID=" //https://myweb.am.sebrae.com.br 
            var arrColumnsRender = ['N° Solicitação', 'Data Solicitação', 'Nome Solicitante', 'Unidade', 'Assunto', 'Justificativa']
            var indexLink = []
            var divIn       = document.getElementsByClassName('row fs-no-margin')
            var divAll      = divIn[0].parentElement.parentElement       //DIV com o componente dataTable
            var tableBody   = divAll.getElementsByTagName('tbody')[0]    
            var nomeCol     = divAll.getElementsByTagName('thead')[0].rows[0].cells
            var rows = tableBody.rows                              //Linhas da pagina atual da dataTable
            for(i = 0; i < rows.length; i++){
                let row = rows[i]
                let cells = row.cells
                indexLink[i] = cells[0]
                if(cells[0].innerText != ''){
                    let textLink = cells[0].innerText
                    let inHTML = "<a href=\""+ url + textLink +"\""+ "class=\"cad-link\""+"target=\"_blank\""+"style=\"color:blue\" ml=\"true\">"+"<i class=\"flaticon flaticon-link icon-md\"></i>"+
                    textLink+"</a>"
                    cells[0].innerHTML = inHTML
                }
            }
        },
        statusAsr: async function () {
            itensConfigsH   = itensConfigsUpd;
            objHandleIcons =  {};
            for(z = 0; z < itensConfigsH.length; z++){
                itnHnow = itensConfigsH[z]
                if(itnHnow.id == 'btnDrpDwn1'){
                    ulsHnow = itnHnow.ul
                    for(b = 0; b < ulsHnow.length; b++){
                        id = ulsHnow[b].id
                        icon = ulsHnow[b].icon
                        console.log(ulsHnow[b])
                        objHandleIcons[id] = icon
                    }
                }else if(itnHnow.id == 'btn1'){
                    objHandleIcons[itnHnow.id] = itnHnow.setIcon
                }
            }
            console.log('CRIADO objHandleIcons *-**********************************************************************')
            console.log(objHandleIcons)
            console.log('loadEventTable =  ********************************************************************')
            console.log('loadEventTable MOD =   await dataTablemi.statusAsr() ********************************************************************')
            await dtConfig.statusAsr()
        },
        enabledRefresh: function (){
            var iten = itens['btn2']
            console.log(iten)
            iten.getElementsByTagName('button')[0].disabled = false
        },
        setCountItens: function () {
            let areaNavBtns = TableFluig.table.lastElementChild;
            let btnCollection = areaNavBtns.children;
            areaNavBtns.classList.remove('text-right');
            
            let finalCount  = tableReference.objData.indIten    + 1
            let initCount   = tableReference.objData.indItenB   + 1
            let total       = tableReference.objData.arrItensAll.length
            let text        = ''

            if(initCount == total){
                text = 'Apresentando <b>'+initCount+'</b> de <b>'+total+' itens no total</b>'
            }else{
                text = 'Apresentando <b>'+initCount+'</b> a <b>'+finalCount+'</b> de <b>'+total+' itens no total</b>'
            }

            var divCountShow = document.createElement('div');
            divCountShow.setAttribute('style', 'float: left');
            divCountShow.setAttribute('id', 'countShow');
            divCountShow.innerHTML = text

            var divButtonsNav = document.createElement('div');
            divButtonsNav.setAttribute('class', 'text-right');
			
            divButtonsNav.appendChild(btnCollection[0])
            divButtonsNav.appendChild(btnCollection[0])

            areaNavBtns.appendChild(divCountShow)
            areaNavBtns.appendChild(divButtonsNav)
        }
    }
    if(objFuncload != '' && objFuncload != null && objFuncload != undefined){
        for(let i = 0; i < objFuncload.fnc.length; i++){
            if(objFuncload.fnc[i].metodhParam == 'load'){
                let name 		= objFuncload.fnc[i].fncName
                objFuncload[name]()
            }
        }
    }
}
dataTableConfig.prototype.itensBuiltFunctions = function () {
    let itens               = this.itensBuilt;
    let TableFluig          = this.TableFluig();
    let wrkflw              = this.statesWorkflow;
    let itensConfigsUpd     = this.itensConfigs;
    var constructIcon       = this.constructIcon(); 
    async function hipotesis2() { 
        await defineOptions();
        async function defineOptions(){
            let itens = dataTablemi.itensBuilt;
            drpDwn  = itens['btnDrpDwn1'];
            let lis = drpDwn.getElementsByTagName('li');
            let dataSelected = document.getElementById('dataSelected').value;
            let States      = [wrkflw.AnaliseAssr, wrkflw.Ajustes, wrkflw.RealizaReuniao, wrkflw.ItemDescartado]
            let refEnabled  = [
                [wrkflw.AnaliseAssr],
                [wrkflw.Ajustes, ,wrkflw.AnaliseAssr, wrkflw.RealizaReuniao, wrkflw.ItemDescartado, 19],
                [wrkflw.Ajustes, wrkflw.RealizaReuniao, wrkflw.ItemDescartado, 19],
                [wrkflw.Ajustes, wrkflw.RealizaReuniao, wrkflw.ItemDescartado, 19],
            ] 
            let cntrts          = DatasetFactory.createConstraint("txt_NumProcess", dataSelected, dataSelected, ConstraintType.MUST); 
            let itenPauta       = DatasetFactory.getDataset('Pauta DIREX', null, new Array(cntrts), null).values[0];
            if(itenPauta['hdn_aprvAssr'] != null || itenPauta['hdn_aprvAssr'] != undefined){
                let assrAp = itenPauta['hdn_aprvAssr'];
                for(let k = 0; k < lis.length; k++){ 
                    if(lis[k].hasAttribute("hidden")){
                        lis[k].removeAttribute("hidden");
                    }
                }
                if(assrAp == wrkflw.DespachoDeliber){
                    drpDwnIn = itens['btnDrpDwn1'];
                    drpDwnIn.getElementsByTagName('button')[0].disabled = true
                }
                for(let i = 0; i < States.length; i++){
                    if(States[i] == assrAp){
                        let itns = refEnabled[i];
                        for(let l = 0; l < lis.length; l++){
                            for(let j = 0; j < itns.length; j++){
                                if(itns[j] == lis[l].value){
                                    lis[l].hidden = 'true';
                                }
                            }
                        }
                        
                    }
                }
                console.log('**************************************************************************************************')
                //console.log(myAlertAll)
                //myAlertAll.fixedMoviment(myAlertAll.validate())  
                window.res['numIndx'] = 2;
                window.res['arrIndx'].push('1');
                await orderMethodsMi.indexFunctionsX(); 
            }
        }
    }
               
    let itenBuitFunc = {
        fnc: [
                {'fncName': 'moveItem'},
                {'fncName': 'moveItemDelibr'},
                {'fncName': 'refreshTable'},
                {'fncName': 'moveItemAprov'},
                {'fncName': 'moveItemReprov'},
                {'fncName': 'novaPauta'}
        ],
        novaPauta: function () {
            document.getElementById('btn3').children[0].addEventListener('click', async function () {
                document.getElementById('envPauta').disabled = false
                txt_assunto_addPauta                    = document.getElementById('txt_assunto_addPauta')
                txt_Justificativa_addPauta              = document.getElementById('txt_Justificativa_addPauta')
                txt_assunto_addPauta.value              = ''
                txt_Justificativa_addPauta.value        = ''
                myEditor.setDataInput(txt_Justificativa_addPauta)
                arrInpsEnvPauta = [txt_assunto_addPauta, txt_Justificativa_addPauta]
                objFieldsNew.cleanValidatefeedback(arrInpsEnvPauta)
            });
            document.getElementById('envPauta').onclick = async function () {
                objBodyreq = {}
                myEditor.setDataInputsParams()
                txt_assunto_addPauta                    = document.getElementById('txt_assunto_addPauta')
                txt_Justificativa_addPauta              = document.getElementById('txt_Justificativa_addPauta')
                arrInpsEnvPauta = [txt_assunto_addPauta, txt_Justificativa_addPauta]
                objFieldsNew.cleanValidatefeedback(arrInpsEnvPauta)
                snlCkenvPauta = 0
                arrValid = []
                for(let i = 0; i < arrInpsEnvPauta.length; i++){
                    if(arrInpsEnvPauta[i].value == null || arrInpsEnvPauta[i].value == undefined || arrInpsEnvPauta[i].value == '' || arrInpsEnvPauta[i].value == '<html>\n<head>\n\t<title></title>\n</head>\n<body></body>\n</html>\n'){
                        arrValid.push(arrInpsEnvPauta[i])
                        snlCkenvPauta++
                    }
                }
                if(snlCkenvPauta == 0){
                    let hdn_dir_vinc = ''
                    let zm_unidade   = ''
                    if(matDirIn == 'DIRAF'){ 
                       hdn_dir_vinc = 'Pool:Role:'+matDirIn;
                        zm_unidade  = 'Diretoria Administrativa Financeira'
                    }else if(matDirIn == 'DISUP'){
                        hdn_dir_vinc = 'Pool:Role:'+matDirIn;
                        zm_unidade  = 'Diretoria Superintendência'
                    }else if(matDirIn == 'DITEC'){
                        hdn_dir_vinc = 'Pool:Role:'+matDirIn;
                        zm_unidade  = 'Diretoria Técnica'
                    }
                    dtIntg = new Date()
                    objBodyreq['dt_DataSolicita']           = dtIntg.toLocaleDateString() +' '+dtIntg.toLocaleTimeString(); 
                    objBodyreq['dataSelected']              = objDefineStatus.dataSelectedFormat
                    objBodyreq['txt_resultAnalis']          = '2'
                    objBodyreq['hdn_dir_vinc']              = hdn_dir_vinc
                    objBodyreq['zm_UnidadeSolicitante']     = zm_unidade
                    objBodyreq['user']                      = objDefineStatus.mat
                    objBodyreq['user']                      = objDefineStatus.mat
                    objBodyreq['txt_titulo']                = txt_assunto_addPauta.value;
                    objBodyreq['txt_Justificativa']         = txt_Justificativa_addPauta.value;
                    objBodyreq['txt_Deliberacao']           = txt_Justificativa_addPauta.value
                    console.log(objBodyreq)
                    objGetReturn            = {}
                    objGetReturn['name']    = ['a', 'b'];
                    objGetReturn['a']       = '';
                    objGetReturn['b']       = '';
                    await orderMethodsMi.createNewPauta(objBodyreq, objGetReturn);
                    console.log(objGetReturn)
                    let stts = ''
                    if(objGetReturn['b'] != ''){
                        stts = objGetReturn['a'].status
                        if(stts != 200 ){
                            itensTools.myToast('danger', 'Não foi possível inserir o item!');
                        }
                    }else{
                        document.getElementById('envPauta').disabled = true
                        itensTools.myToast('success', 'Item inserido com sucesso');   
                        document.getElementById('btn2').getElementsByTagName('button')[0].click() 
                    }
                }else{
                    objFieldsNew.setInvalidfeedback(arrValid)
                }
            }
        },
        moveItem: async function () {
            drpDwn  = itens['btnDrpDwn1'];
            document.getElementById('envAjust').onclick = async function () {
                JustfDevolv                  = document.getElementById('JustfDevolv')
                let arrf = [JustfDevolv]
                objFieldsNew.cleanValidatefeedback(JustfDevolv)
                if(JustfDevolv.value != null && JustfDevolv.value != '' && JustfDevolv.value != undefined){
                    let AjusteAssr = document.getElementById('AjusteAssr')
                    await dataTablemi.opsMoveAssessorias(AjusteAssr); await hipotesis2();
                    justfExec                   = document.getElementById('justfExec')
                    justfConcl                  = document.getElementById('justfConcl')
                    justfExec.style.display     = 'none'
                    justfConcl.style.display    = 'block'
                    this.style.display          = 'none'
                }else{
                    objFieldsNew.setInvalidfeedback(arrf)
                }
            }
            document.getElementById('AjusteAssr').addEventListener('click', async function () {
                justfExec                   = document.getElementById('justfExec')
                justfConcl                  = document.getElementById('justfConcl')
                JustfDevolv                 = document.getElementById('JustfDevolv')
                envAjust                    = document.getElementById('envAjust')
                let arrf = [JustfDevolv]
                objFieldsNew.cleanValidatefeedback(arrf)
                envAjust.style.display      = 'block'    
                JustfDevolv.value           = ''
                justfExec.style.display     = 'block'
                justfConcl.style.display    = 'none'
                this.style.display          = 'block'
            })
            let lis = drpDwn.getElementsByTagName('li');
            for(let i = 0; i < lis.length; i++){
                let liNow = lis[i];
                if(liNow.id && liNow.id != 'AprovarAssr' && liNow.id != 'ReprovarAssr' && liNow.id != 'AjusteAssr'){
                    await liNow.addEventListener('click', async function() { await dataTablemi.opsMoveAssessorias(this); await hipotesis2(); }); /******************************** */
                }
            }
        },moveItemReprov: function () {
            drpDwn  = itens['btnDrpDwn1'];
            let lis = drpDwn.getElementsByTagName('li')
            for(let i = 0; i < lis.length; i++){
                let liNow = lis[i];
                console.log(liNow)
                if(liNow.id == 'ReprovarAssr'){
                    liNow.addEventListener('click', async function() { await ReprovarAssrDefinition(); await hipotesis2();})
                    break
                }
            }
            async function ReprovarAssrDefinition(){
                let nameIten        = 'dataSelected'
                statusNext          = wrkflw.DespachoDeliber;
                inpsPanel           = document.getElementsByClassName('inpDlbr')
                let it              = dataTablemi.itensBuilt[nameIten];
                inp                 = it.getElementsByTagName('input')[0];
                inpValue            = inp.value;  
                let cntrts          = DatasetFactory.createConstraint("txt_NumProcess", inpValue, inpValue, ConstraintType.MUST); 
                let itenPauta       = DatasetFactory.getDataset('Pauta DIREX', null, new Array(cntrts), null).values[0];
                let statusAssr      = itenPauta['hdn_aprvAssr'];

                myEditor.setDataInputsParams()
                Justf = inpsPanel['txt_Justificativa'].value; 
                resultAnalis = 1; 
                demandRsp = inpsPanel['slc_demandante'].value; 
                //arrNamesInp = ['txt_Justificativa'];
                Delibr  = inpsPanel['txt_Deliberacao'].value;
                
                arrNamesInp = ['txt_Deliberacao', 'txt_Justificativa', 'slc_demandante'];
                ckY = 0
                for(y = 0; y < inpsPanel.length; y++){
                    inpNow = inpsPanel[y];
                    console.log(inpNow)
                    for(z = 0; z < arrNamesInp.length; z++){
                        if(inpNow.id == arrNamesInp[z]){
                            if(inpNow.value == '' || inpNow.value == 0 || inpNow.value == '<html>\n<head>\n\t<title></title>\n</head>\n<body></body>\n</html>\n'){
                                ckY++
                                console.log(ckY)
                            }
                        }
                    }
                }

                //for(i = 0; i < inpsPanel.length; i++){
                    //inpNow = inpsPanel[arrNamesInp[i]]
                    //if(inpNow != undefined){
                        //if(inpNow.value != '' && inpNow.value != 0){
                            if(ckY == 0 && statusNext != statusAssr){          
                                await dataTablemi.APImethods.movePOST(inpValue, statusNext, Delibr, Justf, '', '', resultAnalis, demandRsp,'', '');  // < -------------------- modificado
                                //var intervmoveItemReprov = setInterval(defineStatusReprovAssessor, 100); 
                                await defineStatusReprovAssessor()
                            }else{ itensTools.myToast('info', 'É necessário preencher os campos obrigatórios!'); }
                        //}
                    //}
                //}                

                async function defineStatusReprovAssessor () { 
                    let colItens        = dataTablemi.TableFluig().getCol('Aprov.Assessoria');
                    let colValue        = dataTablemi.TableFluig().getCol('N° Solicitação');
                    var itenBtn1 = dataTablemi.itensBuilt['btn1'];     
                  
                    let cntrts          = DatasetFactory.createConstraint("txt_NumProcess", inpValue, inpValue, ConstraintType.MUST); 
                    let itenPauta       = DatasetFactory.getDataset('Pauta DIREX', null, new Array(cntrts), null).values[0];
                    let stateNow        = itenPauta['hdn_aprvAssr'];

                    if(stateNow == statusNext){
                        var colItem = 0;
                        for(let i = 0; i < colValue.length; i++){
                            if(inpValue == colValue[i].innerText){
                                colItem = colItens[i]
                            }
                        } 
                        console.log(stateNow);
                        if(stateNow == wrkflw.DespachoDeliber){  
                            colItem.innerHTML = ''
                            iconThis = objHandleIcons["ReprovarAssr"]
                            iconThis = iconThis.replace('sm', 'md')
                            let icon       = constructIcon.construct(iconThis);//'fluigicon fluigicon-fileedit icon-md'
                            //let icon = dataTablemi.constructIcon().construct('flaticon flaticon-file-check icon-md');
                            colItem.appendChild(icon);
                            let icn                 = colItem.innerHTML;                                     //Descrição
                            icn                     = icn +' <b>Reprovado</b>';
                            colItem.innerHTML       = icn;
                            dataTablemi.resAPI = {};
                            window.res['arrIndx'].push('1');
                            orderMethodsMi.indexFunctionsX();
                            itensTools.myToast('success', 'Ação realizada com sucesso!');
                            let inps = document.getElementsByClassName('inpDlbr')
                            arrNamesIt = ['slc_DISUP_vt', 'slc_UCOF_vt', 'slc_DITEC_vt', 'slc_demandante', 'txt_obsDlbrDIRAF', 'txt_obsDlbrDITEC', 'txt_obsDlbrDISUP',]
                            document.getElementById('Delibr').style.display = 'block';
                            itenBtn1.getElementsByTagName('button')[0].disabled = true;
                            for(let i = 0; i < inps.length; i++){
                                var nowInp = inps[arrNamesIt[i]];
                                if(nowInp != undefined){
                                    nowInp.value = '';
                                    nowInp.disabled = true;
                                }
                            } 
                            for(let i = 0; i < dataTablemi.funcsChange.Name.length; i++){
                                let name 		= dataTablemi.funcsChange.Name[i];
                                if(dataTablemi.funcsChange.Name[i] == 'a'){
                                    dataTablemi.funcsChange[name](1);
                                }else{
                                    dataTablemi.funcsChange[name]();
                                }
                            }
                            //console.log(intervmoveItemReprov)
                            console.log(myEditor)
                            myEditor.setDataInput(document.getElementById('txt_Justificativa'))
                            myEditor.disabledEditor(document.getElementById('txt_Justificativa'))
                            myEditor.setDataInput(document.getElementById('txt_Deliberacao'))
                            myEditor.disabledEditor(document.getElementById('txt_Deliberacao'))
                            myEditor.setDataInput(document.getElementById('txt_obsDlbrDIRAF'))
                            myEditor.setDataInput(document.getElementById('txt_obsDlbrDITEC'))
                            myEditor.disabledEditor(document.getElementById('txt_obsDlbrDITEC'))
                            myEditor.setDataInput(document.getElementById('txt_obsDlbrDISUP'))
                            myEditor.disabledEditor(document.getElementById('txt_obsDlbrDISUP'))
                            
                            window["zm_emailsCopia"].disable(true)              // < ------------------- adicionado

                            //clearInterval(intervmoveItemReprov)
                        }
                        else{ itensTools.myToast('danger', 'Erro ao tentar realizar ação!'); }
                    }
                }
            }
        },moveItemAprov: function () {
            drpDwn  = itens['btnDrpDwn1'];
            let lis = drpDwn.getElementsByTagName('li')
            for(let i = 0; i < lis.length; i++){
                let liNow = lis[i];
                if(liNow.id == 'AprovarAssr'){
                    liNow.addEventListener('click', async function() { await AprovarAssrDefinition(); await hipotesis2();})
                    break
                }
            }
            async function AprovarAssrDefinition(){
                let nameIten        = 'dataSelected'
                statusNext          = wrkflw.RealizaReuniao;
                inpsPanel           = document.getElementsByClassName('inpDlbr')
                let it              = dataTablemi.itensBuilt[nameIten];
                inp                 = it.getElementsByTagName('input')[0];
                inpValue            = inp.value;  
                let cntrts          = DatasetFactory.createConstraint("txt_NumProcess", inpValue, inpValue, ConstraintType.MUST); 
                let itenPauta       = DatasetFactory.getDataset('Pauta DIREX', null, new Array(cntrts), null).values[0];
                let statusAssr      = itenPauta['hdn_aprvAssr'];

                myEditor.setDataInputsParams()
                Justf = inpsPanel['txt_Justificativa'].value; 
                resultAnalis = 2; 
                demandRsp = inpsPanel['slc_demandante'].value; 
                //arrNamesInp = ['txt_Justificativa'];
                Delibr  = inpsPanel['txt_Deliberacao'].value;
                
                arrNamesInp = ['txt_Deliberacao', 'txt_Justificativa', 'slc_demandante'];
                ckY = 0
                for(y = 0; y < inpsPanel.length; y++){
                    inpNow = inpsPanel[y];
                    console.log(inpNow)
                    for(z = 0; z < arrNamesInp.length; z++){
                        if(inpNow.id == arrNamesInp[z]){
                            if(inpNow.value == '' || inpNow.value == 0 || inpNow.value == '<html>\n<head>\n\t<title></title>\n</head>\n<body></body>\n</html>\n'){
                                ckY++
                                console.log(ckY)
                            }
                        }
                    }
                }
                //for(i = 0; i < inpsPanel.length; i++){
                    //inpNow = inpsPanel[arrNamesInp[i]]
                    //if(inpNow != undefined){
                        //if(inpNow.value != '' && inpNow.value != 0){
                            if(ckY == 0 &&statusNext != statusAssr){           
                                await dataTablemi.APImethods.movePOST(inpValue, statusNext, Delibr, Justf, '', '', resultAnalis, demandRsp, '', '');  // < -------------------- modificado
                                //var intervmoveItemAprov = setInterval(defineStatusDelibrAprov, 100); 
                                await defineStatusDelibrAprov()
                            }else{ itensTools.myToast('info', 'É necessário preencher os campos obrigatórios!'); }
                        //}
                    //}
                //}         
                
                async function defineStatusDelibrAprov () { 
                    let colItens        = dataTablemi.TableFluig().getCol('Aprov.Assessoria');
                    let colValue        = dataTablemi.TableFluig().getCol('N° Solicitação');
                    var itenBtn1        = dataTablemi.itensBuilt['btn1'];
                  
                    let cntrts          = DatasetFactory.createConstraint("txt_NumProcess", inpValue, inpValue, ConstraintType.MUST); 
                    let itenPauta       = DatasetFactory.getDataset('Pauta DIREX', null, new Array(cntrts), null).values[0];
                    let stateNow      = itenPauta['hdn_aprvAssr'];

                    if(stateNow == statusNext){
                        var colItem = 0;
                        for(let i = 0; i < colValue.length; i++){
                            if(inpValue == colValue[i].innerText){
                                colItem = colItens[i]
                            }
                        } 
                        console.log(stateNow);
                        if(stateNow == wrkflw.RealizaReuniao){  
                            colItem.innerHTML = ''
                            let icon = dataTablemi.constructIcon().construct('flaticon flaticon-file-check icon-md');
                            colItem.appendChild(icon);
                            let icn             = colItem.innerHTML;                                     //Descrição
                            icn                 = icn +' <b>Aprovado</b>';
                            colItem.innerHTML    = icn;
                            dataTablemi.resAPI = {};
                            window.res['arrIndx'].push('1');
                            orderMethodsMi.indexFunctionsX();
                            itensTools.myToast('success', 'Ação realizada com sucesso!');
                            let inps = document.getElementsByClassName('inpDlbr')
                            arrNamesIt = ['slc_DISUP_vt', 'slc_UCOF_vt', 'slc_DITEC_vt', 'txt_obsDlbrDIRAF', 'txt_obsDlbrDITEC', 'txt_obsDlbrDISUP',] //'txt_Deliberacao',
                            document.getElementById('Delibr').style.display = 'block';
                            itenBtn1.getElementsByTagName('button')[0].disabled = false;
                            for(let i = 0; i < inps.length; i++){
                                var nowInp = inps[arrNamesIt[i]];
                                if(nowInp != undefined){
                                    nowInp.value = '';
                                    nowInp.disabled = false;
                                }
                            } 
                            for(let i = 0; i < dataTablemi.funcsChange.Name.length; i++){
                                let name 		= dataTablemi.funcsChange.Name[i];
                                if(dataTablemi.funcsChange.Name[i] == 'a'){
                                    dataTablemi.funcsChange[name](0);
                                }else{
                                    dataTablemi.funcsChange[name]();
                                }
                            }
                            //console.log(intervmoveItemAprov)
                            console.log(myEditor)
                            myEditor.cleanEditor(document.getElementById('txt_Justificativa'))
                            myEditor.setDataInput(document.getElementById('txt_Justificativa'))
                            myEditor.cleanEditor(document.getElementById('txt_Deliberacao'))
                            myEditor.setDataInput(document.getElementById('txt_Deliberacao'))

                            myEditor.cleanEditor(document.getElementById('txt_obsDlbrDIRAF'))
                            myEditor.setDataInput(document.getElementById('txt_obsDlbrDIRAF'))
                            myEditor.cleanEditor(document.getElementById('txt_obsDlbrDITEC'))
                            myEditor.setDataInput(document.getElementById('txt_obsDlbrDITEC'))
                            myEditor.cleanEditor(document.getElementById('txt_obsDlbrDISUP'))
                            myEditor.setDataInput(document.getElementById('txt_obsDlbrDISUP'))
                            
                            window["zm_emailsCopia"].disable(false)              // < ------------------- adicionado

                            //clearInterval(intervmoveItemAprov)
                        }
                        else{ itensTools.myToast('danger', 'Erro ao tentar realizar ação!'); }
                    }
                }
            }
        },moveItemDelibr: function () {
            btn             = itens['btn1'];
            btn.getElementsByTagName('button')[0].addEventListener('click', async function() { await moveDelibrDefinition(); await hipotesis2();});
            console.log(btn)
            //btn.addEventListener('click', async function() { await moveDelibrDefinition(); await hipotesis2();}); 
            async function moveDelibrDefinition(){
                let nameIten    = 'dataSelected'
                statusDelibr    = wrkflw.DespachoDeliber;
                ckX             = 0
                inpsPanel       = document.getElementsByClassName('inpDlbr')
                let it = dataTablemi.itensBuilt[nameIten];
                inp = it.getElementsByTagName('input')[0];
                inpValue = inp.value;  
                let cntrts          = DatasetFactory.createConstraint("txt_NumProcess", inpValue, inpValue, ConstraintType.MUST); 
                let itenPauta       = DatasetFactory.getDataset('Pauta DIREX', null, new Array(cntrts), null).values[0];
                let statusAssr      = itenPauta['hdn_aprvAssr'];

                myEditor.setDataInputsParams()
                resultAnalis = 2;
                tituloRN = document.getElementById('txt_tituloReuniao').value
                dtRN = document.getElementById('dt_dataInicio').value
                dtRN = dtRN.split('-')
                dtRN = dtRN[2]+"/"+dtRN[1]+"/"+dtRN[0]
                DISUP = inpsPanel['slc_DISUP_vt'].value;
                DIRAF = inpsPanel['slc_UCOF_vt'].value;
                DITEC = inpsPanel['slc_DITEC_vt'].value;
                votesThisItnNow = {
                    DISUP: DISUP,
                    DIRAF: DIRAF,
                    DITEC: DITEC
                }
                // <<<< --------------------------------------------------------------------- Adicionado. Parte para definir resultado deliberação para o email
                var resultadoDelbr = ''
                arrVts = [DIRAF, DISUP, DITEC]
                vt1 = 0;
                vt2 = 0;
                arrDefnDirAprv = []
                arrDefnDirReprov = []
                if(DIRAF == 1 && DISUP == 1 && DITEC == 1){ resultadoDelbr = 'Aprovado por unanimidade.' }
                else if(DIRAF == 2 && DISUP == 2 && DITEC == 2){ resultadoDelbr = 'Reprovado por unanimidade.' }
                else{
                    for(t = 0; t < arrVts.length; t++){
                        ckVt = arrVts[t]
                        if(ckVt == 1){
                            vt1++
                            arrDefnDirAprv.push(t)
                        }else{ 
                            vt2++ 
                            arrDefnDirReprov.push(t)
                        }
                    }
                    if(vt1 > vt2){ 
                        var arrDefDirN = [];
                        reprovDefDir = arrDefnDirAprv[0]
                        for(t = 0; t < arrDefnDirAprv.length; t++){

                            if(arrDefnDirReprov[t] == 0){ reprovDefDir = 'DIRAF' };
                            if(arrDefnDirReprov[t] == 1){ reprovDefDir = 'DISUP' };
                            if(arrDefnDirReprov[t] == 2){ reprovDefDir = 'DITEC' };

                            if(arrDefnDirAprv[t] == 0) {        arrDefDirN.push('DIRAF') }
                            else if(arrDefnDirAprv[t] == 1) {   arrDefDirN.push('DISUP') }
                            if(arrDefnDirAprv[t] == 2 ){        arrDefDirN.push('DITEC') }
                                    
                        }
                        resultadoDelbr = 'Aprovado por '+arrDefDirN[0]+' e '+arrDefDirN[1]+' e reprovado por '+reprovDefDir;
                    }
                    else if (vt1 < vt2) { 
                        var arrDefDirN = [];
                        aprvDefDir = ''
                        for(t = 0; t < arrDefnDirReprov.length; t++){

                            if(arrDefnDirAprv[t] == 0){ aprvDefDir = 'DIRAF' };
                            if(arrDefnDirAprv[t] == 1){ aprvDefDir = 'DISUP' };
                            if(arrDefnDirAprv[t] == 2){ aprvDefDir = 'DITEC' };

                            if(arrDefnDirReprov[t] == 0) {        arrDefDirN.push('DIRAF') }
                            else if(arrDefnDirReprov[t] == 1) {   arrDefDirN.push('DISUP') }
                            if(arrDefnDirReprov[t] == 2 ){        arrDefDirN.push('DITEC') }
                                    
                        }
                        resultadoDelbr = 'Reprovado por '+arrDefDirN[0]+' e '+arrDefDirN[1]+' e aprovado por '+aprvDefDir;
                    }
                }
                // <<<< --------------------------------------------------------------------- Adicionado. Parte para definir resultado deliberação para o email
                demandRsp = inpsPanel['slc_demandante'].value; 
                Delibr  = inpsPanel['txt_Deliberacao'].value;
                Justf   = inpsPanel['txt_Justificativa'].value;
                obsDISUP = inpsPanel['txt_obsDlbrDISUP'].value;
                obsDIRAF = inpsPanel['txt_obsDlbrDIRAF'].value;
                obsDITEC = inpsPanel['txt_obsDlbrDITEC'].value;
                obsThisItnNow = {
                    DISUP: obsDISUP,
                    DIRAF: obsDIRAF,
                    DITEC: obsDITEC
                }
                var usersForEmail = ''
                console.log(window["zm_emailsCopia"])
                arrUserEmails = window["zm_emailsCopia"].getSelectedItems()              // < ------------------- adicionado
                console.log(arrUserEmails)
                for(forE = 0; forE <  arrUserEmails.length; forE++){
                    if(forE == 0){ usersForEmail += arrUserEmails[forE]; }
                    else{ usersForEmail += ',' + arrUserEmails[forE];}
                }
                console.log(usersForEmail)
                arrNamesInp = ['slc_demandante', 'slc_DISUP_vt', 'slc_UCOF_vt', 'slc_DITEC_vt', 'txt_Deliberacao', 'txt_Justificativa'];
                ckY = 0
                for(y = 0; y < inpsPanel.length; y++){
                    inpNow = inpsPanel[y];
                    console.log(inpNow)
                    for(z = 0; z < arrNamesInp.length; z++){
                        if(inpNow.id == arrNamesInp[z]){
                            if(inpNow.value == '' || inpNow.value == 0 || inpNow.value == '<html>\n<head>\n\t<title></title>\n</head>\n<body></body>\n</html>\n'){
                                ckY++
                                console.log(ckY)
                            }
                        }
                    }
                }
                await checkChanges(event, 1)
                let ckSt        = objCkForDelbr['status']         // <------- status de checagem de alterações, caso exista o valor será 1, se não valor igual a 0
                let nSolicts    = objCkForDelbr['nSolict']        // <------- Número das solicitações modificadas
                sinalStop       = 0
                if(ckSt == 1){
                    if(nSolicts.length > 1){
                        for(let x of nSolicts){
                            console.log(x)
                            sinalStop = (inpValue == x) ? 1 : 0;
                        }
                    }else{ sinalStop = (inpValue == nSolicts[0]) ? 1 : 0; }
                }
                if(sinalStop != 1){                                 // <------- Garante que não está tentando fazer uma movimentação em um item já movimentado e modificação por outro usuário 
                    for(i = 0; i < inpsPanel.length; i++){
                        inpNow = inpsPanel[arrNamesInp[i]]
                        if(inpNow != undefined){
                            if(ckY == 0 && statusDelibr != statusAssr){    
                                await dataTablemi.APImethods.movePOST(inpValue, statusDelibr, Delibr, Justf, votesThisItnNow, obsThisItnNow, resultAnalis, demandRsp, usersForEmail, '');  // < -------------------- modificado 
                                for(emailIn = 0; emailIn < arrUserEmails.length; emailIn++){                                                                                            // < -------------------- modificado 
                                    dataTablemi.APImethods.emailSend(arrUserEmails[emailIn], Delibr, tituloRN, dtRN, resultadoDelbr, obsDISUP, obsDIRAF, obsDITEC) 
                                    login = arrUserEmails[emailIn]
                                    login = login.split('@')[0]
                                    console.log(login)
                                    dataTablemi.APImethods.sendNotification('', login, tituloRN, inpValue)
                                }                                                                                                 
                                //var intervmoveItemDelibr = setInterval(defineStatusDelibr, 200);
                                await defineStatusDelibr()
                                //console.log(intervmoveItemDelibr)
                            }else{ itensTools.myToast('info', 'É necessário preencher todos os campos de Deliberação!'); break; }
                        }                
                    }
                }else{ 
                    document.getElementById('btn2').getElementsByTagName('button')[0].click()           // <------- Caso tenha sido movimentado por outro usuário atualiza com as novas informações
                }
                objCkForDelbr['status'] = 0
                objCkForDelbr['nSolict'] = []
                async function defineStatusDelibr () { 
                    let colItens = dataTablemi.TableFluig().getCol('Aprov.Assessoria');
                    let colValue = dataTablemi.TableFluig().getCol('N° Solicitação');
                    var itenBtn1 = dataTablemi.itensBuilt['btn1'];

                    let cntrts          = DatasetFactory.createConstraint("txt_NumProcess", inpValue, inpValue, ConstraintType.MUST); 
                    let itenPauta       = DatasetFactory.getDataset('Pauta DIREX', null, new Array(cntrts), null).values[0];
                    let stateNow        = itenPauta['hdn_aprvAssr'];
                    console.log(ckX)
                    if(ckX != 3){ ckX++ }
                    //else{ clearInterval(intervmoveItemDelibr) }
                    if(stateNow == statusDelibr){
                        for(let i = 0; i < colValue.length; i++){
                            if(inpValue == colValue[i].innerText){
                                colItem = colItens[i]
                            }
                        } 
                        console.log(stateNow);
                        if(stateNow == wrkflw.DespachoDeliber){  
                            colItem.innerHTML = ''
                            let icon = dataTablemi.constructIcon().construct('fluigicon fluigicon-checked icon-md');
                            colItem.appendChild(icon);
                            let icn             = colItem.innerHTML;                                     //Descrição
                            icn                 = icn +' <b>Deliberado</b>';
                            colItem.innerHTML   = icn;
                            dataTablemi.resAPI  = {};
                            let inps = document.getElementsByClassName('inpDlbr')
                            arrNamesIt = ['slc_DISUP_vt', 'slc_UCOF_vt', 'slc_DITEC_vt', 'txt_Deliberacao', 'txt_Justificativa', 'slc_demandante']
                            document.getElementById('Delibr').style.display = 'block';
                            itenBtn1.getElementsByTagName('button')[0].disabled = true;
                            for(let i = 0; i < inps.length; i++){
                                var nowInp = inps[arrNamesIt[i]];
                                if(nowInp != undefined){
                                    let nowInp = inps[arrNamesIt[i]];
                                    nowInp.disabled = true;
                                }
                            } 
                            for(let i = 0; i < dataTablemi.funcsChange.Name.length; i++){
                                let name 		= dataTablemi.funcsChange.Name[i];
                                if(dataTablemi.funcsChange.Name[i] == 'a'){
                                    dataTablemi.funcsChange[name](1);
                                }else{
                                    dataTablemi.funcsChange[name]();
                                }
                            }
                            window.res['numIndx'] = 1;
                            window.res['arrIndx'].push('1');
                            await orderMethodsMi.indexFunctionsX();
                            itensTools.myToast('success', 'Ação realizada com sucesso!');
                            /*console.log('*************************** succs')
                            console.log(intervmoveItemDelibr)
                            console.log(myEditor)
                            */
                            myEditor.setDataInput(document.getElementById('txt_Justificativa'))
                            myEditor.disabledEditor(document.getElementById('txt_Justificativa'))
                            myEditor.setDataInput(document.getElementById('txt_Deliberacao'))
                            myEditor.disabledEditor(document.getElementById('txt_Deliberacao'))

                            myEditor.setDataInput(document.getElementById('txt_obsDlbrDIRAF'))
                            myEditor.disabledEditor(document.getElementById('txt_obsDlbrDIRAF'))
                            myEditor.setDataInput(document.getElementById('txt_obsDlbrDITEC'))
                            myEditor.disabledEditor(document.getElementById('txt_obsDlbrDITEC'))
                            myEditor.setDataInput(document.getElementById('txt_obsDlbrDISUP'))
                            myEditor.disabledEditor(document.getElementById('txt_obsDlbrDISUP'))
                            //clearInterval(intervmoveItemDelibr)

                            window["zm_emailsCopia"].disable(true)              // < ------------------- adicionado
                        }
                        //else{ clearInterval(intervmoveItemDelibr) }
                    }
                }
            }
        }, refreshTable: function () {
            btn             = itens['btn2'];
            console.log(btn)
            btn.getElementsByTagName('button')[0].disabled = false
            btn.getElementsByTagName('button')[0].addEventListener('click', function() { 
                console.log(dataTablemi)
                let myTable     = dataTablemi.tableReference.myTable;
                let c1          = DatasetFactory.createConstraint("hdn_dir_vinc", objDefineStatus.matDir, objDefineStatus.matDir, ConstraintType.MUST, true);
                let dtIn        = DatasetFactory.getDataset('Pauta DIREX', null, new Array(c1), null).values //dataTablemi.tableReference.dataInit;
                let objFuncIn   = dataTablemi.tableReference.objFunc;
                dataTablemi.tableReference.objData.objItnsDef  = {    
                    arrItens        : [],
                    arrItensAll     : [],
                    markItensAll    : 0,
                    pageAtual       : -1,
                    indIten         : -1,
                    indItenB        : -1
                };//dataTablemi.tableReference.objData;
                /*dataTablemi.tableReference.definePage(objItnsDef, 1,  dtIn);
                dataTablemi.tableReference.reload(myTable, dataTablemi.tableReference.objData.arrItens, objFuncIn); 
                */
                dataTablemi.tableReference.defineItensValid(dtIn)
                dataTablemi.tableReference.opsNav(null, myTable, objFuncIn);

                //myAlertAll.fixedMoviment(myAlertAll.validate())  
                
            }); 
        }
    }
    if(itenBuitFunc != '' && itenBuitFunc != null && itenBuitFunc != undefined){
        for(let i = 0; i < itenBuitFunc.fnc.length; i++){
            let name 		= itenBuitFunc.fnc[i].fncName;
            itenBuitFunc[name]();
        }
    }
}
dataTableConfig.prototype.setitensBuilt = function (item, name) {
    this.itensBuilt.name.push(name);
    this.itensBuilt[name] = item;
    return this.itensBuilt
}
dataTableConfig.prototype.TableFluig = function () {
    TableFluig = {}
    var table       = document.getElementById('target');
    var head        = table.getElementsByTagName('thead')[0].rows[0].cells;
    var tbody       = table.getElementsByTagName('tbody')[0];  
    var rows        = tbody.rows;  
    var headNames = []
    for(i = 0; i < head.length; i++){
        headNames[i] = head[i].innerText;
    }

    TableFluig = {
        table:  table,
        head:   head,
        tbody:  tbody,
        rows:   rows,
        getCol: function (columName){
            var col = []
            var pos = 0
            for(i = 0; i < headNames.length; i++){
                if(headNames[i] == columName){
                    pos = i;
                }
            }
            for(j = 0; j < this.rows.length; j++){
                var cells = this.rows[j].cells;
                cell = cells[pos]
                col[j] = cell 
            }
            return col
        }
    };

    return TableFluig
}
dataTableConfig.prototype.statusAsr = async function () {
    var TableFluig          = this.TableFluig();
    var constructIcon       = this.constructIcon(); 
    let wrkflw              = this.statesWorkflow
    console.log('dataTableConfig.prototype.statusAsr = async function () { *******-----------------------------------------------------------------------------^^')
    await pushStatusAsr()
    async function pushStatusAsr(){
        let col         = TableFluig.getCol('Aprov.Assessoria');
        let colNumSol   = TableFluig.getCol('Solicitação');
        console.log(colNumSol[0])
        for(let i = 0; i < col.length; i++){
            col[i].innerHTML = '';
            if(colNumSol[i].children[0] != undefined){
                var numSlct     = colNumSol[i].children[0].innerText;
            }
            let cntrts          = DatasetFactory.createConstraint("txt_NumProcess", numSlct, numSlct, ConstraintType.MUST); 
            let itenPauta       = DatasetFactory.getDataset('Pauta DIREX', null, new Array(cntrts), null).values[0];
            if(itenPauta['hdn_aprvAssr'] != null || itenPauta['hdn_aprvAssr'] != undefined){
                console.log(itenPauta)
                let assrAp = itenPauta['hdn_aprvAssr'];
                let resAnalis = itenPauta['txt_resultAnalis'];              // <---- Campo resultado da Analise assessoria defini o Se foi para status 19 devido Deliberação ou devido Reprovação 
                console.log(resAnalis)
                if(assrAp == wrkflw.RealizaReuniao){
                    iconThis = objHandleIcons["AprovarAssr"]
                    iconThis = iconThis.replace('sm', 'md')
                    let iconChecked     = constructIcon.construct(iconThis);//'flaticon flaticon-file-check icon-md'
                    col[i].appendChild(iconChecked);
                    let icn = col[i].innerHTML;                                     //Descrição
                    icn = icn +' <b>Aprovado</b>';
                    col[i].innerHTML = icn;
                }else if(assrAp == wrkflw.AnaliseAssr){
                    iconThis = objHandleIcons["ReverterAssr"]
                    iconThis = iconThis.replace('sm', 'md')
                    let iconEmpty       = constructIcon.construct(iconThis);//'fluigicon fluigicon-file-bell-empty icon-md'
                    col[i].appendChild(iconEmpty);
                    let icn = col[i].innerHTML;                                     //Descrição
                    icn = icn +' <b>Análise</b>';
                    col[i].innerHTML = icn;
                }else if(assrAp == wrkflw.ItemDescartado){
                    iconThis = objHandleIcons["ExcluirAssr"]
                    iconThis = iconThis.replace('sm', 'md')
                    let iconEmpty       = constructIcon.construct('fluigicon fluigicon-trash icon-md');
                    col[i].appendChild(iconEmpty);
                    let icn = col[i].innerHTML;                                     //Descrição
                    icn = icn +' <b>Excluído</b>';
                    col[i].innerHTML = icn;
                }else if(assrAp == wrkflw.Ajustes){
                    iconThis = objHandleIcons["AjusteAssr"]
                    iconThis = iconThis.replace('sm', 'md')
                    let iconEmpty       = constructIcon.construct(iconThis);//'fluigicon fluigicon-fileedit icon-md'
                    col[i].appendChild(iconEmpty);    
                    let icn = col[i].innerHTML;                                     //Descrição
                    icn = icn +' <b>Ajuste</b>';
                    col[i].innerHTML = icn;
                }
                else if(assrAp == wrkflw.DespachoDeliber && resAnalis == 2){
                    iconThis = objHandleIcons['btn1']
                    iconThis = iconThis.replace('sm', 'md')
                    let iconEmpty       = constructIcon.construct(iconThis);//'fluigicon fluigicon-checked icon-md'
                    col[i].appendChild(iconEmpty);    
                    let icn = col[i].innerHTML;                                     //Descrição
                    icn = icn +' <b>Deliberado</b>';
                    col[i].innerHTML = icn;
                }
                else if(assrAp == wrkflw.DespachoDeliber && resAnalis == 1){
                    iconThis = objHandleIcons["ReprovarAssr"]
                    iconThis = iconThis.replace('sm', 'md')
                    let iconEmpty       = constructIcon.construct(iconThis);//'flaticon flaticon-file-delete icon-md'
                    col[i].appendChild(iconEmpty);    
                    let icn = col[i].innerHTML;                                     //Descrição
                    icn = icn +' <b>Reprovado</b>';
                    col[i].innerHTML = icn;
                }

            }else{
                let iconEmpty       = constructIcon.construct('fluigicon fluigicon-file-bell-empty icon-md');
                col[i].appendChild(iconEmpty);
                let icn = col[i].innerHTML;                                     //Descrição
                icn = icn +' <b>Análise</b>';
            }
        } 
    }
}
dataTableConfig.prototype.opsMoveAssessorias = async function (elem){
    let nameIten        = 'dataSelected'
    inpsPanel           = document.getElementsByClassName('inpDlbr')
    let it              = this.itensBuilt[nameIten];
    var iten            = this.itensBuilt['btn1'];
    inp                 = it.getElementsByTagName('input')[0];
    inpValue            = inp.value;  
    let cntrts          = DatasetFactory.createConstraint("txt_NumProcess", inpValue, inpValue, ConstraintType.MUST); 
    let itenPauta       = DatasetFactory.getDataset('Pauta DIREX', null, new Array(cntrts), null).values[0];
    let statusAssr      = itenPauta['hdn_aprvAssr'];
    let resultAnalis    = 0;     
    demandRsp           = inpsPanel['slc_demandante'].value;     
    Justf               = inpsPanel['txt_Justificativa'].value; 
    Delibr              = inpsPanel['txt_Deliberacao'].value;
    JustfDevolv         = document.getElementById('JustfDevolv').value

    if(elem.value != statusAssr){     
        await this.APImethods.movePOST(inpValue, elem.value, Delibr, Justf, '', '', resultAnalis, demandRsp, '', JustfDevolv); /******** */ // < -------------------- modificado
        await defineStatus()
    }
    async function defineStatus () { 
        let colItens        = dataTablemi.TableFluig().getCol('Aprov.Assessoria');
        let colValue        = dataTablemi.TableFluig().getCol('N° Solicitação');
        let wrkflw          = dataTablemi.statesWorkflow;
        let constructIcon   = dataTablemi.constructIcon(); 
        let cntrts          = DatasetFactory.createConstraint("txt_NumProcess", inpValue, inpValue, ConstraintType.MUST); 
        let itenPauta       = DatasetFactory.getDataset('Pauta DIREX', null, new Array(cntrts), null).values[0];
        stateNow            = itenPauta['hdn_aprvAssr'];                                            
        if(stateNow == elem.value){
            var colItem = 0;
            for(let i = 0; i < colValue.length; i++){
                if(inpValue == colValue[i].innerText){
                    colItem = colItens[i]
                }
            } 
            console.log(stateNow);
            if(stateNow == wrkflw.AnaliseAssr){
                colItem.innerHTML = ''
                iconThis = objHandleIcons["ReverterAssr"]
                iconThis = iconThis.replace('sm', 'md')
                let icon = constructIcon.construct(iconThis);
                colItem.appendChild(icon);
                let icn             = colItem.innerHTML;                                     //Descrição
                icn                 = icn +' <b>Análise</b>';
                colItem.innerHTML    = icn;
                dataTablemi.resAPI = {};
                window.res['arrIndx'].push('1');
                orderMethodsMi.indexFunctionsX();
                itensTools.myToast('success', 'Ação realizada com sucesso!');

                let inps = document.getElementsByClassName('inpDlbr')
                arrNamesIt = ['slc_DISUP_vt', 'slc_UCOF_vt', 'slc_DITEC_vt', 'txt_obsDlbrDIRAF', 'txt_obsDlbrDITEC', 'txt_obsDlbrDISUP',] //'txt_Deliberacao'
                document.getElementById('Delibr').style.display = 'block';
                iten.getElementsByTagName('button')[0].disabled = true 
                for(let i = 0; i < inps.length; i++){
                    let nowInp = inps[arrNamesIt[i]];
                    if(nowInp != undefined){
                        nowInp.value = '';
                        nowInp.disabled = true;
                    }
                } 
                for(let i = 0; i < dataTablemi.funcsChange.Name.length; i++){
                    let name 		= dataTablemi.funcsChange.Name[i];
                    if(dataTablemi.funcsChange.Name[i] == 'a'){
                        dataTablemi.funcsChange[name](0);
                    }else{
                        dataTablemi.funcsChange[name]();
                    }
                }
                
                document.getElementById('txt_Justificativa').disabled = false
                console.log(myEditor)

                myEditor.cleanEditor(document.getElementById('txt_Justificativa'))
                myEditor.setDataInput(document.getElementById('txt_Justificativa'))
                myEditor.cleanEditor(document.getElementById('txt_Deliberacao'))
                myEditor.setDataInput(document.getElementById('txt_Deliberacao'))

                myEditor.setDataInput(document.getElementById('txt_obsDlbrDIRAF'))
                myEditor.disabledEditor(document.getElementById('txt_obsDlbrDIRAF'))
                myEditor.setDataInput(document.getElementById('txt_obsDlbrDITEC'))
                myEditor.disabledEditor(document.getElementById('txt_obsDlbrDITEC'))
                myEditor.setDataInput(document.getElementById('txt_obsDlbrDISUP'))
                myEditor.disabledEditor(document.getElementById('txt_obsDlbrDISUP'))

                window["zm_emailsCopia"].disable(true)              // < ------------------- adicionado
            }
            else if(stateNow == wrkflw.ItemDescartado){
                colItem.innerHTML = ''
                iconThis = objHandleIcons["ExcluirAssr"]
                iconThis = iconThis.replace('sm', 'md')
                let icon = constructIcon.construct(iconThis);
                colItem.appendChild(icon);
                let icn             = colItem.innerHTML;                                     //Descrição
                icn                 = icn +' <b>Excluído</b>';
                colItem.innerHTML    = icn;

                myEditor.setDataInput(document.getElementById('txt_Justificativa'))
                myEditor.disabledEditor(document.getElementById('txt_Justificativa'))
                myEditor.setDataInput(document.getElementById('txt_Deliberacao'))
                myEditor.disabledEditor(document.getElementById('txt_Deliberacao'))
                myEditor.setDataInput(document.getElementById('txt_obsDlbrDIRAF'))
                myEditor.disabledEditor(document.getElementById('txt_obsDlbrDIRAF'))
                myEditor.setDataInput(document.getElementById('txt_obsDlbrDITEC'))
                myEditor.disabledEditor(document.getElementById('txt_obsDlbrDITEC'))
                myEditor.setDataInput(document.getElementById('txt_obsDlbrDISUP'))
                myEditor.disabledEditor(document.getElementById('txt_obsDlbrDISUP'))

                for(let i = 0; i < dataTablemi.funcsChange.Name.length; i++){
                    let name 		= dataTablemi.funcsChange.Name[i];
                    if(dataTablemi.funcsChange.Name[i] == 'a'){
                        dataTablemi.funcsChange[name](1);
                    }else{
                        dataTablemi.funcsChange[name]();
                    }
                }

                window["zm_emailsCopia"].disable(true)              // < ------------------- adicionado

                dataTablemi.resAPI = {};
                window.res['arrIndx'].push('1');
                orderMethodsMi.indexFunctionsX();
                itensTools.myToast('success', 'Ação realizada com sucesso!');
            }
            else if(stateNow == wrkflw.Ajustes){
                colItem.innerHTML = ''
                iconThis = objHandleIcons["AjusteAssr"]
                iconThis = iconThis.replace('sm', 'md')
                let icon = constructIcon.construct(iconThis);
                colItem.appendChild(icon);
                let icn             = colItem.innerHTML;                                     //Descrição
                icn                 = icn +' <b>Ajuste</b>';
                colItem.innerHTML    = icn;

                myEditor.setDataInput(document.getElementById('txt_Justificativa'))
                myEditor.disabledEditor(document.getElementById('txt_Justificativa'))
                myEditor.setDataInput(document.getElementById('txt_Deliberacao'))
                myEditor.disabledEditor(document.getElementById('txt_Deliberacao'))
                myEditor.setDataInput(document.getElementById('txt_obsDlbrDIRAF'))
                myEditor.disabledEditor(document.getElementById('txt_obsDlbrDIRAF'))
                myEditor.setDataInput(document.getElementById('txt_obsDlbrDITEC'))
                myEditor.disabledEditor(document.getElementById('txt_obsDlbrDITEC'))
                myEditor.setDataInput(document.getElementById('txt_obsDlbrDISUP'))
                myEditor.disabledEditor(document.getElementById('txt_obsDlbrDISUP'))

                for(let i = 0; i < dataTablemi.funcsChange.Name.length; i++){
                    let name 		= dataTablemi.funcsChange.Name[i];
                    if(dataTablemi.funcsChange.Name[i] == 'a'){
                        dataTablemi.funcsChange[name](1);
                    }else{
                        dataTablemi.funcsChange[name]();
                    }
                }

                window["zm_emailsCopia"].disable(true)              // < ------------------- adicionado

                dataTablemi.resAPI = {};
                window.res['numIndx'] = 2;
                window.res['arrIndx'].push('1');
                orderMethodsMi.indexFunctionsX();
                itensTools.myToast('success', 'Ação realizada com sucesso!');
            }
        }
    }
}
function dataTableinit() { dataTablemi = new dataTableConfig(); }
//window.addEventListener('load', dataTableinit)



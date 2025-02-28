myLoading = FLUIGC.loading('#wcm-content');
function initRegistData(){
    dsReg = DatasetFactory.getDataset('Cadastro de Reunião DIREX', null, null, null);
    formData_obj = {
        fieldsNecessary: [  'cmb_NomeSolicita',
                            'hd_numSuperior',
                            'hd_numState',
                            'dt_DataSolicita',
                            'cmb_GerenteSolicitante',
                            'zm_UnidadeSolicitante',
                            'txt_NumProcess',
                            'dt_dataInicio',
                            'dt_datalimit',
                            'txt_tituloReuniao',
                            'txt_InfoDISUP',
                            'txt_InfoDIRAF',
                            'txt_InfoDITEC',
                            'txt_IniDelibr',
                            'txt_FinDelibr',
                            'slc_DISUP_vt',
                            'slc_UCOF_vt',
                            'slc_DITEC_vt',
                            'txt_Deliberacao',
                            'txt_Justificativa',
                            'txt_obsDlbrDISUP',
                            'txt_obsDlbrDIRAF',
                            'txt_obsDlbrDITEC',
                            'switch_DISUP',
                            'switch_DIRAF',
                            'switch_DITEC'
                        ],
        fieldsNames:    [  'Assessor(a)',
                            'hd_numSuperior',
                            'hd_numState',
                            'Data e horário',
                            'Diretor(a)',
                            'Diretoria',
                            'N° Processo / Reunião',
                            'Data da Reunião',
                            'Limite para Inserção',
                            'Titulo da Reunião',
                            'Informes DISUP',
                            'Informes DIRAF',
                            'Informes DITEC',
                            'Início da Ata',
                            'Fim da Ata',
                            'DISUP',
                            'DIRAF',
                            'DITEC',
                            'Item / Objeto',
                            'Justificativa do Demandante',
                            'Observação Deliberação DISUP',
                            'Observação Deliberação DIRAF',
                            'Observação Deliberação DITEC',
                            'Liberar acesso de Pauta DISUP para outros gabinetes',
                            'Liberar acesso de Pauta DIRAF para outros gabinetes',
                            'Liberar acesso de Pauta DITEC para outros gabinetes'
                        ],
        arrForms: ['formData_origin', 'formData_modified', 'formData_getToCheck'],
        formData_origin: {},
        formData_modified: {},
        formData_getToCheck: {},
        formData_diff_OriginValues: { nameFields: [] },
        formData_diff_newGetValues: { nameFields: [] },
        defineAttFormData: function (obj){
            for(let i = 0; i < this.fieldsNecessary.length; i++){
                obj[this.fieldsNecessary[i]] = '';
            }
        },
        defineInitObjs: function (){
            for(let j = 0; j < this.arrForms.length; j++){
                this.defineAttFormData(this[this.arrForms[j]]);
            }
        },
        defineFormDataValues: function (formP, ds){
            if(formP == 'all'){
                for(let j = 0; j < this.arrForms.length; j++){
                    let formNow = this[this.arrForms[j]];
                    for(let i = 0; i < this.fieldsNecessary.length; i++){
                        formNow[this.fieldsNecessary[i]] = ds[this.fieldsNecessary[i]];
                    }
                }
            }else if(formP != 'all'){
                let formNow = this[formP]
                for(let j = 0; j < this.fieldsNecessary.length; j++){
                    let valueIt = ds[this.fieldsNecessary[j]]
                    if(valueIt != null && valueIt != undefined){
                        valueIt = valueIt.replace(/\r/g, '')
                        formNow[this.fieldsNecessary[j]] = valueIt;
                    }
                }
            }
        }
    }
    formData_obj.defineInitObjs() 
}
window.addEventListener('load', initRegistData)
function formFieldsDefine(){
    objFieldsData = {
        numSolN: '',
        stAcess_reg: async function (ds){
            for(let i = 0; i < formData_obj['fieldsNecessary'].length; i++){
                let fieldInpNow =  document.getElementById(formData_obj['fieldsNecessary'][i]);
                if(fieldInpNow.type == 'checkbox'){
                    if(ds[formData_obj['fieldsNecessary'][i]] == 'on'){
                        fieldInpNow.checked = true
                        fieldInpNow.value   = ds[formData_obj['fieldsNecessary'][i]] 
                    }else{
                        fieldInpNow.checked = false
                        fieldInpNow.value   = '' 
                    }
                }else{
                    document.getElementById(formData_obj['fieldsNecessary'][i]).value = ds[formData_obj['fieldsNecessary'][i]];
                }
            }
        }
    }
}
window.addEventListener('load', formFieldsDefine)
function defineElementsbar(){  
    objDefinitionBar = {
        initTrue: false,
        divSpn: document.getElementById('CadastroReuniaoDIREX'),
        arrElements: ['icon-R', 'desc', 'min-fluxo', 'icon-P', 'icon-T', 'icon-S','opsCadastro', 'opsAcess', 'DadosCadastro', 'PainelControle'],
        st: 'initArr',
        initArr: ['opsCadastro', 'opsAcess'],
        acessRegArr: ['icon-R', 'desc', 'min-fluxo', 'icon-P', 'icon-T', 'icon-S', 'DadosCadastro', 'PainelControle'],
        descDefine: function (obj){
            let arrT = ['desc-titulo', 'desc-subTitulo']
            descElem = document.getElementById('desc');
            for(let i = 0; i < arrT.length; i++){
                descElem.children[arrT[i]].textContent = obj[arrT[i]]
            }
        },
        miniMapDefine: async function (num){
            console.log(orderMethodsMi)
            obTemp = {
                name: ['a'],
                a: '',
                states: [13,8,10],
                sttsNames: ['Definição de Reunião', 'Analise / Deliberação', 'Arquivo']
            }
            await orderMethodsMi.requestsActivitiesGETall(num, obTemp);
            let rs = obTemp['a'].items;
            /**
             *  Definição de Reunião    = 13
             *  Analise / Deliberação   = 8
             *  Arquivo                 = 10
             */
            let mnWk = document.getElementById('min-fluxo');
            for(let i = 0; i < rs.length; i++){
                let regItmN = rs[i]
                if(regItmN.active == true){
                    obTemp['stateActive'] = regItmN
                    objDefineStatus.sequnce = regItmN.state.sequence;                   // <--- obtem estado atual para utilizar em getPDF e getPDF_ptd
                    let numProc = regItmN.state.sequence + 'n';
                    divAtN = mnWk.children[numProc];
                    if(divAtN != undefined){
                        mnWk.children[numProc].classList.add('rainbow')
                    }
                }
            }
            for(let i = 0; i < obTemp.states.length; i++){
                if(obTemp.states[i] != objDefineStatus.sequnce){
                   let numProc = obTemp.states[i] + 'n';
                   console.log(numProc)
                   divAtN = mnWk.children[numProc];
                   if(divAtN != undefined){
                       mnWk.children[numProc].classList.remove('rainbow')    
                   }
                }
           }
        },
        stIni: function (){
            let arrJobNow = this['initArr'];
            for(let i = 0; i < this.arrElements.length; i++){
                document.getElementById(this.arrElements[i]).style.display = 'none';
            }
            for(let j = 0; j < arrJobNow.length; j++){
                document.getElementById(arrJobNow[j]).style.display = 'block';
            } 
        },
        stAcess_reg: function (){
            let arrJobNow = this['acessRegArr'];
            this.divSpn.style.paddingTop = '170px'
            for(let i = 0; i < this.arrElements.length; i++){
                document.getElementById(this.arrElements[i]).style.display = 'none';
            }
            for(let j = 0; j < arrJobNow.length; j++){
                document.getElementById(arrJobNow[j]).style.display = 'block';
            } 
        }
    }
    objDefinitionBar.stIni();
}
window.addEventListener('load', defineElementsbar)

function acessRegist(){
    let btnAcess = document.getElementById('btnAcessar');
    console.log(btnAcess)
    btnAcess.addEventListener('click', async function (){ 
        let slcreuniao = document.getElementById('slc_reuniao');
        let slcTempRNO = document.getElementById('slc_temp_RNO');
        let ckAttObj = true;
        if(slcreuniao.value == undefined || slcreuniao.value == null || slcreuniao.value == ''){
            ckAttObj = false
            let arrTemp = []
            arrTemp.push(slcTempRNO)
            objFieldsNew.setInvalidfeedback(arrTemp)
        }else{
            let arrTemp = []
            arrTemp.push(slcTempRNO)
            objFieldsNew.setValidfeedback(arrTemp)
            console.log('valid')
        }
        if(ckAttObj){
            setDataReg(1) 
        }
    })
}
function validateAcessReg(elem){
    if(elem.value != '' && elem.value != undefined && elem.value != null){
        return true
    }else{ return false}
}
async function setDataReg(op, newProcess){
    let vldt = 0
    let slcAcess = 0
    if(op == 2){ 
        console.log(newProcess)
        slcAcess = newProcess;
        vldt = true
    }else if(op == 1){
        slcAcessInp = document.getElementById('slc_reuniao');
        vldt = validateAcessReg(slcAcessInp)
        if(vldt == true){
            slcAcess = slcAcessInp.value
        }
    }
    if(vldt == true){
        myLoading.show();
        dsReg = DatasetFactory.getDataset('Cadastro de Reunião DIREX', null, null, null).values
        console.log(dsReg)
        for(let i = 0; i < dsReg.length; i++){
            regN = dsReg[i]
            if(slcAcess == regN['txt_NumProcess']){
                console.log(regN);
                console.log(regN['txt_NumProcess']);
                objFieldsData['numSolN'] = regN['txt_NumProcess']
                objFieldsData['version'] = regN['version']
                objTdesc = {};
                objTdesc['desc-titulo'] = regN['txt_tituloReuniao']
                dTdesc = regN['dt_dataInicio'];
                dTdesc = dTdesc.split('-');
                dTdesc = dTdesc[2] + '/' + dTdesc[1] + '/' + dTdesc[0];
                objDefineStatus['dataSelectedFormat']   = dTdesc
                objDefineStatus['dataSelected']         = regN['dt_dataInicio']
                objTdesc['desc-subTitulo'] = 'Data da Reunião: ' + dTdesc;
                await objDefinitionBar.miniMapDefine(regN['txt_NumProcess']);
                objDefinitionBar.stAcess_reg();
                objDefinitionBar.descDefine(objTdesc);

                objFieldsData.stAcess_reg(regN);
                getDirVinc()

                await objDataTable.paramsInit(objMain);
                dataTablemi = new dataTableConfig();
                if(objDefinitionBar.initTrue == false){
                    myEditor = new determineEditor();
                    objDefinitionBar.initTrue = true
                }else{
                    myEditor.setValueInputsInEditors()
                }
                
                definePainelEnabled()
                setControlNavTabs()
                setControlNavTabsOpsAssr()
                getPDF_ptd();
                info_setItns()
                DemandResp();
                valueToggle();

                formData_obj.defineFormDataValues('formData_origin', regN);
            
            }
        }
        myLoading.hide();
    }
}
window.addEventListener('load', acessRegist)

function definePositionBarHeader(){
    slcReuniao()

    let a = document.getElementById('bar-header-n')
    let b = document.getElementsByClassName('wcm-all-content')[0]
    b.insertBefore(a, b.children[0]);
}
window.addEventListener('load', definePositionBarHeader)
function setOptionsSelectObj(datasetObjUser, objForSet, elemSelc){
    for(z = 0; z <  datasetObjUser.values.length; z++){
        nameCll     = datasetObjUser.values[z]['txt_tituloReuniao']
        idCll       = datasetObjUser.values[z]['txt_NumProcess']
        if(nameCll != '' && nameCll != null && idCll != '' && idCll != null){
            objForSet.values.push(datasetObjUser.values[z])
    
            var nodeOP = document.createElement("option");
            var attOP = document.createAttribute("value");
            attOP.value = idCll
            nodeOP.setAttributeNode(attOP)
            nodeOP.innerText = nameCll
            elemSelc.appendChild(nodeOP);
        }
    }
}
function slcReuniao() {
    elemSelc    = document.getElementById('slc_reuniao')
    elemSelc.style.display = 'none'
    objOptions  = { values: [] };
    
    setOptionsSelectObj(dsReg, objOptions, elemSelc)
    
    function searchInpTemp(){
        var inpTemp = document.createElement('input');
        inpTemp.setAttribute('list', 'browsersR');
        inpTemp.setAttribute('class','form-control');
        inpTemp.setAttribute('name','slc_temp_RNO');
        inpTemp.setAttribute('id','slc_temp_RNO');
        inpTemp.setAttribute('autocomplete','off');
        inpTemp.setAttribute('placeholder','Selecione a reunião para acessar as informações');
        inpTemp.setAttribute('style','color: black;');
        elemSelc.parentElement.appendChild(inpTemp);

        var vdatalist = document.createElement('datalist');
        vdatalist.setAttribute('id','browsersR');

        arrayOption = objOptions.values  
        for(i = 0; i < arrayOption.length; i++){
            var voption = document.createElement('option')
            att = document.createAttribute('value')
            att.value =  arrayOption[i]['txt_NumProcess'] + ' - ' + arrayOption[i]['txt_tituloReuniao'];
            voption.setAttributeNode(att)
            let dtItnOpt =  arrayOption[i]['dt_dataInicio'].split('-')
            let dtFormat = dtItnOpt[2]+'/'+dtItnOpt[1]+'/'+dtItnOpt[0]
            voption.innerText = dtFormat
            if(dtItnOpt[0] == '2025'){ //&& dtItnOpt[1] > 5
                vdatalist.appendChild(voption)
            }
        }
        elemSelc.parentElement.appendChild(vdatalist);

        document.getElementById("slc_temp_RNO").addEventListener("change", function(){
                    document.getElementById("slc_reuniao").value = this.value.split(' -')[0];
        })
    }
    searchInpTemp()
    document.getElementById('slc_reuniao').value = ''
}
function slcReuniao_reload(){
    let brs = document.getElementById('browsersR');
    let elemSelc    = document.getElementById('slc_reuniao')
    objOptions  = { values: [] };
    elemSelc.innerHTML = ''
    brs.innerHTML = ''

    dsReg = DatasetFactory.getDataset('Cadastro de Reunião DIREX', null, null, null);
    setOptionsSelectObj(dsReg, objOptions, elemSelc)

    arrayOption = objOptions.values  
    for(i = 0; i < arrayOption.length; i++){
        var voption = document.createElement('option')
        att = document.createAttribute('value')
        att.value =  arrayOption[i]['txt_NumProcess'] + ' - ' + arrayOption[i]['txt_tituloReuniao'];
        voption.setAttributeNode(att)
        let dtItnOpt =  arrayOption[i]['dt_dataInicio'].split('-')
        let dtFormat = dtItnOpt[2]+'/'+dtItnOpt[1]+'/'+dtItnOpt[0]
        voption.innerText = dtFormat
        if(dtItnOpt[0] == '2025'){ //&& dtItnOpt[1] > 5
            brs.appendChild(voption)
        }
    }
    document.getElementById('slc_reuniao').value = ''
}
function saveFormDataButtonSet(){
    document.getElementById('save-op').addEventListener('click',  async function (){ await conditionTypeSave() });
    document.getElementById('initSave').addEventListener('click', async function (){
        await saveFormData();
    });
}window.addEventListener('load',saveFormDataButtonSet)
async function conditionTypeSave(move){
    let checkForMove = 0
    if(move != undefined && move != null){ checkForMove = 1 }
    let ckMod = false;
    myEditor.setDataInputsParams()
    objGetReturn    = {};
    objBodyreq      = {};
    objGetReturn['name']    = ['a'];
    objGetReturn['a']       = '';
    let numSolN             = objFieldsData['numSolN'];
    for(let j = 0; j < formData_obj.fieldsNecessary.length; j++){
        formData_obj.formData_modified[formData_obj['fieldsNecessary'][j]] = document.getElementById(formData_obj['fieldsNecessary'][j]).value;
        if(formData_obj.formData_modified[formData_obj['fieldsNecessary'][j]] != formData_obj.formData_origin[formData_obj['fieldsNecessary'][j]]){
            ckMod = true;
            formData_obj.formData_diff_OriginValues[formData_obj['fieldsNecessary'][j]] = formData_obj.formData_modified[formData_obj['fieldsNecessary'][j]]
            formData_obj.formData_diff_OriginValues.nameFields.push(formData_obj['fieldsNecessary'][j])
        } 
    }
    objBodyreq['processInstanceId'] = numSolN;
    await orderMethodsMi.requestsActivitiesGETall(numSolN, objGetReturn);
    console.log(objGetReturn['a'])
    let movementSequence    = objGetReturn['a'].items[objGetReturn['a'].items.length - 1].movementSequence;
    objBodyreq['movementSequence'] = movementSequence;

    await orderMethodsMi.requestsGETall(numSolN, objGetReturn);
    console.log(objGetReturn['a'])
    objBodyreq['processVersion'] = objGetReturn['a']['processVersion'];
    let formRecordId = objGetReturn['a'].formRecordId;
    
    await orderMethodsMi.activeDocumentGETall(formRecordId, objGetReturn); 
    console.log(objGetReturn['a'])
    objBodyreq['version'] = objGetReturn['a']['content']['version'];
    

    if(ckMod == true && objFieldsData['version'] == objBodyreq['version']){
        if(checkForMove == 1){ return 1 }
        else{
            modalConfigs.saveSimple()    
        }
    }else if(ckMod == true && objFieldsData['version'] < objBodyreq['version'] || checkForMove == 1 && objFieldsData['version'] < objBodyreq['version']){
        /*
            1° - Obtem os campos do form no servidor na nova versão  
            2° - Verifica se os mesmos campos modificados no servidor foram modificados localmente
            3° - Apresenta no modal os campos que podem ser sobrepostos caso o usuário escolha continuar com o processo de salvamento das alterações
        */
        slcAcess = document.getElementById('slc_reuniao');
        dsReg = DatasetFactory.getDataset('Cadastro de Reunião DIREX', null, null, null);
        dsRegs = dsReg.values;
        ckModBase = false;
        regN = 0;
        for(let i = 0; i < dsRegs.length; i++){                                                                                                             // <------------------------------------------------------------------------------- 1°
            regN = dsRegs[i]
            if(slcAcess.value == regN['txt_NumProcess']){
                for(let j = 0; j < formData_obj.fieldsNecessary.length; j++){
                    if( formData_obj.formData_origin[formData_obj['fieldsNecessary'][j]] != regN[formData_obj['fieldsNecessary'][j]]){
                        formData_obj.formData_diff_newGetValues[formData_obj['fieldsNecessary'][j]] = regN[formData_obj['fieldsNecessary'][j]]
                        formData_obj.formData_diff_newGetValues.nameFields.push(formData_obj['fieldsNecessary'][j])
                        ckModBase = true;
                    } 
                }
                break
            }
        }
        newGetValues     = formData_obj.formData_diff_newGetValues;                                                                                         // <------------------------------------------------------------------------------- 2°
        OriginValues     = formData_obj.formData_diff_OriginValues;
        console.log(newGetValues)
        console.log(OriginValues)
        function checkFieldsDiff(objBigger, objSmaller){
            let arrJoin = [] 
            for(let j = 0; j < objSmaller.nameFields.length; j++){
                let fdNow = objSmaller.nameFields[j]
                for(let i = 0; i < objBigger.nameFields.length; i++){
                    if(fdNow == objBigger.nameFields[i]){
                        arrJoin.push(objBigger.nameFields[i])
                    }
                }
            }
            if(arrJoin.length == 0){ return false }
            else{ return arrJoin }
        }
        objBodyreq['resCk'] = 0;
        if(newGetValues.length > OriginValues.length){
            objBodyreq['resCk'] = checkFieldsDiff(newGetValues, OriginValues);
        }else if(newGetValues.length < OriginValues.length){
            objBodyreq['resCk'] = checkFieldsDiff(OriginValues, newGetValues);
        }else{
            objBodyreq['resCk'] = checkFieldsDiff(OriginValues, newGetValues);
        }
        console.log(objBodyreq['resCk'])
        if(!objBodyreq['resCk'] && checkForMove != 1){                                                                                                                      
            modalConfigs.saveVersionDiff()
        }else if(checkForMove == 1){ 
            return 2 
        }else{                                                                                                                                              // <------------------------------------------------------------------------------- 3°
            let strN = '';
            for(let i = 0; i < objBodyreq['resCk'].length; i++){
                let arrNamesFields      = formData_obj.fieldsNames;
                let arrFieldsNecessary  = formData_obj.fieldsNecessary
                let arrFieldCk          = objBodyreq['resCk'][i]
                for(let j = 0; j < arrNamesFields.length; j++){
                    if(arrFieldCk == arrFieldsNecessary[j]){
                        strN += '<h3 style="color: black"> - '+arrNamesFields[j]+'</h3><br>';
                    }
                }                                                                                                                                    
            }
            modalConfigs.saveVersionFieldDiff(strN)
        }
    }else{// <-------------------------------------------------------------------------------
        if(checkForMove == 1){ return 0 }
        else{
            modalConfigs.saveNot()    
        }
    }
}
async function saveFormData(){
    let numSolN             = objFieldsData['numSolN'];
    formDataReq             = [];

    myLoading.show();

    await orderMethodsMi.requestsTasksGETall(numSolN, objGetReturn);
    console.log(objGetReturn['a'])
    let itns = objGetReturn['a'].items
    let ckResp = 0;
    let mvS = 0;
    for(let i = 0; i < itns.length; i++){
        let itnN = itns[i];
        console.log(itns[i])
        if(itnN['status'] == 'NOT_COMPLETED' && itnN['movementSequence'] > mvS){
            codeN = itnN['assignee']['code'];
            (codeN.indexOf('Pool:Role:') != -1) ? ckResp = false : ckResp = true;
            objBodyreq['code']      = codeN;
            objBodyreq['sequence']  = itnN['state']['sequence']
        }
    }
    if(!ckResp){
        colleagueIdUserNow = objDefineStatus.mat
        await orderMethodsMi.assumeUserGETall(numSolN, colleagueIdUserNow,  objBodyreq['movementSequence'], objGetReturn);
        console.log(objGetReturn['a'])    
        objBodyreq['code']      = colleagueIdUserNow;
    }

    if(objFieldsData['version'] == objBodyreq['version']){
        await operationSave(formData_obj.formData_modified)
    }else if(objFieldsData['version'] < objBodyreq['version']){ // < ---------------------------------------------------------------------------------------------
        formData_Final = {} 
        console.log(objBodyreq['resCk'])
        if(!objBodyreq['resCk']){
            for(let j = 0; j < formData_obj.fieldsNecessary.length; j++){
                formData_Final[formData_obj['fieldsNecessary'][j]] = formData_obj.formData_modified[formData_obj['fieldsNecessary'][j]]
                if(formData_obj.formData_diff_newGetValues[formData_obj['fieldsNecessary'][j]] != undefined){
                    formData_Final[formData_obj['fieldsNecessary'][j]] = formData_obj.formData_diff_newGetValues[formData_obj['fieldsNecessary'][j]]
                }
            }
            console.log(formData_Final)
            await operationSave(formData_Final)
        }else{
            for(let j = 0; j < formData_obj.fieldsNecessary.length; j++){
                formData_Final[formData_obj['fieldsNecessary'][j]] = formData_obj.formData_modified[formData_obj['fieldsNecessary'][j]]
                if(formData_obj.formData_diff_newGetValues[formData_obj['fieldsNecessary'][j]] != undefined){       // <----------------------------------------------------- verifica se existe novo valor em newGet e preenche no form
                    formData_Final[formData_obj['fieldsNecessary'][j]] = formData_obj.formData_diff_newGetValues[formData_obj['fieldsNecessary'][j]]
                }
                if(formData_obj.formData_diff_OriginValues[formData_obj['fieldsNecessary'][j]] != undefined){       // <----------------------------------------------------- verifica se existe novo valor em origin e preenche no form sobrepondo o newGet se necessário
                    formData_Final[formData_obj['fieldsNecessary'][j]] = formData_obj.formData_diff_OriginValues[formData_obj['fieldsNecessary'][j]]
                }
            }
            console.log(formData_Final)
            await operationSave(formData_Final)
        }  
    }
    myLoading.hide();
    async function operationSave(formDataN){
        for(let l = 0; l < formData_obj.fieldsNecessary.length; l++){
            let objTempReq = {};
            objTempReq['name']  = formData_obj['fieldsNecessary'][l];
            objTempReq['value'] = formDataN[formData_obj['fieldsNecessary'][l]];
            formDataReq.push(objTempReq) 
        }
        objBodyreq['formData'] = JSON.stringify(formDataReq)

        await orderMethodsMi.saveSubst(numSolN, objBodyreq.code, objBodyreq.movementSequence, objBodyreq, objGetReturn);
        console.log(objGetReturn['a'])
        let respSaveSubst = objGetReturn['a'];
        if(respSaveSubst['ok']){
            objFieldsData.stAcess_reg(formDataN);
            myEditor.setValueInputsInEditors()
            formData_obj.defineFormDataValues('formData_origin', formDataN);
            objFieldsData['version'] = getLastVersionForm()    
            formData_obj.formData_diff_newGetValues  = { nameFields: [] };
            formData_obj.formData_diff_OriginValues = { nameFields: [] };
            rowMSN = document.getElementById('msnConfirm')
            rowMSN.children[0].innerText = "Modificações salvas com sucesso";
            rowMSN.children[0].style.color = 'green'
            document.getElementById('initSave').style.display = "none"
            document.getElementById('getNewData').style.display = "none"
            document.getElementById('slcMove').style.display = "none" 
            document.getElementById('initMove').style.display = "none" 
        }else{
            rowMSN = document.getElementById('msnConfirm')
            rowMSN.children[0].innerText = "Um erro ocorreu no processo de salvamento !";
            rowMSN.children[0].style.color = 'red'
            document.getElementById('initSave').style.display = "none"
            document.getElementById('getNewData').style.display = "none"
            document.getElementById('slcMove').style.display = "none" 
            document.getElementById('initMove').style.display = "none" 
        }
    }
}
function getLastVersionForm(){
    slcAcess = document.getElementById('slc_reuniao');
    dsReg = DatasetFactory.getDataset('Cadastro de Reunião DIREX', null, null, null);
    dsRegs = dsReg.values;
    for(let i = 0; i < dsRegs.length; i++){
        regN = dsRegs[i]
        if(slcAcess.value == regN['txt_NumProcess']){
            return regN['version']
        }
    }
}
function closePainel(){
    document.getElementById('cancelSave').addEventListener('click', function (){
        setDefaultObjValues();
    });
    document.getElementById('closePainel').addEventListener('click', function (){
        setDefaultObjValues();
    });
    function setDefaultObjValues(){
        formData_obj.formData_diff_newGetValues  = { nameFields: [] };
        formData_obj.formData_diff_OriginValues  = { nameFields: [] };
    }
}
window.addEventListener('load', closePainel)
function getNewData(){
    document.getElementById('getNewData').addEventListener('click', function (){
        setNewDataObjValues();
    });
    function setNewDataObjValues(){
        formData_Final = {} 
        for(let j = 0; j < formData_obj.fieldsNecessary.length; j++){
            formData_Final[formData_obj['fieldsNecessary'][j]] = formData_obj.formData_modified[formData_obj['fieldsNecessary'][j]]
            if(formData_obj.formData_diff_newGetValues[formData_obj['fieldsNecessary'][j]] != undefined){       // <----------------------------------------------------- verifica se existe novo valor em newGet e preenche no form
                formData_Final[formData_obj['fieldsNecessary'][j]] = formData_obj.formData_diff_newGetValues[formData_obj['fieldsNecessary'][j]]
            }
        }
        definePainelEnabled()
        objFieldsData.stAcess_reg(formData_Final);
        myEditor.setValueInputsInEditors()
        formData_obj.defineFormDataValues('formData_origin', formData_Final);
        objFieldsData['version'] = getLastVersionForm()    
        formData_obj.formData_diff_newGetValues     = { nameFields: [] };
        formData_obj.formData_diff_OriginValues     = { nameFields: [] };
        rowMSN = document.getElementById('msnConfirm')
        rowMSN.children[0].innerText = "Formulário local atualizado com sucesso";
        rowMSN.children[0].style.color = 'green'
        document.getElementById('initSave').style.display = "none"
        document.getElementById('getNewData').style.display = "none"
        document.getElementById('slcMove').style.display = "none" 
        document.getElementById('initMove').style.display = "none" 
    }
}
window.addEventListener('load', getNewData)
function moveProcessSet(){
    document.getElementById('min-fluxo').addEventListener('click', async function (){
        console.log('moveProcessSet < ------------------------------------------------------ > moveProcessSet')
        let numSolc = objFieldsData.numSolN
        let lastState =  obTemp['stateActive'].state.sequence
        await objDefinitionBar.miniMapDefine(numSolc)
        let opsMove     = []
        let statesAll   = obTemp['states'];
        let stateNow    = obTemp['stateActive'].state.sequence
        console.log(lastState)
        console.log(stateNow)
        function setOpsSlcMove(){   
            document.getElementById('slc_moveProcess').innerHTML = ''
            let slcMoveOpt = document.createElement('option');
                slcMoveOpt.setAttribute('value', '0');
                slcMoveOpt.innerText = '';
                document.getElementById('slc_moveProcess').appendChild(slcMoveOpt);
            if(stateNow == 13 || stateNow == 10){
                let slcMoveOpt = document.createElement('option');
                slcMoveOpt.setAttribute('value', 8);
                slcMoveOpt.innerText = obTemp['sttsNames'][1];
                document.getElementById('slc_moveProcess').appendChild(slcMoveOpt);
            }else{
                for(let i = 0; i < statesAll.length; i++){
                    let state   = statesAll[i]
                    if(state != stateNow){
                        opsMove.push(state)
                        let slcMoveOpt = document.createElement('option');
                        slcMoveOpt.setAttribute('value', state);
                        slcMoveOpt.innerText = obTemp['sttsNames'][i];
                        document.getElementById('slc_moveProcess').appendChild(slcMoveOpt);
                    }
                }
            }
            console.log(opsMove)
        }
        setOpsSlcMove()
        let resCkforMove = await conditionTypeSave(1);
        console.log(resCkforMove)
        if(lastState == stateNow && resCkforMove == 0 || lastState == stateNow && resCkforMove == 1){
            modalConfigs.fluxo()
        }else if(resCkforMove == 2){
            modalConfigs.fluxoVersionDiffModific()    
        }else if(resCkforMove != undefined){
            modalConfigs.fluxoModific('Definição de Reunião')
            console.log('MUDOU ***********************')
        }
    })
    document.getElementById('initMove').addEventListener('click', async function (){
        await moveProcessData()
    })
}
window.addEventListener('load', moveProcessSet)
async function moveProcessData(){
    objGetReturn    = {};
    objBodyreq      = {};
    objGetReturn['name']    = ['a'];
    objGetReturn['a']       = '';
    let numSolN             = objFieldsData['numSolN'];

    myLoading.show();

    objBodyreq['sequence'] = document.getElementById('slc_moveProcess').value

    objBodyreq['processInstanceId'] = numSolN;
    await orderMethodsMi.requestsActivitiesGETall(numSolN, objGetReturn);
    console.log(objGetReturn['a'])
    let movementSequence    = objGetReturn['a'].items[objGetReturn['a'].items.length - 1].movementSequence;
    objBodyreq['movementSequence'] = movementSequence;

    await orderMethodsMi.requestsGETall(numSolN, objGetReturn);
    console.log(objGetReturn['a'])
    objBodyreq['processVersion'] = objGetReturn['a']['processVersion'];
    let formRecordId = objGetReturn['a'].formRecordId;
    
    await orderMethodsMi.activeDocumentGETall(formRecordId, objGetReturn); 
    console.log(objGetReturn['a'])
    objBodyreq['version'] = objGetReturn['a']['content']['version'];

    await orderMethodsMi.requestsTasksGETall(numSolN, objGetReturn);
    console.log(objGetReturn['a'])
    let itns = objGetReturn['a'].items
    let ckResp = 0;
    let mvS = 0;
    for(let i = 0; i < itns.length; i++){
        let itnN = itns[i];
        console.log(itns[i])
        if(itnN['status'] == 'NOT_COMPLETED' && itnN['movementSequence'] > mvS){
            codeN = itnN['assignee']['code'];
            (codeN.indexOf('Pool:Role:') != -1) ? ckResp = false : ckResp = true;
            objBodyreq['code']      = codeN;
            //objBodyreq['sequence']  = itnN['state']['sequence']
        }
    }
    if(!ckResp){
        colleagueIdUserNow = objDefineStatus.mat
        await orderMethodsMi.assumeUserGETall(numSolN, colleagueIdUserNow,  objBodyreq['movementSequence'], objGetReturn);
        console.log(objGetReturn['a'])    
        objBodyreq['code']      = colleagueIdUserNow;
    }

    if(objFieldsData['version'] == objBodyreq['version']){
        await operationMove(formData_obj.formData_modified)
    }else if(objFieldsData['version'] < objBodyreq['version']){ // < ---------------------------------------------------------------------------------------------
        formData_Final = {} 
        console.log(objBodyreq['resCk'])
        if(!objBodyreq['resCk']){
            for(let j = 0; j < formData_obj.fieldsNecessary.length; j++){
                formData_Final[formData_obj['fieldsNecessary'][j]] = formData_obj.formData_modified[formData_obj['fieldsNecessary'][j]]
                if(formData_obj.formData_diff_newGetValues[formData_obj['fieldsNecessary'][j]] != undefined){
                    formData_Final[formData_obj['fieldsNecessary'][j]] = formData_obj.formData_diff_newGetValues[formData_obj['fieldsNecessary'][j]]
                }
            }
            console.log(formData_Final)
            await operationMove(formData_Final)
        }else{
            for(let j = 0; j < formData_obj.fieldsNecessary.length; j++){
                formData_Final[formData_obj['fieldsNecessary'][j]] = formData_obj.formData_modified[formData_obj['fieldsNecessary'][j]]
                if(formData_obj.formData_diff_newGetValues[formData_obj['fieldsNecessary'][j]] != undefined){       // <----------------------------------------------------- verifica se existe novo valor em newGet e preenche no form
                    formData_Final[formData_obj['fieldsNecessary'][j]] = formData_obj.formData_diff_newGetValues[formData_obj['fieldsNecessary'][j]]
                }
                if(formData_obj.formData_diff_OriginValues[formData_obj['fieldsNecessary'][j]] != undefined){       // <----------------------------------------------------- verifica se existe novo valor em origin e preenche no form sobrepondo o newGet se necessário
                    formData_Final[formData_obj['fieldsNecessary'][j]] = formData_obj.formData_diff_OriginValues[formData_obj['fieldsNecessary'][j]]
                }
            }
            console.log(formData_Final)
            await operationMove(formData_Final)
        }  
    }
    myLoading.hide();
    async function operationMove(formDataN){
        formDataReq = []
        for(let l = 0; l < formData_obj.fieldsNecessary.length; l++){
            let objTempReq = {};
            objTempReq['name']  = formData_obj['fieldsNecessary'][l];
            objTempReq['value'] = formDataN[formData_obj['fieldsNecessary'][l]];
            formDataReq.push(objTempReq) 
        }
        objBodyreq['formData'] = JSON.stringify(formDataReq)

        await orderMethodsMi.moveSubst(objBodyreq, objGetReturn);
        console.log(objGetReturn['a'])
        let respSaveSubst = objGetReturn['a'];
        if(respSaveSubst['ok']){
            objFieldsData.stAcess_reg(formDataN);
            myEditor.setValueInputsInEditors()
            formData_obj.defineFormDataValues('formData_origin', formDataN);
            objFieldsData['version'] = getLastVersionForm()    
            formData_obj.formData_diff_newGetValues  = { nameFields: [] };
            formData_obj.formData_diff_OriginValues = { nameFields: [] };
            rowMSN = document.getElementById('msnConfirm')
            rowMSN.children[0].innerText = "Processo Movimentado com sucesso";
            rowMSN.children[0].style.color = 'green'
            document.getElementById('initSave').style.display = "none"
            document.getElementById('getNewData').style.display = "none"
            document.getElementById('slcMove').style.display = "none" 
            document.getElementById('initMove').style.display = "none" 
        }else{
            rowMSN = document.getElementById('msnConfirm')
            rowMSN.children[0].innerText = "Um erro ocorreu ao tentar movimentar o processo !";
            rowMSN.children[0].style.color = 'red'
            document.getElementById('initSave').style.display = "none"
            document.getElementById('getNewData').style.display = "none"
            document.getElementById('slcMove').style.display = "none" 
            document.getElementById('initMove').style.display = "none" 
        }
        await objDefinitionBar.miniMapDefine(numSolN);
        definePainelEnabled();
    }
}
function objConfigModal(){
    modalConfigs = {
        fluxo: function () {
            document.getElementById('slcMove').style.display = 'block';
            document.getElementById('getNewData').style.display = 'none';
            document.getElementById('initMove').style.display = 'block';
            document.getElementById('initSave').style.display = 'none';
            rowMSN = document.getElementById('msnConfirm')
            let msg = "<div style=\"color: red\">Ao movimentar o processo para outra atividade, as alterações feitas no formulário serão salvas.</div><BR>"
            rowMSN.children[0].innerHTML = msg + "Selecione uma atividade para movimentar:";
            rowMSN.children[0].style.color = 'black' 
        },
        fluxoModific: function (state){
            document.getElementById('slcMove').style.display = 'block';
            document.getElementById('getNewData').style.display = 'none';
            document.getElementById('initMove').style.display = 'block';
            document.getElementById('initSave').style.display = 'none';
            rowMSN = document.getElementById('msnConfirm');
            let msg = "<div style=\"color: red\">Antes que você pudesse movimentar, o processo foi movimentado por outro(a) usuário para a atividade: <BR> - " + state + "</div><BR>"
            rowMSN.children[0].innerHTML = msg + "Se ainda deseja movimentar, selecione uma atividade: ";
            rowMSN.children[0].style.color = 'black' 
        },
        fluxoVersionDiffModific: function (){
            document.getElementById('slcMove').style.display = 'block';
            document.getElementById('getNewData').style.display = 'block';
            document.getElementById('initMove').style.display = 'block';
            document.getElementById('initSave').style.display = 'none';
            rowMSN = document.getElementById('msnConfirm');
            let msg = "<div style=\"color: red\">Atenção!<br>Outro usuário salvou novas informações no formulário, movimentar para outra atividade irá sobrepor essas informações</div><BR>"
            rowMSN.children[0].innerHTML = msg + "Você pode puxar as novas informações para trabalhar ou se ainda deseja movimentar, selecione uma atividade: ";
            rowMSN.children[0].style.color = 'black' 
        },
        saveSimple: function (){
            rowMSN = document.getElementById('msnConfirm')
            rowMSN.children[0].innerText = "Desejá realmente salvar as alterações ?";
            rowMSN.children[0].style.color = 'black'
            document.getElementById('initSave').style.display = "block"
            document.getElementById('initMove').style.display = 'none';
            document.getElementById('slcMove').style.display = 'none';
        },
        saveVersionDiff: function () {
            rowMSN = document.getElementById('msnConfirm')
            rowMSN.children[0].innerText = "Desejá realmente salvar as alterações ?";
            rowMSN.children[0].style.color = 'black'
            document.getElementById('initSave').style.display = "block"
            document.getElementById('initMove').style.display = 'none';
            document.getElementById('getNewData').style.display = "none"
            document.getElementById('slcMove').style.display = 'none';
        },
        saveVersionFieldDiff: function (strNparam) {
            rowMSN = document.getElementById('msnConfirm')
            rowMSN.children[0].innerHTML = "Atenção!<br>Outro usuário salvou informações em um ou mais campos que você quer modificar, os seguintes campos foram modificados por outro usuário: <br>" + strNparam +
            "Desejá continuar e sobrepor a atualização salva por outro usuário ? "
            rowMSN.children[0].style.color = 'red'
            document.getElementById('initSave').style.display = "block"
            document.getElementById('initMove').style.display = 'none';
            document.getElementById('getNewData').style.display = "block"
            document.getElementById('slcMove').style.display = 'none';
        },
        saveNot: function (){
            console.log('formulário sem modificações para serem salvas')
            rowMSN = document.getElementById('msnConfirm')
            rowMSN.children[0].innerText = "formulário sem modificações para serem salvas";
            rowMSN.children[0].style.color = 'black'
            document.getElementById('initSave').style.display = "none"
            document.getElementById('initMove').style.display = 'none';
            document.getElementById('getNewData').style.display = "none"
            document.getElementById('slcMove').style.display = 'none';
        }
    }
}
window.addEventListener('load', objConfigModal)
function itnsGabinetes(){
    let linkIdx = document.getElementById('deliber-op')
    linkIdx.addEventListener('click', function () {
        document.getElementById('itnsList_ptd_DITEC').children[0].innerHTML = ''
        document.getElementById('itnsList_ptd_DIRAF').children[0].innerHTML = ''
        document.getElementById('itnsList_ptd_DISUP').children[0].innerHTML = ''

        document.getElementById('itnsList_deliber_op_DITEC').children[0].innerHTML = ''
        document.getElementById('itnsList_deliber_op_DIRAF').children[0].innerHTML = ''
        document.getElementById('itnsList_deliber_op_DISUP').children[0].innerHTML = ''
        
        document.getElementById('itnsList_deliber_op_DITEC').style.display = 'none'
        document.getElementById('itnsList_deliber_op_DIRAF').style.display = 'none'
        document.getElementById('itnsList_deliber_op_DISUP').style.display = 'none'

        document.getElementById('getData_deliber_op_DITEC').style.display = 'none'; 
        document.getElementById('getData_deliber_op_DIRAF').style.display = 'none'; 
        document.getElementById('getData_deliber_op_DISUP').style.display = 'none'; 

        info_setItns()
        getPDF_ptd()

        document.getElementById('infoAnaliseDelbr').style.display = 'block'
        document.getElementById('DadosCadastro').style.display = 'none'
        document.getElementById('PainelControle').style.display = 'none'
        document.getElementById('Delibr').style.display = 'none'
    })
}
window.addEventListener('load', itnsGabinetes)
function initPage(){
    let linkIdx = document.getElementById('init-op')
    linkIdx.addEventListener('click', function () {
        document.getElementById('itnsList_ptd_DITEC').children[0].innerHTML = ''
        document.getElementById('itnsList_ptd_DIRAF').children[0].innerHTML = ''
        document.getElementById('itnsList_ptd_DISUP').children[0].innerHTML = ''

        document.getElementById('itnsList_deliber_op_DITEC').children[0].innerHTML = ''
        document.getElementById('itnsList_deliber_op_DIRAF').children[0].innerHTML = ''
        document.getElementById('itnsList_deliber_op_DISUP').children[0].innerHTML = ''

        info_setItns()
        definePainelEnabled()

        document.getElementById('infoAnaliseDelbr').style.display = 'none'
        document.getElementById('DadosCadastro').style.display = 'block'
        document.getElementById('Delibr').style.display = 'none'
    })
}
window.addEventListener('load', initPage)
function startNewProcess(){
    let btnCadastro = document.getElementById('btnCadastro');
    btnCadastro.addEventListener('click', async function () {
        objGetReturn            = {};
        objBodyreq              = {};
        objGetReturn['name']    = ['a'];
        objGetReturn['a']       = '';

        objFieldsNew.cleanValidatefeedback()

        objBodyreq.user         = objDefineStatus['mat'];
        objBodyreq.dataInit     = document.getElementById('dt_dataInicio_reg').value
        objBodyreq.dataLimit    = document.getElementById('dt_datalimi_reg').value
        objBodyreq.title        = document.getElementById('txt_tituloReuniao_reg').value
        let arrNamesAttObj = ['dataInit', 'dataLimit', 'title']
        let ckAttObj = true;
        for(let y = 0; y < arrNamesAttObj.length; y++){
            if(objBodyreq[arrNamesAttObj[y]] == undefined || objBodyreq[arrNamesAttObj[y]] == null || objBodyreq[arrNamesAttObj[y]] == ''){
                ckAttObj = false;
                let arrTemp = []
                arrTemp.push(objFieldsNew.fieldsFilter[y])
                objFieldsNew.setInvalidfeedback(arrTemp)
            }else{
                let arrTemp = []
                arrTemp.push(objFieldsNew.fieldsFilter[y])
                objFieldsNew.setValidfeedback(arrTemp)
            }
        }

        if(ckAttObj){
            myLoading.show();

            await orderMethodsMi.createNewDIREX(objBodyreq, objGetReturn);
            console.log(objGetReturn['a'])
            let objRespStart = objGetReturn['a'];
            if(objRespStart['processInstanceId']){
                setDataReg(2, objRespStart['processInstanceId']) 
            }else{
                /*rowMSN = document.getElementById('msnConfirm')
                rowMSN.children[0].innerText = "Um erro ocorreu no processo de salvamento !";
                rowMSN.children[0].style.color = 'red'
                document.getElementById('initSave').style.display = "none"
                document.getElementById('getNewData').style.display = "none"
                document.getElementById('slcMove').style.display = "none" 
                document.getElementById('initMove').style.display = "none" 
                */
            }
            myLoading.hide();
        }else{
            console.log('invalid')
        }
    })
}
window.addEventListener('load', startNewProcess)
function setobjFields(){
    let initDate  = document.getElementById('dt_dataInicio_reg')
    let limitDate = document.getElementById('dt_datalimi_reg')
    let titleR    = document.getElementById('txt_tituloReuniao_reg')
    objFieldsNew = {
        fieldsFilter:     [initDate, limitDate, titleR]
    }
    objFieldsNew.cleanFieldsFilter = function (){
        let arrFields = this.fieldsFilter
        for(let i = 0; i < arrFields.length; i++){
            arrFields[i].value = '';
        }
    }
    objFieldsNew.cleanValidatefeedback = function (fields){
        let arrFields = this.fieldsFilter
        for(let i = 0; i < arrFields.length; i++){
            arrFields[i].classList.remove('is-invalid');
            arrFields[i].classList.remove('is-valid')
        }
        if(fields != null && fields != undefined && fields != ''){
            for(let i = 0; i < fields.length; i++){
                fields[i].classList.remove('is-invalid');
                fields[i].classList.remove('is-valid')
            }
        }
    }
    objFieldsNew.setValidfeedback = function (arrFields){
        for(let i = 0; i < arrFields.length; i++){
            arrFields[i].classList.remove('is-invalid')
            arrFields[i].classList.add('is-valid')
        }
    }
    objFieldsNew.setInvalidfeedback = function (arrFields){
        for(let i = 0; i < arrFields.length; i++){
            arrFields[i].classList.remove('is-valid')
            arrFields[i].classList.add('is-invalid')
        }
    }
}
window.addEventListener('load', setobjFields)


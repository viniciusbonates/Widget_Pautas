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
                    formNow[this.fieldsNecessary[j]] = ds[this.fieldsNecessary[j]];
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
        stAcess_reg: function (ds){
            for(let i = 0; i < formData_obj['fieldsNecessary'].length; i++){
                document.getElementById(formData_obj['fieldsNecessary'][i]).value = ds[formData_obj['fieldsNecessary'][i]];
            }
        }
    }
}
window.addEventListener('load', formFieldsDefine)
function defineElementsbar(){  
    objDefinitionBar = {
        divSpn: document.getElementById('CadastroReuniaoDIREX'),
        arrElements: ['icon-R', 'desc', 'min-fluxo', 'icon-T', 'icon-S','opsCadastro', 'opsAcess', 'DadosCadastro', 'PainelControle'],
        st: 'initArr',
        initArr: ['opsCadastro', 'opsAcess'],
        acessRegArr: ['icon-R', 'desc', 'min-fluxo', 'icon-T', 'icon-S', 'DadosCadastro', 'PainelControle'],
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
                a: ''
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
                    objDefineStatus.sequnce = regItmN.state.sequence;                   // <--- obtem estado atual para utilizar em getPDF e getPDF_ptd
                    let numProc = regItmN.state.sequence + 'n';
                    divAtN = mnWk.children[numProc];
                    if(divAtN != undefined){
                        mnWk.children[numProc].classList.add('rainbow')
                    }
                }else{
                    let numProc = regItmN.state.sequence + 'n';
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
    btnAcess.addEventListener('click', setDataReg)
    function validateAcessReg(elem){
        if(elem.value != '' && elem.value != undefined && elem.value != null){
            return true
        }else{ return false}
    }
    async function setDataReg(){
        slcAcess = document.getElementById('slc_reuniao');
        let vldt = validateAcessReg(slcAcess)
        if(vldt == true){
            myLoading.show();
            dsRegs = dsReg.values
            for(let i = 0; i < dsRegs.length; i++){
                regN = dsRegs[i]
                if(slcAcess.value == regN['txt_NumProcess']){
                    console.log(regN);
                    console.log(regN['txt_NumProcess']);
                    objFieldsData['numSolN'] = regN['txt_NumProcess']
                    objFieldsData['version'] = regN['version']
                    objTdesc = {};
                    objTdesc['desc-titulo'] = regN['txt_tituloReuniao']
                    dTdesc = regN['dt_dataInicio'];
                    dTdesc = dTdesc.split('-');
                    dTdesc = dTdesc[2] + '/' + dTdesc[1] + '/' + dTdesc[0];
                    objTdesc['desc-subTitulo'] = 'Data da Reunião: ' + dTdesc;
                    await objDefinitionBar.miniMapDefine(regN['txt_NumProcess']);
                    objDefinitionBar.stAcess_reg();
                    objDefinitionBar.descDefine(objTdesc);

                    objFieldsData.stAcess_reg(regN);

                    testDatatable.paramsInit(objMain);
                    dataTablemi = new dataTableConfig();
                    myEditor = new determineEditor();
                    definePainelEnabled()
                    setControlNavTabs()
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
}
window.addEventListener('load', acessRegist)

function definePositionBarHeader(){
    slcReuniao()

    let a = document.getElementById('bar-header-n')
    let b = document.getElementsByClassName('wcm-all-content')[0]
    b.insertBefore(a, b.children[0]);
}
window.addEventListener('load', definePositionBarHeader)

function slcReuniao() {
    elemSelc    = document.getElementById('slc_reuniao')
    elemSelc.style.display = 'none'
    objOptions  = { values: [] };
    
    function setOptionsSelectObj(datasetObjUser, objForSet){
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
    
    setOptionsSelectObj(dsReg, objOptions)

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

        var arrayOption = objOptions.values  
        for(i = 0; i < arrayOption.length; i++){
            var voption = document.createElement('option')
            att = document.createAttribute('value')
            att.value = arrayOption[i]['txt_tituloReuniao']
            voption.setAttributeNode(att)
            voption.innerText = arrayOption[i]['txt_NumProcess']
            vdatalist.appendChild(voption)
        }
        elemSelc.parentElement.appendChild(vdatalist);

        document.getElementById("slc_temp_RNO").addEventListener("change", function(){
            for(i = 0; i < arrayOption.length; i++){
                if(arrayOption[i]['txt_tituloReuniao'] == this.value){
                    document.getElementById("slc_reuniao").value = arrayOption[i]['txt_NumProcess']
                    break;
                }
            }
        })
    }
    searchInpTemp()
}

function saveFormDataButtonSet(){
    document.getElementById('save-op').addEventListener('click', async function (){
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
            rowMSN = document.getElementById('msnConfirm')
            rowMSN.children[0].innerText = "Desejá realmente salvar as alterações ?";
            rowMSN.children[0].style.color = 'black'
            document.getElementById('initSave').style.display = "block"
        }else{
            console.log('formulário sem modificações para serem salvas')
            rowMSN = document.getElementById('msnConfirm')
            rowMSN.children[0].innerText = "formulário sem modificações para serem salvas";
            rowMSN.children[0].style.color = 'black'
            document.getElementById('initSave').style.display = "none"
        }
    })
    document.getElementById('initSave').addEventListener('click', async function (){
        await saveFormData();
    });
}window.addEventListener('load',saveFormDataButtonSet)
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
        for(let l = 0; l < formData_obj.fieldsNecessary.length; l++){
            let objTempReq = {};
            objTempReq['name']  = formData_obj['fieldsNecessary'][l];
            objTempReq['value'] = formData_obj.formData_modified[formData_obj['fieldsNecessary'][l]];
            formDataReq.push(objTempReq) 
        }
        objBodyreq['formData'] = JSON.stringify(formDataReq)
        
        /*console.log('*************************************************************************************************')
        console.log(objBodyreq)
        console.log(formDataReq)
        console.log(movementSequence)
        console.log(ckResp)
        console.log(numSolN)
        */

        await orderMethodsMi.saveSubst(numSolN, objBodyreq.code, objBodyreq.movementSequence, objBodyreq, objGetReturn);
        console.log(objGetReturn['a'])
        let respSaveSubst = objGetReturn['a'];
        if(respSaveSubst['ok']){
           //formData_obj.formData_origin = 
            formData_obj.defineFormDataValues('formData_origin', formData_obj.formData_modified);
            myEditor.setValueInputsInEditors()
            objFieldsData['version'] = getLastVersionForm() 
            formData_obj.formData_diff_newGetValues  = { nameFields: [] };
            formData_obj.formData_diff_OriginValues = { nameFields: [] };
            rowMSN = document.getElementById('msnConfirm')
            rowMSN.children[0].innerText = "Modificações salvas com sucesso";
            rowMSN.children[0].style.color = 'green'
            document.getElementById('initSave').style.display = "none"
        }else{
            rowMSN = document.getElementById('msnConfirm')
            rowMSN.children[0].innerText = "Um erro ocorreu no processo de salvamento !";
            rowMSN.children[0].style.color = 'red'
            document.getElementById('initSave').style.display = "none"
        }
    }else if(objFieldsData['version'] < objBodyreq['version']){ // < ---------------------------------------------------------------------------------------------
        formData_Final = {}
        slcAcess = document.getElementById('slc_reuniao');
        dsReg = DatasetFactory.getDataset('Cadastro de Reunião DIREX', null, null, null);
        dsRegs = dsReg.values;
        ckModBase = false;
        regN = 0;
        for(let i = 0; i < dsRegs.length; i++){
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
        newGetValues     = formData_obj.formData_diff_newGetValues;
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
                        console.log('PROBLEMA !!!!!!!!!!!!!!!!!!!!! ')
                    }
                }
            }
            if(arrJoin.length == 0){ return false }
            else{ return arrJoin }
        }
        let resCk = 0;
        if(newGetValues.length > OriginValues.length){
            resCk = checkFieldsDiff(newGetValues, OriginValues);
        }else if(newGetValues.length < OriginValues.length){
            resCk = checkFieldsDiff(OriginValues, newGetValues);
        }else{
            resCk = checkFieldsDiff(OriginValues, newGetValues);
        }
        console.log(resCk)
        if(!resCk){
            for(let j = 0; j < formData_obj.fieldsNecessary.length; j++){
                formData_Final[formData_obj['fieldsNecessary'][j]] = formData_obj.formData_modified[formData_obj['fieldsNecessary'][j]]
                if(formData_obj.formData_diff_newGetValues[formData_obj['fieldsNecessary'][j]] != undefined){
                    formData_Final[formData_obj['fieldsNecessary'][j]] = formData_obj.formData_diff_newGetValues[formData_obj['fieldsNecessary'][j]]
                }
            }
        
            console.log(formData_Final)

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

            for(let l = 0; l < formData_obj.fieldsNecessary.length; l++){
                let objTempReq = {};
                objTempReq['name']  = formData_obj['fieldsNecessary'][l];
                objTempReq['value'] = formData_Final[formData_obj['fieldsNecessary'][l]];
                formDataReq.push(objTempReq) 
            }
            objBodyreq['formData'] = JSON.stringify(formDataReq)

            await orderMethodsMi.saveSubst(numSolN, objBodyreq.code, objBodyreq.movementSequence, objBodyreq, objGetReturn);
            console.log(objGetReturn['a'])
            let respSaveSubst = objGetReturn['a'];
            if(respSaveSubst['ok']){
                objFieldsData.stAcess_reg(formData_Final);
                myEditor.setValueInputsInEditors()
                formData_obj.defineFormDataValues('formData_origin', formData_Final);
                objFieldsData['version'] = getLastVersionForm()    
                formData_obj.formData_diff_newGetValues  = { nameFields: [] };
                formData_obj.formData_diff_OriginValues = { nameFields: [] };
                rowMSN = document.getElementById('msnConfirm')
                rowMSN.children[0].innerText = "Modificações salvas com sucesso";
                rowMSN.children[0].style.color = 'green'
                document.getElementById('initSave').style.display = "none"
            }else{
                rowMSN = document.getElementById('msnConfirm')
                rowMSN.children[0].innerText = "Um erro ocorreu no processo de salvamento !";
                rowMSN.children[0].style.color = 'red'
                document.getElementById('initSave').style.display = "none"
            }
        }else{
            rowMSN = document.getElementById('msnConfirm')
            let strN = '';
            for(let i = 0; i < resCk.length; i++){
                let arrNamesFields      = formData_obj.fieldsNames;
                let arrFieldsNecessary  = formData_obj.fieldsNecessary
                let arrFieldCk          = resCk[i]
                for(let j = 0; j < arrNamesFields.length; j++){
                    if(arrFieldCk == arrFieldsNecessary[j]){
                        strN += '<h3 style="color: black"> - '+arrNamesFields[j]+'</h3><br>';
                    }
                }
            }
            formData_obj.formData_diff_newGetValues  = { nameFields: [] };
            formData_obj.formData_diff_OriginValues = { nameFields: [] };
            rowMSN.children[0].innerHTML = "Atenção!<br>Outro usuário salvou informações em um ou mais campos que você quer modificar, os seguintes campos foram modificados por outro usuário: <br>" + strN +
            "Desejá continuar e sobrepor a atualização salva por outro usuário ? "
            rowMSN.children[0].style.color = 'red'
            document.getElementById('initSave').style.display = "none"
        }
    }
    myLoading.hide();
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
}

myLoading = FLUIGC.loading('#wcm-all-content');
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
        arrForms: ['formData_origin', 'formData_modified', 'formData_getToCheck'],
        formData_origin: {},
        formData_modified: {},
        formData_getToCheck: {},
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

async function saveFormData(){
    objGetReturn    = {};
    objBodyreq      = {};
    objGetReturn['name']    = ['a'];
    objGetReturn['a']       = '';
    let numSolN             = objFieldsData['numSolN'];
    
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
            objBodyreq['sequence']  = itnN['state']['sequence']
        }
    }
    
    myEditor.setDataInputsParams()

    for(let j = 0; j < formData_obj.fieldsNecessary.length; j++){
        formData_obj.formData_modified[formData_obj['fieldsNecessary'][j]] = document.getElementById(formData_obj['fieldsNecessary'][j]).value 
    }

    console.log(movementSequence)
    console.log(ckResp)
    /*if(ckResp){

    }else{

    }*/
    /*
    await orderMethodsMi.requestsActivitiesGETall(numSolN, objGetReturn);
    console.log(objGetReturn['a'])
    let movementSequence    = objGetReturn['a'].items[objGetReturn['a'].items.length - 1].movementSequence;
    let targetAssignee      = orderMethodsMi.targetAssignee
    await orderMethodsMi.assumeTaskall(targetAssignee, numSolN, movementSequence, objGetReturn);
    console.log(objGetReturn['a'])
    await orderMethodsMi.requestsGETall(numSolN, objGetReturn);
    console.log(objGetReturn['a'])
    let formRecordId = objGetReturn['a'].formRecordId;
    await orderMethodsMi.activeDocumentGETall(formRecordId, objGetReturn);
    console.log(objGetReturn['a'])
    let versionDoc = objGetReturn['a'].content.version;
    */
   
    /*
    orderMethods.prototype.activeDocumentGETall = async function (docId, objGetReturn) {
    await $.ajax({
        method: "GET",
        url: this.host+"/api/public/ecm/document/activedocument/"+docId,
        contentType: "application/json",
        }).done(async function (response) { 
            nameAtt = objGetReturn['name'][0];
            objGetReturn[nameAtt] = response;
            await response
        })
}
*/

}

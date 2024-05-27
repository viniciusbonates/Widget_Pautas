    function initPageConfig(){
        let linkIdx = document.getElementById('desc-link')
        linkIdx.addEventListener('click', function () {
            let elemGet = document.getElementById('dataSelected')
            slcReuniao_reload()
            document.getElementById('slc_reuniao').value = ''
            document.getElementById('slc_temp').outerHTML = ''
            document.getElementById('infoAnaliseDelbr').style.display = 'none'
            document.getElementById('itnsList_ptd_DITEC').children[0].innerHTML = ''
			document.getElementById('itnsList_ptd_DIRAF').children[0].innerHTML = ''
			document.getElementById('itnsList_ptd_DISUP').children[0].innerHTML = ''
            let slcR = document.getElementById('slc_temp_RNO')
            slcR.value = ''
            document.getElementById('Delibr').style.display = 'none'
            window["zm_emailsCopia"].clear()
            let tempArrFields = [slcR]
			objFieldsNew.cleanFieldsFilter()
			objFieldsNew.cleanValidatefeedback(tempArrFields)
            document.getElementById('divTableIn').appendChild(elemGet)
            objDefinitionBar.stIni();
            window.objDataTable.objFunc = {
                fnc: [
                    { 'fncName': '', 'metodhParam': '' }
                ]
            }
            objDataTable.myTable.destroy();
            objDataTable.objData= {
	            arrItens            : [],		// Array com os itens que serão apresentados na pagina atual 
	            arrItensAll         : [], 	    // Array produto final após a limpesa conforme condicionais determinadas
	            markItensAll        : 0, 	    // markItensAll == 1 - determina o fim da montagem do Array 'arrItensAll'
	            pageAtual           : -1,		// numero da pagina começando com valor '0'
	            indIten             : -1,        // Valor igual ao ultimo Index do 'this.objCollection' do item que foi validado e incluso no array 'arrItens' 
                indItenB            : -1
	        }
        })
    }
    window.addEventListener('load', initPageConfig)
    function getDirVinc(){
        objDefineStatus = {}
        objDefineStatus.stts = 14
        objDefineStatus.mat = window.parent.WCMAPI.userCode;
    
        var atvd = 8
        var ds_mat = DatasetFactory.getDataset("colleague", null, null, null);
        var ds_und = DatasetFactory.getDataset("dsc_Unidades", null, null, null);
        var matDir = 0
        var mat = objDefineStatus.mat;
        if (atvd == 8) {
            for (var i = 0; i < ds_mat.values.length; i++) {
                if (mat == ds_mat.values[i]['colleaguePK.colleagueId']) {
                    var und = ds_mat.values[i]['groupId'];
                    console.log(und)
                    for (var j = 0; j < ds_und.values.length; j++) {
                        if (und == ds_und.values[j]['AntigaSigla']) {
                            console.log("%Pool:Role:" + ds_und.values[j]['Sigla'] + "%")
                            if (ds_und.values[j]['Sigla'] == 'NTIC') {
                                matDir = "%Pool:Role:DIRAF%";
                            } else {
                                matDir = "%Pool:Role:" + ds_und.values[j]['Sigla'] + "%";
                            }
                        }
                    }
                }
            }
            c1 = DatasetFactory.createConstraint("hdn_dir_vinc", matDir, matDir, ConstraintType.MUST, true);
            cnst = new Array(c1)
        } else {
            c1 = DatasetFactory.createConstraint("hdn_dir_vinc", "%Pool:Role:%", "%Pool:Role:%", ConstraintType.MUST, true);
            cnst = new Array(c1)
        }
        objDefineStatus.matDir = matDir
        objMain = {
            /**
             * 	1 = Preencher toda a tabela
             * 	2 = Inserir coluna
             * 
            */
            objCollection: DatasetFactory.getDataset('Pauta DIREX', null, cnst, null).values,
            arrColumnsRender: ['txt_NumProcess', 'dataSelected', 'dt_DataSolicita', 'cmb_NomeSolicita', 'zm_UnidadeSolicitante', 'txt_titulo', 'Assess'], //dt_DataSolicita //txt_Justificativa
            attRefer: 'cmb_NomeSolicita',
            hder: [
                { 'title': 'N° Solicitação' },
                { 'title': 'Reunião Selecionada' },
                { 'title': 'Data Solicitação' },
                { 'title': 'Nome Solicitante' },
                { 'title': 'Unidade' },
                { 'title': 'Assunto' },
                //{'title': 'Justificativa'},
                { 'title': 'Aprov.Assessoria' }
            ],
            operation: '1',
            condValidation: [
                { 'fncName': 'validation', 'fncParam': 'dt_DataSolicita' }
            ],
            validation: function () {
                let dataItm = item['dt_DataSolicita'];
                let numItm = item['txt_NumProcess'];
                var dtRn = item['dataSelected'];
                var statusForValidate = item['hdn_aprvAssr'];
                let dtDeterm = document.getElementById('dt_dataInicio').value //"2024-03-18"
                var arrResult = [];
                let dataNow = new Date()
                let anoNow = dataNow.getFullYear();
                dataItm = dataItm.split(' ')[0];
                dataItm = dataItm.split('/');
    
                cnst1 = DatasetFactory.createConstraint("workflowProcessPK.processInstanceId", numItm, numItm, ConstraintType.MUST);
                cnstVld1 = new Array(cnst1)
                resultVldProcess = DatasetFactory.getDataset('workflowProcess ', null, cnstVld1, null).values
                console.log(resultVldProcess)
                if (resultVldProcess.length != 0) {
                    if (resultVldProcess[0]['status'] == 1) {
                        arrResult.push(true);
                    }
                }
                if (dataItm[2] != anoNow) {																// Se o ano é o mesmo que o atual
                    arrResult.push(true);
                }
                if (statusForValidate == 35) {															// Se o ano é o mesmo que o atual
                    arrResult.push(true);
                }
                if (numItm == '' || numItm == null || numItm == undefined) {
                    arrResult.push(true);
                }
                if (dtRn != null && dtRn != undefined && dtRn != '') {									//Se a data selecionada pelo demandante é referente a data da reunião em questão
                    dtRn = dtRn.split('/');
                    dtRn = dtRn[2] + '-' + dtRn[1] + '-' + dtRn[0];
                    if (dtRn != dtDeterm) {
                        arrResult.push(true);
                    }
                } else { arrResult.push(true); }
                ckii = 0;
                for (ii = 0; ii < arrResult.length; ii++) {
                    if (arrResult[ii] == true) { return true; }
                    else { ckii = false }
                }
                if (ckii == false) { return false }
    
            },
            fnc: [
                { 'fncName': 'a', 'fncParam': 'cmb_NomeSolicita' },
                { 'fncName': 'b', 'fncParam': 'txt_Justificativa' }
            ],
            a: function () {
                /**
                 * itens 	= this.objCollection
                 * item 	= itens[i]
                 * 
                 * item: referente a um item contido no objCollection
                */
                let colleagueId = item['cmb_NomeSolicita'];
                var c1 = DatasetFactory.createConstraint("colleaguePK.colleagueId", colleagueId, colleagueId, ConstraintType.MUST);
                constraint = new Array(c1)
                dataset = DatasetFactory.getDataset('colleague', null, constraint, null).values
                let colleagueName = dataset[0]['colleagueName']
                return colleagueName
            },
            b: function () {
                valueIt = item['txt_Justificativa']
                console.log(valueIt)
                console.log(typeof valueIt)
                if (typeof valueIt == 'string') {
                    valueIt = valueIt.replace(/\r/g, '')
                    valueIt = valueIt.replace(/\n/g, ' ')
                    valueIt = valueIt.replace(/\t/g, ' ')
                    valueIt = valueIt.replace(/"\"/g, '\\')
                }
                return valueIt
            }
        }
    }
    window.addEventListener('load', getDirVinc)
	
	var objDataTable = {
		myTable             : null,
		dataInit            : null,
		datafilt            : null,
		configDefinition    : '',
		objFunc: {
			fnc: [
				{ 'fncName': '', 'metodhParam': '' }
			]
		},
        objData: {
            arrItens            : [],		// Array com os itens que serão apresentados na pagina atual 
            arrItensAll         : [], 	    // Array produto final após a limpesa conforme condicionais determinadas
            markItensAll        : 0, 	    // markItensAll == 1 - determina o fim da montagem do Array 'arrItensAll'
            pageAtual           : -1,		// numero da pagina começando com valor '0'
            indIten             : -1,       // Valor igual ao ultimo Index do 'this.objCollection' do item que foi validado e incluso no array 'arrItens' 
            indItenB            : -1
        },
        cleanObjData: function (){
            this.objData['arrItens']    = []
            this.objData['pageAtual']   = -1
            this.objData['indIten']     = -1
            this.objData['indItenB']     = -1
        },
		paramsInit: async function (objMain) {
			this.configDefinition       = objMain
			await this.loadTable()
            btnCollection = document.getElementsByTagName('button')
			for(let i = 0; i < btnCollection.length; i++){
				if(btnCollection[i].attributes['data-nav-prev'] != undefined){
					btnCollection[i].type = 'button'
					console.log(btnCollection[i])
				}
				if(btnCollection[i].attributes['data-nav-next'] != undefined){
					btnCollection[i].type = 'button'
					console.log(btnCollection[i])
				}
			}
		},
        defineItensValid: function (newItens){
            this.objData.arrItens       = []
            this.objData.markItensAll   = 0
            itens                       = this.configDefinition.objCollection
            console.log(newItens)
            if(newItens){ itens         = newItens }
			cols                        = this.configDefinition.arrColumnsRender;
			determineLenght             = 5;
			attIten                     = this.configDefinition.attRefer;
			fnc                         = this.configDefinition.fnc
			condValidation              = this.configDefinition.condValidation
			objAll                      = this.configDefinition
            press = 0
            function objS(rslt, ref) {
				let obj = {
					rslt: rslt,
					ref: ref
				}
				return obj
			}
			var objsFunc = [];
			var count = 0;
			for (let i = 0; this.objData.arrItens.length <= itens.length; i++) {
				item = itens[i]
				lgnt = this.objData.arrItens.length
				if (item != undefined && item[attIten] != null && item[attIten] != '') {
					/*********************** Validação ***********************************/
					if (condValidation.length == 0 || condValidation != '') {
						console.log(condValidation)
						for (cv = 0; cv < condValidation.length; cv++) {
							let nameVal = condValidation[cv].fncName
							let aVal = objAll[nameVal]()
							let refVal = condValidation[cv].fncParam
							console.log(aVal)
							if (aVal != true || aVal == undefined) {
								/*********************** Validação ***********************************/
								console.log(press)
								if (fnc != '' && press != 1) {
									for (t = 0; t < fnc.length; t++) {
										let name = fnc[t].fncName
										var a = objAll[name]()
										var ref = fnc[t].fncParam
										objsFunc[t] = new objS(a, ref)
									}
								}
								console.log(objsFunc)
								console.log(item)
								var obj_din = ''
								let inic = '{'
								let final = '}'
								let virg = ','
								obj_din = obj_din + inic
								for (j = 0; j < cols.length; j++) {
									ckn = j + 1
									valueIt = ''
									nameCol = cols[j]
									if (fnc != '') {
										ckin = false;
										for (k = 0; k < objsFunc.length; k++) {
											funNow = objsFunc[k]
											if (nameCol == funNow.ref) {
												valueIt = funNow.rslt
												ckin = true
												//console.log(valueIt)
												break
											}
										}
										if (!ckin) { valueIt = item[cols[j]] }
									}
									obj_din = obj_din + '"' + cols[j] + '":"' + valueIt + '"'
									if (ckn == cols.length) { obj_din = obj_din + final; }
									else { obj_din = obj_din + virg }
								}
								if (lgnt == 0) {
									if (this.objData.arrItens.length != determineLenght) {
										this.objData.arrItens[0] = JSON.parse(obj_din);
										this.objData.indIten = 0; 
									}
									if (this.objData.markItensAll == 0) { this.objData.arrItensAll[0] = JSON.parse(obj_din); } 
								} else {
									count++
									if (this.objData.arrItens.length != determineLenght) { 
                                        this.objData.arrItens[lgnt]  = JSON.parse(obj_din); 
                                        this.objData.indIten++
                                    }
									if (this.objData.markItensAll == 0) { this.objData.arrItensAll[count] = JSON.parse(obj_din); } 
								}
							}
						}
					}
				} else if (item == undefined) {
					if (this.objData.arrItens.length != determineLenght) {        // < ----------- Siginifica que o tamanho do array de itens para serem apresentados não cehgou a 5.
							this.objData.indIten = this.objData.arrItens.length - 1
					}
					if (this.objData.markItensAll == 0) { this.objData.markItensAll = 1 }
					break;
				}
			}
			this.datafilt = this.objData.arrItensAll
			console.log(this.objData)
        },
		definePage: function (cls, dirr) {
            if(!cls){
                this.cleanObjData()
            }
			let indxItemRef = 0
			let determineLenght = 5;
            if(this.objData.pageAtual == -1){ this.objData.pageAtual = 0 };
			  if(this.objData.indItenB == -1){ this.objData.indItenB = 0 };
            if(dirr){ // < ---- dirr = 1 forward, dirr = 0 backward
                if(dirr == 1){
                    this.objData.pageAtual++
                    this.objData.arrItens           = []
                    console.log(indxItemRef)
                    indxItemRef                     = this.objData.indIten + 1	
                    this.objData.indItenB           = this.objData.indIten + 1	
					     console.log(this.objData.arrItens )
                    console.log(indxItemRef)
                    console.log(this.objData)
                }else if(dirr == 0){
                    this.objData.pageAtual--
                    this.objData.arrItens           = []    
                    indxItemRef                     = this.objData.indItenB - determineLenght 	
                }
            }
			let countLength = 0
			for (let i = indxItemRef; i < this.objData.arrItensAll.length && this.objData.arrItens.length != determineLenght; i++) {			
				this.objData.arrItens[countLength]    = this.objData.arrItensAll[i];
				this.objData.indIten++ 
				countLength++
			}
			console.log(this.objData)
		},
		loadTable: async function () {
            var thisObjDataTable    = this                                   // < ----------- Necessário passar o objDataTable para utilizar nos metodos deste objeto por conta da perca de escopo.
            var configParam         = this.configDefinition
            this.defineItensValid()
			this.definePage();
			this.myTable = FLUIGC.datatable('#target', {
				dataRequest         : this.objData.arrItens,
				renderContent       : configParam.arrColumnsRender,
				header              : configParam.hder,
				tableStyle          : 'table table-bordered table-dark table-hover',
				classSelected       : 'success',
				navButtons: {
					enabled: true
				},
				search: {
					enabled: true,
					onlyEnterkey: true,
					onSearch: async function (res) {
                        thisObjDataTable.objData = {    
                            arrItens        : [],
                            arrItensAll     : [],
                            markItensAll    : 0,
                            pageAtual       : -1,
                            indIten         : -1,
                            indItenB        : -1
                        };
                        let myTable             = thisObjDataTable.myTable
                        let dataInit            = thisObjDataTable.dataInit
                        let objFunc             = thisObjDataTable.objFunc
                        let objData             = thisObjDataTable.objData
                        let datafilt            = thisObjDataTable.datafilt
                        if (!res) {        
                            thisObjDataTable.defineItensValid()
							await thisObjDataTable.opsNav(null, myTable, objFunc);
						}
						var search = datafilt.filter(function (el) {
							let resp = 0;
							for (i = 0; i < configParam.arrColumnsRender.length; i++) {
								if (el[configParam.arrColumnsRender[i]] != null) {
									if (el[configParam.arrColumnsRender[i]].toUpperCase().indexOf(res.toUpperCase()) >= 0) {
										resp = el[configParam.arrColumnsRender[i]].toUpperCase().indexOf(res.toUpperCase()) >= 0;
									}
								}
							}
							return resp;
						});
						if (search && search.length && res != '') {
                            objData.arrItensAll     = search
							objData.markItensAll    = 1
							await thisObjDataTable.opsNav(null, myTable, objFunc);
						} else if (res != '') {
							FLUIGC.toast({
								title: 'Searching: ',
								message: 'No results',
								type: 'success'
							});
						}
					}
				},
			}, function (err, data) {
				if (data) {
                    console.log(data)
					thisObjDataTable.dataInit = data;
				}
				else if (err) {
					FLUIGC.toast({
						message: err,
						type: 'danger'
					});
				}
			});
			btnNav = {
				btnPrev: 0,
				btnNext: 0
			}
			btnBck = document.getElementsByTagName('button')
			for (j = 0; j < btnBck.length; j++) {
				btnNow = btnBck[j];
				if (btnNow.attributes['data-nav-prev']) {
					btnNav.btnPrev = btnNow;
				} else if (btnNow.attributes['data-nav-next']) {
					btnNav.btnNext = btnNow;
				}
			}
			if (this.objData.pageAtual != 0) {
				btnNav.btnPrev.disabled = false
			}
			if (this.objData.indIten == this.objData.arrItensAll.length-1){                              // < --- this.objData.arrItensAll.length-1 referente ao ultimo index do array com todos os itens, caso obj.indIten tenha esse valor siginifca que não há mas opções para mostrar
				btnNav.btnNext.disabled = true
			}
			this.backward(this.myTable, this, this.objFunc);	// <----  segundo parametro passado é referente ao array de itens que serão considerados na tabela. Quando utilizado o filtro de pesquisa o array é redimencionado.
			this.forward(this.myTable, this, this.objFunc);
		},
		setFunc: function (objFnc) {
			if (objFnc != '' && objFnc != null && objFnc != undefined) {
				for (t = 0; t < objFnc.fnc.length; t++) {
					let params = objFnc.fnc[t]
					let name = objFnc.fnc[t].fncName
					this.objFunc.fnc[this.objFunc.fnc.length] = params
					this.objFunc[name] = objFnc[name]
				}
				console.log(this.objFunc)
			}
		},
		reload: async function (myTable, data, objFunc) {
			if (myTable != undefined) {
                await myTable.reload(data);
                if(data.length > 0){
                    if (objFunc != '' && objFunc != null && objFunc != undefined) {
                        for (t = 0; t < objFunc.fnc.length; t++) {
                            if (objFunc.fnc[t].metodhParam == 'reload') {
                                let name = objFunc.fnc[t].fncName
                                await objFunc[name]()
                            }
                        }
                    }
                }
                document.scrollingElement.scrollTop = 9000
			}
		},
		opsNav: async function (dirr, myTable, objFunc) {
			btnNav = {
				btnPrev: 0,
				btnNext: 0
			}
			btnBck = document.getElementsByTagName('button')
			for (j = 0; j < btnBck.length; j++) {
				btnNow = btnBck[j];
				if (btnNow.attributes['data-nav-prev']) {
					btnNav.btnPrev = btnNow;
				} else if (btnNow.attributes['data-nav-next']) {
					btnNav.btnNext = btnNow;
				}
			}
			if(!dirr){
                this.definePage();                                                              // < --- Redefini os parametros do objDataTable.objData para o reload
                await this.reload(myTable, this.objData.arrItens, objFunc);                     // < --- Apenas recarrega a tabela com a nova pagina definida com os parametros de objDataTable.objData
            }else if(dirr){
                this.definePage(1, dirr);                                                       // < --- Redefini os parametros do objDataTable.objData para o reload
                await this.reload(myTable, this.objData.arrItens, objFunc);                     // < --- Apenas recarrega a tabela com a nova pagina definida com os parametros de objDataTable.objData
			}
			
			if (this.objData.pageAtual != 0) {
				btnNav.btnPrev.disabled = false
			}
			if (this.objData.indIten == this.objData.arrItensAll.length-1){                              // < --- this.objData.arrItensAll.length-1 referente ao ultimo index do array com todos os itens, caso obj.indIten tenha esse valor siginifca que não há mas opções para mostrar
				btnNav.btnNext.disabled = true
			}
		},
		onselectrow: function (myTable, objFunc) {
			if (myTable != undefined) {
				/**
				 * objFunc = {
				 * 		fnc: [],
				 * 		
				 * 		a: function () {...},
				 * 		etc..
				 * }
				*/
				myTable.on('fluig.datatable.onselectrow', function (data) {
					var rowSltd = myTable.getRow(data.selectedIndex, true)[0]
					var dataReuniao = rowSltd.childNodes[0].innerText
					document.getElementById('dataSelected').value = dataReuniao
					var funNow = 0;
					if (objFunc != '' && objFunc != null && objFunc != undefined) {
						for (t = 0; t < objFunc.fnc.length; t++) {
							let name = objFunc.fnc[t]
							let funNow = objFunc[name]()
						}
					}
				});
			}
		},
		backward: function (myTable, thisObjDataTable, objFunc) {
			myTable.on('fluig.datatable.backward', async function () {
				let dirr = 0
				await thisObjDataTable.opsNav(dirr, myTable, objFunc)
			});
		},
		forward: function (myTable, thisObjDataTable, objFunc) {
			myTable.on('fluig.datatable.forward', async function () {
				let dirr = 1
				await thisObjDataTable.opsNav(dirr, myTable, objFunc)
			});
		}


	}; //objDataTable.paramsInit(objMain);



















function valueToggle(){
    let arrSw = ['switch_DISUP',
    'switch_DIRAF',
    'switch_DITEC']
    for(let i = 0; i < arrSw.length; i++){
        let swN = document.getElementById(arrSw[i])
        swN.addEventListener('change', function (){
            console.log(this)
            this.value = (this.checked) ? "on" : "";  
        }) 
    }    
    for(let i = 0; i < arrSw.length; i++){
        let swN = document.getElementById(arrSw[i])
        swN.value = (swN.checked) ? "on" : "";  
    }
}
window.addEventListener('laod', valueToggle);
function setControlNavTabs(){
    let navTabs = document.getElementById('navTabsOps');
    let navOps  = navTabs.children;
    let dirImed = objDefineStatus.matDir.split(':')[2];
    dirImed     = dirImed.split('%')[0];
    for(let i = 0; i < navOps.length; i++){
        navOps[i].addEventListener('click', controlNavTabs);
    }
    function controlNavTabs(){
        let navTabs = document.getElementById('navTabsOps');
        let navOps  = navTabs.children;
        for(let i = 0; i < navOps.length; i++){
             navOps[i].classList.remove('active')
        }
        this.classList.add('active')
        let idTarget = this.attributes['target-for-id'].value
        if(idTarget == 'opInfo'){
            idTarget = idTarget + dirImed
        }
        let itnsNavTabs = document.getElementById('itnsNavTabs').children;
        for(let i = 0; i < itnsNavTabs.length; i++){
            if(itnsNavTabs[i].id == idTarget){
                itnsNavTabs[i].style.display = 'block';
            }else{
                itnsNavTabs[i].style.display = 'none';    
            }
        }
    }
}
//window.addEventListener('load', setControlNavTabs)
function setDataset(){
    colleague = DatasetFactory.getDataset("colleague",null,null,null);
    dsc_Unidades = DatasetFactory.getDataset("dsc_Unidades",null,null,null);
    colleagueGroup = DatasetFactory.getDataset("colleagueGroup", null, null, null)
}window.addEventListener('load', setDataset)

function getUsersForRole (papel) {                   
    cll     = colleague;
    c7      = DatasetFactory.createConstraint("workflowColleagueRolePK.roleId", papel, papel,  ConstraintType.MUST); 
    cnst    = new Array(c7);
    dsCllfilter = DatasetFactory.getDataset("workflowColleagueRole",null,cnst,null);          
    objOptionsFil = { values: [] };
    for(z = 0; z <  dsCllfilter.values.length; z++){
        colleagueNowIn  = dsCllfilter.values[z]['workflowColleagueRolePK.colleagueId']
        dsCllFinal = 0;
        for(i = 0; i < cll.values.length; i++){
            if(cll.values[i]['colleaguePK.colleagueId'] == colleagueNowIn){                  
                dsCllFinal = cll.values[i];
            }
        }
        objOptionsFil.values.push(dsCllFinal)
    } 
    console.log(objOptionsFil)
    return objOptionsFil
}

function usersGet () {                   // Cria objeto com os dados dos usuários 
    cll     = colleague;
    c8      = DatasetFactory.createConstraint("colleagueGroupPK.groupId", "UsuarioInc", "UsuarioInc",  ConstraintType.MUST); 
    cnst    = new Array(c8);
    dsCllGroup = DatasetFactory.getDataset("colleagueGroup",null,cnst,null);           // Obtem as matriculas vinculadas ao grupo "UsuarioInc" que contem os usuários inativados
    objOptionsGroup = { values: [] };
    console.log(dsCllGroup)
    for(z = 0; z < cll.values.length; z++){
        colleagueNowIn = cll.values[z]['colleaguePK.colleagueId']
        checkColleague = 0;
        for(i = 0; i < dsCllGroup.values.length; i++){
            if(dsCllGroup.values[i]['colleagueGroupPK.colleagueId'] == colleagueNowIn){                
                checkColleague++
            }
        }
        if(checkColleague == 0){
            dsCllFinal = cll.values[z];
            objOptionsGroup.values.push(dsCllFinal)
        }
    }
    return objOptionsGroup
}window.addEventListener('load', usersGet)

function DemandResp() {
    cll         = colleague;
    elemSelc    = document.getElementById('slc_demandante')
    elemSelc.style.display = 'none'
    objOptions  = { values: [] };
    //objCllGer   = getUsersForRole("Assessores")
    //dsCllSse    = getUsersForRole("Gerentes")
    dsCllGrou = usersGet();

    function setOptionsSelectObj(datasetObjUser, objForSet){
        for(z = 0; z <  datasetObjUser.values.length; z++){
            nameCll     = datasetObjUser.values[z]['colleagueName']
            idCll       = datasetObjUser.values[z]['colleaguePK.colleagueId']
    
            objForSet.values.push(datasetObjUser.values[z])
    
            var nodeOP = document.createElement("option");
            var attOP = document.createAttribute("value");
            attOP.value = idCll
            nodeOP.setAttributeNode(attOP)
            nodeOP.innerText = nameCll
            elemSelc.appendChild(nodeOP);
        }
    }
    
    setOptionsSelectObj(dsCllGrou, objOptions)
    
    //setOptionsSelectObj(objCllGer, objOptions)    
    //setOptionsSelectObj(dsCllSse, objOptions)

    console.log(objOptions)
    function searchInpTemp(){
        var inpTemp = document.createElement('input');
        inpTemp.setAttribute('list', 'browsersP');
        inpTemp.setAttribute('class','form-control');
        inpTemp.setAttribute('name','slc_temp');
        inpTemp.setAttribute('id','slc_temp');
        inpTemp.setAttribute('autocomplete','off');
        inpTemp.setAttribute('style','color: black;');
        elemSelc.parentElement.appendChild(inpTemp);

        var vdatalist = document.createElement('datalist');
        vdatalist.setAttribute('id','browsersP');

        var arrayOption = objOptions.values  
        for(i = 0; i < arrayOption.length; i++){
            var voption = document.createElement('option')
            att = document.createAttribute('value')
            att.value = arrayOption[i]['colleagueName']
            voption.setAttributeNode(att)
            voption.innerText = arrayOption[i]['colleaguePK.colleagueId']
            vdatalist.appendChild(voption)
        }
        elemSelc.parentElement.appendChild(vdatalist);

        document.getElementById("slc_temp").addEventListener("change", function(){
            for(i = 0; i < arrayOption.length; i++){
                if(arrayOption[i].colleagueName == this.value){
                    document.getElementById("slc_demandante").value = arrayOption[i]['colleaguePK.colleagueId']
                    break;
                }
            }
        })
        dataTablemi.funcsChange.Name = 'a'
        dataTablemi.funcsChange['a'] = function (st) {          // Insere a colleague do usuário demandante ou escolhido para receber a deliberação com relação a informação salva na solicitação selecionada. 
            dsCllGrou = usersGet();
            cllNw = document.getElementById('slc_demandante').value
            inpTemp = document.getElementById('slc_temp')
            console.log(cllNw)
            for(i = 0; i < dsCllGrou.values.length; i++){
                if(cllNw == dsCllGrou.values[i]['colleaguePK.colleagueId']){
                    inpTemp.value = dsCllGrou.values[i]['colleagueName']
                    break;
                }
            }  
            if(st == 1){
                inpTemp.disabled = true
            }
            if(st == 0){
                inpTemp.disabled = false
            }
        }
    }
    searchInpTemp()
}
//window.addEventListener('load', DemandResp)

function setValueInpDelibr() {
    let stateNow = objDefineStatus.sequnce //window.parentOBJ.ECM.workflowView.sequence;
    matDirIn = 0;
    if(stateNow == 4 || stateNow == 0){
        document.getElementById('txt_IniDelibr').value = 'Aos cinco dias do mês de dezembro de 2022, às 10h, reuniu-se a Diretoria Executiva do SEBRAE no Amazonas, de forma virtual, com a participação das Diretoras Lamisse Said da Silva Cavalcanti – Diretora Superintendente, Adrianne Antony Gonçalves – Diretora Técnica e Ananda Carvalho Normando Pessôa – Diretora Administrativa e Financeira para deliberarem os seguintes assuntos:'
        document.getElementById('txt_FinDelibr').value = 'A reunião foi encerrada às 11h30, ficando acordado entre as Diretoras a realização da 46ª Reunião Ordinária DIREX 2022 no dia 05/12/2022, conforme previsto em calendário.'
        document.getElementById('txt_tituloReuniao').value = '20ª REUNIÃO ORDINÁRIA DIREX/AM '
    }

    var mat             = window.parent.WCMAPI.userCode;
    var ds_mat_ger_pdf  = colleague
    var ds_und_ger_pdf  = dsc_Unidades
    console.log(ds_mat_ger_pdf)
    console.log(ds_und_ger_pdf)
    console.log(mat)
    for(var i = 0;i<ds_mat_ger_pdf.values.length;i++){
        //console.log('***************************************///////////////////////////////////////////')
        //console.log(ds_und_ger_pdf)
        if(mat == ds_mat_ger_pdf.values[i]['colleaguePK.colleagueId']){
            var und = ds_mat_ger_pdf.values[i]['groupId'];
            console.log(und)
            for(var j=0;j<ds_und_ger_pdf.values.length;j++){
                if(und == ds_und_ger_pdf.values[j]['AntigaSigla']){
                    console.log("%Pool:Role:"+ds_und_ger_pdf.values[j]['Sigla']+"%")
                    matDirIn = ds_und_ger_pdf.values[j]['Sigla'];
                    if(ds_und_ger_pdf.values[j]['Sigla'] == 'NTIC'){
                        matDirIn = "DIRAF";
                    }else{
                        matDirIn = ds_und_ger_pdf.values[j]['Sigla'];
                    }
                }
            }
        }
    }
    if(matDirIn != 0){
        console.log(document.getElementById('txt_Info'+matDirIn))
        document.getElementById('txt_Info'+matDirIn).parentElement.parentElement.style.display = 'block';
        document.getElementById('txt_obsDlbr'+matDirIn).parentElement.parentElement.style.display = 'block';
    }
}window.addEventListener('load',setValueInpDelibr)

function definePainelEnabled(){
    console.log('************************************************        **********************************************')
    console.log(matDirIn)
/*  Depreciado ->
    let stateNow = window.parentOBJ.ECM.workflowView.stateDescription;
    if(stateNow == 'Detalhes da Solicitação'){ document.getElementById('PainelControle').style.display = 'none'; }
*/
    var ckInpStateDef = document.getElementById('txt_FinDelibr')
    var ckIsmatDirIn = 0;
    arrdirImed = ['DISUP', 'DIRAF', 'DITEC']
    for(i = 0; i < arrdirImed.length; i++){
        if(matDirIn == arrdirImed[i]){
            ckIsmatDirIn++
            console.log('************************************************        **********************************************')
            console.log(ckIsmatDirIn)
        }
    }
    if(ckInpStateDef.tagName == 'SPAN' && ckIsmatDirIn == 0){
        document.getElementById('DadosCadastro').innerHTML = '';
        document.getElementById('PainelControle').innerHTML = '';
    }

    let stts = objDefineStatus.sequnce//14 //window.parent.ECM.workflowView.sequence
    if(stts == 10 || stts == 13){
        document.getElementById('PainelControle').style.display = 'none'
    }else{ 
        document.getElementById('PainelControle').style.display = 'block'
    }  
}
//window.addEventListener('load', definePainelEnabled)

var myToast =  function (tp, title) {
    FLUIGC.toast({
        title: title,   //'Ação realizada com sucesso!',
        message: '',
        type: tp        //success, danger, info and warning.
        });
}

/*
function unidade(){
    var ds_mat_in = colleague
    var ds_und_in = dsc_Unidades
    var mat = document.getElementById("cmb_NomeSolicita").value;
    for(var i=0;i<ds_mat_in.values.length;i++){
        if(mat == ds_mat_in.values[i]['colleaguePK.colleagueId']){
            var und = ds_mat_in.values[i]['groupId'];
            for(var j=0;j<ds_und_in.values.length;j++){
                if(und == ds_und_in.values[j]['AntigaSigla']){
                    document.getElementById("cmb_GerenteSolicitante").value = ds_und_in.values[j]['NomeGerente']
                    document.getElementById("zm_UnidadeSolicitante").value = ds_und_in.values[j]['NomeUnidade']
                    document.getElementById("hd_numSuperior").value = ds_und_in.values[j]['Matricula']
                }
            }
        }
    }
}
window.addEventListener("load", unidade);
*/
function styleFormatDisable(){
    let arrayInput      = document.getElementsByTagName("input");
    let arraySpan       = document.getElementsByTagName("span");
    let arraySelect     = document.getElementsByTagName("select");
    let arrayP          = document.getElementsByTagName("p");
    let arrayTextA      = document.getElementsByTagName("textarea");
    //let arrayStrong     = document.getElementsByTagName("strong");
    let arrayTotal  = [arrayInput, arraySpan, arraySelect, arrayP, arrayTextA/*, arrayStrong*/];
    for(i = 0; i < arrayTotal.length; i++){
        let arrayGo = arrayTotal[i];
        for(y = 0; y < arrayGo.length; y++){
            if(arrayGo[y].getAttribute("class") != "fluigicon fluigicon-zoom-in" && arrayGo[y].getAttribute("class") != "input-group-addon"
            && arrayGo[y].getAttribute("class") != "select2-selection__choice__remove" && arrayGo[y].getAttribute("class") != "Obrigatorio"){
                //console.log(arrayGo[y].getAttribute("class"))
                arrayGo[y].style.color = "black";
            }
        }
    }
}
//function controllerTime(){ setTimeout(styleFormatDisable, 6000); }
//window.addEventListener('load', styleFormatDisable)
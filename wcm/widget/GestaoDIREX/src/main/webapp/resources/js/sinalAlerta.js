function alertAll () {
    this.optnListDefaut = []//window.parent.document.getElementById('optionList').children;
    this.arrListDefaut = ['data-cancel-workflow-request', 'data-transfer', 'data-send']
    this.arrNamesList = ['cancel', 'transfer', 'send'] 
    this.Now     = 4 //window.parent.ECM.workflowView.sequence
    document.getElementsByClassName('alert')[0].style.display = 'none'
  
    this.fixedMoviment(this.validate())
    //this.fixedAlert()  
}
// Altera o padrão do 'ALERTS' para fixar
alertAll.prototype.fixedAlert = function () {
    var sAlert = "position: fixed; z-index: 1110; top: -4px; left: 50%; width: 100%; transform: translateX(-50%); background-color: #1eaad9; color: #fff;"
    document.getElementsByClassName('alert')[0].style.cssText = sAlert
}

// Altera o style dos botões de movimetação e desabilita o botão de enviar
alertAll.prototype.fixedMoviment = function (statusIn) {
    obj_OptsFor = {}
    btnSend_s = ''
    arrbtnsEnv = window.parent.document.getElementsByClassName('btn-primary')
    console.log(arrbtnsEnv)
    for(za = 0; za < arrbtnsEnv.length; za++){
        btnCkNow = arrbtnsEnv[za]
        if(btnCkNow.getAttribute('data-send') == ''){
            btnSend_s = btnCkNow;
        }
    }
    for(i = 0; i < this.optnListDefaut.length; i++){
        for(j = 0; j < this.optnListDefaut[i].attributes.length; j++){
            for(k = 0; k < this.arrListDefaut.length; k++){
                atr = this.optnListDefaut[i].attributes[this.arrListDefaut[k]]
                if(atr != undefined){
                    //arr1.push(a[i])   
                    obj_OptsFor[this.arrNamesList[k]] = this.optnListDefaut[i];
                }
            }
        }
    }
    if(statusIn == 1){
        var sAlert = "position: fixed; z-index: 1110; top: -4px; left: 50%; width: 100%; transform: translateX(-50%); background-color: #1eaad9; color: #fff;"
        document.getElementsByClassName('alert')[0].style.cssText = sAlert
        console.log(btnSend_s)
        btnSend_s.disabled = true                   // não está desabilitando
        buttomKill = setInterval(teimosia, 500);
        function teimosia(){
            if(window.parent.document.getElementsByClassName('btn-primary')[6].disabled == false){
            window.parent.document.getElementsByClassName('btn-primary')[6].disabled = true
                clearInterval(buttomKill)
                console.log('teimosia')
            }
        }
       
        console.log(btnSend_s)
        console.log(obj_OptsFor)
        obj_OptsFor['send'].style.display = 'none'
        /*for (var i = 0; i < 5; i++) {
            console.log(window.parent.document.getElementsByClassName('dropdown-menu')[2])
            //window.parent.document.getElementsByClassName('dropdown-menu')[2].removeChild(window.parent.document.getElementsByClassName('dropdown-menu')[2].firstChild)
        }*/
        if(obj_OptsFor['cancel'] != undefined){
            obj_OptsFor['cancel'].style.color = "red"
        }
        
        if(obj_OptsFor['transfer'] != undefined){
            obj_OptsFor['transfer'].style.color = "green"
        }
    }else{
        btnSend_s.disabled = false
        document.getElementsByClassName('alert')[0].style.display = 'none'
        obj_OptsFor['send'].style.display = 'block'
    }
}

alertAll.prototype.validate = function (){
    var dt_slc 	= document.getElementById('dt_dataInicio');
    if(dt_slc != null && dt_slc != undefined && dt_slc != ''){
        //dt_slc.value
        formatDte   = dt_slc.value.split('-')[2]+'/'+dt_slc.value.split('-')[1]+'/'+dt_slc.value.split('-')[0]
        c5          = DatasetFactory.createConstraint("dataSelected", formatDte , formatDte,  ConstraintType.MUST, true); 
        cnst33      = new Array(c5)
        dsForCheck  = DatasetFactory.getDataset('Pauta DIREX', null, cnst33, null).values;
        sinalCkin   = 0;
        for( i = 0; i < dsForCheck.length; i++){
            inpHdnCk = dsForCheck[i].hdn_aprvAssr
            console.log(inpHdnCk)
            if(inpHdnCk != 19 && inpHdnCk != 17 && inpHdnCk != '' && inpHdnCk != undefined && inpHdnCk != null){
                sinalCkin++
            }
        }
        if(this.Now != 4 && this.Now != 0 && sinalCkin != 0){
            return 1
        }
    }
}
function intAlertAll(){ myAlertAll = new alertAll()}
window.addEventListener('load', intAlertAll)

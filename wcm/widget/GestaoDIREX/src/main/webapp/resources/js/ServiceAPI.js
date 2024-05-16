//***********************************************************************************************************************************/
/*
 *  res = {} mehtod 'Order'
 *      -> 0 == NumSolicitacao empty
 *      -> 1 == 1º passagem por requestGET
 *      -> 2 == 2° ultima passagem por requestGET
 */			 
//***********************************************************************************************************************************/
function resMethods(){
    res = {}
    window.res['arrIndx']   = [];
    window.res['lngtItems'] = 0;
    window.res['stItems'] = 0;
    return res
}
function orderMethods(){
    this.host                   = window.origin //"http://10.4.4.52:8080";   
    this.targetAssignee         = window.WCMAPI.userCode //document.getElementById('cmb_NomeSolicita').value
    resMethods();
}
orderMethods.prototype.movePOST = async function (NumSolicitacao, acao, dlbr, justf, votes, obsThis, resultAnalis, demandRsp, usersForEmail) { // < ------- mod
    var Nsolicitacao                = NumSolicitacao;           // Para este escopo
    orderMethodsMi.Nsolicitacao     = NumSolicitacao;           // Para o .done do ajax
    var acao                        = acao
    var targetAssignee              = this.targetAssignee
    var host                        = this.host;  
    await this.requestsGET(NumSolicitacao, this.host);
    console.log('**************************************** 1')
    async function pst(){
        try{
            var request = window.res 
            let resp    = request.responseIs
            console.log(resp)
            if(resp != undefined && resp != ""){
                var movementSequence    = request.responseIs.items[request.responseIs.items.length - 1].movementSequence;
                var targetState         = request.responseIs.items[request.responseIs.items.length - 1].state.sequence;
                var aprvAssr            = 0; 
                targetState = acao 
                aprvAssr    = acao;
                (window.res['lngtItems'] == 0)  ? window.res['lngtItems']   = request.responseIs.items.length : window.res['lngtItems'] = window.res['lngtItems'];
                (window.res['stItems'] == 0)    ? window.res['stItems']     = request.responseIs.items[request.responseIs.items.length - 1].state.sequence : window.res['stItems'] = window.res['stItems'];
                /**
                 *  targetState:    11  = Analise Assr
                 *                  9   = Ajuste
                 *                  14  = Incluir
                 *                  17  = Excluir
                */
               if(votes != undefined && votes != '' && votes != null){
                    var setFields = {
                        "hdn_aprvAssr":     aprvAssr,
                        "hdn_DISUP_vt":     votes.DISUP,
                        "hdn_DIRAF_vt":     votes.DIRAF,
                        "hdn_DITEC_vt":     votes.DITEC,
                        "txt_Deliberacao":  dlbr,
                        "txt_Justificativa":  justf,
                        "txt_obsDlbrDISUP":  obsThis.DISUP,
                        "txt_obsDlbrDIRAF":  obsThis.DIRAF,
                        "txt_obsDlbrDITEC":  obsThis.DITEC,
                        "txt_resultAnalis": resultAnalis,
                        "slc_demandante": demandRsp,
                        "zm_emailsCopia": usersForEmail                 // < ------- mod
                    }
                }else if(justf != undefined || justf != ''){
                        console.log('  /* * /* / * / */ * * / */ * / */ * /* /* //* / * / /* / * /* / * / * /')    
                    var setFields = {
                            "hdn_aprvAssr":     aprvAssr,
                            "txt_Justificativa":  justf,
                            "txt_resultAnalis": resultAnalis,
                            "slc_demandante": demandRsp,
                            "txt_Deliberacao":  dlbr
                        }
                }else{
                        var setFields = { "hdn_aprvAssr": aprvAssr }
                }
                /*
                async function transferRequest(){
                    await $.ajax({
                        method: "GET",
                        url: "https://mywebhm.am.sebrae.com.br/process-management/api/v2/requests/"+Nsolicitacao+"/tasks",
                        contentType: "application/json",
                        async: true
                    }).done(async function (response) {
                        console.log(response)
                        ckZ = 0;
                        for(c = response.items.length - 1; c != 0; c--){
                            userNow     = response.items[c].assignee.code
                            statusNow   = response.items[c].status 
                            if(statusNow == "NOT_COMPLETED"){
                                if(userNow != "Pool:Role:Assessores"){
                                    ckZ = 1

                                    await $.ajax({
                                        method: "POST",
                                        url: "https://mywebhm.am.sebrae.com.br/api/public/2.0/tasks/transfer",
                                        contentType: "application/json",
                                        data:  JSON.stringify(
                                                   { 
                                                       "userTo": targetAssignee, 
                                                       "userFrom": userNow, 
                                                       "transferActiveDocuments": false, 
                                                       "transferMyDocumentsInApproval": false, 
                                                       "transferPendingWorkflow": true, 
                                                       "transferOpenWorkflow": true, 
                                                       "transferApprovers": false, 
                                                       "transferApprovals": false, 
                                                       "transferDocumentSecurity": false, 
                                                       "instanceIdInitial": Nsolicitacao, 
                                                       "instanceIdFinal": Nsolicitacao
                                                   }),
                                        async: true
                                    }).done(async function (response) {
                                        await console.log(response)
                                    })
                                    break
                                }
                            }
                        }
                        console.log(ckZ)
                    })
                } 
                await transferRequest()
                */
                async function assumeUser(){
                    await $.ajax({
                        method: "POST",
                        url: host + "/api/public/2.0/workflows/assumeProcessTask",
                        contentType: "application/json", 
                        data:  JSON.stringify(
                            { 
                                "colleagueId" :         targetAssignee,         // Colleague id 
                                "processInstanceId" :   Nsolicitacao,           // Process instance id 
                                "movementSequence" :    movementSequence,       // Sequence from the task to take 
                                "replacementId" :       targetAssignee          // User id from the replacement taking the task for the user 
                            }
                            ),
                        async: false,
                        error: function(x, e) {
                            console.log(x)
                        }
                        }).done(async function (response) { 
                            console.log(response);
                            await response 
                        })
                }
                async function moveProcess(){
                    await $.ajax({
                        method: "POST",
                        url: host+"/process-management/api/v2/requests/"+Nsolicitacao+"/move",
                        contentType: "application/json", 
                        data:  JSON.stringify({
                            "assignee":             targetAssignee,
                            "targetAssignee":       'Pool:Role:Assessores',
                            "movementSequence":     movementSequence,   //7
                            "targetState":          targetState,        //9
                            "formFields":           setFields
                            }),
                        async: false,
                        error: function(x, e) {
                            console.log(x)
                            console.log(e)
                        }
                    }).done(async function (response) { 
                        console.log(response); 
                        n = orderMethodsMi.Nsolicitacao;
                        h = orderMethodsMi.host;
                        window.res['check'] = true;
                        if(orderMethodsMi.Nsolicitacao != ''){
                            await orderMethodsMi.requestsGET(n, h);
                        }else{
                            window.res['order']     = 0;
                        }
                    })
                }
                

                await assumeUser()
                await moveProcess()
            }
        }catch(err){window.res['err'] =  err.name;console.log(err) }
    }
    await pst();
}
orderMethods.prototype.requestsGET = async function (NumSolicit, host) {
    await $.ajax({
        method: "GET",
        url: host+"/process-management/api/v2/requests/"+NumSolicit+"/activities?page=1&pageSize=1000",
        contentType: "application/json",
        async: true
    }).done(async function (response) { 
        window.res['responseIs']        = response;
        st                              = response.items[response.items.length - 1].state.sequence
        if(window.res['check'] != undefined && window.res['lngtItems'] != response.items.length && window.res['stItems'] != st){
            if(window.res['check'] == true){
                window.res['order']     = 2;
            }else if(window.res['check'] == false){
                window.res['order']     = 1;
            }
        }
        window.res['err']       = '';
        console.log(window.res) 
        await response
    })
}
orderMethods.prototype.assumeUserGETall = async function (Nsolicitacao, colleagueId, movementSequence, objGetReturn) {
    await $.ajax({
        method: "POST",
        url: this.host+"/api/public/2.0/workflows/assumeProcessTask",
        contentType: "application/json", 
        data:  JSON.stringify(
            { 
                "colleagueId" :         colleagueId,         // Colleague id 
                "processInstanceId" :   Nsolicitacao,           // Process instance id 
                "movementSequence" :    movementSequence,       // Sequence from the task to take 
                "replacementId" :       colleagueId          // User id from the replacement taking the task for the user 
            }
            ),
        async: false,
        error: function(e) {
            console.log(e)
        }
        }).done(async function (response) { 
            nameAtt = objGetReturn['name'][0];
            objGetReturn[nameAtt] = response;
            await response
        })
}
orderMethods.prototype.requestsTasksGETall = async function (Nsolicitacao, objGetReturn) {
    await $.ajax({
        method: "GET",
        url: this.host+"/process-management/api/v2/requests/"+Nsolicitacao+"/tasks",
        contentType: "application/json",
        }).done(async function (response) { 
            nameAtt = objGetReturn['name'][0];
            objGetReturn[nameAtt] = response;
            await response
        })
}
orderMethods.prototype.requestsGETall = async function (Nsolicitacao, objGetReturn) {
    await $.ajax({
        method: "GET",
        url: this.host+"/process-management/api/v2/requests/"+Nsolicitacao,
        contentType: "application/json",
        }).done(async function (response) { 
            nameAtt = objGetReturn['name'][0];
            objGetReturn[nameAtt] = response;
            await response
        })
}
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
orderMethods.prototype.requestsActivitiesGETall = async function (NumSolicit, objGetReturn) {
    await $.ajax({
        method: "GET",
        url: this.host+"/process-management/api/v2/requests/"+NumSolicit+"/activities?page=1&pageSize=1000",
        contentType: "application/json",
        async: true
    }).done(async function (response) { 
        nameAtt = objGetReturn['name'][0];
        objGetReturn[nameAtt] = response;
        await response
    })
}
orderMethods.prototype.emailSend = async function (email, Delibr, tituloRN, dtRN, resultadoDelbr, obsDISUP, obsDIRAF, obsDITEC) {            // < ---------------------------------------- novo metodo para enviode email        
    await $.ajax({
        method: "POST",
        url: this.host   + "/api/public/alert/customEmailSender",
        contentType: "application/json", 
        timeout: 20000,
        data:  JSON.stringify(
            { 
                "to": email,
                "from": "intranet.am@am.sebrae.com.br",
                "subject": "Deliberação "+tituloRN+" - MYWEB",
                "templateId": "direx",
                "dialectId": "pt_BR",
                "param": {
                    "Nreuniao": tituloRN,
                    "dtR": dtRN,
                    "Delibr": Delibr,
                    "resultadoDelbr": resultadoDelbr, 
                    "obsDISUP": obsDISUP,
                    "obsDIRAF": obsDIRAF,
                    "obsDITEC": obsDITEC
                }
            }
            ),
        }).done(async function (response) { 
            console.log(response);
            await response 
        })
}
orderMethods.prototype.sendNotification = async function (host, login, tituloRN, NumSolicit) {            // < ---------------------------------------- novo metodo para enviode email        
    if(host == undefined || host == '' || host == null){
        host = this.host
    }
    await $.ajax({
        method: "POST",
        url: host   + "/api/public/alert/service/sendNotification",
        contentType: "application/json", 
        timeout: 20000,
        data:  JSON.stringify(
            {
                "eventKey": "MESSENGER_INVITE", 
                "loginReceiver": login, //"robemar.duarte", 
                "priority": "HIGH", 
                "object": { 
                    "alertObjectId": "2", 
                    "alertObjectTypeDescriptionKey" : "Processo",  
                    "alertObjectDescription": tituloRN, //"Encaminhamos a seguir a deliberação da 20ª REUNIÃO ORDINÁRIA DIREX/AM",
                    "alertObjectLink": "/pageworkflowview?app_ecm_workflowview_detailsProcessInstanceID="+NumSolicit // "/pageworkflowview?app_ecm_workflowview_detailsProcessInstanceID=78524" 
                }
            }
            ),
        }).done(async function (response) { 
            console.log(response);
            await response 
        })
}
orderMethods.prototype.indexFunctionsX = function () {
    window.res['numIndx'] = 2;
    if(window.res['arrIndx'].length == window.res['numIndx'] ){
        window.res['order']         = 0;
        window.res['arrIndx']       = [];
        window.res['responseIs']    = '';
        window.res['lngtItems']     = 0;
        window.res['stItems']       = 0;
    } 
}
orderMethods.prototype.moveSubst = async function (objBodyreq, objGetReturn) {
    let resp = await fetch("https://myweb.am.sebrae.com.br/ecm/api/rest/ecm/workflowView/send", {
    "headers": {
        "accept": "application/json, text/javascript, */*; q=0.01",
        "accept-language": "pt-PT,pt;q=0.9,en-US;q=0.8,en;q=0.7",
        "content-type": "application/json; charset=UTF-8",
        "sec-ch-ua": "\"Google Chrome\";v=\"123\", \"Not:A-Brand\";v=\"8\", \"Chromium\";v=\"123\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "x-requested-with": "XMLHttpRequest"
     },
    "referrer": "https://myweb.am.sebrae.com.br/portal/p/1/pageworkflowview?app_ecm_workflowview_processInstanceId="+objBodyreq['processInstanceId']+"app_ecm_workflowview_currentMovto="+objBodyreq['movementSequence']+"&app_ecm_workflowview_taskUserId="+objBodyreq['code']+"&app_ecm_workflowview_managerMode=false",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": "{\"processInstanceId\":"+objBodyreq['processInstanceId']+","+
            "\"processId\":\"CadastrodeReuniãoDIREX\","+
            "\"version\":"+objBodyreq['processVersion']+","+
            "\"taskUserId\":\""+objBodyreq['code']+"\","+
            "\"completeTask\":true,"+
            "\"currentMovto\":"+objBodyreq['movementSequence']+","+
            "\"managerMode\":false,"+
            "\"selectedDestinyAfterAutomatic\":-1,"+
            "\"conditionAfterAutomatic\":-1,"+
            "\"selectedColleague\":[\"Pool:Role:Assessores\"],"+
            "\"comments\":\"\","+
            "\"newObservations\":[],"+
            "\"appointments\":[],"+
            "\"attachments\":[],"+
            "\"digitalSignature\":false,"+
            "\"formData\":["+ 
                            "{\"name\":\"cmb_NomeSolicita\","+
                            "\"value\":\"00000563\"},"+
                            "{\"name\":\"hd_numSuperior\",\"value\":\"00000656\"},"+
                            "{\"name\":\"hd_numState\",\"value\":\"8\"},"+
                            "{\"name\":\"dt_DataSolicita\",\"value\":\"13/03/2024 09:09:12\"},"+
                            "{\"name\":\"cmb_GerenteSolicitante\",\"value\":\"Adrianne Antony\"},"+ 
                            "{\"name\":\"zm_UnidadeSolicitante\",\"value\":\"Diretoria Administrativa Financeira\"},"+
                            "{\"name\":\"txt_NumProcess\",\"value\":\"79940\"},"+
                            "{\"name\":\"dt_dataInicio\",\"value\":\"2024-03-18\"},"+
                            "{\"name\":\"dt_datalimit\",\"value\":\"2024-03-14\"},"+
                            "{\"name\":\"txt_tituloReuniao\",\"value\":\"40ª REUNIÃO ORDINÁRIA DIREX/AM \"},"+
                            "{\"name\":\"txt_InfoDISUP\",\"value\":\"<html>\\r\\n<head>\\r\\n\\t<title></title>\\r\\n</head>\\r\\n<body></body>\\r\\n</html>\\r\\n\"},"+
                            "{\"name\":\"txt_InfoDIRAF\",\"value\":\"<html>\\r\\n<head>\\r\\n\\t<title></title>\\r\\n</head>\\r\\n<body>\\r\\n<p>TESTE 6</p>\\r\\n</body>\\r\\n</html>\\r\\n\"},"+
                            "{\"name\":\"txt_InfoDITEC\",\"value\":\"<html>\\r\\n<head>\\r\\n\\t<title></title>\\r\\n</head>\\r\\n<body></body>\\r\\n</html>\\r\\n\"},"+
                            "{\"name\":\"txt_IniDelibr\",\"value\":\"<html>\\r\\n<head>\\r\\n\\t<title></title>\\r\\n</head>\\r\\n<body>\\r\\n<p>Aos cinco dias do m&ecirc;s de dezembro de 2022, &agrave;s 10h, reuniu-se a Diretoria Executiva do SEBRAE no Amazonas, de forma virtual, com a participa&ccedil;&atilde;o das Diretoras Lamisse Said da Silva Cavalcanti – Diretora Superintendente, Adrianne Antony Gon&ccedil;alves – Diretora T&eacute;cnica e Ananda Carvalho Normando Pess&ocirc;a – Diretora Administrativa e Financeira para deliberarem os seguintes assuntos:</p>\\r\\n</body>\\r\\n</html>\\r\\n\"},"+
                            "{\"name\":\"txt_FinDelibr\",\"value\":\"<html>\\r\\n<head>\\r\\n\\t<title></title>\\r\\n</head>\\r\\n<body>\\r\\n<p>A reuni&atilde;o foi encerrada &agrave;s 11h30, ficando acordado entre as Diretoras a realiza&ccedil;&atilde;o da 46ª Reuni&atilde;o Ordin&aacute;ria DIREX 2022 no dia 05/12/2022, conforme previsto em calend&aacute;rio.</p>\\r\\n</body>\\r\\n</html>\\r\\n\"},"+
                            "{\"name\":\"dataSelected\",\"value\":\"\"},"+
                            "{\"name\":\"slc_demandante\",\"value\":\"0\"},"+
                            "{\"name\":\"slc_temp\",\"value\":\"\"},"+
                            "{\"name\":\"slc_DISUP_vt\",\"value\":\"0\"},"+
                            "{\"name\":\"slc_UCOF_vt\",\"value\":\"0\"},"+
                            "{\"name\":\"slc_DITEC_vt\",\"value\":\"0\"},"+
                            "{\"name\":\"txt_Deliberacao\",\"value\":\"<html>\\r\\n<head>\\r\\n\\t<title></title>\\r\\n</head>\\r\\n<body></body>\\r\\n</html>\\r\\n\"},"+
                            "{\"name\":\"txt_Justificativa\",\"value\":\"<html>\\r\\n<head>\\r\\n\\t<title></title>\\r\\n</head>\\r\\n<body></body>\\r\\n</html>\\r\\n\"},"+
                            "{\"name\":\"txt_obsDlbrDISUP\",\"value\":\"<html>\\r\\n<head>\\r\\n\\t<title></title>\\r\\n</head>\\r\\n<body></body>\\r\\n</html>\\r\\n\"},"+
                            "{\"name\":\"txt_obsDlbrDIRAF\",\"value\":\"<html>\\r\\n<head>\\r\\n\\t<title></title>\\r\\n</head>\\r\\n<body></body>\\r\\n</html>\\r\\n\"},"+
                            "{\"name\":\"txt_obsDlbrDITEC\",\"value\":\"<html>\\r\\n<head>\\r\\n\\t<title></title>\\r\\n</head>\\r\\n<body></body>\\r\\n</html>\\r\\n\"},"+
                            "{\"name\":\"checkbox1\",\"value\":\"\"},"+
                            "{\"name\":\"switch_DISUP\",\"value\":\"\"},"+
                            "{\"name\":\"switch_DIRAF\",\"value\":\"\"},"+
                            "{\"name\":\"switch_DITEC\",\"value\":\"\"},"+
                            "{\"name\":\"zm_emailsCopia\",\"value\":\"\"}],"+
            "\"isDigitalSigned\":false,"+
            "\"isLinkReturn\":false,"+
            "\"versionDoc\":"+objBodyreq['version']+","+
            "\"selectedState\":\""+objBodyreq['sequence']+"\","+
            "\"internalFields\":[],"+
            "\"subProcessId\":\"CadastrodeReuniãoDIREX\","+
            "\"subProcessSequence\":\""+objBodyreq['sequence']+"\","+
            "\"transferTaskAfterSelection\":false,"+
            "\"currentState\":"+objBodyreq['sequence']+""+
        "}",
    "method": "POST",
    "mode": "cors",
    "credentials": "include"
    });
    nameAtt = objGetReturn['name'][0];
    objGetReturn[nameAtt] = resp;
}
orderMethods.prototype.saveSubst = async function (NumSolicit, taskUserId, currentMovt, objBodyreq, objGetReturn) {
    let resp = await fetch("https://myweb.am.sebrae.com.br/ecm/api/rest/ecm/workflowView/send", {
        "headers": {
          "accept": "application/json, text/javascript, */*; q=0.01",
          "accept-language": "pt-PT,pt;q=0.9",
          "content-type": "application/json; charset=UTF-8",
          "sec-ch-ua": "\"Google Chrome\";v=\"123\", \"Not:A-Brand\";v=\"8\", \"Chromium\";v=\"123\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"Windows\"",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-origin",
          "x-requested-with": "XMLHttpRequest"
        },
        "referrer": "https://myweb.am.sebrae.com.br/portal/p/1/pageworkflowview?app_ecm_workflowview_processInstanceId="+NumSolicit+"&app_ecm_workflowview_currentMovto="+currentMovt+"&app_ecm_workflowview_taskUserId="+taskUserId+"&app_ecm_workflowview_managerMode=false",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": "{  \"processInstanceId\":"+objBodyreq['processInstanceId']+","+
                    "\"processId\":\"CadastrodeReuniãoDIREX\","+
                    "\"version\":"+objBodyreq['processVersion']+","+
                    "\"taskUserId\":\""+objBodyreq['code']+"\","+
                    "\"completeTask\":false,"+
                    "\"currentMovto\":"+objBodyreq['movementSequence']+","+
                    "\"managerMode\":false,"+
                    "\"selectedDestinyAfterAutomatic\":-1,"+
                    "\"conditionAfterAutomatic\":-1,"+
                    "\"selectedColleague\":[\"Pool:Role:Assessores\"],"+
                    "\"comments\":\"\","+
                    "\"newObservations\":[],"+
                    "\"appointments\":[],"+
                    "\"attachments\":[],"+
                    "\"pass\":null,"+
                    "\"digitalSignature\":false,"+
                    "\"formData\":"+objBodyreq['formData']+","+
                    "\"isDigitalSigned\":false,"+
                    "\"isLinkReturn\":null,"+
                    "\"versionDoc\":"+objBodyreq['version']+","+
                    "\"selectedState\":"+objBodyreq['sequence']+","+
                    "\"internalFields\":[],"+
                    "\"subProcessId\":null,"+
                    "\"subProcessSequence\":null,"+
                    "\"currentState\":"+objBodyreq['sequence']+""+
                "}",
        "method": "POST",
        "mode": "cors",
        "credentials": "include"
      });
    nameAtt = objGetReturn['name'][0];
    objGetReturn[nameAtt] = resp;
}

function orderMethodsInit() { orderMethodsMi = new orderMethods(); }
window.addEventListener('load', orderMethodsInit)
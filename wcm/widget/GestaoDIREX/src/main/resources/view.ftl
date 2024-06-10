<!--<div id="ServiceAPI"class="super-widget wcm-widget-class fluig-style-guide"
	data-params="ServiceAPI.instance()">
-->

<link type="text/css" rel="stylesheet" href="/style-guide/css/fluig-style-guide-flat.min.css" />
<script type="text/javascript" src="/portal/resources/js/jquery/jquery.js"></script>
<script type="text/javascript" src="/portal/resources/js/jquery/jquery-ui.min.js"></script>
<script type="text/javascript" src="/portal/resources/js/mustache/mustache-min.js"></script>
<script type="text/javascript" src="/style-guide/js/fluig-style-guide.min.js" charset="utf-8"></script>
<script type="text/javascript" src="/webdesk/vcXMLRPC.js"></script>

<link rel="stylesheet" type="text/css" href="/style-guide/css/fluig-style-guide-filter.min.css">
<script src="/style-guide/js/fluig-style-guide-filter.min.js"></script>
<script type="text/javascript" src="/portal/resources/style-guide/js/fluig-style-guide-richeditor.min.js"></script>

<script src="/ecm_resources/resources/assets/forms/forms.js?v=1.8.1-231010"></script>
<link type="text/css" rel="stylesheet" href="/style-guide/css/fluig-style-guide-flat.min.css?v=1.8.1-231010">
<link rel="stylesheet" type="text/css" href="/style-guide/css/fluig-style-guide-select.min.css">
<link rel="stylesheet" type="text/css"
	href="https://myweb.am.sebrae.com.br/ecm_workflowview/resources/css/mistPrintBtn.css">
<style>
	body {
		overflow-x: hidden;
		margin-bottom: 40px;
	}

	.fluig-style-guide .form-horizontal .form-group span.form-control {
		padding-top: 9px !important;
	}

	.workflowdatetimepicker {
		bottom: auto !important;
		height: auto
	}
</style>
<script type="text/javascript" src="/style-guide/plugins/richeditor/config.js?t=H0CG"></script>
<script type="text/javascript" src="/style-guide/plugins/richeditor/skins/bootstrapck/skin.js?t=H0CG"></script>
<link rel="stylesheet" type="text/css" href="/style-guide/plugins/richeditor/skins/bootstrapck/editor.css?t=H0CG">
<script type="text/javascript" src="/style-guide/plugins/richeditor/lang/en.js?t=H0CG"></script>
<script type="text/javascript" src="/style-guide/plugins/richeditor/styles.js?t=H0CG"></script>
<script type="text/javascript" src="/style-guide/plugins/richeditor/plugins/fluigimage/plugin.js?t=H0CG"></script>
<script type="text/javascript" src="/style-guide/plugins/richeditor/plugins/image2/plugin.js?t=H0CG"></script>
<script type="text/javascript" src="/style-guide/plugins/richeditor/plugins/fluigvideo/plugin.js?t=H0CG"></script>
<script type="text/javascript" src="/style-guide/plugins/richeditor/plugins/oembed/plugin.js?t=H0CG"></script>
<script type="text/javascript" src="/style-guide/plugins/richeditor/plugins/widget/plugin.js?t=H0CG"></script>
<script type="text/javascript" src="/style-guide/plugins/richeditor/plugins/lineutils/plugin.js?t=H0CG"></script>
<script type="text/javascript" src="/style-guide/plugins/richeditor/plugins/image2/lang/en.js?t=H0CG"></script>
<script type="text/javascript" src="/style-guide/plugins/richeditor/plugins/oembed/lang/en.js?t=H0CG"></script>
<script type="text/javascript" src="/style-guide/plugins/richeditor/plugins/widget/lang/en.js?t=H0CG"></script>
<script type="text/javascript" src="/style-guide/plugins/richeditor/plugins/oembed/libs/jquery.oembed.min.js?t=H0CG"></script>
<style type="text/css">
	.Obrigatorio {
		color: red;
	}
</style>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet"
	integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
	integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
	crossorigin="anonymous"></script>


<style>
.rainbow {
   border:  4px solid rgb(0, 42, 255);
   animation: clippath 2s infinite linear;
   z-index: -1;
 }
  @keyframes clippath {
    0%,
    100% {
      border-color: rgb(0, 42, 255);
    }

    25% {
      border-color: rgb(0, 70, 255);
    }
    50% {
      border-color: rgb(0, 125, 255);
    }
    75% {
      border-color: rgb(0, 220, 255);
    }
  }
</style>

<div class="modal modal-lg fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
	<div class="modal-dialog modal-dialog-centered">
	  <div class="modal-content">
		<div class="modal-header">
		  <h1 class="modal-title fs-5" id="exampleModalToggleLabel">Painel de Definição</h1>
		  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" id="closePainel"></button>
		</div>
		<div class="modal-body">
			<div class="row" id="msnConfirm">
				<h3>Desejá realmente salvar as alterações ?</h3>
		  	</div>
			<div class="col-md-4" id="slcMove" style="display: none">
				<select class="form-control" name="slc_moveProcess" id="slc_moveProcess">
					<option></option>
				</select>
		  	</div>
			<!--
			<div class="row">
				<div class="col-md-4" style="color: green;"><b>Transferidas com sucesso</b></div><div class="col-md-2" id="trsSucess"><b></b></div>
			</div>
			<div class="row">
				<div class="col-md-4" style="color: red;"><b>Falhas</b></div><div class="col-md-2" id="trsFail"><b></b></div>
		  	</div>
			-->
		</div>
		<div class="modal-footer">
			<button class="btn btn-secondary" data-bs-dismiss="modal" id="cancelSave">Fechar</button>
			<button class="btn btn-primary" id="getNewData" style="display: none;">
				Puxar novas informações para o formulário local 
			</button>
			<button class="btn btn-primary" id="initMove">
				Movimentar 
			</button>
			<button class="btn btn-primary" id="initSave">
				Sim 
			</button>
		</div>
	  </div>
	</div>
  </div>

  <div class="modal fade" id="exampleModalPopovers" tabindex="-1" aria-labelledby="exampleModalPopoversLabel" aria-hidden="true">
	<div class="modal-dialog modal-dialog-centered">
	  <div class="modal-content">
		<div class="modal-header">
		  <h1 class="modal-title fs-5" id="exampleModalPopoversLabel">Justificativa da Devolução</h1>
		  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
		</div>
		<div class="modal-body">
			<div id="justfExec">
				<label for="JustfDevolv">Texto jusitficativa<span class="Obrigatorio"><strong>*</strong></span>:</label>
				<hr>
				<textarea class="form-control" name="JustfDevolv" id="JustfDevolv" rows="5"></textarea>
			</div>
			<div id="justfConcl" style="display: none;">
				<h3>Item enviado para ajustes de demandante.</h3>
			</div>
		</div>
		<div class="modal-footer">
		  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
		  <button type="button" class="btn btn-primary" id="envAjust">Enviar</button>
		</div>
	  </div>
	</div>
  </div>

  <div class="modal modal-lg fade" id="novaPauta" tabindex="-1" aria-labelledby="novaPautaLabel" aria-modal="true">
	<div class="modal-dialog modal-dialog-centered">
	  <div class="modal-content">
		<div class="modal-header">
		  <h1 class="modal-title fs-5" id="novaPautaLabel">Inserção de Nova Pauta</h1>
		  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
		</div>
		<div class="modal-body">
			<div id="justfExec">
				<label for="txt_assunto_addPauta">Assunto<span class="Obrigatorio"><strong>*</strong></span>:</label>
				<input type="text" class="form-control" name="txt_assunto_addPauta" id="txt_assunto_addPauta">
				<hr>
				<label for="txt_Justificativa_addPauta">Justificativa do Demandante / Dotação Orçamentária<span class="Obrigatorio"><strong>*</strong></span>:</label>
				<textarea class="form-control" name="txt_Justificativa_addPauta" id="txt_Justificativa_addPauta" rows="5"></textarea>
			</div>
		</div>
		<div class="modal-footer">
		  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
		  <button type="button" class="btn btn-primary" id="envPauta">Enviar</button>
		</div>
	  </div>
	</div>
  </div>

<div class="fluig-style-guide">
	<form name="form" role="form">
		<div class="paragraph-is-required system-message-information alert alert-info" role="alert"
			style="display: none">
			<p>A sua assessoria ou outra(s) <b style="color: rgb(126, 36, 36)">estão com Deliberações pendentes</b>. Ao
				terminar o trabalho, é necessário <b>Transferir</b> a solicitação para que outra assessoria possa
				concluir o trabalho pendente.</p>
			<p>OBS: Caso a opção de enviar fique habilitada, isso indica que não há pendencias para nenhuma assessoria.
			</p>
		</div>
		<input type="hidden" name="hd_numSuperior" id="hd_numSuperior">
		<input type="hidden" name="hd_numState" id="hd_numState">

		<div class="fluig-style-guide" id="bar-header-n">
			<div
				style="border: solid;border-color: black;border-width: 2px;padding-top: 0x;position: fixed;display: block;background-attachment: fixed; z-index: 10; background-color: white; box-sizing: border-box;width: 100%; opacity: 0.97;">
				<div class="panel-body">
						
                    <div id="icon-R" style="float: left; padding-top: 20px; display: none;">
						<svg xmlns="http://www.w3.org/2000/svg" width="100" height="70" fill="currentColor" class="bi bi-file-earmark-spreadsheet" viewBox="0 0 16 16">
						<path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V9H3V2a1 1 0 0 1 1-1h5.5zM3 12v-2h2v2zm0 1h2v2H4a1 1 0 0 1-1-1zm3 2v-2h3v2zm4 0v-2h3v1a1 1 0 0 1-1 1zm3-3h-3v-2h3zm-7 0v-2h3v2z"></path>
						</svg>
					</div><div id="desc" style="float: left; padding-right: 50px; border-right: solid; display: none;">
						<h2 id="desc-titulo">20ª REUNIÃO ORDINÁRIA DIREX/AM</h2>
						<h4 id="desc-subTitulo">Data da Reunião: 01/01/2024</h4>
						<h6 id="desc-link"><a href="#">Acessar outra reunião / Cadastrar Nova Reunião</a></h6>
					</div>

					<div style="float: left; padding-left: 100px; padding-right: 60px; padding-top: 5px; display: none; cursor: pointer" data-bs-target="#exampleModalToggle" data-bs-toggle="modal" data-toggle="tooltip" data-placement="bottom" data-original-title="Movimentar" id="min-fluxo">
						<div style="border: solid;border-width: 4px;border-color: #777;padding-left: 20px;padding-right: 20px;padding-bottom: 35px;padding-top: 35px; float: left; margin: 0px; border-radius: 5px;" id="13n">Definição de Reunião</div>
						<svg height="100" width="50" xmlns="http://www.w3.org/2000/svg" style="float: left;">
							<line x1="-20" y1="60" x2="50" y2="60" style="stroke:red;stroke-width:2"></line>
						</svg>
						<div style="border: solid;border-width: 4px;border-color: #777;padding-left: 20px;padding-right: 20px;padding-bottom: 35px;padding-top: 35px; float: left; margin: 0px; border-radius: 5px;" id="8n">Analise / Deliberação</div>
						<svg height="100" width="50" xmlns="http://www.w3.org/2000/svg" style="float: left;">
							<line x1="-20" y1="60" x2="50" y2="60" style="stroke:red;stroke-width:2"></line>
						</svg>
						<div style="border: solid;border-width: 4px;border-color: #777;padding-left: 60px;padding-right: 60px;padding-bottom: 35px;padding-top: 35px; float: left; margin: 0px; border-radius: 5px;" id="10n">Arquivo</div>
					</div>
					<div id="icon-P" style="float: left; padding-top: 30px; padding-left: 10px; padding-right: 10px; display: none;"  data-toggle="tooltip" data-placement="bottom" data-original-title="Página Principal">
						<svg xmlns="http://www.w3.org/2000/svg" width="100" height="60" fill="currentColor" class="bi bi-files" viewBox="0 0 16 16" style="cursor: pointer" id="init-op">
							<path d="M13 0H6a2 2 0 0 0-2 2 2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 2 2 0 0 0 2-2V2a2 2 0 0 0-2-2m0 13V4a2 2 0 0 0-2-2H5a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1M3 4a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z"></path>
						</svg>
					</div>
					<div id="icon-T" style="float: left; padding-top: 30px; padding-left: 10px; padding-right: 10px; display: none;" data-toggle="tooltip" data-placement="bottom" data-original-title="Pautas de Gabinetes">
						<svg xmlns="http://www.w3.org/2000/svg" width="100" height="60" fill="currentColor" class="bi bi-toggles" viewBox="0 0 16 16" style="cursor: pointer" id="deliber-op">
							<path d="M4.5 9a3.5 3.5 0 1 0 0 7h7a3.5 3.5 0 1 0 0-7zm7 6a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5m-7-14a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5m2.45 0A3.5 3.5 0 0 1 8 3.5 3.5 3.5 0 0 1 6.95 6h4.55a2.5 2.5 0 0 0 0-5zM4.5 0h7a3.5 3.5 0 1 1 0 7h-7a3.5 3.5 0 1 1 0-7"></path>
						</svg>
					</div>

					<div id="icon-S" style="float: left; padding-top: 30px; padding-left: 10px; padding-right: 10px; display: none;" data-toggle="tooltip" data-placement="bottom" data-original-title="Salvar">
						<svg xmlns="http://www.w3.org/2000/svg" width="100" height="60" fill="currentColor" class="bi bi-floppy" viewBox="0 0 16 16" style="cursor: pointer" data-bs-target="#exampleModalToggle" data-bs-toggle="modal" id="save-op">
							<path d="M11 2H9v3h2z"/>
							<path d="M1.5 0h11.586a1.5 1.5 0 0 1 1.06.44l1.415 1.414A1.5 1.5 0 0 1 16 2.914V14.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 14.5v-13A1.5 1.5 0 0 1 1.5 0M1 1.5v13a.5.5 0 0 0 .5.5H2v-4.5A1.5 1.5 0 0 1 3.5 9h9a1.5 1.5 0 0 1 1.5 1.5V15h.5a.5.5 0 0 0 .5-.5V2.914a.5.5 0 0 0-.146-.353l-1.415-1.415A.5.5 0 0 0 13.086 1H13v4.5A1.5 1.5 0 0 1 11.5 7h-7A1.5 1.5 0 0 1 3 5.5V1H1.5a.5.5 0 0 0-.5.5m3 4a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V1H4zM3 15h10v-4.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5z"/>
						  </svg>
					</div>

	
					<div class="col-md-6" style="border-right: solid;border-right-color: black;border-right-width: 2px; display: none;" id="opsCadastro">
						<h2><b>Cadastrar Nova Reunião</b></h2>
						<div class="row">
							<div class="col-md-3">
								<!--<div class="pull-left">-->
								<div class="form-group">
									<label for="dt_dataInicio_reg">Data da Reunião:</label>
									<input type="date" class="form-control" name="dt_dataInicio" id="dt_dataInicio_reg">
								</div>
								<!--</div>-->
							</div>
							<div class="col-md-3">
								<div class="form-group">
									<label for="dt_datalimi_reg">Data Limite para Inserção:</label>
									<input type="date" class="form-control" name="dt_datalimi_reg" id="dt_datalimi_reg">
								</div>
							</div>
							<div class="col-md-6">
								<div class="form-group">
									<label for="txt_tituloReuniao_reg">Titulo da Reunião:</label>
									<input type="text" class="form-control" name="txt_tituloReuniao_reg"
										id="txt_tituloReuniao_reg">
								</div>
							</div>
						</div>
						<button type="button" class="btn btn-success btn-lg"
							style="padding: 15px; padding-left: 3rem; padding-right: 3rem; margin-top: 15px;" id="btnCadastro">Cadastrar</button>
					</div>
					<div class="col-md-5" id="opsAcess" style="display: none;">
						<h2><b>Selecionar Reunião</b></h2>
						<label for="zm_reunioes">Lista de Reuniões</label>
						<div>
							<select class="form-control" name="slc_reuniao" id="slc_reuniao"></select>
						</div>
						<button type="button" class="btn btn-success btn-lg" style="padding: 15px; padding-left: 3rem; padding-right: 3rem; margin-top: 15px;" id="btnAcessar">Acessar</button>
					</div>

				</div>
			</div>
		</div>

		<div id="CadastroReuniaoDIREX" style="padding-top: 255px">
		</div>
	
		<div class="panel panel-primary" id="DadosSolicitante" style="display: none;">
		<div class="panel-heading">
			<h3 class="panel-title">
				<b>Dados da Assessoria</b>
			</h3>
		</div>

		<div class="panel-body">
		<div class="form-group row">
		<div class="col-md-4">
			<label for="cmb_NomeSolicita">Assessor(a):</label>
			<input type="text" class="form-control" name="cmb_NomeSolicita" id="cmb_NomeSolicita" readonly>
			<!--<select name="cmb_NomeSolicita" id="cmb_NomeSolicita" dataset="colleague" datasetkey="colleagueId" datasetvalue="colleagueName" 
			class="form-control" readonly></select>
			-->
		</div>
		<div class="col-md-4">
			<label for="dt_DataSolicita">Data e horário:</label>
			<input type="text" class="form-control" name="dt_DataSolicita" id="dt_DataSolicita" readonly>
		</div>
		</div>
		<div class="form-group row">
		<div class="col-md-4">
			<label for="cmb_GerenteSolicitante">Diretor(a):</label>
			<input type="text" class="form-control" name="cmb_GerenteSolicitante" id="cmb_GerenteSolicitante" readonly>
		</div>
		<div class="col-md-4">
			<label class="zm_UnidadeSolicitante">Diretoria:</label>
			<input type="text" class="form-control" name="zm_UnidadeSolicitante" id="zm_UnidadeSolicitante" readonly>
		</div>
		<div class="col-md-4" id="Numero_Process_Atual">
			<label for="txt_NumProcess">N° Processo / Reunião:</label>
			<input type="text" class="form-control" name="txt_NumProcess" id="txt_NumProcess" style="color: black;" readonly>
		</div>
		</div>
		</div>
		</div>
		

		<div class="panel panel-primary" id="DadosCadastro" style="display: none;">
			<div class="panel-heading">
				<h3 class="panel-title">
					<b>Dados da Reunião</b>
				</h3>
			</div>
			<div class="panel-body">
				<div class="col-md-6" style="border-right: solid;border-right-color: black;border-right-width: 2px;">
					<div class="row">
						<div class="col-md-3">
							<!--<div class="pull-left">-->
							<div class="form-group">
								<label for="dt_dataInicio">Data da Reunião<span
										class="Obrigatorio"><strong>*</strong></span>:</label>
								<input type="date" class="form-control" name="dt_dataInicio" id="dt_dataInicio">
							</div>
							<!--</div>-->
						</div>
						<div class="col-md-3">
							<div class="form-group">
								<label for="dt_datalimit">Limite para Inserção<span
										class="Obrigatorio"><strong>*</strong></span>:</label>
								<input type="date" class="form-control" name="dt_datalimit" id="dt_datalimit">
							</div>
						</div>
						<div class="col-md-6">
							<div class="form-group">
								<label for="txt_tituloReuniao">Titulo da Reunião<span
										class="Obrigatorio"><strong>*</strong></span>:</label>
								<input type="text" class="form-control" name="txt_tituloReuniao" id="txt_tituloReuniao">
							</div>
						</div>
					</div>
					<ul class="nav nav-tabs clearfix" role="tablist" id="navTabsOps" style="margin-bottom: 15px;">
						<li class="active" id="navOpinf" target-for-id="opInfo"><a href="#">Informes</a></li>
						<li target-for-id="opIni"><a href="#" id="navOpini">Início da Ata</a></li>
						<li target-for-id="opFim"><a href="#" id="navOpfim">Fim da Ata</a></li>
					</ul>
					<div class="col-md-12" id="itnsNavTabs">
						<div class="col-md-12" style="display: none" id="opInfoDISUP">
							<div class="form-group">
								<label for="txt_InfoDISUP">Informes DISUP<span
										class="Obrigatorio"><strong>*</strong></span>:</label>
								<textarea class="form-control" rows="3" name="txt_InfoDISUP"
									id="txt_InfoDISUP"></textarea>
							</div>
						</div>
						<div class="col-md-12" style="display: none" id="opInfoDIRAF">
							<div class="form-group">
								<label for="txt_InfoDIRAF">Informes DIRAF<span
										class="Obrigatorio"><strong>*</strong></span>:</label>
								<textarea class="form-control" rows="3" name="txt_InfoDIRAF"
									id="txt_InfoDIRAF"></textarea>
							</div>
						</div>
						<div class="col-md-12" style="display: none" id="opInfoDITEC">
							<div class="form-group">
								<label for="txt_InfoDITEC">Informes DITEC<span
										class="Obrigatorio"><strong>*</strong></span>:</label>
								<textarea class="form-control" rows="3" name="txt_InfoDITEC"
									id="txt_InfoDITEC"></textarea>
							</div>
						</div>
						<div class="col-md-12" style="display: none" id="opIni">
							<div class="form-group">
								<label for="txt_IniDelibr">Início da Ata<span
										class="Obrigatorio"><strong>*</strong></span>:</label>
								<textarea class="form-control" rows="3" name="txt_IniDelibr"
									id="txt_IniDelibr"></textarea>
							</div>
						</div>
						<div class="col-md-12" style="display: none" id="opFim">
							<div class="form-group">
								<label for="txt_FinDelibr">Fim da Ata<span
										class="Obrigatorio"><strong>*</strong></span>:</label>
								<textarea class="form-control" rows="3" name="txt_FinDelibr"
									id="txt_FinDelibr"></textarea>
							</div>
						</div>
					</div>
				</div>


				<div class="col-md-3">
					<div class="col-md-12">
						<div class="form-group" id="CodContratacao">
							<div class="card" style="color: black">
								<div class="card-body">
									<h3 class="card-title"><i class="flaticon flaticon-add-branch icon-thumbnail-md"
											aria-hidden="true" style="color: #43ab69;"></i> Gerar ATA</h3>
									<p class="card-text">O documento será gerado Automáticamente</p>
									<div class="col-md-6">
										<div class="input-group">
											<!--<input type="text" class="form-control" name="txt_CodContratacao" id="txt_CodContratacao" placeholder="Exemplo: AM0820220063">
							-->
											<button type="button" class="btn btn-primary" id="getData">Obter
												PDF</button>
										</div>
									</div>
									<sup data-toggle="tooltip" data-placement="right"
										title="O documento será gerado em PDF, somente com os itens Deliberados.">
										<i class="fluigicon fluigicon-info-sign icon-sm" aria-hidden="true"></i></sup>

								</div>
							</div>
						</div>
					</div>
					<div class="col-md-12" id="switch_DISUP_all">
						<div>
							<b>Liberar acesso de Pauta para outros gabinetes</b>
						</div>
						<br>
						<div class="switch switch-success">
							<input class="switch-input" type="checkbox" name="switch_DISUP" id="switch_DISUP">
							<label class="switch-button" for="switch_DISUP">Toggle</label>
						</div>
					</div>
					<div class="col-md-12" id="switch_DIRAF_all">
						<div>
							<b>Liberar acesso de Pauta para outros gabinetes</b>
						</div>
						<br>
						<div class="switch switch-success">
							<input class="switch-input" type="checkbox" name="switch_DIRAF" id="switch_DIRAF">
							<label class="switch-button" for="switch_DIRAF">Toggle</label>
						</div>
					</div>
					<div class="col-md-12" id="switch_DITEC_all">
						<div>
							<b>Liberar acesso de Pauta para outros gabinetes</b>
						</div>
						<br>
						<div class="switch switch-success">
							<input class="switch-input" type="checkbox" name="switch_DITEC" id="switch_DITEC">
							<label class="switch-button" for="switch_DITEC">Toggle</label>
						</div>
					</div>
				</div>
				<div class="col-md-3" id="getData_ptd_all">
					<div class="col-md-12">
						<div class="form-group">
							<div class="card" style="color: black">
								<!----------------------------------------------------slcIn -->
								<div class="card-body">
									<h3 class="card-title"><i class="flaticon flaticon-tests-central icon-thumbnail-md"
											aria-hidden="true"></i> Gerar itens de Pauta DISUP</h3>
									<p class="card-text">O documento será gerado Automáticamente</p>
									<div class="col-md-6">
										<div class="input-group">
											<!--<input type="text" class="form-control" name="txt_CodContratacao" id="txt_CodContratacao" placeholder="Exemplo: AM0820220063">
							-->
											<button type="button" class="btn btn-primary" id="getData_ptd">Obter
												PDF</button>
										</div>
									</div>
									<sup data-toggle="tooltip" data-placement="right"
										title="O documento será gerado em PDF, somente com os itens aprovados para Deliberação.">
										<i class="fluigicon fluigicon-info-sign icon-sm" aria-hidden="true"></i></sup>
								</div>
							</div>
						</div>
					</div>
					<div class="col-md-12" id="itnsList_DISUP">
						<div class="form-group">
							<div class="card" style="color: black">
								<div class="card-body">
									<h3 class="card-title">DISUP</h3>
									<p class="card-text">Itens Inseridos na Reunião</p>
									<div id="itnsList_ptd_DISUP">
										<ul></ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-3" id="getData_ptd_1_all">
					<div class="col-md-12">
						<div class="form-group">
							<div class="card" style="color: black">
								<div class="card-body">
									<h3 class="card-title"><i class="flaticon flaticon-tests-central icon-thumbnail-md"
											aria-hidden="true" style="color: #cc5058;"></i> Gerar itens de Pauta DIRAF
									</h3>
									<p class="card-text">O documento será gerado Automáticamente</p>
									<div class="col-md-6">
										<div class="input-group">
											<!--<input type="text" class="form-control" name="txt_CodContratacao" id="txt_CodContratacao" placeholder="Exemplo: AM0820220063">
							-->
											<button type="button" class="btn btn-primary" id="getData_ptd_1">Obter
												PDF</button>
										</div>
									</div>
									<sup data-toggle="tooltip" data-placement="right"
										title="O documento será gerado em PDF, somente com os itens aprovados para Deliberação.">
										<i class="fluigicon fluigicon-info-sign icon-sm" aria-hidden="true"></i></sup>
								</div>
							</div>
						</div>
					</div>
					<div class="col-md-12" id="itnsList_DIRAF">
						<div class="form-group">
							<div class="card" style="color: black">
								<div class="card-body">
									<h3 class="card-title">DIRAF</h3>
									<p class="card-text">Itens Inseridos na Reunião</p>
									<div id="itnsList_ptd_DIRAF">
										<ul></ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-3" id="getData_ptd_2_all">
					<div class="col-md-12">
						<div class="form-group">
							<div class="card" style="color: black">
								<div class="card-body">
									<h3 class="card-title"><i class="flaticon flaticon-tests-central icon-thumbnail-md"
											aria-hidden="true" style="color: #5b94d1;"></i> Gerar itens de Pauta DITEC
									</h3>
									<p class="card-text">O documento será gerado Automáticamente</p>
									<div class="col-md-6">
										<div class="input-group">
											<!--<input type="text" class="form-control" name="txt_CodContratacao" id="txt_CodContratacao" placeholder="Exemplo: AM0820220063">
							-->
											<button type="button" class="btn btn-primary" id="getData_ptd_2">Obter
												PDF</button>
										</div>
									</div>
									<sup data-toggle="tooltip" data-placement="right"
										title="O documento será gerado em PDF, somente com os itens aprovados para Deliberação.">
										<i class="fluigicon fluigicon-info-sign icon-sm" aria-hidden="true"></i></sup>
								</div>
							</div>
						</div>
					</div>
					<div class="col-md-12" id="itnsList_DITEC">
						<div class="form-group">
							<div class="card" style="color: black">
								<div class="card-body">
									<h3 class="card-title">DITEC</h3>
									<p class="card-text">Itens Inseridos na Reunião</p>
									<div id="itnsList_ptd_DITEC">
										<ul></ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="panel panel-primary" id="infoAnaliseDelbr" style="display: none;">
		<div class="panel-heading">
			<h3 class="panel-title">
				<b>Informações de Análise e Deliberação</b>
			</h3>
		</div>
		<div class="panel-body">
			<div class="row">
			<div class="col-md-12">
				<div class="form-group">
					<div class="card" style="color: black">
						<div class="card-body">
							<h3 class="card-title">DISUP</h3>
							<p class="card-text">Itens Inseridos na Reunião</p>
							<div class="input-group">
								<button type="button" class="btn btn-primary" id="getData_deliber_op_DISUP" value="DISUP">Obter PDF</button>
							</div>
							<div id="itnsList_deliber_op_DISUP" style="display: none">
								<ul></ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-md-12">
				<div class="form-group">
					<div class="card" style="color: black">
						<div class="card-body">
							<h3 class="card-title">DIRAF</h3>
							<p class="card-text">Itens Inseridos na Reunião</p>
							<div class="input-group">
								<button type="button" class="btn btn-primary" id="getData_deliber_op_DIRAF" value="DIRAF">Obter PDF</button>
							</div>
							<br>
							<div id="itnsList_deliber_op_DIRAF" style="display: none">
								<ul></ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-md-12">
				<div class="form-group">
					<div class="card" style="color: black">
						<div class="card-body">
							<h3 class="card-title">DITEC</h3>
							<p class="card-text">Itens Inseridos na Reunião</p>
							<div class="input-group">
								<button type="button" class="btn btn-primary" id="getData_deliber_op_DITEC" value="DITEC">Obter PDF</button>
							</div>
							<div id="itnsList_deliber_op_DITEC" style="display: none">
								<ul></ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			</div>
		</div>
		</div>


		<div class="panel panel-primary" id="PainelControle" style="display: none;">
			<div class="panel-heading">
				<h3 class="panel-title">
					<b>Painel de Controle</b>
				</h3>
			</div>
			<div class="panel-body">
				<!--<div class="col-md-12">
		<table style="width: 100%;" id="PanelControl" class="table table-bordered">
			<thead>
				<tr>
					<th>N° Solicitação</th>
					<th>Data Solicitação</th>
					<th>Nome Solicitante</th>
					<th>Unidade</th>
					<th>Assunto</th>
					<th>Justificativa</th>
				</tr>
			</thead>
			<tbody>
				
			</tbody>
		</table>			
		</div>-->
				<div class="col-md-12" id="divTableIn">
					<div id="target"></div>
					<input type="text" class="form-control" name="dataSelected" id="dataSelected"
						style="display: block;" readonly>
				</div>
				<div class="panel-body" id="Delibr" style="display: none;">
					<div class="col-md-4">
						<div class="form-group">
							<label for="slc_demandante">Demandante<span
									class="Obrigatorio"><strong>*</strong></span></label>
							<select class="form-control inpDlbr" name="slc_demandante" id="slc_demandante">
								<option value="0" selected="selected"></option>
							</select>
						</div>
					</div>
					<sup data-toggle="tooltip" data-placement="right"
						data-original-title="Modifique caso o item deva ser recebido em nome de outra pessoa ou para indicar o responsável pela demanda.">
						<i class="fluigicon fluigicon-info-sign icon-sm" aria-hidden="true"></i>
					</sup>
					<div class="col-md-6">
						<div class="form-group">
							<label for="zm_emailsCopia">Emails para usuários chave</label>
							<input type="zoom" class="inpDlbr" id="zm_emailsCopia" name="zm_emailsCopia" data-zoom="{
				'displayKey':'mail',
				'datasetId':'colleague',
				'maximumSelectionLength':'50',
				'placeholder':'Defina os usuários para envio de email da deliberação.',
				'fields':[
					{
						'field':'colleagueName',
						'label':'Nome'
					},{
						'field':'mail',
						'label':'mail',
						'standard':'true'
					}
				]
				}" />
						</div>
					</div>
					<div class="col-md-4">
						<div class="form-group">
							<label for="slc_DISUP_vt">DISUP</label>
							<select class="form-control inpDlbr" name="slc_DISUP_vt" id="slc_DISUP_vt">
								<option value="0"></option>
								<option value="1">Aprovado</option>
								<option value="2">Reprovado</option>
							</select>
						</div>
					</div>
					<div class="col-md-4">
						<div class="form-group">
							<label for="slc_UCOF_vt">DIRAF</label>
							<select class="form-control inpDlbr" name="slc_UCOF_vt" id="slc_UCOF_vt"><!--slc_DIRAF_vt-->
								<option value="0"></option>
								<option value="1">Aprovado</option>
								<option value="2">Reprovado</option>
							</select>
						</div>
					</div>
					<div class="col-md-4">
						<div class="form-group">
							<label for="slc_DITEC_vt">DITEC</label>
							<select class="form-control inpDlbr" name="slc_DITEC_vt" id="slc_DITEC_vt">
								<option value="0"></option>
								<option value="1">Aprovado</option>
								<option value="2">Reprovado</option>
							</select>
						</div>
					</div>
					
					<div class="col-md-6">
						<div class="form-group">
							<label for="txt_Deliberacao">Item / Objeto<span
									class="Obrigatorio"><strong>*</strong></span>:</label>
							<textarea class="form-control inpDlbr" rows="22" name="txt_Deliberacao" id="txt_Deliberacao"></textarea>
						</div>
					</div>
				
				<!--
					<div class="col-md-6">
					<ul class="nav nav-tabs clearfix" role="tablist" id="navTabsOpsAssr" style="margin-bottom: 15px;">
						<li class="active" id="navOpPauta" target-for-id="Pauta"><a href="#">Item / Objeto Pauta</a></li>
						<li target-for-id="ATA"><a href="#" id="navOpATA">Item / Objeto ATA</a></li>
					</ul>
					<div class="col-md-12" style="display: none" id="navOpPauta">
						<div class="form-group">
							<label for="txt_pauta">Item / Objeto Pauta<span
									class="Obrigatorio"><strong>*</strong></span>:</label>
							<textarea class="form-control inpDlbr" rows="22" name="txt_pauta" id="txt_pauta"></textarea>
						</div>
					</div>
					<div class="col-md-12" style="display: none" id="ATA">
						<div class="form-group">
							<label for="txt_Deliberacao">Item / Objeto ATA<span class="Obrigatorio"><strong>*</strong></span>:</label>
							<textarea class="form-control inpDlbr" rows="22" name="txt_Deliberacao" id="txt_Deliberacao"></textarea>
						</div>
					</div>
					</div>
				-->
					<div class="col-md-6">
						<div class="form-group">
							<label for="txt_Justificativa">Justificativa do Demandante / Dotação Orçamentária<span
								class="Obrigatorio"><strong>*</strong></span>:</label>
							<textarea class="form-control inpDlbr" rows="22" name="txt_Justificativa"
								id="txt_Justificativa" style="color: black;"></textarea>
						</div>
					</div>

					<div class="col-md-6" style="display: none">
						<div class="form-group">
							<label for="txt_obsDlbrDISUP">Observação Deliberação DISUP<span
									class="Obrigatorio"><strong>*</strong></span>:</label>
							<textarea class="form-control inpDlbr" rows="3" name="txt_obsDlbrDISUP"
								id="txt_obsDlbrDISUP"></textarea>
						</div>
					</div>
					<div class="col-md-6" style="display: none">
						<div class="form-group">
							<label for="txt_obsDlbrDIRAF">Observação Deliberação DIRAF<span
									class="Obrigatorio"><strong>*</strong></span>:</label>
							<textarea class="form-control inpDlbr" rows="3" name="txt_obsDlbrDIRAF"
								id="txt_obsDlbrDIRAF"></textarea>
						</div>
					</div>
					<div class="col-md-6" style="display: none">
						<div class="form-group">
							<label for="txt_obsDlbrDITEC">Observação Deliberação DITEC<span
									class="Obrigatorio"><strong>*</strong></span>:</label>
							<textarea class="form-control inpDlbr" rows="3" name="txt_obsDlbrDITEC"
								id="txt_obsDlbrDITEC"></textarea>
						</div>
					</div>

				</div>

			</div>
		</div>


	</form>
</div>
<!--
<script>
	    

</script>

</div>
-->


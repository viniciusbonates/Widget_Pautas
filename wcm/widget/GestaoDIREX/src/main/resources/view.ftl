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
		  <h1 class="modal-title fs-5" id="exampleModalToggleLabel">Painel de Transferência</h1>
		  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" id="closePainel"></button>
		</div>
		<div class="modal-body">
			<div class="row p-3">
				<div class="col-md-4" id="slc_userResp_div">
					<label for="newUserResp" class="form-label">Usuário que assumirá a responsabilidade:</label>
					<input type="text" class="form-control" aria-label="newUserResp" id="newUserResp" style="display: none">
					<div class="col-md-4" style="padding: 0px 100px 700px 0px; top: -100px; left: 270px; position: absolute; background-color: white; overflow-y: scroll; scroll-snap-type: y mandatory; border: 1px solid black; border-radius: 5px; display: none;" id="slcNew">
					   <!-- <div style="width: 97%;position: absolute; ">
							<div style="width: 100%;float: left;font-size: 14px;opacity: 85%;border: transparent;border-width: 1px;border-radius: 4px;padding-left: 10px;padding-top: 5px;padding-bottom: 5px" class="a">Nascimento</div>
							<div style="width: 100%;float: left;font-size: 14px;opacity: 85%;border: transparent;border-width: 1px;border-radius: 4px;padding-left: 10px;padding-top: 5px;padding-bottom: 5px" class="a">Adina Oliveira</div>
							<div style="width: 100%;float: left;font-size: 14px;opacity: 85%;border: transparent;border-width: 1px;border-radius: 4px;padding-left: 10px;padding-top: 5px;padding-bottom: 5px" class="a">Alziney Castro Moreira</div>
							<div style="width: 100%;float: left;font-size: 14px;opacity: 85%;border: transparent;border-width: 1px;border-radius: 4px;padding-left: 10px;padding-top: 5px;padding-bottom: 5px" class="a">ELDER SOUZA DOS SANTOS</div>
							<div style="width: 100%;float: left;font-size: 14px;opacity: 85%;border: transparent;border-width: 1px;border-radius: 4px;padding-left: 10px;padding-top: 5px;padding-bottom: 5px" class="a">Eliana Sarmento da Costa</div>
							<div style="width: 100%;float: left;font-size: 14px;opacity: 85%;border: transparent;border-width: 1px;border-radius: 4px;padding-left: 10px;padding-top: 5px;padding-bottom: 5px" class="a">Eliana Sarmento da Costa</div>
							<div style="width: 100%;float: left;font-size: 14px;opacity: 85%;border: transparent;border-width: 1px;border-radius: 4px;padding-left: 10px;padding-top: 5px;padding-bottom: 5px" class="a">Eliana Sarmento da Costa</div>
							<div style="width: 100%;float: left;font-size: 14px;opacity: 85%;border: transparent;border-width: 1px;border-radius: 4px;padding-left: 10px;padding-top: 5px;padding-bottom: 5px" class="a">Eliana Sarmento da Costa</div>
						</div>-->
					</div>

				</div>
			</div>
			<table class="table" id="tbSelecteds">
				<thead>
				  <tr>
					<th scope="col">N°Solicitação</th>
					<th scope="col">Responsável Atual</th>
					<th scope="col">Etapa Atual</th>
					<th scope="col">Status</th>
					<th scope="col">#</th>
				  </tr>
				</thead>
				<tbody>
				  
				</tbody>
			  </table>
			  <div class="row">
					<div class="col-md-4" style="color: green;"><b>Transferidas com sucesso</b></div><div class="col-md-2" id="trsSucess"><b></b></div>
			  </div>
			  <div class="row">
				<div class="col-md-4" style="color: red;"><b>Falhas</b></div><div class="col-md-2" id="trsFail"><b></b></div>
		  </div>
		</div>
		<div class="modal-footer">
			<button class="btn btn-secondary" data-bs-dismiss="modal" id="cancelTransfer">fechar</button>
			<button class="btn btn-primary" id="initTransfer">
				Processar Transferencias
			</button>
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
						<h6 id="desc-link"><a href="a">Acessar outra reunião / Cadastrar Nova Reunião</a></h6>
					</div>

					<div style="float: left; padding-left: 100px; padding-right: 100px; padding-top: 5px; display: none;" id="min-fluxo">
						<div class="rainbow" style="border: solid;border-width: 4px;border-color: #777;padding-left: 20px;padding-right: 20px;padding-bottom: 35px;padding-top: 35px; float: left; margin: 0px; border-radius: 5px;" id="13n">Definição de Reunião</div>
						<svg height="100" width="50" xmlns="http://www.w3.org/2000/svg" style="float: left;">
							<line x1="-20" y1="60" x2="50" y2="60" style="stroke:red;stroke-width:2"></line>
						</svg>
						<div style="border: solid;border-width: 4px;border-color: #777;padding-left: 20px;padding-right: 20px;padding-bottom: 35px;padding-top: 35px; float: left; margin: 0px; border-radius: 5px;" id="8n">Analise / Deliberação</div>
						<svg height="100" width="50" xmlns="http://www.w3.org/2000/svg" style="float: left;">
							<line x1="-20" y1="60" x2="50" y2="60" style="stroke:red;stroke-width:2"></line>
						</svg>
						<div style="border: solid;border-width: 4px;border-color: #777;padding-left: 60px;padding-right: 60px;padding-bottom: 35px;padding-top: 35px; float: left; margin: 0px; border-radius: 5px;" id="10n">Arquivo</div>
					</div>

					<div id="icon-T" style="float: left; padding-top: 30px; padding-left: 10px; padding-right: 10px; display: none;">
						<svg xmlns="http://www.w3.org/2000/svg" width="100" height="60" fill="currentColor" class="bi bi-toggles" viewBox="0 0 16 16" style="cursor: pointer" id="deliber-op">
							<path d="M4.5 9a3.5 3.5 0 1 0 0 7h7a3.5 3.5 0 1 0 0-7zm7 6a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5m-7-14a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5m2.45 0A3.5 3.5 0 0 1 8 3.5 3.5 3.5 0 0 1 6.95 6h4.55a2.5 2.5 0 0 0 0-5zM4.5 0h7a3.5 3.5 0 1 1 0 7h-7a3.5 3.5 0 1 1 0-7"></path>
						</svg>
					</div>

					<div id="icon-S" style="float: left; padding-top: 30px; padding-left: 10px; padding-right: 10px; display: none;">
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
					<div class="col-md-12">
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
					<div class="col-md-12">
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
					<div class="col-md-12">
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
				<div class="col-md-12">
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
						data-original-title="Modifique caso o item deva ser recebido em nome de outra pessoa ou para indicar o responsável pela demanda."><i
							class="fluigicon fluigicon-info-sign icon-sm" aria-hidden="true"></i></sup>
					<div class="row">
					</div>
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
					<div class="row">
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
							<textarea class="form-control inpDlbr" rows="22" name="txt_Deliberacao"
								id="txt_Deliberacao"></textarea>
						</div>
					</div>
					<div class="col-md-6">
						<div class="form-group">
							<label for="txt_Justificativa">Justificativa do Demandante:</label>
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
<script>

	var atvd = 8
	var ds_mat = DatasetFactory.getDataset("colleague", null, null, null);
	var ds_und = DatasetFactory.getDataset("dsc_Unidades", null, null, null);
	var matDir = 0
	var mat = 99990006;
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
	var testDatatable = {
		myTable: null,
		tableData: null,
		dataInit: null,
		datafilt: null,
		arrColumns: '',
		attRefer: '',
		hder: '',
		objCollection: '',
		condValidation: '',
		fnc: '',
		obj: '',
		objFunc: {
			fnc: [
				{ 'fncName': '', 'metodhParam': '' }
			]
		},
		paramsInit: function (objMain) {
			this.arrColumns = objMain.arrColumnsRender
			this.attRefer = objMain.attRefer
			this.hder = objMain.hder
			this.objCollection = objMain.objCollection
			this.condValidation = objMain.condValidation
			this.fnc = objMain.fnc
			this.obj = objMain
			this.loadTable()
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
		definePage: function (objData, dirr, itensCollection, press) {
			/**
			 * Press = Determina se a função definepage já foi executada e o Objeto já está formatado.
			*/
			objData.arrItens = [];
			cols = this.arrColumns;
			determineLenght = 5;
			attIten = this.attRefer;


			itens = itensCollection


			fnc = this.fnc
			condValidation = this.condValidation
			objAll = this.obj
			console.log(objAll)
			console.log(fnc)
			console.log(itens)
			if (dirr == 1) {

				i = objData.indIten
				objData.pageAtual++
				if (objData.pageAtual != 0) {
					a = objData.pageAtual + 1
					objData.indIten = (a * determineLenght) //+ 1
				} else { objData.indIten = 5 }


			} else if (dirr == 0) {
				if (objData.pageAtual != 0) {
					a = objData.pageAtual - 1
					i = (a * determineLenght) //+ 1
					a = objData.pageAtual
					objData.indIten = (a * determineLenght) //+ 1
				} else { objData.indIten = 0 }
				objData.pageAtual--
			}
			function objS(rslt, ref) {
				obj = {
					rslt: rslt,
					ref: ref
				}
				return obj
			}
			var objsFunc = [];
			var count = 0;
			for (i = i; objData.arrItens.length <= itens.length; i++) {
				item = itens[i]
				lgnt = objData.arrItens.length
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
									if (objData.arrItens.length != determineLenght) {
										objData.arrItens[0] = JSON.parse(obj_din);
										//objData.indIten = i + 1; 
									}
									if (objData.markItensAll == 0) { objData.arrItensAll[0] = item; } //JSON.parse(obj_din)
								} else {
									count++

									if (objData.arrItens.length != determineLenght) { objData.arrItens[lgnt] = JSON.parse(obj_din); } //objData.indIten = i + 1
									if (objData.markItensAll == 0) { objData.arrItensAll[count] = item; } //JSON.parse(obj_din)
								}
							}
						}
					}
				} else if (item == undefined) {
					if (objData.arrItens.length != determineLenght) {
						if (itens.length != objData.indIten) {
							objData.indIten = i
						} else { objData.indIten = i }
					}
					if (objData.markItensAll == 0) { objData.markItensAll = 1 }
					break;
				}
			}
			datafilt = objData.arrItensAll
			console.log(objData)
		},
		loadTable: function () {
			var that = this;
			var thisObj = this;
			var arrColumnsIn = this.arrColumns
			var itensCollection = this.objCollection
			var searchMark = 0
			//Retira as datas com valor nullo	
			var objData = {
				arrItens: [],		// Array com os itens que serão apresentados na pagina atual 
				arrItensAll: [], 	// Array produto final após a limpesa conforme condicionais determinadas
				markItensAll: 0, 	// markItensAll == 1 - determina o fim da montagem do Array 'arrItensAll'
				pageAtual: -1,		// numero da pagina começando com valor '0'
				indIten: 0 			// Valor igual ao ultimo Index do 'this.objCollection' do item que foi validado e incluso no array 'arrItens' 
			};
			that.definePage(objData, 1, itensCollection);
			that.myTable = FLUIGC.datatable('#target', {
				dataRequest: objData.arrItens,
				renderContent: this.arrColumns,
				header: this.hder,
				tableStyle: 'table table-bordered table-dark table-hover',
				classSelected: 'success',
				navButtons: {
					enabled: true
				},
				search: {
					enabled: true,
					onlyEnterkey: true,
					onSearch: function (res) {
						if (!res) {
							//that.myTable.reload(dataInit);
							that.reload(that.myTable, that.dataInit, that.objFunc);
							console.log(that.objFunc)
							objData = {
								arrItens: [],
								arrItensAll: [],
								markItensAll: 0,
								pageAtual: -1,
								indIten: 0
							};
							itensCollection = that.objCollection
							searchMark = 0
							//console.log(itensCollection)
							that.definePage(objData, 1, itensCollection);
							that.opsNav(1, objData.arrItensAll, objData, 2, that.myTable, that.objFunc);
							//that.backward(that.myTable, itensCollection, objData, searchMark, thisObj, that.objFunc);	//param that.myTable & thisObj
							//that.forward(that.myTable, itensCollection, objData, searchMark, thisObj, that.objFunc);	//param that.myTable & thisObj
						}
						var dataAll = datafilt
						var search = dataAll.filter(function (el) {
							let resp = 0;
							for (i = 0; i < arrColumnsIn.length; i++) {
								if (el[arrColumnsIn[i]] != null) {
									if (el[arrColumnsIn[i]].toUpperCase().indexOf(res.toUpperCase()) >= 0) {
										resp = el[arrColumnsIn[i]].toUpperCase().indexOf(res.toUpperCase()) >= 0;
									}
								}
							}
							return resp;
						});
						if (search && search.length && res != '') {
							//that.myTable.reload(search);
							console.log(that.objFunc)
							//that.reload(that.myTable, search, that.objFunc);
							objData = {
								arrItens: [],
								arrItensAll: [],
								markItensAll: 0,
								pageAtual: -1,
								indIten: 0
							};
							itensCollection = search
							searchMark = 1
							that.opsNav(1, search, objData, null, that.myTable, that.objFunc);
							//that.backward(that.myTable, itensCollection, objData, searchMark, thisObj, that.objFunc);	//param that.myTable & thisObj
							//that.forward(that.myTable, itensCollection, objData, searchMark, thisObj, that.objFunc);	//param that.myTable & thisObj
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
					that.dataInit = data;
				}
				else if (err) {
					FLUIGC.toast({
						message: err,
						type: 'danger'
					});
				}
			});

			console.log(that.dataInit)
			console.log(itensCollection)
			console.log(objData.arrItensAll)

			that.opsNav(1, objData.arrItensAll, objData, 2, that.myTable, that.objFunc);
			that.backward(that.myTable, objData.arrItensAll, objData, searchMark, thisObj, that.objFunc);	//param that.myTable & thisObj
			that.forward(that.myTable, objData.arrItensAll, objData, searchMark, thisObj, that.objFunc);	//param that.myTable & thisObj
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
		reload: function (myTable, data, objFunc) {
			if (myTable != undefined) {
				var a = myTable.reload(data);
				console.log(a)
				var funNow = 0;
				if (objFunc != '' && objFunc != null && objFunc != undefined) {
					for (t = 0; t < objFunc.fnc.length; t++) {
						if (objFunc.fnc[t].metodhParam == 'reload') {

							let name = objFunc.fnc[t].fncName
							let funNow = objFunc[name]()
							//console.log(funNow)
						}
					}
				}
			}
		},
		opsNav: function (dirr, itens, obj, press, myTable, objFunc) {

			console.log(itens)
			console.log(obj)

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

			if (press == null || press == undefined) {
				this.definePage(obj, dirr, itens);
				this.reload(myTable, obj.arrItens, objFunc);
			} else if (press == 1) {
				this.definePage(obj, dirr, itens, press);
				this.reload(myTable, obj.arrItens, objFunc);
			}
			if (obj.pageAtual != 0) {
				btnNav.btnPrev.disabled = false
			}
			if (obj.indIten == itens.length) {
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
		backward: function (myTable, itensCollection, objData, searchMark, Obj, objFunc) {
			//console.log(myTable)
			myTable.on('fluig.datatable.backward', function () {
				let dirr = 0
				if (searchMark == 1) {
					console.log(dirr)
					Obj.opsNav(dirr, itensCollection, objData, searchMark, myTable, objFunc)
				} else {
					console.log(dirr)
					Obj.opsNav(dirr, itensCollection, objData, null, myTable, objFunc)
				}
			});
		},
		forward: function (myTable, itensCollection, objData, searchMark, Obj, objFunc) {
			//console.log(myTable)
			myTable.on('fluig.datatable.forward', function () {
				let dirr = 1
				if (searchMark == 1) {
					Obj.opsNav(dirr, itensCollection, objData, searchMark, myTable, objFunc)
				} else {
					Obj.opsNav(dirr, itensCollection, objData, null, myTable, objFunc)
				}
			});
		}


	}; //testDatatable.paramsInit(objMain);

</script>
<!--
</div>
-->


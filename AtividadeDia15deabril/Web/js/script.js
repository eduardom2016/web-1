
$(document).ready(function(e){
	$("#dialog-confirm").hide();
	$(".voltar").hide();
	$(".menuPrincipal a").click(function(e){
		e.preventDefault();
		var href = $(this).attr('href');
		$(".conteudo").load(href + " .conteudo");
 });
	$(".menuTopo a").click(function(e){
		e.preventDefault();
		var href = $(this).attr('href');
		if (href == "inicio.html") {
		$(".conteudo").load(href + " .conteudo");
		$(".comentario").show();
		$(".menuPrincipal").show();
		$(".voltar").hide();
		} else {
		$(".conteudo").load(href + " .conteudo");
		$(".comentario").hide();
		$(".menuPrincipal").hide();
		$(".voltar").show();
		}
 });
	$(".idBlog a").click(function(e){
		e.preventDefault();
		var href = $(this).attr('href');
		$(".conteudo").load(href + " .conteudo");
		$(".comentario").show();
		$(".menuPrincipal").show();
		$(".voltar").hide();
 });
});

function dialogo(){
	$("#dialog-confirm").dialog({
		resizable: false,
		width: 400,
		height: 200,
		modal: true,
		buttons: {
			"Confirma": function() {
				var nomedividido = document.getElementById('nome').value.split(" ");
				var emaildividido = document.getElementById('email').value.split("@");
				if(nomedividido[0].length >= 3 && nomedividido[1].length >= 4){
					
					if(emaildividido[0].length >= 3 && emaildividido[1].length >= 4){
					
					}else{
						alert("Há dados preenchidos de forma errada!!!");
					}
					
				}else{
					alert("Há dados preenchidos de forma errada!!!");
				}
				$(this).dialog("close");
			},
			Cancelar: function() {
				$(this).dialog("close");
			}
		}
	});
};

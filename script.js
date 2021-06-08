$(document).ready(()=>{
  let diasFaltantes = Math.ceil((((new Date("08/07/2021")).getTime())-((new Date()).getTime()))/(1000*60*60*24));
  switch (diasFaltantes) {
    case 0: $("#cronometro").text("É hoje!"); break;
    case 1: $("#cronometro").text("É amanhã!"); break;
    default: $("#cronometroDias").text(diasFaltantes); break;
  }    
  $("#barraPaginas a").click(ev => {
    let a = ev.currentTarget;
    if((a.target != '_blank') & (a.getAttribute('target') != '')){
      carregaPag(a.getAttribute('href'));
      ev.preventDefault();
    }
  });

  function carregaPag(url){
    $("#barraPaginas a").removeClass('selecionado');
    $("#conteudo").animate({opacity: 0}, 200, ()=>{
      $.ajax({
        method: "get",
        url,
        success: res => {
          $("#conteudo").html(res);
          $("#conteudo").animate({opacity: 1}, 200);
          $("#barraPaginas a[href='"+url+"']").addClass('selecionado');
      }});  
    });
      
  }

  carregaPag('pag_home.html');
});
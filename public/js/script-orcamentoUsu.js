var acc = document.getElementsByClassName("accordion"); 
var i;

for(i=0;i<acc.length;i++){
  acc[i].addEventListener("click", function(){
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if(panel.style.display === "block"){
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  })
}; 

var tabela = document.getElementById('tableButton-ou');
//var dias = tabela.getElementsByTagName('td');

for(var i=0; i< dias.length; i++){
  var dia = dias[i];
  dia.addEventListener('click', function(){
    selDia(this, false);
  }) 
}

function selDia(dia, multiplos){
  if(dia){
    var dias = dia.parentElement.getElementsByTagName('td');
    for(var i=0; i<dias.length;i++){
      var dia_ = dias[i];
      
      dia_.classList.remove('selecionado');
    }
  }
  
  dia.classList.toggle('selecionado');
}


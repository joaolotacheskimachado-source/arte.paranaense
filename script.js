const botoesCurtir = document.queriSelectorAll (".curtir");
botoesCurtir.forEach(function(botaoCurtir){
    let curtiu=false;
    botaoCurtir.addEventLister("click", curtir);
function curtir(){
    const contador= botaoCurtir.querySelector("span");
    if(curtir=== false){
        contador.-textContent++;
        curtir = true;
    }
    else{
        contador.textContent--;
        curtir= false;
    }
    
}
});
    
     

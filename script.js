function AskingDate(){

    var dtBirth = prompt("Qual foi o ano de seu nascimento?");
    while(dtBirth=="")
            {
                dtBirth = prompt("Por gentileza, preencha seu ano de nascimento.");
            }
    
    var dtCurrent = prompt ("Em qual ano estamos?");
    while(dtCurrent=="")
    {
        dtCurrent = prompt("Por gentileza, preencha o ano no qual estamos.");
    }

    var idade = dtCurrent - dtBirth;
     
    var mensagem = `Olá, seu ano de nascimento é ${dtBirth} e estamos em ${dtCurrent}.\n` 
    mensagem += `Então, sua idade é ${idade} ou ${idade+1} anos.`;
    
    alert(mensagem);    
   
    }
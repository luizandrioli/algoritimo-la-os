function soma_seq(){
     
    var n=parseInt(numero.value);
    var soma=n;
    
    while(n>1){
        soma=soma+(n-1);
        n=n-1;
    }

    alert(soma);
}

function fat_seq(){
    var n=parseInt(camila.value);
    var fat=n;

    while(n>1){
        fat=fat*(n-1);
        n=n-1;
    }
    alert(fat)
}

function potencia(){
    let n=parseInt(numero3.value);
    let pote = n;

    if (n<0){
        alert("numero negativo");
    }
    else if(n==0){
        alert("1");
    }
    while (n>1){
        pote =Math.pow(2,n);
        n = n - 1;
        alert(pote);
    }

}

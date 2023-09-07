function executar (){

    var initial= document.getElementById('txini')
    var end= document.getElementById('txfim')
    var passo= document.getElementById('txpas')

    var inicio= Number(initial.value)
    var incremento= Number(passo.value)
    var fim= Number(end.value)

    res.innerHTML = (`Insira dados`)


    if(inicio ==0 || incremento <=0 || fim ==0){
        window.alert('Os valores devem ser maiores que zero e o fim deve ser maior ou igual ao início')
        
    }else 
        res.innerHTML = (`Contando !!! `)
        if(fim > inicio){
            for (var i = inicio; i <= fim;i += incremento) {
                res.innerHTML += (`${i} \u{1F600}	` )
        }}else {
            for (var i = inicio; i >= fim;i -= incremento) {
                res.innerHTML += (`${i} \u{1F600}	` )
            }}
        }
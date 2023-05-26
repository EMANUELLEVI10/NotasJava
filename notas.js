function Aluno(){
    let nome = window.prompt('Nome do Aluno:')
    let n1 = Number(window.prompt('primeira nota')) 
    let n2 = Number(window.prompt('segunda nota'))
    let n3 = Number(window.prompt('terceira nota'))
    media = (n1+n2+n3)/3
    
    if (media >= 6 ){
    document.querySelector(".aluno").innerHTML="<br><p style= color:green >"+"O aluno "+nome+" ficou com média de "+media+", foi aprovado!"+"</p>"}
    
    else {
   document.querySelector(".aluno").innerHTML="<br><p style= color:red >"+"O aluno "+nome+" ficou com média de "+media+", foi reprovado!"+"</p>"}

}
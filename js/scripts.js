function contar(){
    var chars = document.getElementById("texto").value;

    document.getElementById("caracteres").innerHTML = chars.length;

    var fullString = chars + " ";
    var primeiroEspacoVazio = /^[^\wÀ-ú]+/gi;
    var retirarEspacoVazio = fullString.replace(primeiroEspacoVazio, "");
    var charsNaoAlfaNumericos = charsOther = /[^\wÀ-ú']+/gi;
    var stringLimpa = retirarEspacoVazio.replace(charsNaoAlfaNumericos, " ");
    var contaEspaco = stringLimpa.split(" ");
    var words = contaEspaco.length - 1;
    
    var line = chars.split("\n");
    var lines = (chars.length==0) ? 0 : line.length;

    document.getElementById("palavras").innerHTML = words;
    document.getElementById("linhas").innerHTML = lines;
}
function mediaInicial(n1, n2, n3)
{
    var n1 = parseFloat(n1);
    var n2 = parseFloat(n2);
    var n3 = parseFloat(n3);

    // var frasePadrao = `Nota inválida = `;

    if(n1 >= 0 && n1 <= 10)//condição para nota válida n1
    {
        if(n2 >= 0 && n2 <= 10)//condição para nota válida n2
        {
            if(n3 >= 0 && n3 <=10)//condição para nota válida n3
            {
                //Segue condições para verificar as maiores notas
                if(n1 < n2 && n1 <n3)
                {
                    var calc = (n2+n3)/2;
                }
                else
                {
                    if(n2 < n1 && n2 <n3)
                    {
                        var calc = (n1+n3)/2;
                    }
                    else
                    {
                        var calc = (n1+n2)/2;
                    }
                }
            }
            else
            {
                return `Nota 3 invalida = ${n3.toFixed(1).replace(".",",")}`;
            }
        }
        else
        {
            return `Nota 2 invalida = ${n2.toFixed(1).replace(".",",")}`;
        }
    }
    else
    {
        return `Nota 1 invalida = ${n1.toFixed(1).replace(".",",")}`;
    }

    if(calc < 4 )
    {
        return `Reprovado direto com média ${calc.toFixed(1).replace(".",",")}`;
    }
    else
    {
        if(calc >= 4 && calc <= 5.9)
        {
            var recupera = parseFloat(prompt(`Digite uma nota de recuperação: `));
            
            //verificar se a nota é valida.
            if(recupera >=0 && recupera <=10)
            {
                calcFinal = (calc + recupera)/2;
                if(calcFinal < 5)
                {
                    return `Reprovado em exame com média = ${calcFinal.toFixed(1).replace(".",",")}`;
                }
                else
                {
                    return `Aprovado em exame com média ${calcFinal.toFixed(1).replace(".",",")}`;
                }
            }
            else
            {
                return `Nota de exame inválida. ${recupera.toFixed(1).replace(".",",")}`;
            }    
        }
        else
        {
            return `Aprovado com média ${calc.toFixed(1).replace(".",",")}`;
        }
    }
}
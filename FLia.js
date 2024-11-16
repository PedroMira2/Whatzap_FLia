function ajustarLabel() {
    const formato = document.getElementById("formato").value;
    const labelRepeticoes = document.getElementById("labelRepeticoes");
    
    if (formato === "zigzag2") {
        labelRepeticoes.innerText = "Quantidade de linhas:";
    } else {
        labelRepeticoes.innerText = "Quantidade de repetições:";
    }
}

function gerarDesenho() {
    const texto = document.getElementById("texto").value;
    const formato = document.getElementById("formato").value;
    const repeticoes = parseInt(document.getElementById("repeticoes").value, 10);
    let resultado = "";

    function gerarFormato() {
        let desenho = "";
        if (formato === "coracao") {
            desenho += `      ${texto}     ${texto}\n`;
            desenho += `   ${texto}         ${texto}\n`;
            desenho += ` ${texto}             ${texto}\n`;
            desenho += `   ${texto}         ${texto}\n`;
            desenho += `      ${texto}     ${texto}\n`;
            desenho += `          ${texto}\n`;
        } else if (formato === "estrela") {
            desenho += `       ${texto}\n`;
            desenho += `   ${texto}     ${texto}\n`;
            desenho += `       ${texto}\n`;
            desenho += `   ${texto}     ${texto}\n`;
            desenho += `       ${texto}\n`;
        } else if (formato === "quadrado") {
            desenho += `${texto} ${texto} ${texto} ${texto}\n`;
            desenho += `${texto}         ${texto}\n`;
            desenho += `${texto}         ${texto}\n`;
            desenho += `${texto} ${texto} ${texto} ${texto}\n`;
        } else if (formato === "seta") {
            desenho += `      ${texto}\n`;
            desenho += `    ${texto} ${texto}\n`;
            desenho += `  ${texto}     ${texto}\n`;
            desenho += `    ${texto} ${texto}\n`;
            desenho += `      ${texto}\n`;
            desenho += `      ${texto}\n`;
            desenho += `      ${texto}\n`;
        } else if (formato === "onda") {
            desenho += `    ${texto}   ${texto}   ${texto}\n`;
            desenho += `${texto}           ${texto}           ${texto}\n`;
            desenho += `    ${texto}           ${texto}\n`;
            desenho += `    ${texto}   ${texto}   ${texto}\n`;
        } else if (formato === "triangulo") {
            desenho += `          ${texto}\n`;
            desenho += `      ${texto}   ${texto}\n`;
            desenho += `    ${texto}       ${texto}\n`;
            desenho += `${texto} ${texto} ${texto} ${texto} ${texto}\n`;
        } else if (formato === "zigzag") {
            for (let i = 0; i < 5; i++) {
                let spaces = " ".repeat(i % 2 === 0 ? 0 : texto.length + 3);
                desenho += `${spaces}${texto}       ${texto}\n`;
            }
        } else if (formato === "zigzag2") {
            let deslocamento = 0;
            let direcao = 1; 

            for (let i = 0; i < repeticoes * 2; i++) {
                desenho += " ".repeat(deslocamento) + texto + "\n";

                // Alterna a direção
                if (deslocamento === repeticoes - 1) {
                    direcao = -1;  
                } else if (deslocamento === 0) {
                    direcao = 1;  
                }
                deslocamento += direcao;
            }
        }
       
        else if (formato === "diamante") {
            desenho += `      ${texto}\n`;
            desenho += `   ${texto}   ${texto}\n`;
            desenho += ` ${texto}       ${texto}\n`;
            desenho += `${texto}         ${texto}\n`;
            desenho += ` ${texto}       ${texto}\n`;
            desenho += `   ${texto}   ${texto}\n`;
            desenho += `      ${texto}\n`;
        } else if (formato === "x") {
            desenho += `   ${texto}     ${texto}\n`;
            desenho += `      ${texto}\n`;
            desenho += `${texto}         ${texto}\n`;
            desenho += `      ${texto}\n`;
            desenho += `   ${texto}     ${texto}\n`;
        } else if (formato === "listras") {
            for (let i = 0; i < repeticoes; i++) {
                desenho += `${texto} ${texto} ${texto} ${texto}\n`;
            }
        } else if (formato === "circular") {
            desenho += `     ${texto}\n`;
            desenho += `  ${texto}   ${texto}\n`;
            desenho += `${texto}       ${texto}\n`;
            desenho += `  ${texto}   ${texto}\n`;
            desenho += `     ${texto}\n`;
        } else if (formato === "espiral") {
            for (let i = 0; i < repeticoes; i++) {
                let spaces = " ".repeat(i * 2);
                desenho += `${spaces}${texto}\n`;
            }
        } else if (formato === "zigzag3") {
            for (let i = 0; i < repeticoes; i++) {
                let spaces = " ".repeat(i % 2 === 0 ? i : 0);
                desenho += `${spaces}${texto}\n`;
            }
        } else if (formato === "colunas") {
            for (let i = 0; i < repeticoes; i++) {
                desenho += `${texto}   ${texto}   ${texto}\n`;
            }
        } else if (formato === "piramide") {
            desenho += `        ${texto}\n`;
            desenho += `     ${texto}   ${texto}\n`;
            desenho += `  ${texto}       ${texto}\n`;
            desenho += `${texto} ${texto} ${texto} ${texto}\n`;
        } else if (formato === "trianguloInverso") {
            desenho += `${texto} ${texto} ${texto} ${texto}\n`;
            desenho += `   ${texto}       ${texto}\n`;
            desenho += `     ${texto}   ${texto}\n`;
            desenho += `        ${texto}\n`;
        } else if (formato === "v") {
            desenho += `    ${texto}   ${texto}\n`;
            desenho += `  ${texto}       ${texto}\n`;
            desenho += `${texto}           ${texto}\n`;
        } else if (formato === "laço") {
            desenho += `    ${texto}     ${texto}\n`;
            desenho += `  ${texto}         ${texto}\n`;
            desenho += `${texto} ${texto} ${texto} ${texto} ${texto}\n`;
            desenho += `  ${texto}         ${texto}\n`;
            desenho += `    ${texto}     ${texto}\n`;
        } else if (formato === "onda2") {
            desenho += `${texto}       ${texto}\n`;
            desenho += `   ${texto}   ${texto}\n`;
            desenho += `     ${texto} ${texto}\n`;
            desenho += `       ${texto}\n`;
        } else if (formato === "quadrado2") {
            desenho += `${texto} ${texto} ${texto} ${texto}\n`;
            desenho += `${texto}       ${texto}\n`;
            desenho += `${texto}       ${texto}\n`;
            desenho += `${texto} ${texto} ${texto} ${texto}\n`;
        } else if (formato === "estrela2") {
            desenho += `   ${texto}   ${texto}\n`;
            desenho += `     ${texto}\n`;
            desenho += `${texto}       ${texto}\n`;
            desenho += `     ${texto}\n`;
            desenho += `   ${texto}   ${texto}\n`;
        } else if (formato === "espiral2") {
            for (let i = 0; i < repeticoes; i++) {
                let spaces = " ".repeat(i * 3);
                desenho += `${spaces}${texto}\n`;
            }
        } else if (formato === "labirinto") {
            for (let i = 0; i < repeticoes; i++) {
                let spaces = " ".repeat(i % 2 === 0 ? i : 0);
                desenho += `${spaces}${texto} ${texto}\n`;
            }
        } else if (formato === "espiral3") {
            for (let i = 0; i < repeticoes; i++) {
                let spaces = " ".repeat(i * 3);
                desenho += `${spaces}${texto}   ${texto}\n`;
            }
        }

        return desenho;
    }

    for (let i = 0; i < repeticoes; i++) {
        resultado += gerarFormato();
    }

    document.getElementById("resultado").textContent = resultado;
}
function copiarTexto() {
    const resultado = document.getElementById("resultado");
    if (resultado.textContent.trim() === "") {
        alert("Não há conteúdo para copiar.");
        return;
    }

    // Cria uma área temporária para copiar o texto
    const tempInput = document.createElement("textarea");
    tempInput.value = resultado.textContent;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    alert("Conteúdo copiado para a área de transferência!");
}


window.onload = function () {

    document.querySelector('.backgroundColor').onclick = function () {        

        let btnRadio = document.getElementsByName('what-backColor');
        for (let index = 0; index < btnRadio.length; index += 1) {
            if (btnRadio[index].checked) {                
                if (btnRadio[index].id === 'white') {
                    if ((document.body.style.color === 'white')){
                        alert('A cor da letra é branca, não conseguirá ler nada.'); 
                    }else{
                        document.body.style.backgroundColor = 'white';
                    }                    
                }else if (btnRadio[index].id === 'green') {
                    if ((document.body.style.color === 'green')){
                        alert('A cor da letra é verde, não conseguirá ler nada.'); 
                    }else{
                        document.body.style.backgroundColor = 'green';
                    }                   
                }else if (btnRadio[index].id === 'black') {
                    if ((document.body.style.color === 'black')){
                        alert('A cor da letra é preta, não conseguirá ler nada.'); 
                    }else{
                        document.body.style.backgroundColor = 'black';
                    }                    
                }
            }
        }
    }
    
    document.querySelector('.colorText').onclick = function () {        

        let btnRadio = document.getElementsByName('what-ColorText');
        for (let index = 0; index < btnRadio.length; index += 1) {
            if (btnRadio[index].checked) {                
                if (btnRadio[index].id.includes('white')) {                    
                    if ((document.body.style.backgroundColor === 'white')){
                        alert('A cor do fundo é branca, não conseguirá ler nada.');            
                    }else{
                        document.body.style.color = 'white';
                    } 
                }else if (btnRadio[index].id.includes('green')) {
                    if ((document.body.style.backgroundColor === 'green')){
                        alert('A cor do fundo é verde, não conseguirá ler nada.');            
                    }else{
                        document.body.style.color = 'green';
                    } 
                }else if (btnRadio[index].id.includes('black')) {
                    if ((document.body.style.backgroundColor === 'black')){
                        alert('A cor do fundo é preta, não conseguirá ler nada.');           
                    }else{
                        document.body.style.color = 'black';
                    }
                }
            }
        }
    }

    document.querySelector('.fontSize').onclick = function () {        

        let btnRadio = document.getElementsByName('what-fontSize');
        for (let index = 0; index < btnRadio.length; index += 1) {
            if (btnRadio[index].checked) {                
                if (btnRadio[index].id.includes('small')) {
                    document.querySelector('.main-content').style.fontSize = 'small';
                }else if (btnRadio[index].id.includes('medium')) {
                    document.querySelector('.main-content').style.fontSize = 'medium';
                }else if (btnRadio[index].id.includes('large')) {
                    document.querySelector('.main-content').style.fontSize = '25px';
                }
            }
        }
    }

    document.querySelector('.lineHeight').onclick = function () {        

        let btnRadio = document.getElementsByName('what-lineHeight');
        for (let index = 0; index < btnRadio.length; index += 1) {
            if (btnRadio[index].checked) {                
                if (btnRadio[index].id.includes('small')) {
                    document.querySelector('.main-content').style.lineHeight = '15px';
                }else if (btnRadio[index].id.includes('normal')) {
                    document.querySelector('.main-content').style.lineHeight = '21px';
                }else if (btnRadio[index].id.includes('large')) {
                    document.querySelector('.main-content').style.lineHeight = '40px';
                }
            }
        }
    }

    document.querySelector('.fontFamily').onclick = function () {        

        let btnRadio = document.getElementsByName('what-font');
        for (let index = 0; index < btnRadio.length; index += 1) {
            if (btnRadio[index].checked) {                
                if (btnRadio[index].id === 'sans-serif') {
                    document.querySelector('.main-content').style.fontFamily = "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif";
                }else if (btnRadio[index].id === 'serif') {
                    document.querySelector('.main-content').style.fontFamily = "'Times New Roman', Times, serif";
                }else if (btnRadio[index].id === 'monospace') {
                    document.querySelector('.main-content').style.fontFamily = "'Courier New', Courier, monospace";
                }
            }
        }
    }
}

/**
 * Referências:
 * https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
 * http://devfuria.com.br/javascript/manipulando-radios-buttons-com-javascript/
 * https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/input
 * https://lipsum.com/
 * 
 */
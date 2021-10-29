import React, { Component } from 'react';

class Content extends Component {
  render () {
    const conteudos = [
      {
        conteudo: 'High Order Functions',
        bloco: 8,
        status: 'Aprendido'
      },
      {
        conteudo: 'Composicao de Componentes',
        bloco: 11,
        status: 'Aprendendo',
      },
      {
        conteudo: 'Composicao de Estados',
        bloco: 12,
        status: 'Aprenderei'
      },
      {
        conteudo: 'Redux',
        bloco: 16,
        status: 'Aprenderei'
      },
    ];
    const bloco = conteudos.map((conteudo) =>
     (
        <div key={conteudo.bloco}>
          <span>O conteúdo é: {conteudo.conteudo} | </span>
          <span>Status: {conteudo.status} | </span>
          <span>Bloco: {conteudo.bloco}</span>
        </div>
      )
    )
    return (
      <div className='content'>
        {bloco}
      </div>
    )
  }
}

export default Content;

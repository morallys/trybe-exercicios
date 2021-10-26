const {
  sum,
  myRemove,
  myFizzBuzz,
  encode,
  decode,
  techList
} = require('./sum');

describe('Questão 1', () => {
  it('A soma de 4 e 5 deve ser igual a 9', () => {
    expect(sum(4,5)).toBe(9);
  });

  it('A soma de 0 e 0 deve ser igual a 0', () => {
    expect(sum(0,0)).toBe(0);
  });

  it('Levanta um erro quando o parâmetro não é um número', () => {
    expect(() => {sum(4,'5')}).toThrow();
  });

  it("Verifica se a mensagem de erro é 'parameters must be numbers'", () => {
    expect(() => {sum(4,'5')}).toThrow(new Error('parameters must be numbers'));
  })
});

describe('Questão 2', () => {
  it('Verifica se a chamada myRemove([1, 2, 3, 4], 3) retorna o array [1, 2, 4]', () => {

    const array = [1, 2, 3, 4];
    const item = 3;

    expect(myRemove(array, item)).toEqual([1, 2, 4]);
  });

  it('Verifica se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {

    const array = [1, 2, 3, 4];
    const item = 3;

    expect(myRemove(array, item)).not.toEqual([1, 2, 3, 4]);
  });

  it('Verifica se a chamada myRemove([1, 2, 3, 4], 5) retorna o array [1, 2, 3, 4]', () => {

    const array = [1, 2, 3, 4];
    const item = 5;

    expect(myRemove(array, item)).toEqual([1, 2, 3, 4]);
  });
});

describe('Questão 3', () => {
  it('Verifica se a chamada da função myFizzBuzz com um número divisível por 3 e 5, retorna "fizzbuzz"', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  })

  it('Verifica se a chamada da função myFizzBuzz com um número divisível por 3, retorna "fizz"', () => {
    expect(myFizzBuzz(9)).toBe('fizz');
  })

  it('Verifica se a chamada da função myFizzBuzz com um número divisível por 5, retorna "buzz"', () => {
    expect(myFizzBuzz(5)).toBe('buzz');
  })

  it('Verifica se a chamada da função myFizzBuzz com um número que não é divisível por 3 ou 5.', () => {
    const num = 7;
    expect(myFizzBuzz(num)).toBe(num);
  })

  it('Verifica se a chamada da função myFizzBuzz com um parâmetro que não é um número, retorna o resultado esperado.', () => {
    const num = '5';
    expect(myFizzBuzz(num)).toBe(false)
  })
});

describe('Questão 4', () => {
  it('Verifica se "encode" e "decode", são funções', () => {
    expect(typeof encode === 'function' && typeof decode === 'function').toBe(true);
  })

  it('Verifica se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4, 5, respectivamente.', () => {
    const vogais = 'a, e, i, o, u';
    const numeros = '1, 2, 3, 4, 5';
    expect(encode(vogais)).toBe(numeros);
  })

  it('Verifica se os números 1, 2, 3, 4, 5, são convertidos  nas vogais a, e, i, o, u, respectivamente.', () => {
    const numeros = '1, 2, 3, 4, 5';
    const vogais = 'a, e, i, o, u';
    expect(encode(numeros)).toBe(vogais);
  })

  it('Verifica se as letras não vogais são encripitadas', () => {
    const text = 'j, m, l, s';
    expect(encode(text)).toBe(text);
  })

  it('Verifica se a string retornada pela função encode, tem o mesmo número de caracteres da string passada por parâmetro', () => {
    const text = 'j, m, l, s';
    expect(encode(text).length).toBe(text.length);
  })

  it('Verifica se a string retornada pela função decode, tem o mesmo número de caracteres da string passada por parâmetro', () => {
    const text = 'j, m, l, s';
    expect(decode(text).length).toBe(text.length);
  })
})

describe('Questão 5 - Testa a função techList', () => {
  it('Testa se a função techList é definida', () => {
    expect(techList).toBeDefined();
  });
  it('Testa se techList é uma função', () => {
    expect(typeof techList).toBe('function');
  });
  it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
    expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
      {
        tech: 'CSS',
        name: 'Lucas'
      },
      {
        tech: 'HTML',
        name: 'Lucas'
      },
      {
        tech: 'JavaScript',
        name: 'Lucas'
      },
      {
        tech: 'Jest',
        name: 'Lucas'
      },
      {
        tech: 'React',
        name: 'Lucas'
      }
    ]);
  });

  it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], 'Lucas')).toBe('Vazio!');
  });
});

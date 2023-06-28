import { expect } from 'chai';
import { invertTree } from './invert-binary-tree';


describe('invertTree', () => {
  it('deve inverter a árvore corretamente', () => {
    // Crie um exemplo de árvore para testar
    const tree = {
      val: 4,
      left: {
        val: 2,
        left: { val: 1, left: null, right: null },
        right: { val: 3, left: null, right: null }
      },
      right: {
        val: 7,
        left: { val: 6, left: null, right: null },
        right: { val: 9, left: null, right: null }
      }
    };

    // Execute a função invertTree no exemplo de árvore
    const invertedTree = invertTree(tree);

    // Verifique se a árvore foi invertida corretamente
    expect(invertedTree).to.deep.equal({
      val: 4,
      left: {
        val: 7,
        left: { val: 9, left: null, right: null },
        right: { val: 6, left: null, right: null }
      },
      right: {
        val: 2,
        left: { val: 3, left: null, right: null },
        right: { val: 1, left: null, right: null }
      }
    });
  });

  it('deve retornar null se a árvore for nula', () => {
    // Execute a função invertTree com uma árvore nula
    const invertedTree = invertTree(null);

    // Verifique se o resultado é nulo
    expect(invertedTree).to.be.null;
  });
});

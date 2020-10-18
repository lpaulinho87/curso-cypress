/// <reference types="cypress"/>

it('Teste externo', ()=>{

})

describe('Um grupo de testes', () =>{
  describe('Um grupo especifico', () =>{
    it.skip('Teste interno', ()=>{

    })
  })

  describe('Um grupo especifico 2', () =>{
    it('Teste interno 2', ()=>{

    })
  })

  it('Teste interno principal', ()=>{

  })
})
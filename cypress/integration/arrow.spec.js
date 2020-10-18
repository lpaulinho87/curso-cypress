it('nada agora', function() {})

// function soma(a, b){
//   return a+b;
// }

// const soma = function(a, b){
//   return a+b
// }

// const soma = (a, b)=>{
//   return a + b
// }

// const soma = (a, b) => a + b

const soma = a => a+a

console.log(soma(2,3))

it('teste de funcao', function() {
  console.log('Funcao', this)
})

it('teste de arrow', () =>{
  console.log('Arrow', this)
})

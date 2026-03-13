let nome = 'João';
console.log(nome);

function adicionar(a, b) {
    return a + b
}

console.log(adicionar(10, 12));

//console.log(global);

//temporizador
setTimeout(() => {
    console.log("Operação concluída com sucesso");
}, 3000);

console.log(__dirname);
console.log(__filename);
const alunos = ['Maria'];


const notasAlunos = alunos.map(function(item1){
    item1 = {
        nome: item1,
        nota: 3.6
    }
    return item1;
})

notasAlunos.push({
    nome: 'Lucio',
    nota: 2.3
})

notasAlunos.push({
    nome: 'Barbosa',
    nota: 1.8
})

notasAlunos.push({
    nome: 'Amorim',
    nota: 8.5
})

notasAlunos.push({
    nome: 'Carlos',
    nota: 6.0
})

notasAlunos.push({
    nome: 'Cesar',
    nota: 6.1
})


const alun = notasAlunos.filter(function(ita) {
    return ita.nota >= 6.0
})




console.log(alun)

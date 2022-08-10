function minhasTarefas(item) {

    const tarefas = ["Lavar a louça", "Comprar Leite"]
    const addTarefa = item
    tarefas = [...tarefas, addTarefa]

    console.log('Tarefa adicionada com sucesso!')
    console.log(tarefas)
}

minhasTarefas(process.argv[2]);
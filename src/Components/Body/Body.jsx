import React from 'react'
import { useState } from 'react';
import { StyleBody } from './body';

const Body = () =>  {
    const [tarefas, setTarefas] = useState([]);
    const [novaTarefa, setNovaTarefa] = useState('');
    const [termoBusca, setTermoBusca] = useState('');
  
    const adicionarTarefa = () => {
      if (novaTarefa.trim() !== '') {
        setTarefas([...tarefas, { id: Date.now(), titulo: novaTarefa, concluida: false }]);
        setNovaTarefa('');
      }
    };
  
    const buscarTarefas = () => {
      const tarefasFiltradas = tarefas.filter((tarefa) =>
        tarefa.titulo.toLowerCase().includes(termoBusca.toLowerCase())
      );
      return tarefasFiltradas;
    };
  
    const tarefasFiltradas = termoBusca ? buscarTarefas() : tarefas;
  
    const editarTarefa = (idTarefa, novoTitulo) => {
      const tarefasAtualizadas = tarefas.map((tarefa) =>
        tarefa.id === idTarefa ? { ...tarefa, titulo: novoTitulo } : tarefa
      );
      setTarefas(tarefasAtualizadas);
    };
  
    const alternarStatusConclusaoTarefa = (idTarefa) => {
      const tarefasAtualizadas = tarefas.map((tarefa) =>
        tarefa.id === idTarefa ? { ...tarefa, concluida: !tarefa.concluida } : tarefa
      );
      setTarefas(tarefasAtualizadas);
    };
  
    const excluirTarefa = (idTarefa) => {
      const tarefasAtualizadas = tarefas.filter((tarefa) => tarefa.id !== idTarefa);
      setTarefas(tarefasAtualizadas);
    };
  return (
    <StyleBody>
         <h1 className="Titulo">Lista de Itens Desejados</h1>
        <section>
            <input className="campo-de-entrada"type="text"placeholder="Nova tarefa"value={novaTarefa}onChange={(e) => setNovaTarefa(e.target.value)}/>
            <button onClick={adicionarTarefa} className="botao-adicionar">Adicionar</button>
        </section>    
        <section>
            <input className="campo-de-busca"type="text"placeholder="Buscar tarefas"value={termoBusca}onChange={(e) => setTermoBusca(e.target.value)}/>
            <button onClick={() => setTermoBusca('')} className="botao-limpar">Limpar Busca</button>
        </section>
        <section>
        <ul>
          {tarefasFiltradas.map((tarefa) => (
            <li key={tarefa.id}>
              <input className="caixa-de-selecao"
                type="checkbox"
                checked={tarefa.concluida}
                onChange={() => alternarStatusConclusaoTarefa(tarefa.id)}
                />
              {tarefa.concluida ? (
                <span className="tarefa-concluida">
                  {tarefa.titulo}
                </span>
              ) : (
                <span className="titulo-da-tarefa">{tarefa.titulo}</span>
              )}
              <button onClick={() => editarTarefa(tarefa.id, prompt('Editar tarefa:', tarefa.titulo))}
                className="botao-editar">
                Editar
              </button>
              <button onClick={() => excluirTarefa(tarefa.id)} className="botao-excluir">Excluir</button>
            </li>
          ))}
        </ul>
        </section>  
      </StyleBody>
    );
  }
  
  



export default Body
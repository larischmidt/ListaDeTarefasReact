import styled from "styled-components";
export const StyleBody = styled.div`

display: flex;
flex-direction: column;
flex-grow: 1;
text-align: center;
font-family: 'Montserrat', sans-serif;
font-family: 'Work Sans', sans-serif;
background-color: #f5f5f5;
padding: 20px;
border-radius: 20px;
width: 500px;
gap: 10px;

.titulo{
    font-size: 2rem;
    color: white;
    border-style: double;
    font-family: 'Montserrat', sans-serif;
    font-family: 'Work Sans', sans-serif;
    background-color: #BF6B8A;
}
  
.campo-de-entrada,.campo-de-busca {
    padding: 8px;
    margin-right: 10px;
    border: 1px solid #14267f;
    border-radius: 4px;
}
.botao-adicionar,.botao-limpar{
    width: 150px;
}
.botao-adicionar {
    margin: 10px;
    padding: 8px;
    background-color: #af4caf;
    border: blue;
    border-radius: 4px;
    color: white;
    cursor: pointer;
}
  
.botao-limpar {
    margin: 10px;
    padding: 8px 16px;
    background-color: #19c4e3;
    border: none;
    border-radius: 4px;
    color: white;
    cursor: pointer;
}
  
  
li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px 0;
    background-color: #A0DBF2;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
}
  
.caixa-de-selecao {
    margin-right: 10px;
}
  
  
.tarefa-concluida {
    text-decoration: line-through;
    color: #1f1a1a;
}
  
.botao-editar,.botao-excluir {
    padding: 8px 12px;
    background-color: #8850BF;
    border: none;
    border-radius: 4px;
    color: white;
    cursor: pointer;
    transition: background-color 0.3s;
}
  
.botao-excluir {
    background-color: #BF3F92;
}
  
.botao-editar:hover,.botao-excluir:hover {
    background-color: #0056b3;
}
`
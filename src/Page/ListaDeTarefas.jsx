import React from "react";
import Header from "../Components/Header/Header.jsx";
import Footer from "../Components/Footer/Footer.jsx";
import Body from "../Components/Body/Body.jsx";
import { StyleListaDeTarefas } from "./ListaDeTarefas.js";
const ListaDeTarefas = () => {
  return (
    <StyleListaDeTarefas>
      <Header/> 
      <Body/> 
      <Footer/>          
    </StyleListaDeTarefas>
  )
}



export default ListaDeTarefas;
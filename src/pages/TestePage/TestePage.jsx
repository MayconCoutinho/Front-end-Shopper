import React from "react";
import { useNavigate } from "react-router-dom";
import { goToLogin } from "../../routes/coordinator";
import { useContext } from 'react'
import {GlobalContext} from "../../global/context/useContext.js"

const TestePage = () => {
    const navigate = useNavigate();
    const { nome } = useContext(GlobalContext)
    return(
        <>
        <h1> Pagina de teste </h1>
        <h1> Usando context globlal - {nome}</h1>
        <button onClick={() => goToLogin(navigate)}> goToLogin </button>
        </>
    )
}
export default TestePage;
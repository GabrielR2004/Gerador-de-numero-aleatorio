import React from "react";

export default function Aleatorio (props) {

    const {min , max} = props;
    const numeroAleatorio = parseInt(Math.random() * (max - min)) + min;

    const botaoRefresh = () => {
        window.location.reload();
    }

    return (
        <div>
            <h1>Gerador de numero aleatorio</h1>
            <p><strong>Valor minimo:{min}</strong></p>
            <p><strong>Valor maximo:{max}</strong></p>
            <h1>Numero Aleatorio: {numeroAleatorio} </h1>
            <button onClick={botaoRefresh}>Atualizar Numero</button>
        </div>
    )
}
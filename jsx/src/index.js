// importar las bibliotecas React y ReactDom
import React from 'react';
import ReactDOM from 'react-dom';

function getButtonText(){
    return "Clickear aqui"
}

// Crear un componente React
const App = () => {
    const buttonText = { text: 'clickeame'};
    const style = {backgroundColor: 'blue', color: 'white'};
    const labelText = 'Ingresa Nombre';

    return (
    <div>
        <label htmlFor="nombre" className="label">{labelText}</label>
        <input  id= "nombre" type="text"/>
        <button style={style}>
            {buttonText.text}
        </button>
    </div>
    );
}


// Tomar el componente React y mostrarlo en la pantalla 

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);
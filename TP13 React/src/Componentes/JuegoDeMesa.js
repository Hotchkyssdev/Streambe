import React, { Component } from 'react';

class JuegoDeMesa extends Component {
  handleClick = () => {
    const { nombre, mostrarAlerta } = this.props;
    mostrarAlerta(nombre);
  };

  render() {
    const { nombre } = this.props;
    return (
      <div>
        <h1>{nombre}</h1>
        <button onClick={this.handleClick}>Mostrar Alerta</button>
      </div>
    );
  }
}

export default JuegoDeMesa;

import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    };
  }

  onInputChange = ({ target }) => {
    // desestruturar o state para manipular aqui
    const check = (target.type === 'checkbox') ? target.checked : target.value;
    this.setState({
      // [target.name]: target.value, - para ficar generico o nome do campo para pegar o value a ser digitado
      [target.name]: check,
      // mentoria Muca - sobre a segunda funcao de callback dentro do setState que espera o resultado anterior para executar a segunda funcao
    }, () => {
      const { cardName, cardDescription, cardImage, cardRare,
        cardAttr1, cardAttr2, cardAttr3 } = this.state;
      const soma = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);
      console.log(typeof soma);
      const limit = 210;
      const ninety = 90;
      const numberNegative = -1;
      const errorCases = [
        cardName.length !== 0,
        cardDescription.length !== 0,
        cardImage.length !== 0,
        cardRare.length !== 0,
        cardAttr1 <= ninety,
        cardAttr1 > numberNegative,
        cardAttr2 > numberNegative,
        cardAttr3 > numberNegative,
        cardAttr2 <= ninety,
        cardAttr3 <= ninety,
        soma <= limit,

      ];
      const verification = errorCases.every((erros) => erros === true);
      this.setState({
        isSaveButtonDisabled: !verification,
      });
    });
  }

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, hasTrunfo, isSaveButtonDisabled,
      onInputChange, onSaveButtonClick } = this.state;

    return (
      <div>
        <h1>Tryunfo teste</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          // hasTrunfo={ hasTrunfo } // um booleano
          isSaveButtonDisabled={ isSaveButtonDisabled } // um booleano
          // disabled={ this.isSaveButtonDisabled }
          onInputChange={ this.onInputChange } // uma callback
          // onSaveButtonClick={ this.onSaveButtonClick } // uma callback
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
      </div>
    );
  }
}

export default App;

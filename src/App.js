import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
// course gabarito https://app.betrybe.com/course/front-end/componentes-com-estado-eventos-e-formularios-com-react/eventos-e-formularios-no-react/solutions/306d9a98-87b4-445b-9256-482909f5e918/conteudo/a675c67e-b553-4390-9904-82f6ed07ab20?use_case=calendar
const INITIAL_STATE = {
  cardName: '',
  cardDescription: '',
  cardAttr1: '',
  cardAttr2: '',
  cardAttr3: '',
  cardImage: '',
  cardRare: '',
  cardTrunfo: false,
  isSaveButtonDisabled: true,
  // newCard: [],
};

class App extends React.Component {
  constructor() {
    super();

    this.state = INITIAL_STATE;
  }

  onInputChange = ({ target }) => {
    // ajuste do checkbox para funcionar no form - isso sempre será necessario para ativar o checkbox
    const check = (target.type === 'checkbox') ? target.checked : target.value;
    // agora preciso validar a informação para inderizar na tela essa msg se já tiver um Super Trunfo
    console.log(target.checked === true);
    if (target.checked === 'Super Trunfo') {
      return <p>Você já tem um Super Trunfo em seu baralho</p>;
    }

    this.setState({
      // [target.name]: target.value, - para ficar generico o nome do campo para pegar o value a ser digitado
      [target.name]: check,
      // mentoria Muca - sobre a segunda funcao de callback dentro do setState que espera o resultado anterior para executar a segunda funcao
    }, () => {
      // desestruturar o state para manipular aqui
      const { cardName, cardDescription, cardImage, cardRare,
        cardAttr1, cardAttr2, cardAttr3 } = this.state;
        //
      const soma = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);
      // condicoes para desabilitar o botão
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
        // cardTrunfo === true,
      ];
      const verification = errorCases.every((erros) => erros === true);
      this.setState({
        isSaveButtonDisabled: !verification,
      });
    });
  }

  onSaveButtonClick = (event) => {
    event.preventDefault();
    // limpar a lista novamente para o inicial
    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: '',
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
          hasTrunfo={ hasTrunfo } // um booleano
          isSaveButtonDisabled={ isSaveButtonDisabled } // um booleano
          onInputChange={ this.onInputChange } // uma callback
          onSaveButtonClick={ this.onSaveButtonClick } // uma callback
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

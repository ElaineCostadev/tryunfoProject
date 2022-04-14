import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
// course gabarito https://app.betrybe.com/course/front-end/componentes-com-estado-eventos-e-formularios-com-react/eventos-e-formularios-no-react/solutions/306d9a98-87b4-445b-9256-482909f5e918/conteudo/a675c67e-b553-4390-9904-82f6ed07ab20?use_case=calendar
const INITIAL_STATE = {
  cardName: '123',
  cardDescription: '123',
  cardAttr1: '0',
  cardAttr2: '0',
  cardAttr3: '0',
  cardImage: 'a',
  cardRare: 'raro',
  cardTrunfo: false,
  isSaveButtonDisabled: false,
  hasTrunfo: false,
  cardSaved: [],
};

class App extends React.Component {
  constructor() {
    super();
    this.state = INITIAL_STATE;
  }

  onInputChange = ({ target }) => {
    // ajuste do checkbox para funcionar no form - isso sempre será necessario para ativar o checkbox
    const check = (target.type === 'checkbox') ? target.checked : target.value;
    this.setState({
      // [target.name]: target.value, - para ficar generico o nome do campo para pegar o value a ser digitado
      [target.name]: check,
      // mentoria Muca - sobre a segunda funcao de callback dentro do setState que espera o resultado anterior
      // para executar a segunda funcao
    }, () => {
      // desestruturar o state para manipular as condicionais aqui.
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
      ];
      // condicoes se todos os erros forem true
      const verification = errorCases.every((erros) => erros === true);
      this.setState({
        isSaveButtonDisabled: !verification,
      });
    });
  }

  // botao para salvar os novos cards e limpar o texto.
  onSaveButtonClick = (event) => {
    event.preventDefault();
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo } = this.state;
      // criacao de um novo objeto
    const newCard = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };
    this.setState((prevState) => ({
      // para pegar todos os cards anteriores e coloca no novo objeto
      cardSaved: [...prevState.cardSaved, newCard],
    }));
    // Esse if muda o state de hasTrunfo apos o clique
    if (cardTrunfo) {
      this.setState({
        hasTrunfo: true,
      });
    }

    // limpar a lista novamente para o inicial
    this.setState({
      cardName: '1',
      cardDescription: '1',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: 'a',
      cardRare: 'muito raro',
      cardTrunfo: false,
      isSaveButtonDisabled: false,
    });
  }

  // remove/filtra os cards que deseja excluir
   deleteCardSaved = (cardRemoved) => {
     this.setState((prevState) => ({
       cardSaved: prevState.cardSaved
         .filter((cards) => cards.cardName !== cardRemoved.cardName),
     }));
     // volta o state para false quando a carta SuperTrunfo é excluida
     // Ajuda mentoria Summer - Carlos
     if (cardRemoved.cardTrunfo) {
       this.setState({
         hasTrunfo: false,
         cardTrunfo: false,
       });
     }
   }

   // filtra os novos cards pelo nome
   handleFilter = ({ target }) => {
     // trouxe as cartas salvas aqui
     const { cardSaved } = this.state;
     this.setState((prevState) => ({
       cardSaved: prevState.cardSaved
         .filter((filterName) => filterName.cardName === target.value),
     }));
     if (target.value === 0) {
       this.setState({
         cardSaved: prevState.cardSaved,
       });
     }
   };
   /*     this.setState((prevState) => {
       console.log('cardSaved', cardSaved);
       console.log('prevState.cardSaved', prevState.cardSaved);
       console.log('target.value', target.value);
       console.log((!target.value) && prevState);
    });
    */

   // filtrando as cartas pelo nome
   // cardSaved.filter((filterName) => filterName.cardName === target.value);
   // Ao digitar neste campo, deve ser renderizado na página apenas as cartas que contenham no nome o texto digitado.
   // como renderizar as cartas com o nome igual? - consegui com o setState, mas ao apagar a letra, está apagando tudo.

   //   this.setState((prevState) => ({
   /*       cardSaved: prevState.cardSaved
       .filter((filterName) => filterName.cardName === target.value),
   })); */

   render() {
     const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
       cardImage, cardRare, cardTrunfo, hasTrunfo, isSaveButtonDisabled,
       cardSaved,
     } = this.state;
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
           cardSaved={ cardSaved }
           handleFilter={ this.handleFilter }
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
         { /* novas cartas */}
         <ul>
           { cardSaved.map((cards, index) => (
             <li key={ index }>
               <Card
                 cardName={ cards.cardName }
                 cardDescription={ cards.cardDescription }
                 cardAttr1={ cards.cardAttr1 }
                 cardAttr2={ cards.cardAttr2 }
                 cardAttr3={ cards.cardAttr3 }
                 cardImage={ cards.cardImage }
                 cardRare={ cards.cardRare }
                 cardTrunfo={ cards.cardTrunfo }
               />
               <button
                 type="button"
                 data-testid="delete-button"
                 // mentoria Baby Steps do Muca
                 // onClick={ this.deleteCardSaved }
                 onClick={ () => this.deleteCardSaved(cards) }
               >
                 Excluir
               </button>
             </li>
           ))}
         </ul>
       </div>
     );
   }
}

export default App;

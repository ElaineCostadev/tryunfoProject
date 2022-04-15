import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
// course gabarito https://app.betrybe.com/course/front-end/componentes-com-estado-eventos-e-formularios-com-react/eventos-e-formularios-no-react/solutions/306d9a98-87b4-445b-9256-482909f5e918/conteudo/a675c67e-b553-4390-9904-82f6ed07ab20?use_case=calendar
const INITIAL_STATE = {
  cardName: '12',
  cardDescription: 'a',
  cardAttr1: '0',
  cardAttr2: '0',
  cardAttr3: '0',
  cardImage: 'aa',
  cardRare: 'normal',
  cardTrunfo: false,
  isSaveButtonDisabled: false,
  hasTrunfo: false,
  cardSaved: [],
  // novo card dos filtrados
  cardFilter: [],
  // uma nova verificação do filter
  hasFilter: false,
  selectFilter: 'todas',
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
      cardDescription: '2',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: 'aa',
      cardRare: 'normal',
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

   // ✕ Será validado apenas as cartas correspondentes aparecem após o filtro (643 ms)

   // filtra os novos cards pelo nome
   handleFilter = ({ target }) => {
     // trouxe as cartas salvas aqui
     // const { cardSaved } = this.state;
     this.setState((prevState) => ({
       // faço um novo state e um novo array que pega as informações que já estao no cardSaved- com ajuda do Gustavo Silva tB -
       cardFilter: prevState.cardSaved
       // filtrando e verificando se inclui o valor da caixa de pesquisa
         .filter((filterName) => filterName.cardName.includes(target.value)),
     }), () => {
       // verifica se tem algo digitado no target - se tiver, ativa o filter
       if (target.value.length > 0) {
         this.setState({
           hasFilter: true,
         });
       } else {
         // se nao tiver - desativa o filter e mostra o map.
         this.setState({
           hasFilter: false,
         });
       }
     });
   };

   // pensar, se cardRare === selectFilter

   handleRare = ({ target }) => {
     console.log('testandoHandle', target.value);
     // trouxe as cartas salvas aqui
     // const { cardSaved } = this.state;
     /*  this.setState((prevState) => ({
       selectFilter: prevState.cardSaved,
     })); */

     // preciso pegar o State do cardRare que está no novo objeto que é cardSaved
     // preciso comparar com o value.innerText do selectFilter
     // if cardRare === selectFilter return todos os cardSaved que contenham aquela palavra.
     // se nao mostre todas.
     // Por ultimo Se o campo do filtro Nome estiver preenchido, os dois filtros (por nome e por raridade)
     // devem funcionar em conjunto.
   }

   render() {
     const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
       cardImage, cardRare, cardTrunfo, hasTrunfo, isSaveButtonDisabled,
       cardSaved, cardFilter, hasFilter, // selectFilter,
     } = this.state;
     // condição para verificar se tem algo no valueFiltrado? sim, coloca os filtrados se nao coloca todos.
     const lista = hasFilter ? cardFilter : cardSaved;
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
           handleRare={ this.handleRare }
           // selectFilter={ selectFilter }
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
           { /* lista é variavel de verificacao para renderizar ou nao */}
           { lista.map((cards, index) => (
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

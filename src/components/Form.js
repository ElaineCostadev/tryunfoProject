import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  render() {
    // cardTrunfo
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, hasTrunfo, isSaveButtonDisabled,
      onInputChange, onSaveButtonClick } = this.props;
    // {!cardName.length ? '-nome invalido-' : '-ok-' }
    return (
      <form>
        <label htmlFor="name">
          Nome:
          <input
            type="text"
            name="cardName"
            value={ cardName }
            onChange={ onInputChange }
            placeholder="Digite o nome da Carta"
            data-testid="name-input"
          />
        </label>

        <label htmlFor="textarea">
          <textarea
            id="textarea"
            name="cardDescription"
            value={ cardDescription }
            onChange={ onInputChange }
            rows="5"
            cols="33"
            placeholder="Digite uma breve descrição da Carta"
            data-testid="description-input"
          >
            Descrição da carta
          </textarea>
        </label>

        <label htmlFor="number1">
          Numero 1
          <input
            id="number1"
            type="number"
            name="cardAttr1"
            value={ cardAttr1 }
            onChange={ onInputChange }
            placeholder="Insira um numero de 1 a 90"
            min={ 0 }
            max={ 90 }
            data-testid="attr1-input"
          />
        </label>

        <label htmlFor="number2">
          Numero 2
          <input
            id="number2"
            type="number"
            name="cardAttr2"
            value={ cardAttr2 }
            onChange={ onInputChange }
            placeholder="Insira um numero de 1 a 90"
            data-testid="attr2-input"
          />
        </label>

        <label htmlFor="number3">
          Numero 3
          <input
            id="number3"
            type="number"
            name="cardAttr3"
            value={ cardAttr3 }
            onChange={ onInputChange }
            placeholder="Insira um numero de 1 a 90"
            data-testid="attr3-input"
          />
        </label>

        <label htmlFor="image">
          Imagem
          <input
            type="text"
            name="cardImage"
            value={ cardImage }
            onChange={ onInputChange }
            placeholder="Insira o link de uma imagem"
            data-testid="image-input"
          />
        </label>

        <label htmlFor="select">
          <select
            name="cardRare"
            value={ cardRare }
            onChange={ onInputChange }
            data-testid="rare-input"
          >
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>

        <label htmlFor="checkbox">
          Essa carta é Super Trunfo?
          <input
            id="checkbox"
            type="checkbox"
            name="cardTrunfo"
            checked={ cardTrunfo }
            onChange={ onInputChange }
            data-testid="trunfo-input"
            hasTrunfo={
              (hasTrunfo)
                ? <p>Você já tem um Super Trunfo em seu baralho</p>
                : null
            }
            // hasTrunfo={hasTrunfo}
            /*  {
              (hasTrunfo)
              ? "checked"
              : ( <p>Você já tem um Super Trunfo em seu baralho</p>)
            }   */
          />
        </label>

        <button
          type="submit"
          name="buttonSave"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
          data-testid="save-button"
        >
          Salvar Carta
        </button>

      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;

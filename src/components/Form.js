import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  render() {
    // cardTrunfo
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, hasTrunfo, isSaveButtonDisabled,
      onInputChange, onSaveButtonClick } = this.props;

    return (
      <form>
        <label htmlFor="name">
          Nome:
          <input
            type="text"
            name="name"
            value={ cardName }
            onChange={ onInputChange }
            data-testid="name-input"
          />
        </label>

        <label htmlFor="textarea">
          <textarea
            id="textarea"
            name="textarea"
            value={ cardDescription }
            onChange={ onInputChange }
            data-testid="description-input"
            rows="5"
            cols="33"
          >
            Descrição da carta
          </textarea>
        </label>

        <label htmlFor="number1">
          Numero 1
          <input
            id="number1"
            type="number"
            name="number1"
            value={ cardAttr1 }
            onChange={ onInputChange }
            data-testid="attr1-input"
          />
        </label>

        <label htmlFor="number2">
          Numero 1
          <input
            id="number2"
            type="number"
            name="number2"
            value={ cardAttr2 }
            onChange={ onInputChange }
            data-testid="attr2-input"
          />
        </label>

        <label htmlFor="number3">
          Numero 1
          <input
            id="number3"
            type="number"
            name="number3"
            value={ cardAttr3 }
            onChange={ onInputChange }
            data-testid="attr3-input"
          />
        </label>

        <label htmlFor="image">
          Imagem
          <input
            type="text"
            name="image"
            value={ cardImage }
            onChange={ onInputChange }
            data-testid="image-input"
          />
        </label>

        <label htmlFor="select">
          <select
            name="select"
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
          Super Trunfo
          <input
            id="checkbox"
            type="checkbox"
            name="input"
            checked={ cardTrunfo }
            onChange={ onInputChange }
            // onChange={ this.onInputChange }
            /* onChange= {(event) => this.setState({cardTrunfo: true})
                    (cardTrunfo) ? false : true} */
            data-testid="trunfo-input"
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

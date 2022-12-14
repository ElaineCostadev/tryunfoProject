import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, hasTrunfo, isSaveButtonDisabled,
      onInputChange, onSaveButtonClick } = this.props;

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
            id="select"
            name="cardRare"
            value={ cardRare }
            onChange={ onInputChange }
            data-testid="rare-input"
          >
            <option selected>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>

        {
          (hasTrunfo) ? 'Você já tem um Super Trunfo em seu baralho'
            : (
              <label htmlFor="checkbox">
                Essa carta é Super Trunfo?
                <input
                  id="checkbox"
                  type="checkbox"
                  name="cardTrunfo"
                  checked={ cardTrunfo }
                  onChange={ onInputChange }
                  data-testid="trunfo-input"
                />
              </label>
            )

        }
        <button
          type="submit"
          name="buttonSave"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
          data-testid="save-button"
        >
          Salvar Carta
        </button>

        <label htmlFor="filterName">
          Filtrar pelo nome
          <input
            placeholder="Buscar pelo nome"
            id="filterName"
            type="text"
            name="filterName"
            data-testid="name-filter"
            onChange={ this.handleFilter }
          />
        </label>

        <label htmlFor="selectFilter">
          Filtrar pela Raridade
          <select
            id="selectFilter"
            placeholder="Raridade"
            name="selectFilter"
            // quando tiro o value os valores são renderizados na tela...
            // value={ selectFilter }
            onChange={ onInputChange }
            data-testid="rare-filter"
          >
            <option>todas</option>
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>

      </form>
    );
  }
}

// aula Jensen - Formularios 11.2 - 20:35 min
Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  cardAttr2: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  cardAttr3: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo } = this.props;

    // const { cardTrunfo } = this.state;
    return (
      <div>
        <h2 data-testid="name-card">
          { cardName }
        </h2>
        <img src={ cardImage } alt={ cardName } data-testid="image-card" />
        <h4 data-testid="description-card">
          { cardDescription }
        </h4>
        <p data-testid="attr1-card">
          { cardAttr1 }
        </p>
        <p data-testid="attr2-card">
          { cardAttr2 }
        </p>
        <p data-testid="attr3-card">
          { cardAttr3 }
        </p>
        <h4 data-testid="rare-card">
          { cardRare }
        </h4>
        {
          (cardTrunfo)
            ? (<div data-testid="trunfo-card">Super Trunfo</div>)
            : null
        }
      </div>
    );
  }
}
// requesito 3 para aparecer o item Super Trunfo, com mentoria e ajuster no componente App
Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;

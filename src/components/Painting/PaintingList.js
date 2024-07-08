import React from 'react';
import PropTypes from 'prop-types';
import Painting from './Painting';

const PaintingList = ({ paintingJson }) => {
  return (
    <>
      <ul className="list">
        {paintingJson.map(({ id, url, title, price, quantity }) => (
          <li key={id}>
            <Painting
              url={url}
              title={title}
              price={price}
              quantity={quantity}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

PaintingList.protoTypes = {
  paintingJson: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default PaintingList;

import React from "react";
import PropTypes from "prop-types";
import defaulImage from "../../images/bird-3715670_1280.jpg";

const Painting = ({ url, title, price, quantity }) => {
  // рендер по условию
  const productAvailability =
    quantity < 10 ? "заканчиваеться" : "есть в наличии";

  return (
    <div>
      {/* <img src={defaulImage} alt={title} width="480" /> */}
      <img src={url} alt={title} width="480" />
      <h2>{title}</h2>
      {/* <p>
        Автор: <a href={profileUrl}>{tag}</a>
      </p> */}
      <p>Цена: {price} кредитов</p>
      <p>Товар: {productAvailability}</p>
      {/* <p>Товар: {quantity < 10 ? "заканчиваеться" : "есть в наличии"}</p> */}
      {/* <button type="button">Добавить в корзину</button> */}
    </div>
  );
};

export default Painting;
// картинке обязательно нужно поставить дефолтное значение
// стоит использовать локальное изображение
// Painting.defaultProps = {
//   //   url: "https://cdn.pixabay.com/photo/2018/10/01/09/00/bird-3715670_1280.jpg",
//   url: defaulImage,
// };

// используеться для компонента где есть пропсы
Painting.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};

import { isVisible } from '@testing-library/user-event/dist/utils';
import React, { useState } from 'react';

const Dropdown = ({ children }) => {
  const [menu, setMenu] = useState(false);

  //   const show = () => {
  //     setMenu(!menu);
  //   };

  //   const hide = () => {
  //     setMenu(!menu);
  //   };

  const toogle = () => {
    setMenu(!menu);
  };

  return (
    <div className="Dropdown">
      {/* <button type="button" onClick={() => setMenu(true)}>
        Показати
      </button> */}
      <button type="button" onClick={toogle}>
        {/* Показати */}
        {!menu ? 'Показати' : 'Сховати'}
      </button>
      <button type="button" onClick={() => setMenu(false)}>
        Приховати
      </button>

      {menu && <div className="Dropdown__menu">Випадаюче меню{children}</div>}
    </div>
  );
};

export default Dropdown;

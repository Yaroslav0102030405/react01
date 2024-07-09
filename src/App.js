import React, { useState } from 'react';
// import logo from "./logo.svg";

// import Container from './components/Container/Container';
// import AppBar from './components/AppBar/AppBar';
import Layout from './components/Layout/Layout';
import Logo from './components/Logo/Logo';
import PaintingList from './components/Painting/PaintingList';
import paintingJson from './components/Data/paintings.json';
import Panel from './components/Panel/Panel';
// import Footer from './components/Footer/Footer';
import Counter from './components/Counter/Counter';
import Dropdown from './components/Dropdown/Dropdown';

function App() {
  const [count, setCount] = useState(0);

  const onIncrement = () => {
    setCount(count + 1);
  };

  const onDecrement = () => {
    setCount(count - 1);
  };
  return (
    <>
      <Layout>
        <Logo text="Логотип" type="error" />
        <Panel title="Свежие новости">
          <p style={{ textAlign: 'center' }}>
            Ми робимо все, щоб ви мали змогу швидко, просто і комфортно придбати
            необхідні для вас матеріали. У нас є все, що тільки може знадобитися
            вам і вашим дітям: 1. Книжки для дітей різного віку, починаючи від
            дитячих казок для найменших і закінчуючи творами української та
            зарубіжної класики; 2. Підготовчі матеріали для майбутніх школярів
            (лист, рахунок, малювання, іноземні мови і т.д.). 3. Підручники за
            новою програмою, рекомендовані Міністерством освіти і науки, молоді
            та спорту України. 4. Підготовчі матеріали та тестові завдання для
            Зовнішнього незалежного оцінювання (укр .: Зовнішнє незалежне
            оцінювання (ЗНО)) і Державної підсумкової атестації (укр .: Державна
            підсумкова атестація (ДПА)).
          </p>
        </Panel>
        <Panel>
          <p style={{ textAlign: 'center' }}>
            Ми робимо все, щоб ви мали змогу швидко, просто і комфортно придбати
            необхідні для вас матеріали. У нас є все, що тільки може знадобитися
            вам і вашим дітям: 1. Книжки для дітей різного віку, починаючи від
            дитячих казок для найменших і закінчуючи творами української та
            зарубіжної класики; 2. Підготовчі матеріали для майбутніх школярів
            (лист, рахунок, малювання, іноземні мови і т.д.). 3. Підручники за
            новою програмою, рекомендовані Міністерством освіти і науки, молоді
            та спорту України. 4. Підготовчі матеріали та тестові завдання для
            Зовнішнього незалежного оцінювання (укр .: Зовнішнє незалежне
            оцінювання (ЗНО)) і Державної підсумкової атестації (укр .: Державна
            підсумкова атестація (ДПА)).
          </p>
          <Counter
            onDecrement={onDecrement}
            onIncrement={onIncrement}
            count={count}
          />
          {/* <Dropdown /> */}
          <Dropdown>
            <h2>Привіт!</h2>
          </Dropdown>
        </Panel>
        <PaintingList paintingJson={paintingJson} />
      </Layout>
    </>
  );
}

export default App;

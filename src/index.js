import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Header from './components/Header'
import Banner from './components/Banner'
import ComputerVision from './components/ComputerVision'
import './index.css'
import { computerVision } from './components/ComputerVision/azure-cognitiveservices-computervision';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Header />
    <Banner
      videoTitle={"Doguinho ou Muffin?"}
      url={"https://www.youtube.com/watch?v=0yCJMt9Mx9c"}
      videoDescription={"Através dessa ferramenta faremos com que a IA reconheça se a foto é de um doguinho ou de um muffin."}
    />

    <ComputerVision />

  </div>
);



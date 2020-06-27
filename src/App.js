import React from 'react';
import  Header  from './component/Header';
import  Balance  from './component/Balance';
import  InccomeExpenses  from './component/InccomeExpenses';
import  Transactionlist  from './component/Transactionlist';
import  AddTransaction from './component/AddTransaction';
import {GlobalProvider} from './context/GlobalState';


import './App.css';

function App() {
  return (
    <GlobalProvider>
    <Header/>
    <div className="container"></div>
    <Balance/>
    <InccomeExpenses/>
    <Transactionlist/>
    <AddTransaction/>
    </GlobalProvider>
  );
}

export default App;

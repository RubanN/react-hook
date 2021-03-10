import React, { Component } from 'react'
import Header from './components/Header'
import Balance from './components/Balance'
import IncomeExpenses from './components/IncomeExpenses'
import TransactionList from './components/TransactionList'
import AddTransaction from './components/AddTransaction'
import './App.css'
import {GlobalContext} from './components/context/GlobalState'
import {AppReducer} from './components/context/AppReducer'

 class App extends Component {
  render() {
    return (
      <GlobalContext>
        <Header/>
        <div className = "container">
          <Balance/>
          <IncomeExpenses/>
          <TransactionList/>
          <AddTransaction/>
        </div>
      </GlobalContext>
    )
  }
}

export default App

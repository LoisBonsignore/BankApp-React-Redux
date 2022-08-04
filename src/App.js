import './App.css';
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state/index";
import { useState } from 'react';
import Navbar from './components/Navbar';

function App() {

  const state = useSelector((state) => state.account);
  const dispatch = useDispatch()

  const { depositMoney, withdrawMoney } = bindActionCreators(actionCreators, dispatch);

  const [money, setMoney] = useState(0)

  return (
    <div className="App">
      <Navbar />
      <div className="general-operation-container">
        <div className="operation-container">
          <input type="number" onChange={(e) => setMoney(e.target.value)} />
          <div className="btns-container">
            <button onClick={() => depositMoney(+money)}>Deposit</button>
            <button className="red" onClick={() => withdrawMoney(money)}>Withdraw</button>
          </div>
        </div>
        <div className="display-container">
          <h1 className={state > 0 ? "positive" : "negative"}>{state} €</h1>
        </div>
      </div>
    </div>
  );
}

export default App;

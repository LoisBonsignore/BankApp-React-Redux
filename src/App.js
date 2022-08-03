import './App.css';
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state/index";
import { useState } from 'react';

function App() {

  const state = useSelector((state) => state.account);
  const dispatch = useDispatch()

  const { depositMoney, withdrawMoney } = bindActionCreators(actionCreators, dispatch);

  const [amount, setAmount] = useState(0)

  return (
    <div className="App">
      <h1>{state}</h1>
      <input type="number" onChange={(e) => setAmount(e.target.value)} />
      <button onClick={() => depositMoney(+amount)}>Deposit</button>
      <button onClick={() => withdrawMoney(amount)}>Withdraw</button>
    </div>
  );
}

export default App;

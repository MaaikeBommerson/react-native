import {useState, useCallback} from "react";
import Customers from "./components/Customers";

const App = () => {

  const [count, setCount] = useState(2)
  const [customers, setCustomers] = useState(["Customer #1"]);
  const [unrelatedCount, setUnrelatedCount] = useState(0)

  const addCustomer = useCallback(() => {
      setCustomers((c) => [...c, `Customer #${count}`])
      setCount( c => c + 1)
  }, [customers])

  const unrelated = () => {
    setUnrelatedCount( (c)=> c+1)
  }

  return (
      <div className="App">
          <h1>Use Callback</h1>
          <button onClick={ () => unrelated() }>Unrelated!</button>
          <h3>Unrelated: { unrelatedCount }</h3>
          <Customers customers={customers} addCustomer={addCustomer}/>
      </div>
  );
}

export default App;
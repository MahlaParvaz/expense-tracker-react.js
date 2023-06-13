import { useEffect, useState } from 'react';
import OverViewComponent from './OverViewComponent';
import TransActionComponent from './TransActionComponent';
const EspenseApp = () => {
  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(0);
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (formValues) => {
    // console.log(formValues);
    const data = { ...formValues, id: Date.now() };
    setTransactions([...transactions, data]);
  };
  useEffect(() => {
    let exp = 0;
    let inc = 0;
    transactions.forEach((t) => {
      t.type === 'expense'
        ? (exp = exp + parseFloat(t.amount))
        : (inc = inc + parseFloat(t.amount));
    });
    setExpense(exp);
    setIncome(inc);
  }, [transactions]);

  return (
    <section className="container">
      <OverViewComponent
        income={income}
        expense={expense}
        addTransaction={addTransaction}
      />
      <TransActionComponent transactions={transactions} />
    </section>
  );
};

export default EspenseApp;

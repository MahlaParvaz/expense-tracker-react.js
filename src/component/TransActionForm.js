import { useState } from 'react';

const TransActionForm = ({ addTransaction, setIsShow }) => {
  const [formValues, setFormValues] = useState({
    type: 'expense',
    amount: '',
    desc: '',
  });

  const changeHandler = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
    // console.log(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    addTransaction(formValues);
    setIsShow(false);
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        className="formInput"
        type="text"
        name="desc"
        placeholder="Description ..."
        onChange={changeHandler}
        value={formValues.desc}
      />
      <input
        className="formInput"
        type="number"
        name="amount"
        placeholder="Amount ..."
        onChange={changeHandler}
        value={formValues.amount}
      />
      <div className="radioBox">
        <input
          type="radio"
          value="expense"
          name="type"
          id="expense"
          checked={formValues.type === 'expense'}
          onChange={changeHandler}
        />
        <label htmlFor="expense">Expense</label>
        <input
          type="radio"
          value="income"
          name="type"
          id="income"
          checked={formValues.type === 'income'}
          onChange={changeHandler}
        />
        <label htmlFor="income">Income</label>
      </div>
      <button className="primary" type="submit">
        Add Transaction
      </button>
    </form>
  );
};

export default TransActionForm;

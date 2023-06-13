import { useState } from 'react';
import TransActionForm from './TransActionForm';

const OverViewComponent = ({ income, expense, addTransaction }) => {
  const [isShow, setIsShow] = useState(false);
  return (
    <>
      <div className="topSection">
        <p> Balance : {expense - income}</p>
        <button
          className="addBtn"
          onClick={() => setIsShow((prevState) => !prevState)}
        >
          {isShow ? 'Cancel' : 'Add'}
        </button>
      </div>
      {isShow && <TransActionForm addTransaction={addTransaction} />}
      <div className="resultSection">
        <div>Expense : {expense}</div>
        <div>Income : {income}</div>
      </div>
    </>
  );
};

export default OverViewComponent;

import { useState } from 'react';
import TransActionForm from './TransActionForm';

const OverViewComponent = ({ income, expense, addTransaction }) => {
  const [isShow, setIsShow] = useState(false);
  return (
    <>
      <div className="topSection">
        <p> Balance : {income - expense}</p>
        <button
          className={`btn ${isShow && 'cancel'}`}
          onClick={() => setIsShow((prevState) => !prevState)}
        >
          {isShow ? 'Cancel' : 'Add'}
        </button>
      </div>
      {isShow && (
        <TransActionForm
          addTransaction={addTransaction}
          setIsShow={setIsShow}
        />
      )}

      <div className="resultSection">
        <div className="expenseBox">
          Expense
          <span style={{ color: 'red' }}> {expense} $</span>
        </div>
        <div className="expenseBox">
          Income
          <span style={{ color: 'green' }}> {income} $</span>
        </div>
      </div>
    </>
  );
};

export default OverViewComponent;

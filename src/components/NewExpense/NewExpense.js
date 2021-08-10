import React, {useState} from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpensedData) => {
        const expenseData = {
            ...enteredExpensedData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setisEditing(false);
    };

    const [isEditing, setisEditing] = useState(false);

    const startEditingHandler = () => {
        setisEditing(true);
    }
    const stopEditingHandler = () => {
      setisEditing(false);
    };

    
    return (
      <div className="new-expense">
        {!isEditing && (
          <button type="button" onClick={startEditingHandler}>
            Add New Expense
          </button>
        )}
        {isEditing && (
          <ExpenseForm
            onCancel={stopEditingHandler}
            onSaveExpenseData={saveExpenseDataHandler}
          />
        )}
      </div>
    );
}

export default NewExpense;
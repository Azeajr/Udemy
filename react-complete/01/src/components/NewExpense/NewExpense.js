import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random.toString(),
    };
    // console.log(expenseData);
    props.onAddExpense(expenseData);
  };

  const [addingExpense, setAddingExpense] = useState(false);

  const toggleAddExpenseHandler = () => {
    setAddingExpense((prevState) => {
      return !prevState;
    });
  };

  return (
    <div className="new-expense">
      {addingExpense ? (
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} toggleAddExpenseHandler={ toggleAddExpenseHandler}/>
      ) : (
        <button type="button" onClick={toggleAddExpenseHandler}>
          Add an Expense
        </button>
      )}
    </div>
  );
};

export default NewExpense;

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: `e${Math.random().toString()}`,
    };
    props.onAddExpense(expenseData);
    // console.log(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpense={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;

import { ExpenseList } from "./components/ExpenseList";
import type { Expense } from  "./types/Expense"
import { MyForm } from "./components/Form"
import { useState } from "react";

function App() {  
  const [expenses, setExpenses] = useState<Expense[]>([])

  function addExpense(newExpense: Expense) {
    setExpenses([...expenses, newExpense]);
  }
  const soma = expenses.reduce((total, expense) => total + expense.amount, 0);

  return (
    <div>
      <h1>SpendWise</h1>
      <MyForm onAddExpense={addExpense}/>
      <ExpenseList expenses={expenses} />
      <h2>Total: R$ {soma}</h2>
    </div>
  )
}

export default App;
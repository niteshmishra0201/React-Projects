import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Total from './components/Total'
import ExpenseForm from './components/ExpenseForm'
import ExpenseList from './components/ExpenseList'

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, name: 'Groceries', amount: 450, category: 'Food' },
    { id: 2, name: 'Netflix Subscription', amount: 199, category: 'Entertainment' },
    { id: 3, name: 'Bus Pass', amount: 100, category: 'Transport' },
  ])

  const total = expenses.reduce((sum, expense) => sum + expense.amount, 0)

  function addExpense(newExpense) {
    setExpenses((prevExpenses) => [...prevExpenses, newExpense])
  }

  function deleteExpense(id) {
    setExpenses((prevExpenses) => prevExpenses.filter((expense) => expense.id !== id))
  }

  return (
    <div className="app">
      <Header />
      <Total total={total} />
      <ExpenseForm onAddExpense={addExpense} />
      <ExpenseList expenses={expenses} onDeleteExpense={deleteExpense} />
    </div>
  )
}

export default App
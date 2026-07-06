import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Total from './components/Total'
import ExpenseForm from './components/ExpenseForm'
import ExpenseList from './components/ExpenseList'

function App() {
  const [expenses, setExpenses] = useState(() => {
    const saved = localStorage.getItem('expenses')
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses))
  }, [expenses])

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
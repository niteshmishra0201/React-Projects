import { useState } from 'react'
import './ExpenseForm.css'

function ExpenseForm({ onAddExpense }) {
  const [name, setName] = useState('')
  const [amount, setAmount] = useState('')
  const [category, setCategory] = useState('Food')

  function handleSubmit(e) {
    e.preventDefault()

    if (!name.trim() || !amount) return

    const newExpense = {
      id: Date.now(),
      name: name,
      amount: Number(amount),
      category: category,
    }

    onAddExpense(newExpense)

    setName('')
    setAmount('')
    setCategory('Food')
  }

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Expense name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="Food">Food</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Transport">Transport</option>
        <option value="Other">Other</option>
      </select>
      <button type="submit">Add Expense</button>
    </form>
  )
}

export default ExpenseForm
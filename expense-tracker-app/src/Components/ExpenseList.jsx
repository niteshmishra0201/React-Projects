import './ExpenseList.css'
import ExpenseItem from './ExpenseItem'

function ExpenseList({ expenses, onDeleteExpense }) {
  return (
    <div className="expense-list">
      {expenses.map((expense) => (
        <ExpenseItem key={expense.id} expense={expense} onDelete={onDeleteExpense} />
      ))}
    </div>
  )
}

export default ExpenseList
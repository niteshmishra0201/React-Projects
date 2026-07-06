import './ExpenseList.css'
import ExpenseItem from './ExpenseItem'

function ExpenseList({ expenses }) {
  return (
    <div className="expense-list">
      {expenses.map((expense) => (
        <ExpenseItem key={expense.id} expense={expense} />
      ))}
    </div>
  )
}

export default ExpenseList
import './ExpenseItem.css'

function ExpenseItem({ expense }) {
  const { name, amount, category } = expense

  return (
    <div className="expense-item">
      <div className="expense-info">
        <p className="expense-name">{name}</p>
        <span className="expense-category">{category}</span>
      </div>
      <p className="expense-amount">₹{amount}</p>
    </div>
  )
}

export default ExpenseItem
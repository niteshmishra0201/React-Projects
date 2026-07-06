import './ExpenseItem.css'

function ExpenseItem({ expense, onDelete }) {
  const { id, name, amount, category } = expense

  return (
    <div className="expense-item">
      <div className="expense-info">
        <p className="expense-name">{name}</p>
        <span className="expense-category">{category}</span>
      </div>
      <div className="expense-right">
        <p className="expense-amount">₹{amount}</p>
        <button className="delete-btn" onClick={() => onDelete(id)}>
          ✕
        </button>
      </div>
    </div>
  )
}

export default ExpenseItem
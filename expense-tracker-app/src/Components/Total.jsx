import './Total.css'

function Total({total}) {
  return (
    <div className="total">
      <p className='total-labe'>Total Spent</p>
      <p className='total-amount'>${total}</p>
    </div>
  )
}

export default Total
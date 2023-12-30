import './index.css'

const PasswordItem = props => {
  const {Item, showPassword, onDeleteItem} = props
  const {id, website, name, password} = Item

  const onDelete = () => {
    onDeleteItem(id)
  }
  return (
    <li className="list-container">
      <div>
        <p className="icon">{website[0].toUpperCase()}</p>
      </div>
      <div>
        <p className="name-para">{website}</p>
        <p className="name-para">{name}</p>
        {showPassword ? (
          <p className="name-para">{password}</p>
        ) : (
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            alt="stars"
            className="stars-image"
          />
        )}
      </div>
      <div>
        <button
          className="button"
          type="button"
          onClick={onDelete}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            alt="delete"
            className="delete-image"
          />
        </button>
      </div>
    </li>
  )
}
export default PasswordItem

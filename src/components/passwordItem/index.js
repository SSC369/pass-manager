import './index.css'

const PasswordItem = props => {
  const {passwordDetails, deletePass, showPass} = props
  const {id, website, username, password} = passwordDetails
  const onDelete = () => {
    deletePass(id)
  }
  const colorList = [
    'color1',
    'color2',
    'color3',
    'color4',
    'color5',
    'color6',
    'color7',
    'color8',
  ]
  const randomNum = Math.ceil(Math.random() * 10)
  const randomColor = colorList[randomNum]

  return (
    <li className="list-item">
      <div className="profile-details">
        <p className={`profile ${randomColor}`}>{website[0].toUpperCase()}</p>
        <div className="content-details">
          <p className="content">{website}</p>
          <p className="content">{username}</p>
          {showPass ? (
            <p className="content">{password}</p>
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
              alt="stars"
              className="star-icon"
            />
          )}
        </div>
      </div>
      <button
        className="delete-button"
        type="button"
        onClick={onDelete}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          className="delete-icon"
          alt="delete"
        />
      </button>
    </li>
  )
}
export default PasswordItem

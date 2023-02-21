import {Component} from 'react'
import {v4} from 'uuid'
import './index.css'
import PasswordItem from '../passwordItem'

class PasswordManager extends Component {
  state = {
    passwordList: [],
    name: '',
    pass: '',
    site: '',
    count: 0,
    showPass: false,
    searchValue: '',
  }

  deletePass = id => {
    this.setState(prevState => ({
      passwordList: prevState.passwordList.filter(
        eachPass => eachPass.id !== id,
      ),
      count: prevState.count - 1,
    }))
  }

  onSearchPassword = event => {
    this.setState({
      searchValue: event.target.value,
    })
  }

  onAddPassword = event => {
    event.preventDefault()
    const {name, pass, site} = this.state
    const newPass = {
      id: v4(),
      username: name,
      password: pass,
      website: site,
    }

    this.setState(prevState => ({
      passwordList: [...prevState.passwordList, newPass],
      count: prevState.count + 1,
    }))

    this.setState({
      name: '',
      pass: '',
      site: '',
    })
  }

  onClickCheckBox = () => {
    this.setState(prevState => ({
      showPass: !prevState.showPass,
    }))
  }

  getWebsite = event => {
    this.setState({
      site: event.target.value,
    })
  }

  getUsername = event => {
    this.setState({
      name: event.target.value,
    })
  }

  getPass = event => {
    this.setState({
      pass: event.target.value,
    })
  }

  render() {
    const {
      passwordList,
      count,
      name,
      site,
      pass,
      showPass,
      searchValue,
    } = this.state

    const filteredData = passwordList.filter(eachPass =>
      eachPass.website.toLowerCase().includes(searchValue.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <div className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
            className="app-logo"
          />
        </div>

        <div className="password-input-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
            className="password-manager-icon"
            alt="password manager"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            className="password-manager-icon password-manager-icon-2"
            alt="password manager"
          />

          <form className="form-container" onSubmit={this.onAddPassword}>
            <h1 className="add-password">Add New Password</h1>
            <div className="input-container">
              <div className="icon-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                  className="input-icon"
                />
              </div>
              <input
                value={site}
                onChange={this.getWebsite}
                type="text"
                placeholder="Enter Website"
                className="custom-input"
              />
            </div>

            <div className="input-container">
              <div className="icon-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="username"
                  className="input-icon"
                />
              </div>
              <input
                value={name}
                onChange={this.getUsername}
                type="text"
                placeholder="Enter Username"
                className="custom-input"
              />
            </div>

            <div className="input-container">
              <div className="icon-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password"
                  className="input-icon"
                />
              </div>
              <input
                value={pass}
                onChange={this.getPass}
                type="password"
                placeholder="Enter Password"
                className="custom-input"
              />
            </div>
            <button type="submit" className="add-button">
              Add
            </button>
          </form>
        </div>

        <div className="passwords-bg-container">
          <div className="password-count-search-container">
            <div className="password-count-container">
              <h1 className="password-count-heading">Your Passwords</h1>
              <p className="count">{count}</p>
            </div>
            <div className="password-search-container">
              <div className="search-icon-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  alt="search"
                  className="search-icon"
                />
              </div>
              <input
                type="search"
                className="input-search"
                onChange={this.onSearchPassword}
              />
            </div>
          </div>

          <div className="show-password-container">
            <input
              id="cb"
              type="checkbox"
              className="input-checkbox"
              onChange={this.onClickCheckBox}
            />
            <label htmlFor="cb" className="show-pass-heading">
              Show Passwords
            </label>
          </div>

          <ul className="password-container">
            {filteredData.length === 0 ? (
              <div>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                  alt="no passwords"
                  className="no-passwords-icon"
                />
                <p className="no-pass">No Passwords</p>
              </div>
            ) : (
              filteredData.map(eachPass => (
                <PasswordItem
                  passwordDetails={eachPass}
                  key={eachPass.id}
                  deletePass={this.deletePass}
                  showPass={showPass}
                />
              ))
            )}
          </ul>
        </div>
      </div>
    )
  }
}
export default PasswordManager

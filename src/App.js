import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import PasswordItem from './Component/PasswordItem'

import './App.css'

class App extends Component {
  state = {
    count: 0,
    passwordList: [],
    website: '',
    name: '',
    password: '',
    showPassword: false,
    searchInput: '',
  }

  onAddPassword = event => {
    const {website, name, password, count} = this.state
    event.preventDefault()
    const newPassword = {
      id: uuidv4(),
      website,
      name,
      password,
    }
    this.setState(prevState => ({
      passwordList: [...prevState.passwordList, newPassword],
      website: '',
      name: '',
      password: '',
      count: prevState.count + 1,
    }))
  }

  ontoggle = () => {
    const {showPassword} = this.state
    this.setState({showPassword: !showPassword})
  }

  onTypeWebsite = event => {
    this.setState({website: event.target.value})
  }

  onTypeName = event => {
    this.setState({name: event.target.value})
  }

  onTypePassword = event => {
    this.setState({password: event.target.value})
  }

  onDeleteItem = id => {
    this.setState(prevState => ({
      passwordList: prevState.passwordList.filter(item => item.id !== id),
      count: prevState.count - 1,
    }))
  }

  onSearch = event => {
    const {searchInput} = this.state
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {
      passwordList,
      website,
      name,
      password,
      count,
      showPassword,
      searchInput,
    } = this.state
    const searchResults = passwordList.filter(item =>
      item.website.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="logo-image"
        />
        <div className="card-container">
          <div className="sub-card-container">
            <h1 className="heading">Add New Password</h1>
            <form className="form-container" onSubmit={this.onAddPassword}>
              <div className="formEl-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                  className="image"
                />
                <input
                  type="text"
                  value={website}
                  className="inputEl"
                  placeholder="Enter Website"
                  onChange={this.onTypeWebsite}
                />
              </div>
              <div className="formEl-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="username"
                  className="image"
                />
                <input
                  type="text"
                  className="inputEl"
                  value={name}
                  placeholder="Enter Username"
                  onChange={this.onTypeName}
                />
              </div>
              <div className="formEl-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password"
                  className="image"
                />
                <input
                  type="password"
                  value={password}
                  className="inputEl"
                  placeholder="Enter Password"
                  onChange={this.onTypePassword}
                />
              </div>
              <button type="submit" className="submit-btn">
                Add
              </button>
            </form>
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password manager"
              className="main-image"
            />
          </div>
        </div>

        <div className="card-container1">
          <div className="search-container">
            <div className="container">
              <h1 className="para">Your Passwords</h1>
              <p className="spanEl"> {searchResults.length}</p>
            </div>
            <div className="formEl-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="image2"
              />
              <input
                type="search"
                className="inputEl1"
                onChange={this.onSearch}
                value={searchInput}
              />
            </div>
          </div>
          <hr className="horizon-line" />
          <div>
            <div className="formEl-container1">
              <input
                type="checkbox"
                className="CheckboxEl"
                id="check"
                onChange={this.ontoggle}
              />
              <label className="labelEl" htmlFor="check">
                Show Passwords
              </label>
            </div>
          </div>
          {searchResults.length === 0 ? (
            <div className="no-passwords-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                className="image1"
                alt="no passwords"
              />
              <p className="no-para">No Passwords</p>
            </div>
          ) : (
            <ul className="ul-container">
              {searchResults.map(eachItem => (
                <PasswordItem
                  Item={eachItem}
                  key={eachItem.id}
                  showPassword={showPassword}
                  onDeleteItem={this.onDeleteItem}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default App

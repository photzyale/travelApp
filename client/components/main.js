import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {withRouter, NavLink, Link} from 'react-router-dom'
import {logout} from '../store'


/**
 * COMPONENT
 *  The Main component is our 'picture frame' - it displays the navbar and anything
 *  else common to our entire app. The 'picture' inside the frame is the space
 *  rendered out by the component's `children`.
 */
const Main = (props) => {
  const {children, handleClick, isLoggedIn} = props
  console.log('main children: ', children)
  return (
    <div>
      <div id="nav-bar">
        <Link to="/home">
          <div className="flex-display">
            <img src="/origami-bird.png" id="logo"/>
            <h2 className="flock-blue" id="flock-name">flock</h2>
          </div>
        </Link>
        <nav className="vertical-align-center">
          {
            isLoggedIn
              ? <div>
                {/* The navbar will show these links after you log in */}
                <NavLink to="/" className="nav-links">Dashboard</NavLink>
                <NavLink to="/createtrip" className="nav-links">Create Trip</NavLink>
                <a href="#" onClick={handleClick} className="nav-links">Logout</a>
              </div>
              : <div>
                {/* The navbar will show these links before you log in */}
                <NavLink to="/login" className="nav-links">Login</NavLink>
                <NavLink to="/signup" className="nav-links">Sign Up</NavLink>
              </div>
          }
        </nav>
      </div>
      {children}
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleClick () {
      dispatch(logout())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Main))

/**
 * PROP TYPES
 */
Main.propTypes = {
  children: PropTypes.object,
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}

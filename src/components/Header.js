import PropTypes from 'prop-types'
import Button from './Button'
import { useLocation } from 'react-router-dom'

const Header = ({ title, onAdd, showAdd }) => {

  // const onClick = (e) => {
  //   console.log("I'm Clicked");
  // }
  const location = useLocation()
  return (
    <header className="header">
      {/* CSS in JS */}
      {/* <h1 style={headingStyle}>{title}</h1> */}
      <h1 >{title}</h1>
      {location.pathname === '/' && (
        <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd} />
      )}
    </header>
  )
}

Header.defaultProps = {
  title: 'Task Tracker',
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

//CSS in js
//const headingStyle = { color: 'yellow', backgroundColor: 'lightgreen' };

export default Header
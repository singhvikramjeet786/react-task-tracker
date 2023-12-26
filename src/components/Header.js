import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title }) => {

  const onClick = (e) => {
    console.log("I'm Clicked");
  }

  return (
    <header className="header">
      {/* CSS in JS */}
      {/* <h1 style={headingStyle}>{title}</h1> */}
      <h1 >{title}</h1>
      <Button color='green' text='Add' onClick={onClick} />
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
const headingStyle = { color: 'yellow', backgroundColor: 'lightgreen' };

export default Header
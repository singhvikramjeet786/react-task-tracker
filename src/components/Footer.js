import { Link } from "react-router-dom"
const Footer = () => {
  return (
    <footer>
         {/* &#174; (R) for copyright symbol */}
        <p> Copyright &copy; 2024</p>
        <Link to="/about">About</Link>
    </footer>
  )
}

export default Footer
import { Link , useLocation} from "react-router-dom"
const Footer = () => {
    const location = useLocation()
  return (
    <footer>
         {/* &#174; (R) for copyright symbol */}
        <p> Copyright &copy; 2024</p>
        {location.pathname !== '/about' && (<Link to="/about">About</Link>)}
    </footer>
  )
}

export default Footer
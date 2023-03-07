import logo from '../placeholder_logo.png'
export default function Navbar() {
    return <nav className="nav">
        <a href="/">
          <img src={logo}></img>
        </a>
        <ul>
            <li>
                <a href="/login">Log In</a>
            </li>
            <li>
                <a href="/login">Sign Up</a>
            </li>
        </ul>
    </nav>
}

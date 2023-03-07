import logo from '../placeholder_logo.png'
export default function Navbar() {
    return <nav className="nav">
        <a href="/" className='rmplogo'>
          <img src={logo}></img>
        </a>
        <ul>
            <li>
                <a href="/login" className='logintext'>
                  <span className='logintexttext'>
                    Log In
                  </span>
                </a>
            </li>
            <li>
                <a href="/signup" className='signuptext'>
                  <span className='signuptexttext'>
                    Sign Up
                  </span>
                </a>
            </li>
        </ul>
    </nav>
}

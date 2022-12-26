import logo from './../assets/RGF.svg'
import circuit from './../assets/circuits_up.svg'

function Header() {
  return (
    <div className='header'>
        <img className='circuit-up' src={circuit} alt="circuit-up"/>
        <nav className='navbar'>
        <ul>
            <li className="nav-link">Inicio</li>
            <li className="nav-link">Sobre Nosotros</li>
            <li className="nav-link">Cursos</li>
            <li className="nav-link">Contacto</li>
        </ul>

        <div><img className="logo" src={logo} alt="logo" /></div>

        <div style={{display: 'flex', columnGap:'2rem'}}>
            <p className="login">Iniciar sesión</p>
            <p className="register">Registrate</p>
        </div>
    </nav>

    <div className='nav-mobile'>
    <img className="logo-mobile" src={logo} alt="logo" />
    </div>

    </div>
  )
}

export default Header
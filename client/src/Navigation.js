function Navigation(){
    return(
<nav className="navbar is-transparent">
  <div className="navbar-brand">
    <a className="navbar-item" href="/">
      Quotr
      {/* <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"/> */}
    </a>
    <div className="navbar-burger" data-target="navbarExampleTransparentExample">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>

  <div id="navbarExampleTransparentExample" className="navbar-menu">
    <div className="navbar-start">
      <a className="navbar-item" href="/">
        Home
      </a>
    </div>
  </div>
</nav>
    )
}

export default Navigation;



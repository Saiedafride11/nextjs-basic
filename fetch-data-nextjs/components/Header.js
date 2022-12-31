import Link from 'next/link';

const Header = () => {
      return (
            <div>
                 <nav className="navbar navbar-expand-lg bg-body-tertiary">
                        <div className="container-fluid">
                        {/* <a className="navbar-brand" href="#">Navbar</a> */}
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                              <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                              <ul className="navbar-nav">
                                    <li className="nav-item">
                                          <Link href="/" className="nav-link" legacyBehavior>
                                                <a className="nav-link" aria-current="page" >Home</a>
                                          </Link>
                                    </li>
                                    <li className="nav-item">
                                          <Link href="/about" legacyBehavior>
                                                <a className="nav-link" aria-current="page" >About</a>
                                          </Link>
                                    </li>
                                    <li className="nav-item">
                                          <Link href="/contact" legacyBehavior>
                                                <a className="nav-link" aria-current="page" >Contact</a>
                                          </Link>
                                    </li>
                              </ul>
                        </div>
                        </div>
                  </nav> 
            </div>
      );
};

export default Header;
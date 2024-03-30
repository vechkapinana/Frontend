import { Link } from "react-router-dom";
import im from '../4.jpeg'

function Header(){
    return(
        <>
        <div className='header'>

            <nav class="navbar navbar-expand-sm navbar-light bg-primary sticky-top">
            <a class="navbar-brand" href="D:\NatashaAll\JS1\Frontend\client\public\index.html">
            <img class="image"
                    src={im}
                    alt="Котик"
                />

            </a>
            <div class="container-fluid">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <Link class="nav-link" to={'/'}>
                        Главная
                    </Link>
                  </li>
                  <li class="nav-item">
                  <Link class="nav-link" to={'/sandbox'}>
                        Песочница
                  </Link>
                  </li>
                  <li class="nav-item">
                  <Link className='nav-link' to={'/crud-example'}>
					    Простой CRUD
				  </Link>
                  </li>
                </ul>
            </div>
        </nav>
        </div>
        </>
    )
}

export default Header



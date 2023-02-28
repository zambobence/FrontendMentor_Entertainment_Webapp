import React, {useState} from 'react'
import { Link } from 'react-router-dom'
function Header() {

    const [activeLink, setActiveLink] = useState('');

    const handleClick = (link) => {
        setActiveLink(link)
    }

  return (
    <header>
        <div className='container'>
        <nav>
        <img src={process.env.PUBLIC_URL + '/assets/logo.svg'} alt='logo' className='logo'/>
            <ul class='nav-menu'>
                <li className={activeLink ==='home' ? 'active' : null}onClick={() => handleClick('home')}>
                    <Link to='/'>
                        <img src={process.env.PUBLIC_URL + '/assets/icon-nav-home.svg'} alt='home-icon' className='icon'/>
                    </Link>
                </li>
                <li className={activeLink ==='movies' ? 'active' : null} onClick={()=>handleClick('movies')}>
                    <Link to='/movies'>
                        <img src={process.env.PUBLIC_URL +  '/assets/icon-nav-movies.svg'} alt='movies-icon' className='icon' />
                    </Link>
                </li>
                <li className={activeLink ==='series' ? 'active' : null} onClick={()=>handleClick('series')}>

                    <Link to='/series'>
                        <img src={process.env.PUBLIC_URL +  '/assets/icon-nav-tv-series.svg'} alt='series-icon' className='icon' />
                    </Link>
                </li>
                <li className={activeLink ==='bookmarked' ? 'active' : null} onClick={()=>handleClick('bookmarked')}>
                    <Link to='/bookmarked'>
                        <img src={process.env.PUBLIC_URL + '/assets/icon-nav-bookmark.svg'} alt='bookmarked-icon' className='icon'/>
                    </Link>
                </li>
            </ul>
        <img src={process.env.PUBLIC_URL + '/assets/image-avatar.png'} className='avatar' />
        </nav>
    </div>
    </header>
  )
}

export default Header
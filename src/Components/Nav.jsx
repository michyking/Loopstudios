import { useRef } from 'react'
import { Heading } from '@chakra-ui/react'
import {FaBars, FaTimes} from 'react-icons/fa'
import '../Styles/nav.css'

export const Nav = () => {
    const navRef = useRef();

    const showNavBar =()=>{
        navRef.current.classList.toggle('responsive_nav')
    }

  return (
    <header>
        <Heading size='md'><a href="#">Loopstudios</a></Heading>
        <nav ref={navRef}>
            <a href="#">About</a>
            <a href="#">Careers</a>
            <a href="#">Events</a>
            <a href="#">Products</a>
            <a href="#">Support</a>
            <button onClick={showNavBar} className='nav-btn close-nav'>
                <FaTimes/>
            </button>
        </nav>
        <button onClick={showNavBar} className='nav-btn'>
            <FaBars/>
        </button>
    </header>
  )
}


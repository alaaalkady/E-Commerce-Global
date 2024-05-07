import React, { useState, useEffect , useContext} from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

import { navLinks } from '../constants'
import { logo, menu, close } from '../assets'
import Cart from './Cart.jsx'
import { CartContext } from '../context/cart.jsx'

const Navbar2 = () => {
  const[active, setActive] = useState('')
  const [showModal, setshowModal] = useState(false);
  const { cartItems, addToCart } = useContext(CartContext)
  const [togglemenu, settogglemenu] = useState(false)
  const toggle = () => {
    setshowModal(!showModal);
  };
  return (
    <nav className=" w-full flex  items-center py-5 fixed top-0 z-20 bg-slate-500">
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-2" onClick={() => {
          setActive("");
          window.scrollTo(0, 0);
        }}>
          <img   src={logo} alt="logo" className="w-28 h-15 object-contain"/>
          <p className="text-white text-[18px] font-bold cursor-pointer flex"> 
            &nbsp;Alaa Alkady&nbsp;<span className="sm:block hidden"> &nbsp;| JS Mastery</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
        {/* <li><a href="" className='px-4 py-2  text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700 cursor-pointer '>Home</a></li> */}
        
        {/* <li><Link to="/products" className='px-4 py-2  text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700 cursor-pointer '>Products</Link></li> */}
        {!showModal && <li><a className='px-4 py-2  text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700 cursor-pointer '
          onClick={toggle}>Cart ({cartItems.length})</a></li>}

          </ul>
          
          <div className="sm:hidden flex flex-1 justify-end items-center">
            <img src={togglemenu ? close : menu} alt="menu" className="w-[28px] h-[28px] object-contain cursor-pointer" onClick={() => {
              settogglemenu(!togglemenu)
            }}
            />
            <div className={`${!togglemenu ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
              <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
                {navLinks.map((link) => (
                  <li
                    key={link.id}
                    className={`font-poppins font-medium cursor-pointer text-[16px] ${
                      active === link.title ? "text-white" : "text-secondary"
                    }`}
                    onClick={() => {
                      settogglemenu(!togglemenu);
                      setActive(link.title);
                    }}
                  >
                    <a href={`#${link.id}`}>{link.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
      </div>
      <Cart showModal={showModal} toggle={toggle} />
    </nav> 
    
  )
}

export default Navbar2

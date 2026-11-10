

import { navLinks, navIcons } from '#constants'
import React from 'react'
import dayjs from 'dayjs';
import useTheme from '../hooks/useTheme'
import useWindowStore from '#store/window.js';

const Navbar = () => {
    const {openWindow} = useWindowStore();
  const { theme, toggleTheme } = useTheme()

  return (
    <nav>
    <div>
        <img src="/images/logo.svg" alt="logo"/>
        <p className="font-bold max-sm:hidden">Francis Portfolio</p>

        <ul>
            {navLinks.map(({id, name, type}) => (
                <li key={id} onClick={() => openWindow(type)}>
                    <p>{name}</p>
                    </li>
            ))}
        </ul>
    </div>

    <div>
        <ul>
            {navIcons.map(({id, img}) => (
                <li key={id} className={id === 4 ? '' : 'max-sm:hidden'}>
                    {id === 4 ? (
                        <button
                            type="button"
                            onClick={toggleTheme}
                            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                            className="flex"
                        >
                            <img src={img} className="icon cursor-pointer" alt="" />
                        </button>
                    ) : (
                        <img src={img} className="icon" alt={`icon-${id}`}/>
                    )}
                </li>
            ))}
        </ul>

        <time>
            <span className="max-sm:hidden">{dayjs().format('ddd MMMM D, YYYY h:mm A')}</span>
            <span className="sm:hidden">{dayjs().format('h:mm A')}</span>
        </time>
    </div>
    </nav>
  )
}

export default Navbar


import { navLinks, navIcons } from '#constants'
import React from 'react'
import dayjs from 'dayjs';
import useTheme from '../hooks/useTheme'

const Navbar = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <nav>
    <div>
        <img src="/images/logo.svg" alt="logo"/>
        <p className="font-bold">Francis Portfolio</p>

        <ul>
            {navLinks.map(({id, name}) => (
                <li key={id}>
                    <p>{name}</p>
                    </li>
            ))}
        </ul>
    </div>

    <div>
        <ul>
            {navIcons.map(({id, img}) => (
                <li key={id}>
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

        <time>{dayjs().format('ddd MMMM D, YYYY h:mm A')}</time>
    </div>
    </nav>
  )
}

export default Navbar
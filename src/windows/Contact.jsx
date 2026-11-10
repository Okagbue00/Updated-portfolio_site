import { socials } from '#constants';
import { WindowControls } from '#components';
import WindowWrapper from '#hoc/WindowWrapper';
import React from 'react'

const Contact = () => {
  return ( <>

    <div id="window-header">
        <WindowControls target="contact" />
        <h2>Contact Me</h2>
    </div>

    <div className='p-5 space-y-5'>
        <img src='/images/francis1.jpg' alt='francis' className='size-22 rounded-full object-cover object-top' />
        <h3>Let's Connect</h3>
        <p>My inbox is the only port I leave open.</p>
        <p>I'm always up for a good tech conversation. Let's talk.</p>
        <p>okagbueonyeka20@gmail.com</p>
        <ul>
            {socials.map(({id, bg, link, icon, text}) => (
                <li key={id} style={{backgroundColor: bg}}>
                    <a href={link} target="_blank" rel="noopener noreferrer" title={text}>
                        <img src={icon} alt={text} className='size-5' />
                        <p>{text}</p>
                    </a>

                </li>
            ))}
        </ul>

    </div>

    </>
  )

  
}

const ContactWindow = WindowWrapper(Contact, "contact");

export default ContactWindow;
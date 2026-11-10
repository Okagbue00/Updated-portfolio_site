import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { Draggable } from 'gsap/Draggable'
import { locations } from '#constants'
import useWindowStore from '#store/window.js'
import useLocationStore from '#store/location.js'

// Project folders shown as desktop shortcuts
const projects = locations.work?.children ?? []

const Home = () => {
    const containerRef = useRef(null)
    const { openWindow } = useWindowStore()
    const { setActiveLocation } = useLocationStore()

    // Open the project's folder in Finder
    const openProject = (project) => {
        setActiveLocation(project)
        openWindow('finder')
    }

    // Make each shortcut draggable. Draggable's onClick only fires on a real
    // click (not at the end of a drag), so dragging won't accidentally open it.
    useGSAP(() => {
        const items = containerRef.current?.querySelectorAll('li[data-id]') ?? []
        const instances = [...items].map((el) => {
            const project = projects.find((p) => String(p.id) === el.dataset.id)
            return Draggable.create(el, {
                onClick: () => project && openProject(project),
            })[0]
        })
        return () => instances.forEach((d) => d.kill())
    }, [])

  return (
    <section id="home" ref={containerRef}>
        <ul>
            {projects.map((project) => (
                <li
                    key={project.id}
                    data-id={project.id}
                    className={`group folder ${project.windowPosition ?? ''}`}
                    title={`Open ${project.name}`}
                >
                    <img src="/images/folder.png" alt={project.name} className="size-16" />
                    <p>{project.name}</p>
                </li>
            ))}
        </ul>
    </section>
  )
}

export default Home

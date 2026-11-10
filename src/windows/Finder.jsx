import { WindowControls } from '#components'
import WindowWrapper from '#hoc/WindowWrapper'
import useLocationStore from '#store/location'
import { locations } from '#constants'
import { Search } from 'lucide-react'
import React from 'react'
import useWindowStore from '#store/window'

const Finder = () => {
    const {activeLocation, setActiveLocation} = useLocationStore();
    const {openWindow} = useWindowStore();

    const openItem = (item) => {
        // PDF → open the Resume window
        if (item.fileType === 'pdf') return openWindow("resume");
    

        // Folder → show its contents in this Finder window
        if (item.kind === 'folder') return setActiveLocation(item);

        if (['fig', 'url'].includes(item.fileType) && item.href)
            return window.open(item.href, "_blank");
        openWindow(`${item.fileType}${item.kind}`, item);
    };

    // data-clickable="true" tells the window's Draggable not to start a drag from these
    // items, so a slightly shaky click still counts as a click.

    // Renders one sidebar list; the selected location gets the "active" style
    const renderList = (items) =>
        items.map((item) => (
            <li
                key={item.id}
                onClick={() => setActiveLocation(item)}
                data-clickable="true"
                className={item.id === activeLocation?.id ? 'active' : 'not-active'}
            >
                <img src={item.icon} className='w-4' alt={item.name} />
                <p className='text-sm font-medium truncate'>{item.name}</p>
            </li>
        ))

  return ( <>
    <div id="window-header">
        <WindowControls target="finder" />
        <Search className="icon" />
    </div>

    <div className="bg-white flex h-full">
        <div className='sidebar'>
            <div>
                <h3>Favorites</h3>
                <ul>{renderList(Object.values(locations))}</ul>
            </div>

            <div>
                <h3>My Projects</h3>
                <ul>{renderList(locations.work.children)}</ul>
            </div>
        </div>
    

    <ul className='content'>
        {activeLocation?.children.map((item) => (
            <li key={item.id} className={item.position} onClick={() => openItem(item)} data-clickable="true">
                <img src={item.icon} alt={item.name} />
                <p>{item.name}</p>
            </li>
        ))}
    </ul>

    </div>

  </>
  )
}

const FinderWindow = WindowWrapper(Finder, "finder");

export default FinderWindow

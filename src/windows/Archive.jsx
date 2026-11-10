import React from 'react'
import { WindowControls } from '#components'
import WindowWrapper from '#hoc/WindowWrapper.jsx'
import useWindowStore from '#store/window.js'
import { locations } from '#constants'

// The pictures come from the Trash location in constants, so adding or
// removing an image there updates this window automatically.
const pictures = (locations.trash?.children ?? []).filter((item) => item.imageUrl)

const Archive = () => {
    const { openWindow } = useWindowStore();

  return (
    <>
    <div id="window-header">
        <WindowControls target="trash" />
        <h2>Archive</h2>
    </div>

    <div className="archive-body">
        <p className="archive-count">
            {pictures.length} {pictures.length === 1 ? 'item' : 'items'}
        </p>

        <ul className="archive-grid">
            {pictures.map((item) => (
                <li key={item.id}>
                    <button
                        type="button"
                        onClick={() => openWindow('imgfile', item)}
                        title={`Open ${item.name}`}
                    >
                        <img src={item.imageUrl} alt={item.name} loading="lazy" />
                    </button>
                    <p>{item.name}</p>
                </li>
            ))}
        </ul>
    </div>
    </>
  )
}

const ArchiveWindow = WindowWrapper(Archive, 'trash');

export default ArchiveWindow;

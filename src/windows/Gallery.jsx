import React, { useState } from 'react'
import { WindowControls } from '#components'
import WindowWrapper from '#hoc/WindowWrapper.jsx'
import useWindowStore from '#store/window.js'
import { gallery, photosLinks } from '#constants'


const Gallery = () => {
    const { openWindow } = useWindowStore();
    const [activeAlbum, setActiveAlbum] = useState(photosLinks[0]?.title ?? 'Library');

    const photos = activeAlbum === 'Library'
        ? gallery
        : gallery.filter((photo) => photo.albums?.includes(activeAlbum));

    return (
        <>
        <div id="window-header">
            <WindowControls target="photos" />
            <h2>Gallery</h2>
        </div>

        <div className="gallery-layout">
            <div className="sidebar" role="navigation" aria-label="Albums">
                <h2>Photos</h2>
                <ul>
                    {photosLinks.map(({ id, icon, title }) => (
                        <li key={id}>
                            <button
                                type="button"
                                onClick={() => setActiveAlbum(title)}
                                className={activeAlbum === title ? 'active' : undefined}
                                aria-pressed={activeAlbum === title}
                            >
                                <img src={icon} alt="" />
                                <p>{title}</p>
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="gallery">
                <p className="gallery-count">
                    {activeAlbum} · {photos.length} {photos.length === 1 ? 'photo' : 'photos'}
                </p>

                {photos.length === 0 ? (
                    <p className="gallery-empty">No photos in {activeAlbum} yet.</p>
                ) : (
                    <ul>
                        {photos.map((photo) => {
                            const name = photo.name ?? `Photo ${photo.id}`;
                            return (
                                <li key={photo.id}>
                                    <button
                                        type="button"
                                        title={`Open ${name}`}
                                        onClick={() => openWindow('imgfile', { name, imageUrl: photo.img })}
                                    >
                                        <img src={photo.img} alt={name} loading="lazy" />
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                )}
            </div>
        </div>
        </>
    )
}

const GalleryWindow = WindowWrapper(Gallery, 'photos');

export default GalleryWindow;

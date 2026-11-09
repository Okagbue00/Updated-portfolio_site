import React from 'react'
import { WindowControls } from '#components'
import WindowWrapper from '#hoc/WindowWrapper.jsx'
import useWindowStore from '#store/window.js'

const Image = () => {
    const { windows } = useWindowStore();
    const data = windows.imgfile?.data;

    if (!data) return null;

    const { name, imageUrl } = data;

  return (
    <>
    <div id="window-header">
        <WindowControls target="imgfile" />
        <p className="flex-1 text-center">{name}</p>
    </div>

    {imageUrl && (
        <div className="preview">
            <img src={imageUrl} alt={name} />
        </div>
    )}
    </>
  )
}

const ImageWindow = WindowWrapper(Image, 'imgfile');

export default ImageWindow;

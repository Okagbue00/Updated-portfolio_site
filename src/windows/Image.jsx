import React, { useState } from 'react'
import { WindowControls } from '#components'
import WindowWrapper from '#hoc/WindowWrapper.jsx'
import useWindowStore from '#store/window.js'

// The picture plus its loading / error state. Keyed by imageUrl (see below),
// so the state starts fresh every time a different picture is opened.
const Preview = ({ imageUrl, name }) => {
    const [status, setStatus] = useState('loading'); // 'loading' | 'loaded' | 'error'

    return (
        <div className="preview">
            {status === 'loading' && <p className="preview-status">Loading…</p>}
            {status === 'error' && <p className="preview-status">Couldn't load this image.</p>}
            <img
                src={imageUrl}
                alt={name}
                decoding="async"
                onLoad={() => setStatus('loaded')}
                onError={() => setStatus('error')}
                className={status === 'loaded' ? 'is-loaded' : undefined}
            />
        </div>
    )
}

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

    {imageUrl && <Preview key={imageUrl} imageUrl={imageUrl} name={name} />}
    </>
  )
}

const ImageWindow = WindowWrapper(Image, 'imgfile');

export default ImageWindow;

import React from 'react'
import { WindowControls } from '#components'
import WindowWrapper from '#hoc/WindowWrapper.jsx'
import useWindowStore from '#store/window.js'

const Text = () => {
    const { windows } = useWindowStore();
    const data = windows.txtfile?.data;

    if (!data) return null;

    const { name, image, subtitle, description = [] } = data;

  return (
    <>
    <div id="window-header">
        <WindowControls target="txtfile" />
        <h2>{name}</h2>
    </div>

    <div className="p-5 space-y-6 bg-white max-h-[70vh] overflow-y-auto">
        {image && (
            <img src={image} alt={name} className="w-full h-auto rounded-md" />
        )}

        {subtitle && (
            <h3 className="text-lg font-semibold text-gray-800">{subtitle}</h3>
        )}

        <div className="space-y-3 text-sm leading-relaxed text-gray-800">
            {description.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
            ))}
        </div>
    </div>
    </>
  )
}

const TextWindow = WindowWrapper(Text, 'txtfile');

export default TextWindow;

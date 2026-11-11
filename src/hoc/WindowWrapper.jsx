import {useRef, useLayoutEffect} from 'react';
import  useWindowStore  from "#store/window.js";
import {useGSAP} from '@gsap/react';
import gsap from 'gsap';
import {Draggable} from 'gsap/Draggable';
import WindowErrorBoundary from '#components/WindowErrorBoundary.jsx';


const WindowWrapper = (Component, windowKey) => {
    const Wrapped = (props) => {
        const {focusWindow, windows} = useWindowStore();
        const {isOpen, zIndex} = windows[windowKey];
        const ref = useRef(null);

        useGSAP(() => {
            const el = ref.current;
            if (!el || !isOpen) return () => {};

            el.style.display = 'block';
            gsap.fromTo(el, {scale:0.8, opacity:0, y:40}, {scale:1, opacity:1, y:0, duration:0.3, ease:"power3.out"});
        }, [isOpen]);

        // Dragging only on tablet/desktop. On phones a drag would fight with
        // touch-scrolling inside the window, and windows are full-width anyway.
        useGSAP(() => {
            const el = ref.current;
            if (!el) return () => {};
            const mm = gsap.matchMedia();
            mm.add('(min-width: 640px)', () => {
                const [instance] = Draggable.create(el, {
                    onPress: () => focusWindow(windowKey),
                    // Pressing a button/link (e.g. the red close dot) must never start a drag,
                    // otherwise a 1-2px hand wobble turns the click into a drag and the click is lost.
                    dragClickables: false,
                });
                return () => {
                    instance.kill();
                    gsap.set(el, { x: 0, y: 0 }); // drop any drag offset when switching to phone size
                };
            });
            return () => mm.revert();
        }, []);

        useLayoutEffect(() => {
            const el = ref.current;
            if (!el) return () => {};
            el.style.display = isOpen ? 'block' : 'none';


        }, [isOpen]);

    
  return (
    <section id={windowKey} ref={ref} style={{zIndex, display: isOpen ? 'block' : 'none'}} className="absolute window"
        onMouseDown={() => focusWindow(windowKey)}>
        <WindowErrorBoundary windowKey={windowKey}>
            <Component {...props} />
        </WindowErrorBoundary>

    </section>
  );
};

Wrapped.displayName = `WindowWrapper(${Component.displayName || Component.name || 'Component'})`;
return Wrapped;

};

export default WindowWrapper;
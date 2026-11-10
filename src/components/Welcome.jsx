import React, { useRef } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


const FONT_WEIGHTS = {
    subtitle: {min: 100, max: 400, default: 100},
    title: {min: 100, max: 900, default: 400}
}

const renderText = (text, className, baseWeight = 400) => {
    return [... text].map((char, i) => (
        <span key={i} className={className} style={{fontVariationSettings: `'wght' ${baseWeight}`}}>{char === " " ? '\u00A0' : char}</span>));
    }

const setupTextHover = (container, type) => {
    if (!container) return () => {};
    const letters = container.querySelectorAll('span');
    const {min, max, default: base} = FONT_WEIGHTS[type];
    const animateLetters = (letter, weight, duration = 0.25) => {
        return gsap.to(letter, {duration, ease: "power2.out", fontVariationSettings: `'wght' ${weight}`});
    }

    const handleMouseMove = (e) => {
        const {left} = container.getBoundingClientRect();
        const mouseX = e.clientX - left;
        letters.forEach((letter) => {
            const {left: l, width: w} = letter.getBoundingClientRect();
            const distance = Math.abs(mouseX - (l - left + w / 2));
            const intensity = Math.exp(-(distance ** 2) / 3000);
            animateLetters(letter, min + (max - min) * intensity);
        });
    }

    const handleMouseLeave = () => 
        letters.forEach((letter) => 
            animateLetters(letter, base, 0.3)
        );

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseleave', handleMouseLeave);
    }
};

const Welcome = () => {
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);

    useGSAP(() => {
        const titleLetters = titleRef.current.querySelectorAll('span');
        const subtitleLetters = subtitleRef.current.querySelectorAll('span');
        let cleanupTitle, cleanupSubtitle;

        // Hover effect is switched on only after the intro, so the two don't fight.
        const enableHover = () => {
            cleanupTitle = setupTextHover(titleRef.current, 'title');
            cleanupSubtitle = setupTextHover(subtitleRef.current, 'subtitle');
        };

        // Respect the OS "reduce motion" setting: skip the intro entirely.
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            enableHover();
        } else {
            // ~3s intro: subtitle fades up, "portfolio." drops in, then a bold wave ripples across it.
            gsap.timeline({ delay: 0.3, onComplete: enableHover })
                .from(subtitleLetters, {
                    opacity: 0, y: 20, filter: 'blur(6px)',
                    duration: 0.5, ease: 'power2.out', stagger: 0.025,
                })
                .from(titleLetters, {
                    opacity: 0, y: 80, scale: 0.6, filter: 'blur(12px)',
                    duration: 0.9, ease: 'back.out(1.7)', stagger: 0.07,
                }, '-=0.4')
                .to(titleLetters, {
                    fontVariationSettings: "'wght' 900",
                    duration: 0.25, ease: 'power2.out', stagger: 0.06,
                    yoyo: true, repeat: 1,
                }, '-=0.2')
                .set([...titleLetters, ...subtitleLetters], { clearProps: 'filter,transform' });
        }

        return () => {
            cleanupTitle?.();
            cleanupSubtitle?.();
        };
    }, []);

  return (
    <section id="welcome">
        <p ref={subtitleRef}>
            {renderText("Hello, I'm Francis! Welcome to my", "inline-block text-3xl max-sm:text-lg font-georama", 100)}
        </p>

        <h1 ref={titleRef} className="mt-7 max-sm:mt-2">
            {renderText("portfolio.", "inline-block text-9xl max-sm:text-6xl italic font-georama")}
        </h1>
        </section>
  )
}

export default Welcome
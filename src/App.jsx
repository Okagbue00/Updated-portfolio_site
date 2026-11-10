import gsap from "gsap";
import {Draggable} from "gsap/Draggable";

import {Dock, Home, Navbar, Welcome} from '#components';
import {Terminal, Safari, Resume, Finder, Text, Image, Contact, Archive, Gallery} from '#windows';

gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />
      <Home />


      <Terminal />
      <Safari />
      <Resume />
      <Finder />
      <Text />
      <Image />
      <Contact />
      <Archive />
      <Gallery />
    </main>
  )
}

export default App
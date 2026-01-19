import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import MountainScene from "./canvas/MountainScene";
import Projects from "./components/Projects";
import Contact from "./components/Contact";


export default function App() {
return (
<>
<Intro />
<Navbar />
<MountainScene />
<Projects />
<Contact />
</>
);
}
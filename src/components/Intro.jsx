import { useEffect, useState } from "react";
import gsap from "gsap";


export default function Intro() {
const [show, setShow] = useState(true);


useEffect(() => {
gsap.to(".intro", {
opacity: 0,
delay: 2.5,
duration: 2,
onComplete: () => setShow(false),
});
}, []);


if (!show) return null;


return (
<div className="intro fixed inset-0 z-50 flex items-center justify-center bg-black">
<h1 className="text-6xl tracking-widest font-bold text-cyan-400">CONQUER</h1>
</div>
);
}
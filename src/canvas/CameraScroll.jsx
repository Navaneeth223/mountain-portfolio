import { useThree } from "@react-three/fiber";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);


export default function CameraScroll() {
const { camera } = useThree();


useEffect(() => {
gsap.to(camera.position, {
z: 2,
y: 1,
scrollTrigger: {
trigger: document.body,
start: "top top",
end: "bottom bottom",
scrub: true,
},
});
}, []);


return null;
}
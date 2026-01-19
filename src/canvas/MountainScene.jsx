import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, Sparkles } from "@react-three/drei";
import CameraScroll from "./CameraScroll";


function Mountain() {
return (
<Float speed={1.5}>
<mesh rotation={[-0.5, 0.3, 0]}>
<coneGeometry args={[2.5, 4, 32]} />
<meshStandardMaterial color="#1e293b" roughness={0.7} />
</mesh>
</Float>
);
}


export default function MountainScene() {
const isMobile = window.innerWidth < 768;


return (
<section className="h-screen">
<Canvas camera={{ position: [5, 4, 6], fov: 50 }} dpr={[1, 1.5]}>
<fog attach="fog" args={["#020617", 4, 12]} />
<ambientLight intensity={0.4} />
<directionalLight position={[5, 10, 5]} intensity={1.2} />
<Mountain />
<Sparkles count={80} scale={10} size={1} speed={0.3} />
<CameraScroll />
<OrbitControls enableZoom={false} enableRotate={!isMobile} />
</Canvas>


<div className="absolute inset-0 flex items-center justify-center">
<div className="glass p-10 rounded-3xl text-center">
<h1 className="text-5xl font-bold">Navaneeth KV</h1>
<p className="mt-4 text-cyan-300">MERN • Three.js Developer</p>
</div>
</div>
</section>
);
}
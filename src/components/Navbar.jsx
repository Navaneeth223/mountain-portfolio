export default function Navbar() {
return (
<nav className="fixed top-0 w-full z-40 flex justify-between px-10 py-6 glass">
<h1 className="font-bold">Navaneeth KV</h1>
<div className="space-x-6 text-sm">
<a href="#projects">Projects</a>
<a href="#contact">Contact</a>
</div>
</nav>
);
}
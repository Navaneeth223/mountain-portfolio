export default function Projects() {
return (
<section id="projects" className="py-32 px-10">
<h2 className="text-4xl mb-12">Projects</h2>
<div className="grid md:grid-cols-3 gap-8">
{["Net Shop", "PDF Editor", "AI Wallpaper Generator"].map((p) => (
<div key={p} className="glass p-6 rounded-2xl hover:scale-105 transition">
<h3 className="text-xl font-semibold">{p}</h3>
<p className="text-sm mt-2 text-zinc-300">MERN • UI • 3D</p>
</div>
))}
</div>
</section>
);
}
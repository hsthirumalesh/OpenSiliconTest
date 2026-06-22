export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-900 text-white p-4">
      <h1 className="text-xl font-bold mb-4">OpenSiliconTest</h1>

      <nav className="space-y-2">
        <a href="/" className="block hover:text-blue-400">Home</a>
        <a href="/dft" className="block hover:text-blue-400">DFT</a>
        <a href="/scan" className="block hover:text-blue-400">Scan</a>
        <a href="/ijtag" className="block hover:text-blue-400">IJTAG</a>
      </nav>
    </aside>
  );
}

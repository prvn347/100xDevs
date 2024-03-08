
import Link from 'next/link';
export function Navbar(){

    return <div className="flex gap-20 justify-center py-2 bg-black text-gray-400 border-b-2 border-gray-400">
    <Link className="  px-4 py-2 rounded-xl  hover:text-white " href="/">Home</Link>
    <Link className="  px-4 py-2 rounded-xl hover:text-white"   href="static-page">Server Page</Link>
    <Link className="  px-4 py-2 rounded-xl hover:text-white"   href="interactive-page">Client Page</Link>
  </div>
}
// real h ye wala 
import Link from "next/link"
function Navbar(){
    return(
        <main>
        <header className=" flex justify-between bg-orange-900 py-6 relative z-10" >
            {/* logo */}
            <div>
                <h2 className=" italic text-3xl text-white ml-2 font-bold font"> Alishba Rehman</h2>

            </div>
            {/* link */}
            <div>
                <nav>
                    <ul className="flex gap-x-20 mr-16 text-2xl text-white ">
                        <li>
                            <Link href="/" className="hover:bg-orange-700 rounded brightness-95">Home</Link></li>
                            <li>
                            <Link href="/about"  className="hover:bg-orange-700 rounded">About</Link></li>
                            <li>
                            <Link href="/contact"  className="hover:bg-orange-700">Contact</Link></li>
                            
                    </ul>
                </nav>
            </div>
        </header>
        </main>
    )
}
export default Navbar











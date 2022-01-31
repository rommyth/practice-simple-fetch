import Link from "next/link";


const Navbar = () => {
    return (
        <nav>
            <div>
                <h1>Simple Fetch</h1>
            </div>
            <div>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/list">List</Link>
            </div>
        </nav>);
}

export default Navbar;
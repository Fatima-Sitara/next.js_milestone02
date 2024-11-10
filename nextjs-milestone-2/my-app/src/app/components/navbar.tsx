import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <header className="bg-blue-600 text-white shadow-lg">
        <div className="container mx-auto p-5 flex justify-between items-center">
          <a href="#" className="text-2xl font-semibold">
            My Blog
          </a>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

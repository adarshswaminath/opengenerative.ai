function Navbar() {
  return (
    <nav className="p-2 flex justify-between items-center z-50 sticky top-0 right-0">
        <img src="/images/logo.png" alt="Logo Image" className="h-[70px] w-[70px]" />
        <a href="#">
            <button className="bg-blue-500 p-3 rounded-lg text-white text-sm hover:bg-indigo-500 font-medium hover:rounded-full transition delay-150 ease-in-out duration-200">Join Community</button>
        </a>
    </nav>
  )
}

export default Navbar
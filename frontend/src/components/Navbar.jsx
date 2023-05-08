const Navbar = () => {
  return (
    <nav className="bg-zinc-900">
      <div className="max-w-8xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-center">
            <div className="flex space-x-4">
              <p
                href="#"
                className="text-gray-300 px-3 py-2 rounded-md text-sm font-bold"
              >
                eStore
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

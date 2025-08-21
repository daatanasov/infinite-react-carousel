import { NavLink } from "react-router";

export default function Header() {
  return (
    <header className="bg-gray-900 text-white p-3 sm:p-4 shadow-lg sticky top-0 z-10">
      <nav
        className="flex flex-wrap gap-3 sm:gap-6 justify-center sm:justify-start 
                     text-sm sm:text-base max-w-7xl mx-auto">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `px-3 py-2 rounded-md transition-colors duration-200 hover:bg-gray-700 ${
              isActive ? "bg-gray-700 font-semibold" : ""
            }`
          }>
          Home
        </NavLink>
        <NavLink
          to="/pagination-carousel"
          className={({ isActive }) =>
            `px-3 py-2 rounded-md transition-colors duration-200 hover:bg-gray-700 ${
              isActive ? "bg-gray-700 font-semibold" : ""
            }`
          }>
          Pagination
        </NavLink>
        <NavLink
          to="/virtual-carousel"
          className={({ isActive }) =>
            `px-3 py-2 rounded-md transition-colors duration-200 hover:bg-gray-700 ${
              isActive ? "bg-gray-700 font-semibold" : ""
            }`
          }>
          Virtualization
        </NavLink>
        <NavLink
          to="/infinite-carousel"
          className={({ isActive }) =>
            `px-3 py-2 rounded-md transition-colors duration-200 hover:bg-gray-700 ${
              isActive ? "bg-gray-700 font-semibold" : ""
            }`
          }>
          Infinite
        </NavLink>
      </nav>
    </header>
  );
}

import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          {/* Navbar menu*/}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <Link to={"/features"}>
                <li>Features</li>
              </Link>
              <Link to={"/pricing"}>
                <li>Pricing</li>
              </Link>
            </ul>
          </div>
          {/* Nav Logo */}
          <Link>
            <button className="btn btn-ghost text-xl hover:bg-transparent">TASK</button>
          </Link>
          {/* Nav menu items */}
          <div className='hidden lg:inline-flex'>
            <ul className="menu menu-horizontal px-1 space-x-4">
              <Link to={"/features"}>
                <li>Features</li>
              </Link>
              <Link to={"/pricing"}>
                <li>Pricing</li>
              </Link>
            </ul>
          </div>
        </div>

        {/* Nav items */}
        <div className="navbar-end space-x-2">
          <Link to={"/login"}>
            <button className="btn btn-ghost hover:bg-transparent">Login</button>
          </Link>
          <Link to={"/register"}>
            <button className="btn btn-primary">Get started</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="bg-slate-500">
        <div>
          <NavLink>
            <p>Clock</p>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;

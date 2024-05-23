import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar bg-blue-400 text-black p-4 text-base w-1/3">
      <ul>
        <li>
          <Link to="">Home</Link>
        </li>
        <li>
          <Link to="">User Profile</Link>
        </li>
        <li>
          <Link to="">Games</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;

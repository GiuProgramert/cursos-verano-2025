import SearchIcon from "../icons/SearchIcon";
import PersonIcon from "../icons/PersonIcon";
import ShopIcon from "../icons/ShopIcon";
import FavoriteIcon from "../icons/FavoriteIcon";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center pt-8 px-10">
      <div>
        <h1 className="font-volkhov text-[52px]">FASCO</h1>
      </div>
      <ul className="text-base flex gap-10">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Shop</a>
        </li>
        <li>
          <a href="#">Products</a>
        </li>
        <li>
          <a href="#">Pages</a>
        </li>
      </ul>
      <ul className="flex gap-10">
        <li>
          <SearchIcon />
        </li>
        <li>
          <PersonIcon />
        </li>
        <li>
          <FavoriteIcon />
        </li>
        <li>
          <ShopIcon />
        </li>
      </ul>
    </nav>
  );
}

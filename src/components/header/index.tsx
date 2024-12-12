import { Search, ShoppingBasket, Storefront } from "@mui/icons-material";
import { NavLink, useLocation } from "react-router-dom";
import useBasketContext from "../../context/BasketContext";

function index() {
  const {state:{count}} = useBasketContext();
  const location = useLocation();
  if(location.pathname=='/login') return null;
  return (
    <header className="flex items-center h-[60px] bg-[#131921] sticky top-0 z-[15]">
      <NavLink to="/" className="flex items-center mx-[25px] text-[#ff9f00]">
        <Storefront className="mr-[10px]" fontSize="large" />
        <h2 className="border-0 text-white">eShop</h2>
      </NavLink>
      <div className="flex flex-1 rounded-[24px] mx-[10px]">
        <input type="text" className=" p-4 h-[12px] border-0 w-full focus:outline-none" />
        <button className="bg-[#ff9f00] border-0 m-0 px-1">
          <Search className="h-[22px] p-[2px]" />
        </button>
      </div>
      <nav className="flex justify-evenly">
        <NavLink to="/login" className="nav_item">
          <span className="nav_item_1">Welcome guest</span>
          <span className="nav_item_2">Sign In</span>
        </NavLink>
        <div className="nav_item">
          <span className="nav_item_1">Your</span>
          <span className="nav_item_2">Shop</span>
        </div>
        <div className="flex items-center text-white ">
          <NavLink to="/checkout" className="nav_item_1">
            <ShoppingBasket />
          </NavLink>
          <span className="nav_item_2 mx-[10px]">{count}</span>
        </div>
      </nav>
    </header>
  );
}

export default index;

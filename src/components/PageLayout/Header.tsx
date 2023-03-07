import styles from "styles/components/PageLayout/Header.module.scss";
import Link from "next/link";
import Cart from "./Cart/Cart";
import { useContext,useState } from "react";
import CartItemsContext from "contexts/cartItemsContext";
import CartVisibilityContext from "contexts/cartVisibilityContext";
import { CartProduct } from "lib/interfaces";
import { MdShoppingCart } from "react-icons/md";

const Header = () => {
  const { cart } = useContext(CartItemsContext);
  const { toggleCartVisibility } = useContext(CartVisibilityContext);
  const cartLength = cart.reduce(
    (count: number, item: CartProduct) =>
      (count += item.quantity ? item.quantity : 1),
    0
  );

  const [searchInput, setSearchInput] = useState(true);
  const [mdOptionsToggle, setMdOptionsToggle] = useState(true);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <Cart />
      <div className="dark:bg-gray-900">
            <div>
                <div>
                    {/* For md screen size */}
                    <div id="md-searchbar" className={`${mdOptionsToggle ? "hidden" : "flex"} bg-white dark:bg-gray-900 lg:hidden py-5 px-6 items-center justify-between`}>
                        <div className="space-x-6">
                            <button aria-label="view favourites" className="text-white  focus:outline-none focus:ring-2 focus:ring-white">
                                <svg className="fill-stroke" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M13.8921 3.07357C13.5516 2.73291 13.1473 2.46267 12.7023 2.2783C12.2574 2.09392 11.7804 1.99902 11.2988 1.99902C10.8171 1.99902 10.3402 2.09392 9.89521 2.2783C9.45023 2.46267 9.04595 2.73291 8.70544 3.07357L7.99878 3.78024L7.29211 3.07357C6.60432 2.38578 5.67147 1.99938 4.69878 1.99938C3.72609 1.99938 2.79324 2.38578 2.10544 3.07357C1.41765 3.76137 1.03125 4.69422 1.03125 5.66691C1.03125 6.6396 1.41765 7.57245 2.10544 8.26024L2.81211 8.96691L7.99878 14.1536L13.1854 8.96691L13.8921 8.26024C14.2328 7.91974 14.503 7.51545 14.6874 7.07048C14.8718 6.6255 14.9667 6.14857 14.9667 5.66691C14.9667 5.18525 14.8718 4.70831 14.6874 4.26334C14.503 3.81836 14.2328 3.41408 13.8921 3.07357V3.07357Z"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>
                            <button aria-label="go to cart" className="text-white  focus:outline-none focus:ring-2 focus:ring-white">
                                <svg className="fill-stroke" width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.66667 1L1 4.2V15.4C1 15.8243 1.1873 16.2313 1.5207 16.5314C1.8541 16.8314 2.30628 17 2.77778 17H15.2222C15.6937 17 16.1459 16.8314 16.4793 16.5314C16.8127 16.2313 17 15.8243 17 15.4V4.2L14.3333 1H3.66667Z" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M1 4.2002H17" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M12.5564 7.3999C12.5564 8.2486 12.1818 9.06253 11.515 9.66264C10.8482 10.2628 9.94386 10.5999 9.00087 10.5999C8.05788 10.5999 7.15351 10.2628 6.48671 9.66264C5.81991 9.06253 5.44531 8.2486 5.44531 7.3999" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    {/* For md screen size */}
                    {/* For large screens */}
                    <div className="dark:bg-gray-900 bg-gray-50 px-6 py-9">
                        <div className="container mx-auto flex items-center justify-between">
                            <a href='/' className="md:w-2/12 text-3xl font-bold cursor-pointer text-white " aria-label="electonicCrib">
                            <span className='font-light'>electronic</span>Crib
                            </a>
                            <ul className="hidden w-8/12 md:flex items-center justify-center space-x-8">
                                <li>
                                    <a href="/" className=" text-base text-white focus:outline-none focus:ring-2 focus:ring-white hover:underline">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a href="/category/all_products" className=" text-base text-white focus:outline-none focus:ring-2 focus:ring-white hover:underline">
                                        Products
                                    </a>
                                </li>
                                <li>
                                    <a href="/#contact" className=" text-base text-white focus:outline-none focus:ring-2 focus:ring-white hover:underline">
                                       Contact
                                    </a>
                                </li>
                            </ul>
                            <div className="md:w-2/12 justify-end flex items-center space-x-4 xl:space-x-8">
                            <div className="relative">
                              <img
                                className="object-cover w-16 h-16 rounded-full ring ring-gray-300 dark:ring-gray-600"
                                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=880&h=880&q=100"
                                alt=""
                              />
                              <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 ring-1 ring-white" />
                            </div>
                                <div className="hidden lg:flex items-center space-x-4 xl:space-x-8">
                                <button className="relative z-50 border-0 bg-transparent outline-0">
                                      <MdShoppingCart
                                        color="white"
                                        onClick={toggleCartVisibility}
                                        size={30}
                                      />
                                      {cartLength > 0 && (
                                        <span className="absolute w-4 h-4 text-white text-xs border border-solid border-gray-500 rounded-full flex flex-row justify-center items-center p-2 -left-1 -bottom-1 bg-white">
                                          {cartLength}
                                        </span>
                                      )}
                                    </button>
                                </div>
                                <div className="flex lg:hidden">
                                    <button aria-label="show options" onClick={() => setMdOptionsToggle(!mdOptionsToggle)} className="text-black  dark:hover:text-gray-300 hidden md:flex focus:outline-none focus:ring-2 rounded focus:ring-gray-600">
                                        <svg className="fill-stroke" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4 6H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M10 12H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M6 18H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                    <button aria-label="open menu" onClick={() => setShowMenu(true)} className="text-black  dark:hover:text-gray-300 md:hidden focus:outline-none focus:ring-2 rounded focus:ring-gray-600">
                                        <svg className="fill-stroke" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4 6H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M10 12H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M6 18H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* For small screen */}
                    <div id="mobile-menu" className={`${showMenu ? "flex" : "hidden"} dark:bg-gray-900 z-10 inset-0 md:hidden bg-white flex-col h-screen w-full`}>
                        <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-4 p-4">
                            <div className="flex items-center space-x-3">
                                <div>
                                    <svg className="fill-stroke text-white " width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M18.9984 18.9999L14.6484 14.6499" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <input type="text" placeholder="Search for products" className="text-sm dark:bg-gray-900 text-gray-600 placeholder-gray-600 dark:placeholder-gray-300 focus:outline-none" />
                            </div>
                            <button onClick={() => setShowMenu(false)} aria-label="close menu" className="focus:outline-none focus:ring-2 rounded focus:ring-gray-600">
                                <svg className="fill-stroke text-white " width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 4L4 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M4 4L12 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                        <div className="mt-6 p-4">
                            <ul className="flex flex-col space-y-6">
                                <li>
                                    <a href="/" className=" flex items-center justify-between hover:underline text-base text-white focus:outline-none focus:ring-2 focus:ring-white">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <Link href="/category/all_products" className=" flex items-center justify-between hover:underline text-base text-white focus:outline-none focus:ring-2 focus:ring-white">
                                        Products
                                    </Link>
                                </li>
                                <li>
                                    <a href="/#contact" className=" flex items-center justify-between hover:underline text-base text-white focus:outline-none focus:ring-2 focus:ring-white">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="h-full flex items-end">
                            <ul className="flex flex-col space-y-8 bg-gray-50 w-full py-10 p-4 dark:bg-white">
                                <li>
                                <button className="relative z-50 border-0 bg-transparent text-white outline-0">
                                  <MdShoppingCart
                                    color="white"
                                    onClick={toggleCartVisibility}
                                    size={30}
                                  />
                                  {cartLength > 0 && (
                                    <span className="absolute w-4 h-4 text-white text-xs border border-solid border-gray-500 rounded-full flex flex-row justify-center items-center p-2 -left-1 -bottom-1 bg-white">
                                      {cartLength}
                                    </span>
                                  )}
                                </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default Header;

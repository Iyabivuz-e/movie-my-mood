"use client"

import Image from 'next/image';
import logo from "./../../public/logo2.jpeg"
import { useContext, useState } from 'react';
// import { moods } from '../../helpers/Moods';
import { MovieContext } from '../../contextAPI/Movie-Context';


const Navbar = () => {

  const [ inputValue, setInputValue ] = useState("")
  const movieContext = useContext(MovieContext);

  //Filtering the search input 
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    if (movieContext?.searchedFunction) {
      movieContext.searchedFunction(value);
    }
  };
  return (
    
    <div className="navbar flex px-5 rounded-2xl justify-between mt-5 max-sm:mt-0 sticky top-0 gap-5 items-center bg-base-200 w-[90%] max-sm:w-full max-sm:rounded-none m-auto ">
      <div className="">
        <Image
          alt="MM-logo"
          src={logo}
          className="w-[60px] h-[60px] rounded-full"
        />
      </div>
      <div className="input-bordered max-sm:hidden btn -py-3 btn-xs sm:btn-sm md:btn-md lg:btn-lg">
        MovieMyMood
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search your mood"
            className="input max-sm:w-40 input-bordered w-48 "
            value={inputValue}
            onChange={handleSearch}
          />
        </div>
        {/* <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <Image alt="Tailwind CSS Navbar component" src={logo} />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div> */}
      </div>
    </div>
  );
}

export default Navbar

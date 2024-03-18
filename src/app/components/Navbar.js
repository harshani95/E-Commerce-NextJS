import React from 'react'
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="hidden lg:block">
      <div className="container">
        <div className="flex w-fit gap-10 mx-auto font-medium py-4 text-blackish">
          <Link className="navbar_link relative cursor-pointer"  href="#">
            HOME
          </Link>
          <Link className="navbar_link relative cursor-pointer" href="#">
            CATEGORIES
          </Link>
          <Link className="navbar_link relative cursor-pointer" href="#">
            {`MEN'S`}
          </Link>
          <Link className="navbar_link relative cursor-pointer" href="#">
            {`WOMEN'S`}
          </Link>
          <Link className="navbar_link relative cursor-pointer" href="#">
            JEWELRY
          </Link>
          <Link className="navbar_link relative cursor-pointer" href="#">
            PERFUME
          </Link>
          <Link className="navbar_link relative cursor-pointer" href="#">
            BLOG
          </Link>
          <Link className="navbar_link relative cursor-pointer" href="#">
            HOT OFFERS
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
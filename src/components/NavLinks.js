import React, { useState, useEffect } from "react";
import Link from "next/link";

const NavLinks = () => {
  const [dropdownStatus, setDropdownStatus] = useState(false);
  const handleDropdownStatus = () => {
    setDropdownStatus(!dropdownStatus);
    console.log(dropdownStatus);
  };
  return (
    <ul className="main-nav__navigation-box">
      <li>
        <Link style={{textDecoration: 'inherit'}} href="/">Home</Link>
      </li>

      <li>
        <Link style={{textDecoration: 'inherit'}} href="/positions">Jobs</Link>
      </li>
      <li>
        <Link style={{textDecoration: 'inherit'}} href="/contactus">Contact Us</Link>
      </li>
      <li>
        <Link style={{textDecoration: 'inherit'}} href="/china">Life In China</Link>
      </li>
    </ul>
  );
};

export default NavLinks;

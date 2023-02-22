import React from "react";

const Header = () => {
  return (
    <div className="flex border-b border-secondaryGray py-3 mb-4 mx-12">
      <div className="flex flex-1 align-middl">
        <p className="font-bold text-4xl text-headline">Radu G. Cîmpian </p>
      </div>

      <div className="flex flex-1">
        <ul className="flex flex-1 ">
          <li className="-mb-px mr-1">
            <a className="inline-block border-l border-t border-r rounded-t py-2 px-4 font-semibold" href="#">
              About me
            </a>
          </li>
          <li className="mr-1">
            <a className=" inline-block py-2 px-4 font-semibold" href="#">
              Contact
            </a>
          </li>
          <li className="mr-1">
            <a className="inline-block py-2 px-4  font-semibold" href="#">
              Activity
            </a>
          </li>
          <li className="mr-1">
            <a className="inline-block py-2 px-4 font-semibold" href="#">
              Blog
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

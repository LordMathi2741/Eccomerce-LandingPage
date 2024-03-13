import { useState } from "react";
function Navbar(){
    const [toggle, setToggle] =useState(false);
    function handleClick(event){
         setToggle(!toggle);
    }

    return (
        <div class=" bg-white flex justify-between p-5 items-center sticky top-0 ">
        <div>
          <img src={ require("../img/logo.png")}  class="w-12  h-15"/>
        </div>
        <ul class= {`gap-4 text-green-700 flex-col  items-center fixed lg:flex-row right-0 top-16 bg-white p-10 ${toggle?"hidden":"flex"}  h-screen lg:relative  lg:h-full lg:top-0 lg:p-0 lg:bg-transparent lg:flex`}>
          <li> Home </li>
          <li> About</li>
          <li> Contact</li>
          <li> Download</li>
        </ul>
        <div class="lg:hidden" onClick={handleClick}>
          <img class="w-6 h-6 cursor-pointer" src={require("../img/burguer.png")}/>
        </div>
        </div>
    )
}

export default Navbar;
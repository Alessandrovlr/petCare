import { FaPaw } from "react-icons/fa"
import { LinksMenu } from "./LinksMenu"


export const Menu = () =>{
    return(
        <nav>
           <div className="flex gap-5">
                <FaPaw className="text-pink-600 text-2xl"></FaPaw>
                <span>Pet Care</span>
           </div>

           <div>
                <LinksMenu></LinksMenu>
           </div>
        </nav>
    )
}
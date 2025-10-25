import { TiThSmallOutline } from "react-icons/ti";
import { MdFreeBreakfast } from "react-icons/md";
import { LuSoup } from "react-icons/lu";
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { FaBowlRice } from "react-icons/fa6";
import { FaFish } from "react-icons/fa";
import { GiChickenOven } from "react-icons/gi";
import { GiBowlOfRice } from "react-icons/gi";
 const Categories=[{
    id:1,
    name:"All",
    image:<TiThSmallOutline />
},
{id:2,
    name:"Breakfast",
    image:<MdFreeBreakfast />
},
{id:3,
    name:"Pasta",
    image:<GiBowlOfRice />
}
,
{id:4,
    name:"Chicken",
    image:<GiChickenOven />
}
,
{id:5,
    name:"Vegetarian",
    image:<FaBowlRice />
}
,
{id:6,
    name:"Seafood",
    image:<FaFish />
}]
export default Categories
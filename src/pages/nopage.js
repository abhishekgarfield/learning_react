import {Outlet ,Link} from "react-router-dom";


const Nopage=()=>
{
    return(
        <h1>
            <Link to="/">error 403</Link>
        </h1>
    );
};

export default Nopage;
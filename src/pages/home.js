import {Outlet , Link} from "react-router-dom";

const Home = () => {
    return(
        <>
            <h1>Home</h1>
            <Outlet />
        </>
    );
};

export default Home;
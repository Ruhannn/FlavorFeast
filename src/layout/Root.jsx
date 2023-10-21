import { Outlet } from "react-router-dom";
import NavBar from "../Components/Navbar/NavBar";
import Footer from "../Components/Footer/Footer";



const Root = () => {
    return (
        <>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default Root;
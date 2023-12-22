import { Link, Outlet } from "react-router-dom";

const Layout = ()=> {
    return (
        <div style={{height: "81vh"}} className="d-flex justify-content-around align-items-center">
            <aside className="bg-dark p-4 rounded">
                <Link className="btn btn-danger" to={"/arabalar/elektrik"} >Elektrik</Link>
                <br /><br /><br />
                <Link className="btn btn-primary" to={"/arabalar/içten-yanma"} >İçten yanma</Link>
            </aside>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export default Layout;
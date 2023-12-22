import { NavLink } from "react-router-dom";
const Header = ()=> {
    return (
        <header className="align-items-center d-flex justify-content-between p-3 bg-dark text-light">
            <h1>Amazon</h1>
            <div className="d-flex gap-4">
                <NavLink to={"/"}>Anasayfa</NavLink>
                <NavLink to={"/ürünler"}>Ürünler</NavLink>
                <NavLink to={"/hakkımızda"} >Hakkımızda</NavLink>
                <NavLink to={"/arabalar"} >Arabalar</NavLink>
            </div>
        </header>
    )
}

export default Header;
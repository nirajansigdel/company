import react from "react";
import "./layout.css"
import Nav from "../Navbar/Nav";
const Layout=({children})=>{
    return(<div className="layoutmain">
    <Nav/>
    <div className="allChildren">{children}</div>

    </div>)
}
export default Layout
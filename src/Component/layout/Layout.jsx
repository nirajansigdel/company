import "./layout.css"
import Nav from "../Navbar/Nav";
const Layout=({children})=>{
    return(
    <div className="wholeprojectdesign">
    <div className="layoutmain">
    <Nav/>
    <div className="allChildren">{children}</div>
    </div>
    </div>)
}
export default Layout
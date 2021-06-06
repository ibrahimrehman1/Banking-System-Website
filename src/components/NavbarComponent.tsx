import React from "react";
import WebsiteLogo from "./../assets/website-logo.png";
import {NavLink, useHistory} from "react-router-dom";


interface NavProps{
    links: {
        link: string,
        path: string
    }[];

}

const Navbar:React.FC<NavProps> = ({links}) => {

    window.addEventListener("scroll", ()=>{
        let nav = document.querySelector("nav")!;
        if (window.scrollY === 0){
            nav.style.backgroundColor = "";
            nav.style.boxShadow = "";
        }else{
            if (!nav.style.backgroundColor){
                nav.style.backgroundColor = "white";
                nav.style.boxShadow = "1px 1px 5px 1px #cecece";
            }
        }
        
    })

    const history = useHistory()


    const handleToggle = ()=>{
        let nav = document.querySelector("nav")!;
        if (!nav.style.backgroundColor){
            nav.style.backgroundColor = "white";
            nav.style.boxShadow = "1px 1px 5px 1px #cecece";
        }
    }


    
    return(
        // <nav className="navbar">
        //     <div className="website-img">
        //         <img src={WebsiteLogo} alt="Payonta" onClick={()=>history.push("/")}/>
        //     </div>
        //     <div>
        //         <ul className="nav-list">
        //             {links.map(({link, path}, index)=>{
        //                 return(<li key={index}>
        //                     <NavLink to={path} className={link}>{link}</NavLink>
        //                 </li>
        //                 )
        //             })}
        //         </ul>
        //     </div>
    
        // </nav>


        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <div className="website-img">
                        <img src={WebsiteLogo} alt="Payonta" onClick={()=>{
                            document.querySelector(".nav-link")?.classList.add("active");history.push("/")}
                            }/>
                    </div>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" onClick={handleToggle}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav" style={{justifyContent: "flex-end", textAlign: "center"}}>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link active" aria-current="page" href="#">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/customers" className="nav-link" href="#" onClick={()=>document.querySelector(".nav-link")?.classList.remove('active')}>View all Customers</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export {Navbar};
import React from "react";
import WebsiteLogo from "./../assets/website-logo.png";
import {NavLink} from "react-router-dom";

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
                console.log(12)
                nav.style.backgroundColor = "white";
                nav.style.boxShadow = "1px 1px 5px 1px #cecece";
            }
        }
        
    })


    
    return(
        <nav className="navbar">
            <div className="website-img">
                <img src={WebsiteLogo} alt="Payonta" />
            </div>
            <div>
                <ul className="nav-list">
                    {links.map(({link, path}, index)=>{
                        return(<li key={index}>
                            <NavLink to={path} className={link}>{link}</NavLink>
                        </li>
                        )
                    })}
                </ul>
            </div>
    
        </nav>
    )
}

export {Navbar};
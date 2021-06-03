import React from "react";
import WebsiteLogo from "./../assets/website-logo.png";
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


function Navbar(){
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
                    {["Home", "Services", "Contact"].map((link, index)=>{
                        return(<li key={index}>
                            <a href="#">{link}</a>
                        </li>
                        )
                    })}
                </ul>
            </div>
    
        </nav>
    )
}

export {Navbar};
import React from "react";
import HeaderImage from "../assets/header-image.png";
import Button from '@material-ui/core/Button';


function MainComponent(){
    return(
        <main>
            <header className="main-header">
                <div className="header-div">
                    <h1>The right <span style={{color: "#8180e0", fontFamily: "Roboto"}}>decision</span> at the right time.</h1>
                    <p>We are here to help you when you need your financial support, then we are help you.</p>
                    <Button variant="contained">
                        Contact Us
                    </Button>
                </div>
                <div className="header-img">
                    <img src={HeaderImage} alt="A Female Accountant" />
                </div>
            </header>
        </main>
    )
}

export {MainComponent};
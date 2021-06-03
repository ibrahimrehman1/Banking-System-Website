import React from "react";
import HeaderImage from "../assets/header-image.png";
import Button from '@material-ui/core/Button';
import HomeWorkIcon from '@material-ui/icons/HomeWork';

function MainComponent(){
    const [hoverStatus1, setHoverStatus1] = React.useState<Boolean>(false);
    const [hoverStatus2, setHoverStatus2] = React.useState<Boolean>(false);
    const [hoverStatus3, setHoverStatus3] = React.useState<Boolean>(false);
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
            <article className="article-1">
                <section className="article-1-section1">
                    <div onMouseOver={()=>setHoverStatus1(true)} onMouseOut={()=>setHoverStatus1(false)}>
                        <div style={{color: hoverStatus1 ? "white" : "#8180e0"}}><HomeWorkIcon style={{fontSize: "3rem", alignSelf: "center", color: 'inherit'}}/> <span style={{opacity: ".6", color: "inherit"}}>10.2%</span></div>
                        <h3>Business Loan</h3>
                        <p>Stay turned into the world of finance &amp; business.</p>
                        <h6>20 months installment</h6>
                    </div>
                </section>
                <section className="article-1-section2">
                    <div onMouseOver={()=>setHoverStatus2(true)} onMouseOut={()=>setHoverStatus2(false)}>
                        <div style={{color: hoverStatus2 ? "white" : "#8180e0"}}><HomeWorkIcon style={{fontSize: "3rem", alignSelf: "center", color: 'inherit'}}/> <span style={{opacity: ".6", color: "inherit"}}>9.35%</span></div>
                        <h3>Educational Loan</h3>
                        <p>Stay turned into the world of finance &amp; business.</p>
                        <h6>20 months installment</h6>
                    </div>
                    <div style={{marginTop: "40px"}} onMouseOver={()=>setHoverStatus3(true)} onMouseOut={()=>setHoverStatus3(false)}>
                        <div style={{color: hoverStatus3 ? "white" : "#8180e0"}}><HomeWorkIcon style={{fontSize: "3rem", alignSelf: "center", color: 'inherit'}}/> <span style={{opacity: ".6", color: "inherit"}}>28.6%</span></div>
                        <h3>Personal Loan</h3>
                        <p>Stay turned into the world of finance &amp; business.</p>
                        <h6>20 months installment</h6>
                    </div>
                </section>
                <section className="article-1-section3">
                    <div className="article-1-section3-div">
                        <h2>We provide awesome services, it's here</h2>
                        <p>We are here to help you when you need your financial support, then we are help you.</p>
                        <p>We are here to help you when you need your financial support, then we are help you.</p>
                        <Button variant="contained">
                            View More
                        </Button>
                    </div>
                </section>
            </article>
        </main>
    )
}

export {MainComponent};
import React, {useEffect, useState} from "react";
import HeaderImage from "../assets/header-image.png";
import HeaderImage2 from "../assets/header-image-2.png";
import Button from '@material-ui/core/Button';
import HomeWorkIcon from '@material-ui/icons/HomeWork';

function HomeComponent(){
    const [hoverStatus1, setHoverStatus1] = useState<Boolean>(false);
    const [hoverStatus2, setHoverStatus2] = useState<Boolean>(false);
    const [hoverStatus3, setHoverStatus3] = useState<Boolean>(false);
    const [hoverStatus4, setHoverStatus4] = useState<Boolean>(false);
    const [hoverStatus5, setHoverStatus5] = useState<Boolean>(false);
    const [hoverStatus6, setHoverStatus6] = useState<Boolean>(false);

    useEffect(()=>{
        document.title = "Homepage"
        document.querySelector(".Home")?.classList.add("active-link");
        document.querySelector(".View all Customers")?.classList.remove("active-link");
        document.querySelector(".Contact")?.classList.remove("active-link");
    }, [])

    return(
        <main>
            <header className="main-header">
                <div className="header-div">
                    <h1>The right <span style={{color: "#8180e0", fontFamily: "Roboto"}}>decision</span> at the right time.</h1>
                    <p>We are here to help you when you need your financial support, then we are help you.</p>
                    <Button variant="contained">
                        <span>
                            Contact Us
                        </span>
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
            <article className="main-header" style={{marginTop: "100px"}}>
                <div className="header-img">
                    <img src={HeaderImage2} alt="A Female Accountant" />
                </div>
                <div className="header-div">
                    <h2>Our manager will contact you to clear the details.</h2>
                    <p>We are here to help you when you need your financial support, then we are help you.</p>
                    <p>We are here to help you when you need your financial support, then we are help you.</p>
                    <Button variant="contained">
                        Call Us Now
                    </Button>
                </div>
            </article>
            <article className="article-3">
                <div>
                    <h2>Fast and very easy application process here</h2>
                    <p>We are here to help you when you need your financial support, then we are help you.</p>
                </div>
                <section>
                    <div onMouseOver={()=>setHoverStatus4(true)} onMouseOut={()=>setHoverStatus4(false)}>
                        <h3 style={{color: hoverStatus4 ? "white" : "#8180e0"}}>01</h3>
                        <h4>Apply Bank Loan</h4>
                        <p>We are provide best services and finaancial solution for you.</p>
                    </div>
                    <div onMouseOver={()=>setHoverStatus5(true)} onMouseOut={()=>setHoverStatus5(false)}>
                        <h3 style={{color: hoverStatus5 ? "white" : "#8180e0"}}>02</h3>
                        <h4>Approved Bank Loan</h4>
                        <p>We are provide best services and finaancial solution for you.</p>
                    </div>
                    <div onMouseOver={()=>setHoverStatus6(true)} onMouseOut={()=>setHoverStatus6(false)}>
                        <h3 style={{color: hoverStatus6 ? "white" : "#8180e0"}}>03</h3>
                        <h4>Review Your Loan</h4>
                        <p>We are provide best services and finaancial solution for you.</p>
                    </div>
                </section>
            </article>
        </main>
    )
}

export {HomeComponent};
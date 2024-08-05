import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <div style={{
                    width: "100%",
                    padding: "20px",
                    minHeight: "20vh",
                    maxHeight: "30vh",
                    marginTop: 50
                }}
            >
                <p style={{ fontSize: "30px", textAlign: "center"}}>
                    Built by Radu-Cristian Sarău, 2024. Inspired by
                    <span>
                        <Link
                            style={{color: "white"}} 
                            className="nav-link" 
                            to={"https://www.youtube.com/@freecodecamp"}
                        >
                                freeCodeCamp.org
                        </Link>
                    </span>
                </p>
            </div>
        </footer>
    );
}

export default Footer;
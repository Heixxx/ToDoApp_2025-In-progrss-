import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavPanel from "./NavPanel";
import "../../css/navDesktop.css";
import NavBtn from "./NavMobileBtn";
import PremumButton from "../../common/PremiumButton";

interface NavPCProps {
    info: boolean;
    closeInfo: () => void;
    setInfo: (value: boolean) => void;
}

const NavPC: React.FC<NavPCProps> = ({ closeInfo, info, setInfo }) => {
    const [isAccountPanelOpen, setIsAccountPanelOpen] =
        useState<boolean>(false);
    const togglePanel = (): void => {
        setIsAccountPanelOpen(!isAccountPanelOpen);
    };

    // FUTURE

    // useEffect(() => {
    //     const handleMouseMove = (e: MouseEvent) => {
    //         const navEl = document.querySelector("nav");
    //         if (!navEl) return;
    //         const rect = navEl.getBoundingClientRect();
    //         const x = e.clientX - rect.left;
    //         const y = e.clientY - rect.top;
    //         navEl.style.setProperty("--cursorX", `${x}px`);
    //         navEl.style.setProperty("--cursorY", `${y}px`);
    //     };
    //     if (window.innerWidth > 768) {
    //         window.addEventListener("mousemove", handleMouseMove);
    //     }
    //     // Cleanup
    //     return () => window.removeEventListener("mousemove", handleMouseMove);
    // }, []);

    const [isDesktop, setIsDesktop] = useState<boolean>(
        window.innerWidth > 768
    );

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth > 768);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return (
        <nav>
            <div className="nav_pc">
                <div className="nav_pc__left">
                    {!isDesktop ? (
                        <NavBtn></NavBtn>
                    ) : (
                        <Link to="/">
                            <h2>ToDo APP</h2>
                        </Link>
                    )}
                </div>
                <div className="nav_pc__right">
                    <button className="nav_pc__right-notifications cleanbutton buttonAnim">
                        <img
                            src="/icons/bell.png"
                            alt="bell"
                            className="icons"></img>
                    </button>
                    <div>{isDesktop ? <PremumButton></PremumButton> : ""}</div>
                    <button
                        className="nav_pc__right-strike row cleanbutton buttonAnim"
                        onClick={closeInfo}
                        onMouseEnter={() => setInfo(true)}>
                        {/* TEST */}
                        <p className="">1</p>
                        <img
                            src="/icons/fire.png"
                            alt="strike"
                            className="icons"></img>
                        {info && (
                            <div
                                className="hoverpanel"
                                onMouseLeave={() => setInfo(true)}>
                                <h3>Strike System</h3>
                                <p>
                                    3
                                    <img
                                        src="/icons/strikeIcon_little.svg"
                                        alt="strike"></img>
                                    - promocja 10%!
                                </p>
                                <p>
                                    7
                                    <img
                                        src="/icons/strikeIcon_little.svg"
                                        alt="strike"></img>
                                    - promocja 20% + zamrożenie strike!
                                </p>
                                <p>
                                    30
                                    <img
                                        src="/icons/strikeIcon_little.svg"
                                        alt="strike"></img>
                                    - promocja 25%, zamrożenie strike + 10
                                    powaidomień za free!
                                </p>
                            </div>
                        )}
                    </button>
                    <div className="nav_pc__right-userbutton">
                        <button
                            className="nav_pc__right-userbutton--btn buttonAnim"
                            onClick={togglePanel}>
                            <img
                                src="/icons/user.png"
                                alt="user"
                                className="icons"></img>
                        </button>
                        {isAccountPanelOpen && (
                            <NavPanel isDesktop={isDesktop} />
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavPC;

import React from "react";
import { useSelector } from "react-redux";

import styles from "./Navbar.module.scss";

const Navbar = () => {
    const birdsSectionArray = useSelector((state) => state.birdsData.birdsSectionArray);
    let currentSection = useSelector((state) => state.birdsData.section);

    console.log(birdsSectionArray);
    console.log(currentSection);
    return (
        <div className={styles.sectionList}>
            {birdsSectionArray.map((section, index) => {
                return (
                    <div
                        id={index}
                        key={index}
                        className={
                            currentSection === index
                                ? ` ${styles.section} ${styles.sectionActive}`
                                : ` ${styles.section}`
                        }
                    >
                        {section}
                    </div>
                );
            })}
        </div>
    );
};
export default Navbar;

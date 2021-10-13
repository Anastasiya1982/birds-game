import React from "react";
import { useSelector } from "react-redux";

import styles from "./Navbar.module.scss";
// var classNames=require('classnames')

const Navbar = () => {
    const birdsSectionArray = useSelector((state) => state.birdsData.birdsSectionArray);
    let currentSection = useSelector((state) => state.birdsData.section);

    // const classnames = classNames({
    //     'section':currentSection !== index,
    //     'sectionActive': currentSection === index
    // })
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

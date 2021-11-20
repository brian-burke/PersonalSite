import React from 'react';
import {AnimatePresence, motion} from "framer-motion";


export const Layout = (props) => {

    return (
        <AnimatePresence
            exitBeforeEnter
            initial={false}
            onExitComplete={() => window.scrollTo(0, 0)}
        >
            <motion.main
                initial={{scaleX: 1}}
                animate={{scaleX: 0}}
                exit={{scaleX: 0}}
                transition={{
                    default: {duration: 0.2},
                }}>
                {props.children}
            </motion.main>
        </AnimatePresence>

    );
}

Layout.propTypes = {};
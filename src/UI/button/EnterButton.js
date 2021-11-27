import React from 'react'
import styles from './EnterButton.module.scss'
import {motion} from 'framer-motion'

export const EnterButton = ({children, ...props}) => {
    return (
        <motion.button
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.96}}
            transition={{duration: 0.4}}
            
            {...props} className={`${styles.myBtn} && ${styles.linearGradient}`}>
            {children}
        </motion.button>
    )
}

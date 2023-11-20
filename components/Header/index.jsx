import Image from 'next/image'
import React from 'react'
import styles from "./Header.module.css"
import { useStore } from '@/store/store.js'

export default function Header() {

    const currentQuestion = useStore((store) => store.currentQuestion)
    const setOpen = useStore((store) => store.setOpen)

    return (
        <div className={`${styles.headerContainer}`}>
            <Image
                className={`${styles.logo}`}
                alt="logo"
                unoptimized
                width={100}
                height={100}
                src={"/logo.png"}
            />
            <header className={`${styles.header}`}>{`# ${currentQuestion}`}</header>
            <Image
                className={`${styles.exit}`}
                alt="exit"
                unoptimized
                width={100}
                height={100}
                src={"/exit.svg"}
                onClick={() => setOpen()}
            />
        </div>
    )
}

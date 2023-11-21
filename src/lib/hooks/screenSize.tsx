import { useEffect, useState } from "react"

export const useScreenSize = () => {
    const getScreenSize = (windowWidth: number) => (windowWidth < 800) ? "mobile" : "desktop"
    const [screenSize, setScreenSize] = useState(getScreenSize(window.innerWidth))

    useEffect(() => {
        setScreenSize(getScreenSize(window.innerWidth))

        window.addEventListener('resize', () => {
            setScreenSize(getScreenSize(window.innerWidth))
        })
    }, [])

    return screenSize
}
import React, { createContext, useState } from "react";

type initType = {
    isReady: boolean,
    setIsReady: React.Dispatch<React.SetStateAction<boolean>>
}

/*const init = {
    isReady: false,
    setIsReady: () => {}
} as initType*/

export const gameContext = createContext({} as initType)

type providerProps = {
    children: React.ReactNode
}

export default function GameContextProvider({children}: providerProps) {
    const [isReady, setIsReady] = useState(false)
    return (
        <gameContext.Provider value={{
            isReady,
            setIsReady
        }}>
            {children}
        </gameContext.Provider>
    )
}
import { createContext } from "react";

export const AudioPlayerContext = createContext();

const AudioPlayerContextProvider = (props) => {

    const contextValue = {

    }

    return (
        <AudioPlayerContext.Provider value={contextValue}>
            {props.children}
        </AudioPlayerContext.Provider>
    )

}

export default AudioPlayerContextProvider;
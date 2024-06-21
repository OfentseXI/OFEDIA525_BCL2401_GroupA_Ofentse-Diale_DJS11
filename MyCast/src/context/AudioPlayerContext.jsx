import { createContext, useRef } from "react";

export const AudioPlayerContext = createContext();

const AudioPlayerContextProvider = (props) => {

    const audioRef = useRef();

    const contextValue = {
        audioRef
    }

    return (
        <AudioPlayerContext.Provider value={contextValue}>
            {props.children}
        </AudioPlayerContext.Provider>
    )

}

export default AudioPlayerContextProvider;
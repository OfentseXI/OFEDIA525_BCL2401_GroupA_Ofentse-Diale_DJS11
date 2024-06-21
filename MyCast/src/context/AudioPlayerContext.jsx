import { createContext, useRef, useState } from "react";
import { songsData } from "../assets/assets";

export const AudioPlayerContext = createContext();

const AudioPlayerContextProvider = (props) => {

    const audioRef = useRef();
    const seekBg = useRef();
    const seekBar = useRef();

    const [track,setTrack] = useState(songsData[0]);
    const [playing,setPlaying] = useState(false);
    const [time,setTime] = useState({
        currentTime:{
            second: 0,
            minute: 0
        },
        totalTime: {
            second: 0,
            minute: 0
        }
    });

    const play = () => {
        audioRef.current.play();
        setPlaying(true);
    }

    const pause = () => {
        audioRef.current.pause();
        setPlaying(false);
    }

    const contextValue = {
        audioRef,
        seekBar,
        seekBg,
        track,setTrack,
        playing,setPlaying,
        time,setTime, 
        play,pause
    }

    return (
        <AudioPlayerContext.Provider value={contextValue}>
            {props.children}
        </AudioPlayerContext.Provider>
    )

}

export default AudioPlayerContextProvider;
import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/assets";

export const AudioPlayerContext = createContext();

const AudioPlayerContextProvider = (props) => {

    const audioRef = useRef();
    const seekBg = useRef();
    const seekBar = useRef();

    const [track,setTrack] = useState(songsData[1]);
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

    const playWithId = async (id) => {
        await setTrack(songsData[id]);
        await audioRef.current.play();
        setPlaying(true);
    }

    const previous = async () => {
        if(track.id > 0) {
            await setTrack(songsData[track.id-1]);
            await audioRef.current.play();
            setPlaying(true);
        }
    }

    const next = async () => {
        if(track.id < songsData.length-1) {
            await setTrack(songsData[track.id+1]);
            await audioRef.current.play();
            setPlaying(true);
        }
    }

    useEffect(()=>{
        setTimeout(() => {

            audioRef.current.ontimeupdate = () => {
                seekBar.current.style.width = (Math.floor(audioRef.current.currentTime/audioRef.current.duration*100))+"%";
                setTime({
                    currentTime:{
                        second: Math.floor(audioRef.current.currentTime % 60),
                        minute: Math.floor(audioRef.current.currentTime / 60)
                    },
                    totalTime: {
                        second: Math.floor(audioRef.current.duration % 60),
                        minute: Math.floor(audioRef.current.duration / 60)
                    }
                })
            }
        }, 1000);
    },[audioRef])

    const contextValue = {
        audioRef,
        seekBar,
        seekBg,
        track,setTrack,
        playing,setPlaying,
        time,setTime, 
        play,pause,
        playWithId,
        previous,next   
    }

    return (
        <AudioPlayerContext.Provider value={contextValue}>
            {props.children}
        </AudioPlayerContext.Provider>
    )

}

export default AudioPlayerContextProvider;
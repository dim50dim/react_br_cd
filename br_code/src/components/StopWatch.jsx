import { useState ,useEffect,useRef } from "react";

export default function StopWatch() {
    const[isRunning, setIsRunning] = useState(false)
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(() => {
        if(isRunning){
       intervalIdRef.current =     setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current)
            },10);
        }
        return () => {
            clearInterval(intervalIdRef.current);
        }
    },[isRunning])
     
    function start(){
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime;
    }
    function stop(){
        setIsRunning(false)
    }
    function reset(){
      setIsRunning(0);
    }
    function formatTime() {
        let hours = Math.floor(elapsedTime / (1000 * 60 * 60))
       
    }
    return (
        <>
          <div className="stopwatch">
            <div className="display">{formatTime()}</div>
             <div className="controls">
                <button className="start-button" onClick={start()} >Start</button>
                <button className="stop-button" onClick={stop()} >Stop</button>
                <button className="reset-button" onClick={reset()} >Reset</button>
             </div>
            </div>  
        </>
    )
}
import React, { useEffect, useState } from 'react'
import Box from "@mui/system/Box";

const Task1 = () => {

    const [second, setSecond] = useState(0);
    const [minute, setMinute] = useState(0);
    const [hour, setHour] = useState(0);
    const [isActive, setIsActive] = useState(false);

    useEffect (() => {
        let interval;

        if (isActive) {
            interval = setInterval(() => {
                setSecond(second => second + 1);
            }, 1000);
        }else {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [isActive]);

    const handleStart = () => {
        setIsActive(true);
    }
    const handleStop = () => {
        setIsActive(false);
    }
    const handleReset = () => {
        setIsActive(false);
        setSecond(0);
        setMinute(0);
        setHour(0);
    }
    const handleRestart = () => {
        setIsActive(false);
        setSecond(0);
        setMinute(0);
        setHour(0);
        handleStart();
    }

    useEffect(() => {
        if (second === 60) {
            setSecond(0);
            setMinute(minute + 1);
        }

        if (minute === 60) {
            setMinute(0);
            setHour(hour + 1);
        }
    }, [second, minute, hour])

  return (
    <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", flexDirection: "column"}}>
    <Box>
        <p style={{fontSize: "40px", marginBottom: "20px"}} >Stopwatch</p>
    </Box>
    <Box sx={{marginBottom: "10px"}}>
        <p style={{fontSize: "24px"}}>{hour} Hours {minute} Minutes {second} Seconds</p>
    </Box>
    <Box sx={{display: "flex", flexDirection: "row"}}>
        <button type='button' onClick={handleStart} style={{margin:"10px", background: "green", padding: "10px"}}>Start</button>
        <button type='button' onClick={handleStop} style={{margin:"10px", background: "red", padding: "10px"}}>Stop</button>
        <button type='button' onClick={handleReset} style={{margin:"10px", background: "yellow", padding: "10px"}}>Reset</button>
        <button type='button' onClick={handleRestart} style={{margin:"10px", background: "lightBlue", padding: "10px"}}>Restart</button>
    </Box>
    </Box>
  )
}

export default Task1

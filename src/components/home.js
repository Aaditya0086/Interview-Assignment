import React, { useEffect, useState } from "react";
import Box from "@mui/system/Box";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const [showButton, setShowButtons] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButtons(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  const handleTask1Click = () => {
    navigate("/task1");
  };

  const handleTask2Click = () => {
    navigate("/task2");
  };


  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        color: "black",
      }}
    >
      <p style={{ fontSize: "40px", padding: "20px" }}>
        Welcome Adesh Kumar
      </p>
      <Box className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline mr-4"
          type="button"
          onClick={handleTask1Click}
          style={{
            opacity: showButton ? 1 : 0,
            transition: "opacity 0.5s ease-in-out, transform 0.5s ease-in-out",
            transform: showButton ? "translateY(0)" : "translateY(-20px)"
          }}
        >
          Task 1
        </button>
          <button
            className="login-button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleTask2Click}
            style={{
            opacity: showButton ? 1 : 0,
            transition: "opacity 0.5s ease-in-out, transform 0.5s ease-in-out",
            transform: showButton ? "translateY(0)" : "translateY(-20px)" 
          }}
          >
            Task 2
          </button>
      </Box>
      <Box sx={{
          position: "absolute",
          bottom: "10px",
          right: "10px",
        }}>
      <p style={{ fontSize: "16px" }} >Created by: Aaditya Garg</p>
      </Box>
    </Box>
  );
};

export default Home;

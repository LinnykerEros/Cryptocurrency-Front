import React from "react";
import { Box } from "@mui/material";

import { useNavigate } from "react-router-dom";

interface CardProps {
  id: string;
  name: string;
  image: string;
}

function Card(props: CardProps) {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "black",
        color: "#C4C4CC",
        padding: "1rem",
        borderRadius: "8px",
        cursor: "pointer",
        transition: "0.3s",
        "&:hover": {
          backgroundColor: "#C4C4CC",
          color: "black",
        },
      }}
    >
      <h3>{props.name}</h3>
      <img
        style={{ width: "10rem", height: "8rem", borderRadius: "8px" }}
        src={props.image}
        alt=""
        onClick={(e) => navigate(`/details/${props.id}`)}
      />
    </Box>
  );
}

export { Card };

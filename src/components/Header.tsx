import React from "react";
import { Box } from "@mui/material";
function Header() {
  return (
    <Box
      sx={{
        backgroundColor: "black",
        height: "2.25rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          borderTop: "2px solid transparent",
          borderBottom: "2px solid transparent",
          "&:hover": {
            borderBottom: "2px solid white",
          },
        }}
      >
        <a
          style={{
            height: "3rem",
            color: "white",
            fontWeight: "bold",
            fontSize: "1.25rem",
            textDecoration: "none",
          }}
          href="/"
        >
          Home
        </a>
      </Box>
    </Box>
  );
}

export default Header;

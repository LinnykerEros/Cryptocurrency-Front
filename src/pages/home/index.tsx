import React, { useContext, useState } from "react";
import { Box } from "@mui/material";
import { Card } from "../../components/Card";
import { CryptocurrencyContentContext } from "../../context/ContentContext";
function Home() {
  const { contentAbout, cryptoCurrencyList } = useContext<any>(
    CryptocurrencyContentContext
  );

  const [filter, setFilter] = useState<any>("");

  const filterIsTrue = cryptoCurrencyList.filter((item: any) =>
    item.name.toLowerCase().includes(filter)
  );

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        maxWidth: "74rem",
        // height: "calc(100vh - 10rem)",
        margin: " 2rem auto",
        borderRadius: "8px",
        flexDirection: "column",
      }}
    >
      <h1 style={{ color: "white", paddingBottom: "2rem" }}>
        Catálogo de Criptomoedas
      </h1>
      <Box
        sx={{
          backgroundColor: "gray",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.5rem",
          flexDirection: "column",
          padding: "2.5rem",
        }}
      >
        <div>
          {contentAbout.map((item: any, index: any) => {
            return (
              <div key={index}>
                <h1>{item.title}</h1>
                <h2>{item.content}</h2>
              </div>
            );
          })}
        </div>
        <h1> ⬇ Conheça 10 tipos de Criptomoedas ⬇ </h1>
        <div
          style={{
            width: "20rem",
            display: "flex",
            flexDirection: "column",
            float: "right",
          }}
        >
          <input
            style={{
              height: "2rem",
              border: "1px solid black",
              borderRadius: "3px",
            }}
            id="filter"
            name="filter"
            type="text"
            placeholder="Busque por uma Criptomoeda"
            onChange={(e) => setFilter(e.target.value)}
          />
        </div>
        <Box
          sx={{
            width: "80%",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {filterIsTrue
            ? filterIsTrue.map((item: any) => {
                return (
                  <ul key={item.id}>
                    <Card id={item.id} name={item.name} image={item.image} />
                  </ul>
                );
              })
            : cryptoCurrencyList.map((item: any) => {
                return (
                  <ul key={item.id}>
                    <Card id={item.id} name={item.name} image={item.image} />
                  </ul>
                );
              })}
        </Box>
      </Box>
    </Box>
  );
}

export default Home;

import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { findById } from "../../service/cryptoCurrencyService";

function Details() {
  const { id } = useParams();
  const [data, setData] = useState<any>();

  useEffect(() => {
    (async () => {
      try {
        if (id) {
          const isId = id.toString();
          const response = await findById(isId);

          if (response) {
            setData(response);
          }
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, [id]);

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
        {data ? data?.name : ""}
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
        <h1> {data && data.content}</h1>
        <h2> ⬇ Últimos dados do {data && data.name} ⬇</h2>
        <ul style={{ fontSize: "2rem", listStyle: "none" }}>
          {data &&
            data.tradingVolume.map((item: any) => {
              return (
                <div key={data.id}>
                  <li>Preço: R$ {item.price}</li>
                  <li>Último preço: {item.lastPrice}</li>
                  <li>Preço Máximo: R$ {item.maximum}</li>
                  <li>Preço Mínimo: R$ {item.minimum}</li>
                  <li>Volume de negociações: {item.volume}</li>
                </div>
              );
            })}
        </ul>
      </Box>
    </Box>
  );
}

export { Details };

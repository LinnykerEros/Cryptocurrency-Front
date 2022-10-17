import { api } from "../config/axios";

async function findAll() {
  const criptoCurrency = await api.get("/criptocurrency");
  return criptoCurrency.data;
}

async function findById(id: string) {
  const criptoCurrency = await api.get(`/criptocurrency/${id}`);

  return criptoCurrency.data;
}

async function findAllContentAboutCryptocurrency() {
  const contentAboutCriptoCurrency = await api.get("/criptocurrency/about");
  return contentAboutCriptoCurrency.data;
}

async function search(nome: any) {
  const filter = await api.get("/criptocurrency/search", {
    data: {
      nome,
    },
  });

  return filter.data;
}

export { findAll, findById, findAllContentAboutCryptocurrency, search };

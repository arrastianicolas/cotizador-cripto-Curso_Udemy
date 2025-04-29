import axios from "axios";
import {
  CryptoCurrenciesResponseSchema,
  CryptoPriceSchema,
} from "../schema/crypto-schema";
import { Pair } from "../types";

export async function getCryptos() {
  const url =
    "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD";
  const {
    data: { Data },
  } = await axios(url);

  const result = CryptoCurrenciesResponseSchema.safeParse(Data);
  if (result.success) {
    return result.data;
  }
}
//-----------------------------

export async function fetchCurrentCryptoPrice(pair: Pair) {
  const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${pair.cryptocurrency}&tsyms=${pair.currency}`;
  const {
    data: { DISPLAY },
  } = await axios(url);

  const result = CryptoPriceSchema.safeParse(
    DISPLAY[pair.cryptocurrency][pair.currency]
  );

  if (result.success) {
    return result.data;
  }
}
//Por que DISPLAY[pair.criptocurrency][pair.currency] ?
// La respuesta de la API tiene un display, accedemos a el y cuando accedemos vemos que las keys varian segun la cripto y la moneda
// Ej: BTC: {
//         ARS: {
//        }
//   }
// Por eso mismo es que para acceder a los datos lo utilizamos de esa manera

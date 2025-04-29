import { useCryptoStore } from "../store";

export const CryptoMarket = () => {
  const cryptocurrencies = useCryptoStore((state) => state.cryptocurrencies);

  return (
    <div className="ticker">
      <ul>
        {cryptocurrencies.map((currency) => (
          <li key={currency.CoinInfo.Name}>
            {parseFloat(currency.DISPLAY?.USD.CHANGEPCT24HOUR ?? "0") >= 0 ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="arrow-up"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="arrow-down"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3"
                />
              </svg>
            )}
            {currency.CoinInfo.FullName}
            <span
              className={
                parseFloat(currency.DISPLAY?.USD.CHANGEPCT24HOUR ?? "0") >= 0
                  ? "span-green"
                  : "span-red"
              }
            >
              ({currency.DISPLAY?.USD.CHANGEPCT24HOUR ?? "0"})%
            </span>
          </li>
        ))}
      </ul>
      <ul aria-hidden="true">
        {cryptocurrencies.map((currency) => (
          <li key={currency.CoinInfo.Name}>
            {parseFloat(currency.DISPLAY?.USD.CHANGEPCT24HOUR ?? "0") >= 0 ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="arrow-up"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="arrow-down"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3"
                />
              </svg>
            )}
            {currency.CoinInfo.FullName}
            <span
              className={
                parseFloat(currency.DISPLAY?.USD.CHANGEPCT24HOUR ?? "0") >= 0
                  ? "span-green"
                  : "span-red"
              }
            >
              ({currency.DISPLAY?.USD.CHANGEPCT24HOUR ?? "0"})%
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

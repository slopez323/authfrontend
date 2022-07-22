import { getUserToken } from "../Auth";

const HomePage = ({ secretMessage, setSecretMessage }) => {
  const requestSecretMessage = async () => {
    const url = `${process.env.REACT_APP_URL_ENDPOINT}/auth/validate-token`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        [process.env.REACT_APP_TOKEN_HEADER_KEY]: getUserToken(),
      },
    });
    const responseJSON = await response.json();
    setSecretMessage(responseJSON.message);
    return responseJSON;
  };

  return (
    <div>
      <button onClick={() => requestSecretMessage()}>Get Message</button>
      <p>{secretMessage}</p>
    </div>
  );
};

export default HomePage;

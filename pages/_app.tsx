import "../styles/globals.css";
import "../styles/modal.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

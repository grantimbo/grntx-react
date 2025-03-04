import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";

export default function NotFound() {
  return (
    <>
      <Head>
        <title>{"Grant Imbo — 404 // Not Found"}</title>
      </Head>
      <Header />
      <section>
        <div>
          <h1>{"404 — Not Found"}</h1>
          <p>
            {"The link you visited doesn't exist. Please Go back "}
            <Link href="/">Home</Link>
          </p>
        </div>
      </section>

      <style jsx>
        {`
          section {
            display: flex;
            align-items: center;
            height: 100vh;
            text-align: center;
          }
          h1 {
            margin: 0;
          }
          div {
            max-width: 500px;
            margin: 0 auto;
          }
        `}
      </style>
    </>
  );
}

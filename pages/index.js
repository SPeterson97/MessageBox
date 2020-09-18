import Head from 'next/head'

import AppName from "../components/AppName/AppName";

export default function Home() {
  return (
    <div className="rootContainer">
      <Head>
        <title>MessageBox</title>
        <link rel="icon" href="/icons/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Welcome to <AppName/>!
        </h1>

        <p className="description">
          <AppName/> allows you to keep in touch with the ones you love 
        </p>
      </main>

      <footer>
        <div>
          This website was created by Sam Peterson
          <div>
            <a href="https://github.com/SPeterson97" >GitHub</a>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .rootContainer {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        footer a:hover,
        footer a:focus,
        footer a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}

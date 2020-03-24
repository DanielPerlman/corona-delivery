import Head from 'next/head'
import RequestForm from '~/components/RequestForm'
import HeroSection from '~/components/HeroSection'
import UserInfoSection from '~/components/UserInfoSection'
import React, {  useRef, Component } from 'react';
import store from '~/state/store';

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)

class Home extends Component {
  render() {
    const myRef = React.createRef()
    const executeScroll = () => scrollToRef(myRef)
    return (
      <div className="container">
        <Head>
          <title>A Helping Ride</title>
          <link rel="icon" href="/favicon.ico" />
          <link href="https://fonts.googleapis.com/css?family=Baloo+2|Fira+Sans&display=swap" rel="stylesheet" />
        </Head>

        <main>
          <HeroSection />
          <RequestForm ref={myRef}/>
        </main>

        <footer>
        </footer>

        <style jsx>{`
          .container {
            min-height: 100vh;
            padding: 0 0.5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          main {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            padding-bottom: 40px;
          }

          footer {
            width: 100%;
            height: 100px;
            border-top: 1px solid #eaeaea;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          footer img {
            margin-left: 0.5rem;
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

          .title a {
            color: #0070f3;
            text-decoration: none;
          }

          .title a:hover,
          .title a:focus,
          .title a:active {
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

          code {
            background: #fafafa;
            border-radius: 5px;
            padding: 0.75rem;
            font-size: 1.1rem;
            font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
              DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
          }

          .grid {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;

            max-width: 800px;
            margin-top: 3rem;
          }

          .card {
            margin: 1rem;
            flex-basis: 45%;
            padding: 1.5rem;
            text-align: left;
            color: inherit;
            text-decoration: none;
            border: 1px solid #eaeaea;
            border-radius: 10px;
            transition: color 0.15s ease, border-color 0.15s ease;
          }

          .card:hover,
          .card:focus,
          .card:active {
            color: #0070f3;
            border-color: #0070f3;
          }

          .card h3 {
            margin: 0 0 1rem 0;
            font-size: 1.5rem;
          }

          .card p {
            margin: 0;
            font-size: 1.25rem;
            line-height: 1.5;
          }

          @media (max-width: 600px) {
            .grid {
              width: 100%;
              flex-direction: column;
            }
          }
        `}</style>

        <style jsx global>{`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: Inter;
            max-width: 100vw;
            overflow-x: hidden;
          }

          html{
            scroll-behavior: smooth;
          }

          h1 {
              font-size: 4rem;
              line-height: 1.232
          }

          h2 {
              font-size: 2.8rem;
              line-height: 1.2992
          }

          h3 {
              font-size: 2.2rem;
              line-height: 1.3327999999999998
          }

          h4 {
              font-size: 1.2rem;
              line-height: 1.3887999999999998
          }

          @media screen and (max-width: 767px ) {
              html,body {
                  font-size: 12px
              }

              h1 {
                  font-size: 2.5rem;
                  line-height: 1.3159999999999998
              }

              h2 {
                  font-size: 2.1rem;
                  line-height: 1.3383999999999998
              }

              h3 {
                  font-size: 1.8rem;
                  line-height: 1.3552
              }

              h4 {
                  font-size: 1.3rem;
                  line-height: 1.3832
              }
          }

          h1,h2,h3,h4,h5,h6 {
            font-family: Inter;
          }

          * {
            box-sizing: border-box;
          }

          .accordion h4 {
            margin-bottom: 0;
            margin-top: 0;
            text-align: center;
          }

          .button.default {
            background: #b3d4d8 !important;
            color: black;
            padding: 10px;
            border-radius: 50px;
            text-transform: none;
            font-size: 20px;
            font-weight: 400;
          }
          
          @media screen and (max-width: 767px ) {
            .button.default {
              line-height: 40px;
              padding: 0;
              height: 40px;
          }
          
        `}</style>
      </div>
    );
  }

}


export default Home

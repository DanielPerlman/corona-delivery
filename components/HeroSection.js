
const HeroSection = () => (
  <div className="hero-section">
    <div className="header-section">
      <img className="logo" src="/assets/logohero.png"/>
      <div className="phone-block">
        <span className="prompt">Make a new order</span> <br />
        <span className="phone">+46729760992</span>
      </div>
    </div>
    <div className="hero-text-section">
      <h2 className="title">
        Order local goods and help your local taxi driver
      </h2>
      <h3 className="subtitle">
        Quick deliveries, local drivers, and you get to help people yay
      </h3>
    </div>
    <style jsx>{`
      .hero-section {
        width: 100vw;
        height: 600px;
        position: relative;
        background: #FFC1D4;
      }

      .hero-section .header-section {
        width: 100%;
        padding: 30px;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .hero-section .phone-block {
        height: 80%;
        padding: 10px;
        border: 2px solid black;
        display: inline-block;
        text-align: center;
      }

      .hero-section .phone-block .prompt {
        margin-bottom: 1px;
        display: inline-block;
      }

      .hero-section .phone-block .phone {
        font-weight: bold;
      }

      .hero-section .logo {
        display: inline-block;
        margin-right: 20px;
        height: 100%;
      }

      .hero-text-section {
        width: 600px;
        text-align: center;
        margin: auto;
        margin-top: 100px;
      }

      .title {
        color: black;
        margin: 0;
        font-size: 48;
      }

      .subtitle {
        font-weight: 300;
        margin: 0;
        margin-top: 20px;
      }

      @media only screen and (max-width: 600px) {
        .hero-section {
          height: 50vh;
          background: url(/assets/hero-background-mobile.jpg);
          background-position: center;
          background-size: cover;
        }
        .hero-section img {
          display: none;
        }
        .hero-text-section {
          bottom: 46px;
          left: 0px;
        }
        .subtitle {
          width: 150px;
        }
      }
    `}</style>
  </div>
)

export default HeroSection


const HeroSection = () => (
  <div className="hero-section">
    <img src="/assets/hero-background.jpg" />
    <div className="hero-text-section">
      <h3 className="title">
        A Helping Ride
      </h3>
      <h4 className="subtitle">
        We're in this together
      </h4>
    </div>
    <style jsx>{`
      .hero-section {
        width: 100vw;
        height: 70vh;
        position: relative;
      }

      .hero-section img {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        height: 100%;
        width: 100%;
      }

      .hero-text-section {
        position: absolute;
        bottom: 100px;
        left: 50px;
        padding: 10px;
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
      }

      .title {
        text-align: center;
        color: black;
        font-weight: normal;
        text-transform: uppercase;
        margin: 0;
      }

      .subtitle {
        font-weight: 300;
        margin: 0;
        width: 150px;
        margin-top: 20px;
      }
    `}</style>
  </div>
)

export default HeroSection

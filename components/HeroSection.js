
const HeroSection = () => (
  <div className="hero-section">
    <div className="hero-text-section">
      <h1 className="title">
        A Helping Ride
      </h1>
      <h2 className="subtitle">
        We're in this together
      </h2>
    </div>
    <style jsx>{`
      .hero-section {
        width: 100vw;
        height: 80vh;
        background: url(/assets/hero-background.jpg);
        background-size: cover;
        position: relative;
      }

      @media only screen and (max-width: 600px) {
        .hero-section {
          height: 50vh;
        }
      }

      .hero-text-section {
        position: absolute;
        bottom: 100px;
        left: 0;
        padding: 10px;
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
        line-height: 26px;
        margin-top: 20px;
      }
    `}</style>
  </div>
)

export default HeroSection

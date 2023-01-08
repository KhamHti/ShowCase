import { Features, Download, SectionWrapper } from "./components";
import assets from "./assets";
import styles from "./styles/Global";

const App = () => {
  return (
    <>
        <SectionWrapper 
          title="You own store of Nifty NFTs. Start Selling & Growing"
          description="Buy, store, collect NFTs, exchange & earn crypto. 
          Join 25+ million people using ProNef Marketplace."
          showBtn
          mokeupImg={assets.homeHero}
          banner="banner"
        />
        <SectionWrapper 
          title="Smart User Interface Marketplace"
          description="Experience a buttery UI of ProNef NFT Marketplace.
          Smooth constant colors of a fluent UI design."
          mokeupImg={assets.homeCards}
          reverse
        />
        <Features />
        <SectionWrapper 
          title="Deployment"
          description="ProNef is built using Expo which runs natively on all users' devices.
          You can easily get into peopls's hands."
          mokeupImg={assets.feature}
          reverse
        />
        <SectionWrapper 
          title="Creative way to showcase the store"
          description="The app contains two screens. The first screen lists all NFTs while 
          the second one shows the details of a specific NFT."
          mokeupImg={assets.mockup}
          banner="banner02"
        />
        <Download />

        <div className='px-3 py-2 items-center justify-center bg-primary flex-col text-center banner04'>
          <p className={`${styles.pText} ${styles.whiteText}`}>
            Made with love by {"  "}
            <span className='font-bold'>Luffytoro</span>
          </p>
        </div>
    </>
  );
}

export default App;
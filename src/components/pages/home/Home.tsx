import HeroSection from '@/components/blocks/home/heroSection/HeroSection';
import PromoBlock from '@/components/blocks/home/promoBlock/PromoBlock';
import "./index.scss"

const Home = () => {
  return (
    <div className='home'>
      <PromoBlock />
      <HeroSection/>
    </div>
  )
}

export default Home;
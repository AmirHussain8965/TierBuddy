import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/custom.css'
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import StatsCounter from '@/components/StatsCounter';
import FeaturedCategories from '@/components/FeaturedCategories';
import Rankings from '@/components/Rankings';
import RecentWork from '@/components/RecentWork';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Hero />
      <StatsCounter />
      <FeaturedCategories />
      <Rankings />
      <RecentWork />
      <Component {...pageProps} />
    </>
  );
}

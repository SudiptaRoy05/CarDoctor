import Hero from './components/hero.jsx';
import Service from './components/service.jsx';

export default function Home() {
  return (
    <div className='w-10/12 mx-auto'>
      <Hero />
      <Service />
    </div>
  );
}
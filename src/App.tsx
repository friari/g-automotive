import Hero from './components/Hero';
import backgroundImg from './assets/ford-ranger_rd5m4t.jpg';

function App() {
  const heroText =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute rure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt irculba cui officia deserunt mollit anim id est laborun';
  return (
    <>
      <Hero
        title="Welcome to G Automotive"
        paragraph={heroText}
        buttonText="Contact Us"
        buttonLink="/"
        backgroundImgSrc={backgroundImg}
        backgroundImgAlt="A blue Ford Ranger drives offroad on grey gravel. A mountain range can be seen in the distance."
      />
    </>
  );
}

export default App;

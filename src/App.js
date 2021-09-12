import './App.css';
import Routes from './routes/routes';
import PlayerProvider from './components/PlayerContext';
function App() {
  return (
    <>
      <PlayerProvider>
        <Routes />
      </PlayerProvider>
    </>
  );
}

export default App;

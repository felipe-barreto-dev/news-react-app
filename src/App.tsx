import './App.css'
import useApi from './services/api';

function App() {

  const { getResponse, isGetLoading, getError, get } = useApi();

  const handleGetData = () => {
    get();
  };

  handleGetData()

  return (
    <>
    </>
  )
}

export default App

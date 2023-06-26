import { useNews } from './services/api';

function App() {

  const { data } = useNews();

  console.log(data)

  return (
    <>
    </>
  )
}

export default App

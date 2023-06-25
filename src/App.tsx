import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import './App.css'

function App() {
  const getNews = async () => {
    return await axios.get('https://newsapi.org/v2/everything?q=bitcoin&apiKey=7be58569255242d4871ac1375f33027a')
  }
  const { data, isError, isLoading } = useQuery(["news"], () => getNews())

  console.log(data, isLoading, isError)
  return (
    <>
    </>
  )
}

export default App

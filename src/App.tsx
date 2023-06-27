import ArticleListItem from './components/ArticleListItem/ArticleListItem';
import { useNews } from './services/api';

function App() {

  const { data } = useNews();

  console.log(data)

  return (
    <>
      {data?.articles.map((article, key) => {
        return <ArticleListItem key={key} />
      })}
    </>
  )
}

export default App

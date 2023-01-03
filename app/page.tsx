import { categories } from '../constants';
import { fetchNews } from '../lib/fetchNews';
import { NewsList } from '../app/NewsList';

const HomePage = async () => {
  // fetch news data
  // ['general', 'entertainment] ==> business,entertainment,general,health,science,sports,technology
  const news: NewsResponse = await fetchNews(categories.join(','));

  return (
    <div>
      {/* NewsList news */}
      <NewsList news={news} />
    </div>
  );
};

export default HomePage;

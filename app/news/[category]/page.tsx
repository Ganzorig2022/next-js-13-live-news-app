import React from 'react';
import { categories } from '../../../constants';
import { fetchNews } from '../../../lib/fetchNews';
import { NewsList } from '../../NewsList';

type Props = {
  params: { category: Category };
};

//"/app/news/[category]" ==> "http://localhost:3000/news/entertainment"
const NewsCategory = async ({ params }: Props) => {
  // it will return {category: "entertainment" etc. }
  // then destruct it ==> category --> "entertainment" etc.
  const { category } = params;

  const news: NewsResponse = await fetchNews(category);

  return (
    <div>
      <h1 className='headerTitle'>{category}</h1>
      <NewsList news={news} />
    </div>
  );
};

export default NewsCategory;

//prebuild these pages by it's category's name
export const generateStaticParams = async () => {
  return categories.map((category) => ({
    category: category,
  }));
};

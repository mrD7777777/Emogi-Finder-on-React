import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { Footer } from './components/Footer/Footer ';
import { Pagination } from './components/Pagination/Pagination';
import { useState } from 'react';
import { getUnicData } from './utils/getUnicData';
import { data } from '../src/data/emoji';
const newData = getUnicData(data);
function App() {
  const [emoji, setEmoji] = useState(newData); // эмоджи по фильтру
  // const [allEmoji, setAllEmoji] = useState([]);// все эмоджи
  const [currentPage, setCurrentPage] = useState(1); // текущая страница
  const [emojiPerPage, setEmojiPerPage] = useState(12); // количество emoji на странице

  const lastEmojiIndex = currentPage * emojiPerPage; //индекс последней эмоджи на стр.
  const firstEmojiIndex = lastEmojiIndex - emojiPerPage; // индекс первой эмоджи на странице
  const currenEmoji = emoji.slice(firstEmojiIndex, lastEmojiIndex); // эмоджи на текущей странице
  const lastPage = Math.ceil(emoji.length / emojiPerPage); // количество страниц

  // переменные для хранения крайних номеров страниц для пагинации
  let startPage = 0;
  let endPage = lastPage;

  const pageNumbers = [];
  for (let i = 1; i <= lastPage; i++) {
    pageNumbers.push(i);
  }
  console.log(pageNumbers);

  return (
    <>
      <Header />
      <Main newData={currenEmoji} />
      <Footer />
      <Pagination
        newData={newData}
        lastPage={lastPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        startPage={startPage}
        endPage={endPage}
      />
    </>
  );
}

export default App;

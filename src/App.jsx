import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readTime, setReadTime] = useState(0);

  const handleAddBookmark = blog => {
    const newBookMarks = [...bookmarks, blog];
    setBookmarks(newBookMarks)
    // console.log(blog)
  }

  const handleReadTime = time => {
    const newReadTime = readTime + time;
    setReadTime(newReadTime)
  }

  return (
    <>
    <Header></Header>
    <div className='md:flex'>
      <Blogs handleAddBookmark={handleAddBookmark}
      handleReadTime={handleReadTime}
      ></Blogs>
      <Bookmarks bookmarks={bookmarks}
      readTime={readTime}
      ></Bookmarks>
    </div>
    </>
  )
}

export default App

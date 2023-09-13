import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const handleAddBookmark = blog => {
    const newBookMarks = [...bookmarks, blog];
    setBookmarks(newBookMarks)
    // console.log(blog)
  }

  return (
    <>
    <Header></Header>
    <div className='md:flex'>
      <Blogs handleAddBookmark={handleAddBookmark}></Blogs>
      <Bookmarks bookmarks={bookmarks}></Bookmarks>
    </div>
    </>
  )
}

export default App

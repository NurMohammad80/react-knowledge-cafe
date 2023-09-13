import ProtoType from "prop-types";
import Bookmark from "../Bookmark/Bookmark";
const Bookmarks = ({ bookmarks, readTime }) => {
  return (
    <div className="md:w-1/3 ml-5 mt-10 text-center">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-[#6047EC] px-12 py-5 bg-[#6047ec1a] border-2 rounded-lg">Spent time on read : {readTime} min</h2>
      </div>
      <div className="bg-[#1111110d] p-5 rounded-lg ">
        <h2 className="text-3xl">Bookmarked Blogs: {bookmarks.length}</h2>
        {bookmarks.map((bookmark) => (
          <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>
        ))}
      </div>
    </div>
  );
};
Bookmarks.propTypes = {
  bookmarks: ProtoType.array,
  readTime: ProtoType.number,
};
export default Bookmarks;

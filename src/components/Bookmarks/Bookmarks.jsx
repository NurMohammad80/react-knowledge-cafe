import ProtoType from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({bookmarks}) => {
    return (
        <div className="md:w-1/3 bg-[#1111110d] ml-5 mt-10 p-5 rounded-lg text-center">
            <h2 className="text-3xl">Bookmarked Blogs: {bookmarks.length}</h2> 
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }           
        </div>
    );
};
Bookmarks.propTypes = {
    bookmarks: ProtoType.array
}
export default Bookmarks;
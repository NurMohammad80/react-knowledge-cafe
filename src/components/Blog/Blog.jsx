import PropTypes from 'prop-types';

const Blog = ({ blog }) => {
    console.log(blog)
    const { cover, title, author, author_img, posted_date, reading_time, hashtags } = blog;
    return (
        <div>
            <img className='my-8' src={cover} alt="" />
            <div className='flex justify-between'>
                <div className='flex gap-6'>
                    <img className='w-14' src={author_img} alt="" />
                    <div>
                        <h3 className='text-2xl font-bold'>{author}</h3>
                        <span className='font-semibold'>{posted_date}</span>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                </div>
            </div>
            <h2 className='text-4xl my-4 font-bold'>{title}</h2>
            {
                hashtags.map((hash, idx) => <span className='m-1' key={idx}><a href="">#{hash}</a></span>)
            }
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired
}
export default Blog;
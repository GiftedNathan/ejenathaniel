import Button from '../../components/button/Button'
import { SectionHeader } from '../../components/section-header/SectionHeader'
import './blog.css'

const Blog = ({title, subtitle, note}) => {
    return (
        <div id="blog" className="blog-section bg-gradient-open">
            <SectionHeader title={title} subtitle={subtitle} note={note} />
            <Button name={'Subscribe for letest info!'} />
        </div>
    )
}

Blog.defaultProps = {
    title: 'blog',
    subtitle: ' A blog home made for develpoers',
    note: 'This is comming soon, please be patient. Do not forget to; Subscribe and get my latest blog post in your inbox when the blog is ready.',
}

export default Blog

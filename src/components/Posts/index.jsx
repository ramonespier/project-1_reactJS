import './styles.css'

import { PostCard } from '../PostCard'

export const Posts = ({ posts }) => (
    <div className="posts">
        {posts.map(post => (
            <PostCard
                title={post.title}
                body={post.body}
                key={post.id}
                cover={post.cover}
                id={post.id}
            // post={post}
            />
        ))}

    </div>
)
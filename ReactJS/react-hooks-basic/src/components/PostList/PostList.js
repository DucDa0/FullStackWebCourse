import React from 'react';
import PropTypes from 'prop-types';

PostList.propTypes = {
    posts: PropTypes.array,
};
PostList.defaultProps={
    posts: []
}
function PostList({posts}) {


    return (
        <div>
            <ul>
                {
                    posts.map(post=>(
                        <li key={post.id}>{post.title}</li>
                    ))
                }
            </ul>
        </div>
    );
}

export default PostList;
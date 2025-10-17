export default {
    home: () => "/",

    topicView: (slug = '') => `/topics/${slug}`,

    postCreate: (slug = '') => `/topics/${slug}/posts/new`,

    postView: (slug = '', postId = '') => `/topics/${slug}/posts/${postId}`,
};

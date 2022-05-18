const postData = [
    { id: 1, text: 'My cat is the greatest', react: [0,0,0], comments: ["No my cat is", "I prefer dogs!"]} ,
    { id: 2, text: 'I am too overworked', react: [0,0,0], comments: ["This project has killed me", "I have dreams about code!", "I hate javascript :("]},
    { id: 3, text: 'There are more wheels in the world than doors', react: [0,0,0], comments: ["I disagree there are way more doors", "Have you thought about toy cars?", "Yeah, but advent calenders"]},
];


class Post {
    constructor(data) {
        this.id = data.id;
        this.text = data.text;
        this.react = data.react;
        this.comments = data.comments
    }

    static get all() {
        const anonPost = postData.map((post) => new Post(post));
        return anonPost;
    }

    static findById(id) {
        try {
            const postsData = postData.filter((post) => post.id === id)[0];
            const post = new Post(postsData);
            return post;
        } catch (err) {
            throw new Error('That post does not exist!');
        }
    }

    static create(post) {
        const newPostId = postData.length + 1;
        const newPost = new Post({ id: newPostId, ...post });
        postData.push(newPost);
        return newPost;
    }

    static updateComment(comment, post){
        const array = post
        array.push(comment);
        console.log(array)
        return array
    }

    static updateReact(newreact, react, num){
        
        const reactNum = react //this is the single index
        const newreactnum = newreact
        reactNum[num] = newreactnum
        return reactNum
    }

    destroy() {
        const post = postData.filter((post) => post.id === this.id)[0];
        postData.splice(postData.indexOf(post), 1);
    }
}


module.exports = Post, postData;

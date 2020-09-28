import Route from '@ember/routing/route';

export default class PostRoute extends Route {
    model() {
        return {
            title: "My blog post",
            body: "This is the body of my blog post",
            authors: ["William", "Robert", "Michelle"],
            comments: [
                {
                    name: "Mike Smith",
                    comment: "Thanks for the great post"
                },
                {
                    name: "John Doe",
                    comment: "Nice post!"
                },
                {
                    name: "Jeff Williams",
                    comment: "Good job!"
                },
            ]
        }
    }
}

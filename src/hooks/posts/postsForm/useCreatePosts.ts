import { gql,useMutation } from "@apollo/client";

interface CreatePostInput {
    variables:{
        input: {
            title:string;
            body: string
        }
    }
}

const CREATE_POST = gql`
    mutation CreatePost($input:CreatePostInput!){
        createPost(input: $input){
            id
            title
            body
        }
    }
`


export const useCreatePosts=(): ((
    createPostInput: CreatePostInput
) => any ) => {
    const [createPost] = useMutation(CREATE_POST, {
        update(cache,{data: {createPost} }) {
            cache.modify({
                fields: {
                    posts(existingPost=[]){
                        const newPostRef = cache.writeFragment({
                            data: createPost,
                            fragment: gql`
                            fragment NewPost on Post{
                                id,
                                title,
                                body
                            }
                            `
                        })
                        return [...existingPost,newPostRef]
                    }
                }
            })
        }
    });
    return createPost

}
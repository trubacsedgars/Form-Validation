import {useState, useEffect} from "react";
import axios from "axios";

type Post = {
    userId: number,
    id: number,
    title: string,
    body: string,
}

export const Data = () => {
    const [post, setPost] = useState<Post[]>([])
    const [id, setId] = useState(1)

    useEffect(() => {
        axios.get<Post[]>(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((res) => {
                console.log(res)
                const PostDataList = res.data
                setPost(PostDataList)
            })
            .catch(err => {
                console.log(err)
            })
    }, [id])

    return (
        <div>
            1234
        </div>
    )
}

    // return (
    //     <div>
    //         <input type="text" value={id} onChange={(e) => setId(e.target.valueAsNumber)}/>
    //         {/*{posts.map((post) => (*/}
    //         {/*    <div key={post.id}>*/}
    //         {/*        {post.title}*/}
    //         {/*    </div>*/}
    //         {/*))}*/}
    //     </div>
    // )

    // const axios = require('axios').default;

//     const options = {
//         method: 'GET',
//         url: 'https://jsonplaceholder.typicode.com/posts',
//         params: {
//             userId: '',
//             id: '',
//             title: '',
//             body: ''
//         },
//         headers: {
//             'x-rapidapi-host': 'jokeapi-v2.p.rapidapi.com',
//             'x-rapidapi-key': 'SIGN-UP-FOR-KEY'
//         }
//     };
//
//     axios.request(options).then(function (response) {
//         console.log(response.data);
//     }).catch(function (error) {
//         console.error(error);
//     });
// }
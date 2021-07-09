// REDUCERS
/* 
1. Accepts 'state' and 'action'
2. Changes based on action.type
3. 'State' is 'posts' bc reducer for posts
4. State must always be something - set as array
*/

export default (posts = [], action) => {
    switch (action.type){
        case 'FETCH_ALL':
            return action.payload;  //return posts
        case 'CREATE':
            return posts;
        default:
            return posts;
    }
}
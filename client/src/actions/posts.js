import * as api from '../api';

// Action Creators - functions that return actions
export const getPosts = () => async (dispatch) => {   //collecting all posts will take some time - async => redux thunk necessary
    try{
        const { data } = await api.fetchPosts(); //getting response from api, storing in 'data' object. 'Data' represents the posts
        
        dispatch({type: 'FETCH_ALL', payload: data});   //dispatch action instead of returning
    }
    catch (error){
        console.log(error.message);
    }
    
    
    const action = {type: 'FETCH_ALL', payload: []} //actions must have 'type' property, 'payload' holds data

    
}
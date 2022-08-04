import {configureStore} from '@reduxjs/toolkit'
import PostSlice from '../action/PostSlice'

export default configureStore({
    reducer:{
        posts: PostSlice,
    }
})
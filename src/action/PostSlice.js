import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
import { API_URL } from '../utils/Constant'

export const AuthLogin  = createAsyncThunk("postLogin", async(data)=>{
    const param = {
        "email": data.email,
        "password": data.password
    }
    const respon = await axios({
        method: "post",
        url: API_URL+"login",
        data:param
    })
    return respon.data;
})

export const GetProduct = createAsyncThunk("GetProducts", async(data)=>{
    const respon = await axios({
        method:"get",
        url: API_URL+"products",
        headers:{
            Authorization: `Bearer ${data}`
         }
    })
    return respon.data;
})



const AuthLoginReducer = createSlice({
    name:'authLogin',
    initialState:{
        isLoading: false,
        isError:null,
        data:null,

        ProductLoading: false,
        productError: null,
        productsData: null,

    },
    extraReducers:{
        [AuthLogin.pending]: (state)=>{
            state.isLoading = true;
        },
        [AuthLogin.fulfilled]: (state, action)=>{
            state.isLoading = false;
            state.data= action.payload
        },
        [AuthLogin.rejected]: (state, action)=>{
            state.isLoading = false;
            state.isError = action.error;
        },
        [GetProduct.pending]:(state)=>{
            state.ProductLoading = true;
        },
        [GetProduct.fulfilled]:(state, action)=>{
            state.ProductLoading = false;
            state.productsData = action.payload
        },
        [GetProduct.rejected]: (state, action)=>{
            state.ProductLoading = false;
            state.productError = action.error
        }
    }
})
export default AuthLoginReducer.reducer
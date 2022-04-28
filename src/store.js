import {configureStore} from '@reduxjs/toolkit'
import gallerySlice from './galleryState'

const store =  configureStore({
    reducer:{
        recipes:gallerySlice.reducer
    }
})

export default store
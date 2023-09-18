import { configureStore } from "@reduxjs/toolkit";

import authReducer   from "./auth";
import  articlesReducer  from "./articles";

export default configureStore({
    reducer:{
        auth:authReducer,
        articles:articlesReducer,
    }
})
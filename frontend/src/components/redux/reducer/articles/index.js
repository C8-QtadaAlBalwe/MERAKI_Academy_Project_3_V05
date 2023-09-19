import { createSlice } from "@reduxjs/toolkit";

export const articles = createSlice({
  name: "articles",
  initialState: {
    articles: [],
  },
  reducers: {
    setArticles: (state, action) => {
      state.articles = action.payload;
    },
    addArticle: (state, action) => {
      state.articles.push(action.payload);
    },
    updateArticleById: (state, action) => {
      state.articles = state.articles.map((ele,i)=>{
        if(ele.id === action.payload.id){
        ele.title = action.payload.title
        ele.description = action.payload.description
        }
        return ele
    })
    },
    deleteArticleById: (state, action) => {
      state.articles = state.articles.filter((article)=>  article.id !== action.payload);
    },
    setComments: (state, action) => {
     state.articles[action.payload.article_id].comments = action.payload.comments
    },
    addComment: (state, action) => {
      //         Add the new comment to a specific article comments array
      // payload: { new comment, article_id }
    },
  },
});
export const {
  setArticles,
  addArticle,
  updateArticleById,
  deleteArticleById,
  setComments,
  addComment,
} = articles.actions;
export default articles.reducer;

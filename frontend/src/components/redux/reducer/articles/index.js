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
      // Updates an article in the articles state
      // payload: updatedArticl
    },
    deleteArticleById: (state, action) => {
      // Deletes the article from the articles state
      // payload: id
    },
    setComments: (state, action) => {
      // article _id
      // payload: { array of comments, article_id
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
export default articlesSlice.reducer;

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { RouterProvider, createBrowserRouter, redirect } from 'react-router-dom';
import SignUp, { action as signUpAction } from './routes/SignUp.tsx';
import SignIn, { action as signInAction } from './routes/SignIn.tsx';
import Index, { loader as indexLoader } from './routes/index.tsx';
import auth from './lib/auth.ts';
import CreatePost from './routes/CreatePost.tsx';
import { action as createPostAction } from './routes/CreatePost.actions.ts';
import RequireAuth from './components/RequireAuth.tsx';
import ShowPost, { loader as showPostLoader } from './routes/ShowPost.tsx';
import { action as createCommentAction } from './components/CommentForm.tsx';
import { action as voteAction } from './components/Vote.tsx';
import { action as deletePostAction } from "./components/DeletePost";
import { action as deleteCommentAction } from "./components/DeleteComment";
import UpdatePost, { action as updatePostAction } from "./routes/UpdatePost.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        loader: indexLoader,
        element: <Index />,
      },
      {
        path: "posts",
        action: () => {
          return redirect("/");
        },
      },
      {
        path: "sign-up",
        action: signUpAction,
        element: <SignUp />
      },
      {
        path: "sign-in",
        action: signInAction,
        element: <SignIn />
      },
      {
        index: true,
        loader: indexLoader,
        element: <Index />
      },
      {
        path: "/posts/:id",
        loader: showPostLoader,
        element: <ShowPost />
      },
      {
        path: "sign-out",
        action: () => {
          auth.signOut();
          return redirect('/')
        }
      },
      {
        element: <RequireAuth />,
        children: [
          {
            path: "create-post",
            action: createPostAction,
            element: <CreatePost />
          },
          {
            path: "/posts/:postId/comments",
            action: createCommentAction
          },
          {
            path: "/posts/:postId/vote",
            action: voteAction
          },
          {
            path: "/posts/:postId/delete-post",
            action: deletePostAction,
          },
          {
            path: "/posts/:postId/comments/:commentId/delete-comment",
            action: deleteCommentAction,
          },
          {
            path: "/posts/:id/update",
            action: updatePostAction,
            element: <UpdatePost />,
          },
        ]
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
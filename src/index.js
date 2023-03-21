import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Toaster } from "react-hot-toast";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import AuthProvider from "./context/AuthProvider/AuthProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
   <React.StrictMode>
      <Toaster position="top-right" />
      <QueryClientProvider client={queryClient}>
         <AuthProvider>
            <Provider store={store}>
               <App />
            </Provider>
         </AuthProvider>
      </QueryClientProvider>
   </React.StrictMode>
);

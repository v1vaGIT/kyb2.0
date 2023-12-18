import React, {createContext} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import ViewerStore from "./entities/viewer/model/store";
import {BrowserRouter} from "react-router-dom";

interface State {
    viewerStore: ViewerStore
}

export const viewerStore = new ViewerStore();

export const Context = createContext<State>({
    viewerStore,
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <Context.Provider value={{
          viewerStore
      }}>
          <BrowserRouter>
              <App />
          </BrowserRouter>
      </Context.Provider>
  </React.StrictMode>,
)

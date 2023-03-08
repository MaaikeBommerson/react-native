import {BrowserRouter, Routes, Route } from "react-router-dom"
import Menu from "./views/Menu"
import Home from "./views/Home"
import Blog from "./views/Blog"
import Contact from "./views/Contact"
import Path from "./views/Path"

import NotFound from "./views/NotFound"

const App = () => {
    return(
       <BrowserRouter>
          <Routes>
           <Route path="/" element={<Menu />}>
                <Route index element={<Home />} />
                <Route path="blog" element={<Blog />} />
                <Route path="contact" element={<Contact />} />
                <Route path="/data/:slug/:id" element={<Path />} />
                <Route path="*" element={<NotFound />} />
            </Route>
         </Routes>
       </BrowserRouter>
    )
}

export default App
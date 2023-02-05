import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Layout } from "./components/Layout";
import { Nyinflyttad } from "./components/Nyinflyttad";
import { Dokument } from "./components/Dokument";
import { RundanBladet } from "./components/RundanBladet";
import { NotFound } from "./components/Notfound";
import { Kontakt } from "./components/Kontakt";
import { SinglePost } from "./components/SinglePost";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path="/nyinflyttad" element={<Nyinflyttad />}></Route>
            <Route path="/kontakt" element={<Kontakt />}></Route>
            <Route path="/dokument" element={<Dokument />}></Route>
            <Route path="/rundanbladet" element={<RundanBladet />}></Route>
            <Route path="*" element={<NotFound />}></Route>
            <Route path="/post/:slug" element={<SinglePost />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

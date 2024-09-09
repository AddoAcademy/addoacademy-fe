import { BrowserRouter, Outlet, Route, Routes,useLocation } from "react-router-dom";
import { Home } from "./components/pages/home/home";
import { LogIn } from "./components/pages/login/login";
import { SignUp } from "./components/pages/signup/signup";
import { Toolbox } from "./components/pages/tool-box/tool-box";
import { Mentor } from "./components/pages/mentorship/mentor";
import { Masterclasses } from "./components/pages/masterclasses/masterclasses";
import { useEffect } from "react";
import { VideoTraning } from "./components/pages/video-traning/video-traning";

function Root() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return <Outlet />;
}


export function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="toolbox" element={<Toolbox />} />
          <Route path="mentorship" element={<Mentor />} />
          <Route path="masterclasses" element={<Masterclasses />} />
          <Route path="video-traning" element={<VideoTraning />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )

}


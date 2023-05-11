import { Link, Route, Routes } from "react-router-dom";

import "../styles/index.scss";

import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { Suspense } from "react";
import { useTheme } from "app/providers";
import { classNames } from "shared/lib/classNames/classNames";

export const App: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <div>
        <Link to={"/"}>Go to main</Link>
        <Link to={"/about"}>Go to About</Link>
      </div>
      <div>
        <button onClick={toggleTheme}>Toggle theme</button>
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/about' element={<AboutPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

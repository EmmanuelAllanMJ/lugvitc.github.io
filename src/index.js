import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Routes, Route, Outlet } from "react-router-dom";

import "./styles/colors.css";
import "./styles/index.css";
import "./styles/forms.css";

import App from "./App";
import Home from "./pages/home";
import Events from "./pages/events/events";
import LearnLinux from "./pages/learnLinux/learnLinux";
import UserForm from "./pages/recruitment_2022_v2/recruitment";
import RescueTux2022Routes from "./pages/rescueTux2022/routes";

const pages = [
  {
    title: "Home",
    link: "/",
    component: <Home />,
  },
  {
    title: "Events",
    link: "/events",
    component: <Events />,
  },
  {
    title: "Learn Linux",
    link: "/learn-linux",
    component: <LearnLinux />,
  },
  {
    title: "Recruitment 2022",
    link: "/recruitment",
    component: <UserForm step={0} />,
  },
  //{
  //    title: 'Rescue Tux',
  //    link: '/rescue-tux',
  //    path: '/rescue-tux/*',
  //    component: <RescueTux2022Routes />
  //}
  //, {
  //     title: 'Recruitment 2022',
  //     link: '/recruitment',
  //     component: <UserForm />
  // }
];

ReactDOM.render(
  <React.StrictMode>
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route
          path="/"
          element={
            <App pages={pages}>
              <Outlet />
            </App>
          }
        >
          {pages.map((page, index) =>
            page.link === "/" ? (
              <Route key={index} index element={page.component} />
            ) : (
              <Route
                key={index}
                path={page.path || page.link}
                element={page.component}
              />
            )
          )}
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

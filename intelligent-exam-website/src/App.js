import React, { useState, useEffect } from "react";
import { renderHomePage } from "./pages/home";
import { renderLoginPage } from "./pages/login";
import { renderProfilePage } from "./pages/profile";
import { renderAdminPage } from "./pages/admin";
import { renderExamPage } from "./pages/exam";
import { renderResultsPage } from "./pages/results";
import { setupExamPageEvents } from "./pages/exam";
import { setupLoginPageEvents } from "./pages/login";
import { setupProfilePageEvents } from "./pages/profile";
import { renderRegisterPage } from "./pages/register";
import { setupRegisterPageEvents } from "./pages/register";
import './App.css';

const pageMap = {
  home: renderHomePage,
  login: renderLoginPage,
  profile: renderProfilePage,
  admin: renderAdminPage,
  exam: renderExamPage,
  results: renderResultsPage,
  register: renderRegisterPage,
};

const setupMap = {
  login: setupLoginPageEvents,
  profile: setupProfilePageEvents,
  exam: setupExamPageEvents,
  register: setupRegisterPageEvents,
};

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  useEffect(() => {
    if (setupMap[currentPage]) {
      setupMap[currentPage]();
    }

    const handler = (e) => {
      const btn = e.target.closest("button[data-page]");
      if (btn) {
        const page = btn.getAttribute("data-page");
        if (page && pageMap[page]) {
          e.preventDefault();
          setCurrentPage(page);
        }
      }
    };

    const navHandler = (e) => {
      const newPage = e.detail?.page;
      if (newPage && pageMap[newPage]) {
        setCurrentPage(newPage);
      }
    };

    document.addEventListener("click", handler);
    window.addEventListener("navigate", navHandler);

    return () => {
      document.removeEventListener("click", handler);
      window.removeEventListener("navigate", navHandler);
    };
  }, [currentPage]);

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: pageMap[currentPage]() }} />
    </div>
  );
}

export default App;

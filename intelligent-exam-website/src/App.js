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
import './App.css';

const pageMap = {
  home: renderHomePage,
  login: renderLoginPage,
  profile: renderProfilePage,
  admin: renderAdminPage,
  exam: renderExamPage,
  results: renderResultsPage,
};

const setupMap = {
  login: setupLoginPageEvents,
  profile: setupProfilePageEvents,
  exam: setupExamPageEvents,
};

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  useEffect(() => {
    if (setupMap[currentPage]) {
      setupMap[currentPage]();
    }
    // Delegate navigation for all buttons with data-page attribute
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
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, [currentPage]);

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: pageMap[currentPage]() }} />
    </div>
  );
}

export default App;

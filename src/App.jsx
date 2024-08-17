import { useState } from 'react';

import Header from './components/Header';
import { ThemeMode } from './components/ToggleTheme';
import Footer from './components/Footer';
import Quiz from "./components/Quiz.jsx";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import { CategoryContext } from "./contexts/CategoryContext.jsx";
import CategorySelection from "./components/CategorySelection.jsx";

import { Analytics } from "@vercel/analytics/react";


function App() {
  const [selectedCategory, setSelectedCategory] = useState('');

  return (
    <div className={ThemeMode() ? "dark" : ""}>
      <CategoryContext.Provider value={{ selectedCategory, setSelectedCategory }}>
        <div className="flex flex-col min-h-screen bg-neutral-100 dark:bg-neutral-900">
          <main className="flex-grow lg:px-10 xl:px-16 2xl:px-20 font-quicksand font-smooth-antialiased">
            <Header />

            {selectedCategory ? <Quiz /> : <CategorySelection />}

          </main>
          <Footer />
        </div>
        <Analytics />
      </CategoryContext.Provider>
    </div>
  );
}

export default App;

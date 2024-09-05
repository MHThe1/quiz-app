import { useContext } from "react";
import ToggleTheme from "./ToggleTheme";
import { CategoryContext } from "../contexts/CategoryContext.jsx";
import Categories from "./Categories.jsx";

export default function Header() {
  const { selectedCategory } = useContext(CategoryContext);

  const categoryName =
    selectedCategory && Categories[selectedCategory]
      ? Categories[selectedCategory].name
      : "";

  return (
    <nav className="relative container mx-auto p-4 bg-gray-100 dark:bg-stone-900 shadow-md flex flex-col md:flex-row items-center justify-between">
      <div className="md:flex-1 text-center md:text-left mb-2 md:mb-0">
        <h1 className="font-friends text-xl font-semibold dark:text-white">
          <button
            onClick={() => window.location.reload()}
            className="focus:outline-none"
          >
            The QUIZZER
          </button>
        </h1>
      </div>
      <div className="flex-1 text-center mb-2 md:mb-0">
        <span className="font-sf font-bold text-2xl dark:text-white text-black mb-2 md:mb-0 text-center">
          {categoryName}
        </span>
      </div>

      <div className="md:flex-1 text-center md:text-right md:relative absolute top-4 right-4 md:top-0 md:right-0">
        <ToggleTheme />
      </div>
    </nav>
  );
}

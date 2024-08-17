import { useContext } from "react";
import ToggleTheme from "./ToggleTheme";
import { CategoryContext } from "../contexts/CategoryContext.jsx";
import Categories from "./Categories.jsx";

export default function Header() {
    const { selectedCategory } = useContext(CategoryContext);

    const categoryName = selectedCategory && Categories[selectedCategory]
        ? Categories[selectedCategory].name
        : '';

    return (
        <nav className="relative container flex flex-col md:flex-row items-center justify-between p-4">
            <h1 className="font-friends text-xl font-semibold dark:text-white text-center mb-2 md:mb-0">
                <button
                    onClick={() => window.location.reload()}
                    className="focus:outline-none"
                >
                    The QUIZZER
                </button>
            </h1>
            <span className="font-sf font-bold text-2xl dark:text-white text-black mb-2 md:mb-0 text-center">
                {categoryName}
            </span>
            <div className="mb-2 md:mb-0">
                <ToggleTheme />
            </div>
        </nav>
    );
}

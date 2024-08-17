import React, { useContext } from 'react';
import { CategoryContext } from '../contexts/CategoryContext';
import Categories from './Categories.jsx';

export default function CategorySelection() {
    const { selectedCategory, setSelectedCategory } = useContext(CategoryContext);

    const handleCategoryClick = (categoryKey) => {
        setSelectedCategory(categoryKey);
    };

    const categoriesArray = Object.entries(Categories);

    return (
        <section className="max-w-[85rem] mx-auto my-8 p-4 border-2 border-[#0d373e] rounded-md">
            <h2 className="font-quicksand text-center font-bold text-xl text-cyan-700 dark:text-cyan-400">Quiz Categories</h2>
            {categoriesArray.length > 0 && (
                <ul className="max-w-[80rem] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mx-auto my-8 p-1 list-none">
                    {categoriesArray.map(([categoryKey, categoryValue], index) => (
                        <li
                            key={index}
                            className="relative flex flex-col bg-[#1f1c2c] rounded-md shadow-[0_0.5rem_1rem_rgba(0,0,0,0.15)] 
              animate-[slide-up-fade-in_0.3s_ease-out_forwards] 
              hover:shadow-[0_0_8px_4px_rgba(255,217,0,0.6)] hover:rounded-md 
              even:hover:-rotate-6 odd:hover:rotate-6 transition-transform duration-300">
                            <button
                                className="bg-transparent border-none object-fill p-0 transition-all ease-in-out duration-200"
                                onClick={() => handleCategoryClick(categoryKey)}>
                                <img
                                    className="w-full h-full object-fill rounded-md"
                                    src={categoryValue.image} alt={categoryValue.alt} />
                                <h3
                                    className="font-raleway font-normal text-0.9rem absolute bottom-0 right-4 mb-4 text-stone-950 bg-[#feee86] rounded-md p-0.5 shadow-[0_1px_4px_rgba(0,0,0,0.4)]">
                                    {categoryValue.name}
                                </h3>
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
}

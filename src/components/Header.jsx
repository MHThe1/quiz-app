import ToggleTheme from "./ToggleTheme";

export default function Header() {
    return (
        <nav className="py-4 md:py-8 flex flex-col md:flex-row items-center">
            <h1 className="font-friends text-xl font-semibold dark:text-white text-center mb-2 md:mb-0">
                F.R.I.E.N.D.S. QUIZ
            </h1>
            <span className="font-friends justify-self-center text-blue-600 text-center mb-2 md:mb-0 mx-auto">
                How You Doin?
            </span>
            <span className="justify-self-end">

            </span>
            <div className="absolute top-4 right-4 2xl:px-36">
                <ToggleTheme />
            </div>
        </nav>
    );
}

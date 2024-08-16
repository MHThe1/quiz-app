import ToggleTheme from "./ToggleTheme"

export default function Header() {
    return(
        <nav className="grid grid-cols-3 p-8 items-center">
          <h1 className="font-friends text-xl font-semibold dark:text-white ">F.R.I.E.N.D.S. QUIZ</h1>
          <span className="font-friends justify-self-center text-blue-600">
            How You Doin?
          </span>
          <ToggleTheme />
        </nav>
    )
}
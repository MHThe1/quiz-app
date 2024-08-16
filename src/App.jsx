import Header from './components/Header';
import { ThemeMode } from './components/ToggleTheme';
import Footer from './components/Footer';

import Quiz from "./components/Quiz.jsx";


function App() {

  return (
    <div className={ThemeMode() ? "dark" : ""}>
      <main className="lg:px-10 xl:px-16 2xl:px-20 font-quicksand font-smooth-antialiased flex min-h-screen flex-col bg-neutral-100 dark:bg-neutral-900">
        <Header />

        <Quiz />

        <Footer />
      </main>
    </div>
  )
}

export default App

import Header from './components/Header';
import { ThemeMode } from './components/ToggleTheme';
import Footer from './components/Footer';
import Quiz from "./components/Quiz.jsx";

function App() {
  return (
    <div className={ThemeMode() ? "dark" : ""}>
      <div className="flex flex-col min-h-screen bg-neutral-100 dark:bg-neutral-900">
        <main className="flex-grow lg:px-10 xl:px-16 2xl:px-20 font-quicksand font-smooth-antialiased">
          <Header />
          <Quiz />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;

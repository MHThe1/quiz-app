import Header from './components/Header';
import { ThemeMode } from './components/ToggleTheme';
import Footer from './components/Footer';


function App() {

  return (
    <div className={ThemeMode() ? "dark" : ""}>
      <main className="font-quicksand font-smooth-antialiased flex min-h-screen flex-col bg-neutral-100 dark:bg-neutral-900">
        <Header />

        <Footer />
      </main>
    </div>
  )
}

export default App

import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { ThemeProvider } from "./contexts/ThemeContext";

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 dark:from-gray-100 dark:via-gray-50 dark:to-white text-gray-100 dark:text-gray-800 flex flex-col">
        <Navbar />

        <main className="flex-1">
          <Home />
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  );
}

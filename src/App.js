import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Feed } from "./components/Feed";
import { GlobalProvider } from "./context/GlobalState";

function App() {
    return (
        <GlobalProvider>
            <div className="App">
                <Header />
                <Feed />
                <Footer />
            </div>
        </GlobalProvider>
    );
}

export default App;

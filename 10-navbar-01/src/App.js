import Layout from "./components/Layout.jsx";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import New from "./pages/New";

function App() {
    return (
        <Layout>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
                <Route path="/products">
                    <Products />
                </Route>
                <Route path="/new">
                    <New />
                </Route>
            </Switch>
        </Layout>
    );
}

export default App;

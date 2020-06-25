import { FunctionalComponent, h } from "preact";
import { Route, Router, route } from "preact-router";
import { useEffect } from "preact/hooks";
import Cookies from "js-cookie";

import Home from "../routes/home";
import Main from "../routes/main";


// eslint-disable-next-line @typescript-eslint/no-explicit-any
if ((module as any).hot) {
    // tslint:disable-next-line:no-var-requires
    require("preact/debug");
}

const App: FunctionalComponent = () => {
    useEffect(() => {
        route(Cookies.get("apikey") ? "/main" : "/");
    }, []);

    const handleRoute = (): void => {
        if (!Cookies.get("apikey")) {
            route("/");
        }
    };

    return (
        <div id="app" onChange={handleRoute}>
            <Router>
                <Route default path="/" component={Home} />
                <Route path="/main" component={Main} />
            </Router>
        </div>
    );
};

export default App;

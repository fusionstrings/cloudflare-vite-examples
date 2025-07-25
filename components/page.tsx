import {
    LocationProvider,
    Router,
    Route,
} from "preact-iso";
import { Home } from "./home";
import { NotFound } from "./404";

function Page() {
    return (
        <LocationProvider>
            <main>
                <Router>
                    <Route path="/" component={Home} />
                    <Route default component={NotFound} />
                </Router>
            </main>
        </LocationProvider>
    );
}

export { Page }
import { useState } from "react";
import ReactDOM from "react-dom/client";

function Component1({ ty }) {
    const [user, setUser] = useState("Jesse Hall");

    return (
        <>
            <h2>{`hi ${ty} ;`}</h2>
            <h1>{`Hello ${user}!`}</h1>
            <Component2 user={user} />
        </>
    );
}

function Component2({ us }) {
    return (
        <>
            <h1>Component 2</h1>
            <Component3 user={us} />
        </>
    );
}

function Component3({ us }) {
    return (
        <>
            <h1>Component 3</h1>
            <Component4 user={us} />
        </>
    );
}

function Component4({ us }) {
    return (
        <>
            <h1>Component 4</h1>
            <Component5 user={us} />
        </>
    );
}

function Component5({ us }) {
    return (
        <>
            <h1>Component 5</h1>
            <h2>{`Hello ${us} again!`}</h2>
        </>
    );
}
const st=1;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Component1 ty={st} />);

import React from 'react';
import ReactDOM from 'react-dom/client';

function Car(props) {
    return <li>I am a { props.brand }</li>;
}

function Garage() {
    const cars = [
        {id: 1, brand: 'Ford'},
        {id: 2, brand: 'BMW'},
        {id: 3, brand: 'Audi'}
    ];
    return (
        <>
            <h1>Who lives in my garage?</h1>
            <ul>
                {cars.map((item) => <Car key={item.id} brand={item.brand} />)}
            </ul>
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage />);
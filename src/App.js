import './App.css';
import {getBooks, getListOfRestEndPoint} from './api/anapioficeandfire'
import {useState, useEffect} from "react";

function App() {
    const [list, setList] = useState([]); 

    useEffect(() => {
        getBooks().then(data => {
            setList(data.entity); 
        })
    }, []);

    return (
        <div className="app">
            <section className="app-main">
                <h1>
                    <a
                        className="app-link"
                        href="https://www.anapioficeandfire.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn An API of Ice And Fire
                    </a>
                </h1>
                <ul className="app-list">
                    {}
                    {Array.isArray(list) && list.map((book, index) => (
                        <li className="app-list-item" key={book.isbn || index}>
                            {}
                            <b>{book.name}</b>: {book.numberOfPages} сторінок
                            
                            {}
                            <a 
                                className="app-link"
                                href={book.url}
                                target="_blank"
                                rel="noopener noreferrer"
                            > (Деталі)</a>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
}

export default App;
import React from "react";
import ReactDOM  from "react-dom";

const App = () => {
    return (
        <div className = "ui container comments">
            <div className= "commment">
                <a href="/" className="avatar">
                    <img alt="avatar"/>
                </a>
                <div className="content">
                    <a href="/" className="author">
                        Samuel
                    </a>
                    <div className="metadata">
                        <span className="date">
                            Hoy a las 6:00PM
                        </span>
                    </div>
                    <div className="text">
                        Buena publicacion de tu blog
                    </div>
                </div>
            </div>
        </div>
    );
}

ReactDOM.render(<App/>, document.querySelector('#root'));

import React from "react";

export const Loader = () => {
    return (
        <div className="loader_view">
            <div className="loader book">
                <figure className="page"></figure>
                <figure className="page"></figure>
                <figure className="page"></figure>
            </div>
            <h1>Wczytywanie</h1>
        </div>
    )
}
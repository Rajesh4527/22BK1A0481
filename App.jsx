import React from "react";
import {createRoot} from "react-dom/client";
const root= createRoot(document.getByElementsId("root"));
function App(){
    return(
        
        <>
        <main>
        <h1>URL Shortner web app</h1>     

        </main>
        </>
    );

}
root.render(App)
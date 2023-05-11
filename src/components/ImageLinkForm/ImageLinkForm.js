import React from "react";
import './ImageLinkForm.css';

const ImageLinkForm = ({onInputChange}) =>{
    return(
        <div>
            <p className="f3">
                This site will detect faces in your pictures. Give it a try.
            </p>
           <div className="center">
                <div className="form .pattern-grid-lg center pa4 br3 shadow-1">
                    <input className="f4 pa2 fn w-75" type="text" onChange={onInputChange}></input>
                    <button className="fn w-25 grow f4 link ph3 pv2 dib white bg-purple ">Detect</button>
                </div>
            </div>
        </div>
    );
} 
export default ImageLinkForm;
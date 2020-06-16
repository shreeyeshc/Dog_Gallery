import React from "react";

function BreedSelect(props) {
    return(
        <label>
        Select Breed:
            <select
                name="Breeds"
                id="breedsSelect"
                onChange={props.selectOnChange}
                defaultValue={"none"}>
                <option value="husky/">Husky</option>
                <option value="retriever/golden/">Golden Retriever</option>
                <option value="terrier/american/">American Terrier</option>
            </select>
      </label>
    )
};


export default BreedSelect;

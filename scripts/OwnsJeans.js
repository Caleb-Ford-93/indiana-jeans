import { setOwnsBlueJeans } from "./TransientState.js"

export const OwnsJeans = () => {

    document.addEventListener("change", handleOwnershipChange)
    
    let jeansOwnershipHTML = `<h2>Do you own a pair of jeans?</h2>`
    jeansOwnershipHTML += `<input type="radio" name="ownsJeans" value="true" /> Yes`
    jeansOwnershipHTML += `<input type="radio" name="ownsJeans" value="false" /> No`
    return jeansOwnershipHTML
}

const handleOwnershipChange = (changeEvent) => {
    if (changeEvent.target.name === "ownsJeans") {
        const convertedToBoolean = JSON.parse(changeEvent.target.value)
        setOwnsBlueJeans(convertedToBoolean)
    }
}
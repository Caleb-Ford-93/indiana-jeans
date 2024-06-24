import { setSocioLocationId } from "./TransientState.js"

export const WhatLocationYouLiveIn = async () => {

    document.addEventListener("change", handleLocationChange)

    const response = await fetch ("http://localhost:8088/socioLocations")
    const locations = await response.json()

   const locationHTML = locations.map((location) => {
        return `<input type="radio" name="location" value="${location.id}" />${location.label}`
   })
        
    
    return locationHTML.join("")
}

const handleLocationChange = (changeEvent) => {
    if(changeEvent.target.name === "location") {
        const convertedToInt = parseInt(changeEvent.target.value)
        setSocioLocationId(convertedToInt)
    }
}
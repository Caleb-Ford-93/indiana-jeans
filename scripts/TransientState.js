// Set up the transient state data structure and provide initial values

const transientState = new Map()
    transientState.set("ownsBlueJeans", true)
    transientState.set("socioLocationId", 0)


// Functions to modify each property of transient state

export const setOwnsBlueJeans = (chosenOwnership) => {
    transientState.set("ownsBlueJeans", chosenOwnership)
}

export const setSocioLocationId = (chosenLocation) => {
    transientState.set("socioLocationId", chosenLocation)
}


// Function to convert transient state to permanent state

export const saveSurveySubmission = async () => {
    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(Object.fromEntries(transientState))
    }

    const response = await fetch("http://localhost:8088/submissions", postOptions)

    const creationEvent = new CustomEvent("newSubmissionCreated")
    document.dispatchEvent(creationEvent)
}
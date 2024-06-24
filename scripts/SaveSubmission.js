import { saveSurveySubmission } from "./TransientState.js"



const handleSurveySubmit = (clickEvent) => {
    if (clickEvent.target.id === "saveSubmission") {
        
        saveSurveySubmission()
    }
}

export const SubmitButton = () => {

    document.addEventListener("click", handleSurveySubmit)
    
    return `
    <h2>Please check your answers, then click the button below.</h2>
    <button id="saveSubmission">Submit Survey</button>`
}
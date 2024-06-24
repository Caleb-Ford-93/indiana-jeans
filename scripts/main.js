import { WhatLocationYouLiveIn } from "./Location.js"
import { OwnsJeans } from "./OwnsJeans.js"
import { SubmitButton } from "./SaveSubmission.js"
import { SubmissionList } from "./Submissions.js"

const container = document.querySelector("#container")

const render = async () => {
    const jeansOwnershipHTML = OwnsJeans()
    const locationHTML = await WhatLocationYouLiveIn()
    const buttonHTML = SubmitButton()
    const submissionHTML = await SubmissionList()
    container.innerHTML = `
        ${jeansOwnershipHTML}
        <h2>What best describes the area you live in?</h2>
        ${locationHTML}
        ${buttonHTML}
        <h2>Previous Submissions</h2>
        ${submissionHTML}
        `
}

document.addEventListener("newSubmissionCreated", render)

render()
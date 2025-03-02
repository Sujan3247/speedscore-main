# SpeedScore

This repository contains the code for SpeedScore, a single page web application that supports the sport of speedgolf by allowing users to

-   log and analyze their speedgolf rounds
-   share and discuss their speedgolf rounds with other speedgolfers
-   add detailed golf, running, and topographical data on speedgolf-friendly to SpeedScore's course database

SpeedScore is implemented in HTML, CSS, and JavaScript. It presently stores all app data locally in `localStorage`. In the future, it will also store app data in a cloud-based database.

To run SpeedScore from Visual Studio Code, type
`npm run start`
in the terminal.

## Reflection Task 1

During the implementation of this warmup task, I focused on understanding the existing code structure and making minimal, effective changes. My approach involved:

1. **Understanding the Problem Statement**  
   Before coding, I reviewed the requirements and identified the key functionalities needed.

2. **Incremental Development**  
   I implemented the solution in small steps, testing each part to ensure correctness before moving forward.

3. **Debugging & Testing**  
   Using Playwright’s debugging tools, I verified the login functionality and the interaction with the "About" modal.

4. **Challenges & Learnings**  
   - The **side menu interaction** was tricky because the "About" option was not directly visible until opening the menu.  
   - The **login process** required ensuring the input fields were fully loaded before filling in credentials.
   - I learned how to effectively use **Playwright selectors** and `waitForSelector()` for stable test execution.

Overall, this task reinforced my ability to work with end-to-end testing frameworks and handle UI interactions effectively.

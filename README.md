# SQA Team 6

## Project description

Our application is an online converter between RGB colour codes and HEX colour codes. It can be accessed on any web browser, users can submit RGB colour values in the provided text fields, click the &#39;Convert&#39; button and the HEX value will be immediately displayed on the screen. The HEX colour will also be displayed in the colour box, next to the value

**UI Design**

**Initial design:**

<img width="551" alt="Screenshot 2021-12-14 at 22 07 12" src="https://user-images.githubusercontent.com/48920813/146086255-b4d8c001-2563-4932-8555-6341c6dd964f.png">

**Improved design on the later iterations:**

<img width="608" alt="Screenshot 2021-12-14 at 22 09 08" src="https://user-images.githubusercontent.com/48920813/146086427-ac28c8a5-ce1c-4fb9-9813-6dae15eed8f3.png">

## Team roles

[Yulia Pichugina](mailto:yulia.pichugina@ada.ac.uk) - Project Manager/Scrum Master

[Steven Johnstone](mailto:steven.johnstone@ada.ac.uk) - Developer/QA

[Zachary Molony](mailto:zachary.molony@ada.ac.uk) - Developer/QA

Team google meet link:
https://meet.google.com/hzd-ccia-wgg

## Ceremonies

- Initial planning/refinement meeting to set the project requirements and define the tasks.
- Standups every 3 days to check the progress.
- Team UAT at the end of the project to complete manual e2e testing.

## Tools

_Github_ - Source control, Project management, code hosting, CI pipeline

_Netlify_ - QA Environment hosting, CD pipeline

_Barecheck_ - Code coverage checker

_React_ - Frontend Framework

_Bulma_ - FE Styling

_Jest_ - Unit testing framework

_Puppeteer_ - Automated UI testing library

_Eslint/Prettier_ - Code formatter

## Coding Best Practises

1. Adhere to the React style guide: [https://react-styleguidist.js.org/](https://react-styleguidist.js.org/)
2. Don&#39;t reinvent the wheel; there may already be an existing solution to the problem you are trying to solve.
3. Make sure your code is readable - whilst efficiency and optimisation is important, it is also vital that other developers can understand your code.
4. Use ESLint to resolve any errors in the static code
5. Stay DRY - don&#39;t repeat yourself! Repetitive tasks should be automated, so you should never repeat code.
6. Test your code and respond to errors - don&#39;t just assume the happy path, your code should anticipate and deal with errors.
7. Limit your line length - long lines are hard to read and understand. Also limit the length of functions for the same reason.
8. Consistency is key - ensure that variable names and code structure are consistent with the existing codebase.
9. Avoid hard-coding - where possible, never hard code any values, other than constants. This is a bad habit and can make its way into production code.
10. Keep it simple - complex code increases the likelihood of bugs and mistakes.
11. Use descriptive names - think about what you&#39;re trying to accomplish with the code and name it appropriately.
12. Comment and document the code - explain what functions do and any possible errors or exceptions.
13. Collaborate - you are part of a team, all sharing a common goal. Share your progress and ideas and communicate regularly.
14. Make sure the code is portable and buildable - your code should be able to function across platforms and frameworks. It must also be buildable - use an CI pipeline to check, build and test your code every time you make a commit.
15. Version control is vital - it helps with collaboration, and allows you to restore previous versions of your software, if something goes wrong.

## Pull Request Checklist

1. Name the branch according to the team&#39;s convention.
2. Check code for typos, comments, debugging code, trailing whitespaces etc.
3. Compare your code changes to main; have you changed anything unintentionally?
4. Make sure function and variable names appropriately convey their purpose and follow your conventions.
5. Check that each unit test correctly describes what&#39;s going on in all flows.
6. Ensure that all unit tests are passing.
7. Perform smoke tests to ensure there are no bugs.
8. Make sure any issues picked up by the Linter have been addressed.
9. Add a description to the PR explaining the purpose of the changes and any other relevant context.
10. Reference all relevant tasks and user stories, so there is an audit trail for all changes.

## Pull Request Review Rules

1. Does the code work? Check that functions and logic are correct.
2. Are variables and functions appropriately named, to convey their purpose?
3. Is the code sufficiently tested?
4. If it is a new component, does it have a corresponding unit test?
5. Is the test coverage over 80%?
6. Does the code meet the team&#39;s guidelines and style code?
7. Is there any duplicated code?
8. Are there any unnecessary comments or code?
9. Does the code make the best use of the framework? Is there a custom or native function that can be used?
10. Is the code as modular as possible?
11. Does the code consider failures or just the happy path?
12. Is there a better or simpler solution?
13. Are there any security flaws?
14. Are there any performance issues?
15. Is the code readable and easy to understand?

## Definition of Done

- Each story has been completed and tested.
- All the items raised on the project board are moved to the &#39;Done&#39; column.
- All tests are passing locally and on CI.
- All pull requests are reviewed and have a working build, before merging.
- No outstanding issues in the project repository.
- Project documentation completed and added to README.
- Manual testing in a QA environment, to confirm that all functional and non-functional requirements have been met.
- All quality objectives have been met.

## CI/CD Pipeline setup

CI/CD pipeline was set up with GitHub Actions and is triggered every time a new PR is raised or new changes are pushed to the existing remote branch. It runs a number of checks, including code coverage (we set a target of \&gt;80% of code to be executed). Netlify build deploys branches previews.

## Test Driven Development

To ensure better code quality and more thorough testing, we used test driven development (TDD) when adding new features to the app. As shown in this PR [https://github.com/adaapp/sqa-nov-2021-team6/pull/36](https://github.com/adaapp/sqa-nov-2021-team6/pull/36) some tests for the new feature were added in the first commit. The next commit included the logic that implemented the required functionality and also fixed the tests. Only if all the tests passed and code coverage target was hit, the PR could be reviewed and merged.

## Test Plan

1. **Introduction**

To make sure that our &#39;RGB to HEX converter&#39; works as expected and can be safely deployed to the end users, we planned a thorough testing of the application, with a combination of automated and manual tests. This test plan explains how the quality of the application will be verified and measured before the final release.

2. **Quality objectives**

| **No.** | **Requirement** | **How to measure** | **Processes/tools to check the requirement** |
| --- | --- | --- | --- |
| NFR1 | Automated tests coverage | > 80% of the code should be executed when tests are running. | - Automated CI tools (Barecheck), Code reviews |
| NFR2 | Manual test coverage | 100% of tasks/user stories pass QA checks after they are merged into the repo. | Testing the app in browser, following the list of test cases |
| NFR3 | Intuitive UI | Users should be able to use the app on the first launch, without any help. | UAT sessions/user testing. |
| NFR4 | User satisfaction | > 80% of users are happy with their experience | UAT sessions/user testing. |

3. **Test strategy**

Software quality will be checked with a combination of automated and manual tests. The first layer will be performed by automated tests running on a CI/CD pipeline, every time a change is made and merged into the codebase. This will help us to make sure that the code quality would not be affected by changes. Manual tests will also help to identify any bugs in the user experience.

***3.1 Automated tests***

- Static analysis using ESLint and Prettier.
- UI tests.
- Snapshot tests.
- Unit tests.
- Automated UI testing, through the Puppeteer framework.

***3.2 Manual tests***

- QA testing of every new feature after development is completed.
- UAT session with all the team members with e2e manual testing of the app.
- UAT session with a wider group of users, to ensure NFR3 and NFR4 are met.

4. **Test cases**

[https://docs.google.com/spreadsheets/d/1g0-AUQSzFQfNu7KUv7PuPhwcrhCI5lJRZgMo-V-E8Ug/edit#gid=0](https://docs.google.com/spreadsheets/d/1g0-AUQSzFQfNu7KUv7PuPhwcrhCI5lJRZgMo-V-E8Ug/edit#gid=0)

5. **Testing tools and frameworks**

| **Test type** | **Testing tools/framework** |
| --- | --- |
| Static analysis | ES Lint |
| UI Tests | React testing library/Puppeteer |
| Unit tests | Jest |
| Snapshot tests | React testing library |
| Manual QA tests/UAT sessions | QA environment hosting, using different browsers that users may choose to run this application on. |

# Standards

## IEEE Standard for Software Quality Assurance Processes

This standard is concerned with initiating, planning, controlling and executing the Software Quality Assurance processes of a software development project. To satisfy the standard&#39;s point 5.3.1 ( **Establish the SQA processes** ), we will:

- Define and establish documented SQA processes that exist separately from the project.

- When applied to the project, they will enable the development of software which conforms to the established requirements.

- The SQA processes will define which activities to do, how to confirm they have been performed and how to measure and track their progress.

- The SQA process will be continually improved, based on objective measures and actual project results.

# Accessibility audit

The app has not yet had a proper accessibility audit, but some initial accessibility checks were performed after the app core functionality and design was developed. For now we only tested the app with a screen reader (ChromeVox extension on Google Chrome) and discovered a few issues that would need to be fixed on later iterations:

- Form labels and descriptions should be clear, for now, with the screen reader only, it is not easy to understand there are text boxes on the screen for RGB colours
- Unclear that &#39;Convert&#39; and &#39;Reset&#39; are buttons that can be clicked, screen reader just reads out the labels, we should mention the elements roles for this section
- To make sure that screen reader reads out the elements on the page in a logical order, we should group all the elements and sections of the page correctly
- Add proper error handling of the form input to pass error identification accessibility standard [https://www.wuhcag.com/error-identification/](https://www.wuhcag.com/error-identification/)

# React Guide

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run test:e2e`

Launches the test runner in the interactive watch mode.\
Please note that the above command needs to be run instaed of `npm test` as we have automated e2e testing implemented in the project
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

1. Een lijst met user stories die je gaat testen
2. De doelen die je wilt behalen met het testen en de scope van de tests
3. Een nauwkeurige beschrijving van je testomgeving (Hardware, software, data en andere benodigdheden)
4. De uitvoerende aanpak voor het testen (handmatig testen/geautomatiseerd testen of een combinatie van beide)
5. De test cases en scenarios die je gaat gebruiken om elke user story te testen. Dit kunnen er meerdere zijn per user story.

Testing Tool: Cypress


> # **List of stories that will be tested:**
# **[CP207-63](https://xr-vision.atlassian.net/browse/CP2077-63)** : As a user I want a loading screen animation on the landing page that fowllows the theme and styling of the parent website.
> **E2E Test Plan**
### **Scopes:**
- The animation should be visible on the landing page of the website.
- While the animation is playing, the user should not be able to interact with the website.
- Once the animation is over the user should be able to interact with the website.
- Once the animation is over it should not be visible anymore.
### **Goal**
The goal of this test is to make sure that the loading screen is visible on the landing page of the website upon landing and that the user is not able to interact with the website while the animation is playing. Once the animation is over the user should be able to interact with the website and the loading screen should not be visible anymore.

### **Test Environment:**
- Browser: Chrome version 95
- Operating System: Windows 10
- Screen resolution: 1920 x 1080
### **Test Approach:**
 Use Cypress e2e testing framework to simulate user actions and verify expected behaviors.
### **Test Cases:**
Verify that the landing page contains a loading screen animation upon loading.
Verify that the user cannot interact with the website while the animation is playing.
Verify that the loading screen animation disappears once it is finished.
Verify that the user is able to interact with the website once the animation is finished.
Verify that the loading screen animation does not reappear during subsequent visits to the landing page.


Component Test Plan
Component Under Test
LoadingScreen component

Scopes
Test that the component renders without errors.
Test that the component's root element has an ID of "overlay".
Test that the component's progress bar element has a width that starts at 2% and increases to 60% over 4 seconds.
Test that the component's progress bar element has a height of 1px.
Test that the component's progress bar element has a white background color.
Test that the component's progress bar element has a transition duration of 4 seconds.
Test that the component's progress bar element has a margin top and bottom of 20px.
Test that the component's count-up element has a delay of 0, an end value of 100, and a duration of 4 seconds.
Test that the component's "Loaded" text is displayed.
Test that the component unmounts without errors.
Goal
The goal of the tests is to ensure that the LoadingScreen component renders correctly and displays the progress bar, count-up element, and "Loaded" text as expected.

Test Environment
The component will be tested in a React testing environment using Jest and Enzyme.

Test Approach
The test approach will be to use snapshot testing and unit testing to verify that the component renders correctly and its functionality works as expected.

Test Cases
Snapshot Testing
Test that the component renders without errors.
Test that the component matches its snapshot.
Unit Testing
Test that the component's root element has an ID of "overlay".
Test that the component's progress bar element has a width that starts at 2% and increases to 60% over 4 seconds.
Test that the component's progress bar element has a height of 1px.
Test that the component's progress bar element has a white background color.
Test that the component's progress bar element has a transition duration of 4 seconds.
Test that the component's progress bar element has a margin top and bottom of 20px.
Test that the component's count-up element has a delay of 0, an end value of 100, and a duration of 4 seconds.
Test that the component's "Loaded" text is displayed.
Test that the component unmounts without errors.


> **E2E Test Plan:**
### **Scopes:**

### **Goal**


### **Test Environment:**
- Browser: Chrome version 95
- Operating System: Windows 10
- Screen resolution: 1920 x 1080
### **Test Approach:**

### **Test Cases:**
- Check if the form is rendered properly
- Fill all the form fields and submit the form to verify that the email is sent successfully
- Check if the error message is displayed properly when an error occurs
- Check if the loading indicator is displayed properly during the submission process
- Check if the navigation to the result page is working as expected


> **Component Test Plan:**

### **Scopes:**
- Check if the TextField component is rendered properly for all the form fields
- Verify if the TextField components have the correct properties such as id, type, name, label, sx, etc.
- Verify if the TextField components can handle user inputs correctly
- Check if the handleButtonClick function is called when the submit button is clicked
- Test if the sendEmail function is called when the form is submitted
- Check if the emailjs.sendForm method is called with the correct parameters
- Test if the navigate function is called with the correct parameters after the form submission is completed
- Verify if the loading and error states are updated correctly
### **Goal:**


### **Test Environment:**
- The component will be tested in a React testing environment using Cypress.

### **Test Approach:**

### **Test Cases**


### **Place holder cypress test file:**
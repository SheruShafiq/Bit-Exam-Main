
import './App.css';
import emailjs from "@emailjs/browser"
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';

function App() {
  const sendEmail = (e) => {
    e.preventDefault();
  emailjs.sendForm('service_nh0au8c',  'template_k07o36l', e.target, 'WaOT6BUTbyQbhGR8B')
  console.log("Email sent")
  }
  return (
    <div className="App">
      <h1 className="page__title">Contact Us</h1>
      <form className="contact__form" onSubmit={sendEmail}>
        <label htmlFor="emailFrom">Email:</label>
        <input type="text" name="email_from" id="emailFrom" className="email__from" placeholder="person@example.com"/>
        <label htmlFor="message">Message:</label>
        <textarea name="message" id="message" className="message__box"></textarea>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default App;

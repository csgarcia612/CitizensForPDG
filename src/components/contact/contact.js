import React, { Component } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import './contact.scss';
const dotenv = require('dotenv');
dotenv.config();

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      showEmailMsg: false,
      showEmailErr: false,
      showEmailWarn: false,
      contactName: '',
      contactEmailAddress: '',
      contactPhoneNumber: '',
      contactMessage: ''
    };
    this.contactFormChange = this.contactFormChange.bind(this);
    this.checkEmail = this.checkEmail.bind(this);
    this.sendEmail = this.sendEmail.bind(this);
    this.toggleEmailMsg = this.toggleEmailMsg.bind(this);
    this.toggleEmailErr = this.toggleEmailErr.bind(this);
    this.toggleEmailWarn = this.toggleEmailWarn.bind(this);
  }

  contactFormChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  checkEmail() {
    const { contactMessage } = this.state;

    let censoredArr = process.env.CENSORED_ARR;

    let emailSafe = true;

    for (let i = 0; i < censoredArr.length; i++) {
      if (contactMessage.contains(censoredArr[i])) {
        emailSafe = false;
      }
    }

    if (emailSafe === true) {
      this.sendEmail();
    } else if (emailSafe === false) {
      this.toggleEmailWarn();
    }
  }

  sendEmail() {
    axios.post('/api/nodemailer', this.state).then(resp => {
      if (resp.data === true) {
        this.setState({
          showEmailMsg: true,
          contactName: '',
          contactEmailAddress: '',
          contactPhoneNumber: '',
          contactMessage: ''
        });
      } else if (resp.data === false) {
        this.setState({
          showEmailErr: true
        });
      }
    });
  }

  toggleEmailMsg() {
    this.setState({
      showEmailMsg: !this.state.showEmailMsg
    });
  }

  toggleEmailErr() {
    this.setState({
      showEmailErr: !this.state.showEmailErr
    });
  }

  toggleEmailWarn() {
    this.setState({
      showEmailWarn: !this.state.showEmailWarn
    });
  }

  render() {
    const {
      showEmailMsg,
      showEmailErr,
      showEmailWarn,
      contactName,
      contactEmailAddress,
      contactPhoneNumber,
      contactMessage
    } = this.state;

    return (
      <div className='contactPageContainer'>
        <NavLink
          exact
          to='/'
          className={showEmailMsg ? 'showEmailMsg' : 'hideEmailMsg'}
        >
          <div className='modalBackdrop'>
            <div className='emailSentContainer'>
              <p className='emailSentText'>
                Your message has been successfully sent.
              </p>
            </div>
          </div>
        </NavLink>
        <div
          className={showEmailErr ? 'showModalContainer' : 'hideModalContainer'}
          onClick={this.toggleModal}
        >
          <div className={showEmailErr ? 'showEmailErr' : 'hideEmailErr'}>
            <p>Something went wrong sending message. Please try again.</p>
          </div>
        </div>
        <div
          className={
            showEmailWarn ? 'showModalContainer' : 'hideModalContainer'
          }
        >
          <div className={showEmailWarn ? 'showEmailWarn' : 'hideEmailWarn'}>
            <p>
              Message contain inappropriate language. Please edit message and
              resend.
            </p>
          </div>
        </div>
        <div className='contactMsgContainer'>
          <p className='contactMsg2'>
            If you would like to send a message or volunteer for the campaign,
            please fill out the form on this page and click "Send"
          </p>
        </div>
        <span className='separator' />
        <div className='contactFormContainer'>
          <div className='contactInputContainer1'>
            <p className='contactTitle1'>Name</p>
            <input
              className='contactInput1'
              placeholder='First and Last Name'
              value={contactName}
              onChange={this.contactFormChange}
              name='contactName'
            />
          </div>
          <div className='contactInputContainer1'>
            <p className='contactTitle1'>Email</p>
            <input
              className='contactInput1'
              placeholder='Email Address'
              value={contactEmailAddress}
              onChange={this.contactFormChange}
              name='contactEmailAddress'
            />
          </div>
          <div className='contactInputContainer1'>
            <p className='contactTitle1'>Phone</p>
            <input
              className='contactInput1'
              placeholder='Phone Number'
              type='number'
              value={contactPhoneNumber}
              onChange={this.contactFormChange}
              name='contactEmailAddress'
            />
          </div>
          <div className='contactInputContainer2'>
            <p className='contactTitle2'>Message</p>
            <textarea
              className='contactInput2'
              maxLength='1000'
              placeholder='Message'
              value={contactMessage}
              onChange={this.contactFormChange}
              name='contactMessage'
            />
          </div>
          <div>
            <button className='contactSubmitBtn' onClick={this.sendEmail}>
              Send
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;

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

    let messageArr = contactMessage
      .toLowerCase()
      .replace(/[^a-zA-Z0-9 ]/g, '')
      .split(' ');

    const censoredArr = [
      '4r5e',
      '5h1t',
      '5hit',
      'a55',
      'anal',
      'anus',
      'ar5e',
      'arrse',
      'arse',
      'ass',
      'ass-fucker',
      'asses',
      'assfucker',
      'assfukka',
      'asshole',
      'assholes',
      'asswhole',
      'a_s_s',
      'b!tch',
      'b00bs',
      'b17ch',
      'b1tch',
      'ballbag',
      'balls',
      'ballsack',
      'bastard',
      'beastial',
      'beastiality',
      'bellend',
      'bestial',
      'bestiality',
      'bi+ch',
      'biatch',
      'bitch',
      'bitcher',
      'bitchers',
      'bitches',
      'bitchin',
      'bitching',
      'bloody',
      'blow job',
      'blowjob',
      'blowjobs',
      'boiolas',
      'bollock',
      'bollok',
      'boner',
      'boob',
      'boobs',
      'booobs',
      'boooobs',
      'booooobs',
      'booooooobs',
      'breasts',
      'buceta',
      'bugger',
      'bum',
      'bunny fucker',
      'butt',
      'butthole',
      'buttmuch',
      'buttplug',
      'c0ck',
      'c0cksucker',
      'carpet muncher',
      'cawk',
      'chink',
      'cipa',
      'cl1t',
      'clit',
      'clitoris',
      'clits',
      'cnut',
      'cock',
      'cock-sucker',
      'cockface',
      'cockhead',
      'cockmunch',
      'cockmuncher',
      'cocks',
      'cocksuck',
      'cocksucked',
      'cocksucker',
      'cocksucking',
      'cocksucks',
      'cocksuka',
      'cocksukka',
      'cok',
      'cokmuncher',
      'coksucka',
      'coon',
      'cox',
      'crap',
      'cum',
      'cummer',
      'cumming',
      'cums',
      'cumshot',
      'cunilingus',
      'cunillingus',
      'cunnilingus',
      'cunt',
      'cuntlick',
      'cuntlicker',
      'cuntlicking',
      'cunts',
      'cyalis',
      'cyberfuc',
      'cyberfuck',
      'cyberfucked',
      'cyberfucker',
      'cyberfuckers',
      'cyberfucking',
      'd1ck',
      'damn',
      'dick',
      'dickhead',
      'dildo',
      'dildos',
      'dink',
      'dinks',
      'dirsa',
      'dlck',
      'dog-fucker',
      'doggin',
      'dogging',
      'donkeyribber',
      'doosh',
      'duche',
      'dyke',
      'ejaculate',
      'ejaculated',
      'ejaculates',
      'ejaculating',
      'ejaculatings',
      'ejaculation',
      'ejakulate',
      'f u c k',
      'f u c k e r',
      'f4nny',
      'fag',
      'fagging',
      'faggitt',
      'faggot',
      'faggs',
      'fagot',
      'fagots',
      'fags',
      'fanny',
      'fannyflaps',
      'fannyfucker',
      'fanyy',
      'fatass',
      'fck',
      'fcuk',
      'fcuker',
      'fcuking',
      'feck',
      'fecker',
      'felching',
      'fellate',
      'fellatio',
      'fingerfuck',
      'fingerfucked',
      'fingerfucker',
      'fingerfuckers',
      'fingerfucking',
      'fingerfucks',
      'fistfuck',
      'fistfucked',
      'fistfucker',
      'fistfuckers',
      'fistfucking',
      'fistfuckings',
      'fistfucks',
      'flange',
      'fook',
      'fooker',
      'fuck',
      'fucka',
      'fucked',
      'fucker',
      'fuckers',
      'fuckhead',
      'fuckheads',
      'fuckin',
      'fucking',
      'fuckings',
      'fuckingshitmotherfucker',
      'fuckme',
      'fucks',
      'fuckwhit',
      'fuckwit',
      'fudge packer',
      'fudgepacker',
      'fuk',
      'fuker',
      'fukker',
      'fukkin',
      'fuks',
      'fukwhit',
      'fukwit',
      'fux',
      'fux0r',
      'f_u_c_k',
      'gangbang',
      'gangbanged',
      'gangbangs',
      'gaylord',
      'gaysex',
      'goatse',
      'God',
      'god-dam',
      'god-damned',
      'goddamn',
      'goddamned',
      'hardcoresex',
      'hell',
      'heshe',
      'hoar',
      'hoare',
      'hoe',
      'hoer',
      'homo',
      'hore',
      'horniest',
      'horny',
      'hotsex',
      'jack-off',
      'jackoff',
      'jap',
      'jerk-off',
      'jism',
      'jiz',
      'jizm',
      'jizz',
      'kawk',
      'knob',
      'knobead',
      'knobed',
      'knobend',
      'knobhead',
      'knobjocky',
      'knobjokey',
      'kock',
      'kondum',
      'kondums',
      'kum',
      'kummer',
      'kumming',
      'kums',
      'kunilingus',
      'l3i+ch',
      'l3itch',
      'labia',
      'lust',
      'lusting',
      'm0f0',
      'm0fo',
      'm45terbate',
      'ma5terb8',
      'ma5terbate',
      'masochist',
      'master-bate',
      'masterb8',
      'masterbat*',
      'masterbat3',
      'masterbate',
      'masterbation',
      'masterbations',
      'masturbate',
      'mo-fo',
      'mof0',
      'mofo',
      'mothafuck',
      'mothafucka',
      'mothafuckas',
      'mothafuckaz',
      'mothafucked',
      'mothafucker',
      'mothafuckers',
      'mothafuckin',
      'mothafucking',
      'mothafuckings',
      'mothafucks',
      'mother fucker',
      'motherfuck',
      'motherfucked',
      'motherfucker',
      'motherfuckers',
      'motherfuckin',
      'motherfucking',
      'motherfuckings',
      'motherfuckka',
      'motherfucks',
      'muff',
      'mutha',
      'muthafecker',
      'muthafuckker',
      'muther',
      'mutherfucker',
      'n1gga',
      'n1gger',
      'nazi',
      'nigg3r',
      'nigg4h',
      'nigga',
      'niggah',
      'niggas',
      'niggaz',
      'nigger',
      'niggers',
      'nob',
      'nob jokey',
      'nobhead',
      'nobjocky',
      'nobjokey',
      'numbnuts',
      'nutsack',
      'orgasim',
      'orgasims',
      'orgasm',
      'orgasms',
      'p0rn',
      'pawn',
      'pecker',
      'penis',
      'penisfucker',
      'phonesex',
      'phuck',
      'phuk',
      'phuked',
      'phuking',
      'phukked',
      'phukking',
      'phuks',
      'phuq',
      'pigfucker',
      'pimpis',
      'piss',
      'pissed',
      'pisser',
      'pissers',
      'pisses',
      'pissflaps',
      'pissin',
      'pissing',
      'pissoff',
      'poop',
      'porn',
      'porno',
      'pornography',
      'pornos',
      'prick',
      'pricks',
      'pron',
      'pube',
      'pusse',
      'pussi',
      'pussies',
      'pussy',
      'pussys',
      'rectum',
      'retard',
      'rimjaw',
      'rimming',
      's hit',
      's.o.b.',
      'sadist',
      'schlong',
      'screwing',
      'scroat',
      'scrote',
      'scrotum',
      'semen',
      'sex',
      'sh!+',
      'sh!t',
      'sh1t',
      'shag',
      'shagger',
      'shaggin',
      'shagging',
      'shemale',
      'shi+',
      'shit',
      'shitdick',
      'shite',
      'shited',
      'shitey',
      'shitfuck',
      'shitfull',
      'shithead',
      'shiting',
      'shitings',
      'shits',
      'shitted',
      'shitter',
      'shitters',
      'shitting',
      'shittings',
      'shitty',
      'skank',
      'slut',
      'sluts',
      'smegma',
      'smut',
      'snatch',
      'son-of-a-bitch',
      'spac',
      'spunk',
      's_h_i_t',
      't1tt1e5',
      't1tties',
      'teets',
      'teez',
      'testical',
      'testicle',
      'tit',
      'titfuck',
      'tits',
      'titt',
      'tittie5',
      'tittiefucker',
      'titties',
      'tittyfuck',
      'tittywank',
      'titwank',
      'tosser',
      'turd',
      'tw4t',
      'twat',
      'twathead',
      'twatty',
      'twunt',
      'twunter',
      'v14gra',
      'v1gra',
      'vagina',
      'viagra',
      'vulva',
      'w00se',
      'wang',
      'wank',
      'wanker',
      'wanky',
      'whoar',
      'whore',
      'willies',
      'willy',
      'xrated',
      'xxx'
    ];

    let emailSafe = true;

    for (let i = 0; i < censoredArr.length; i++) {
      if (messageArr.indexOf(censoredArr[i]) !== -1) {
        emailSafe = false;

        break;
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
      if (resp.data === 'Email Sent') {
        this.setState({
          showEmailMsg: true,
          contactName: '',
          contactEmailAddress: '',
          contactPhoneNumber: '',
          contactMessage: ''
        });
      } else if (resp.data === 'Email Failed') {
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
          <p className='emailSentText'>
            {/* Your message was successfully sent */}
            YOUR MESSAGE WAS SUCCESSFULLY SENT
          </p>
        </NavLink>
        <div
          className={showEmailErr ? 'showEmailErr' : 'hideEmailErr'}
          onClick={this.toggleEmailErr}
        >
          <p>
            SOMETHING WENT WRONG SENDING MESSAGE
            <br />
            <br />
            PLEASE TRY AGAIN
          </p>
        </div>
        <div
          className={showEmailWarn ? 'showEmailWarn' : 'hideEmailWarn'}
          onClick={this.toggleEmailWarn}
        >
          <p>
            MESSAGE CONTAINS INAPPROPRIATE LANGUAGE
            <br />
            <br />
            PLEASE EDIT MESSAGE AND RESEND
          </p>
        </div>
        <div className='contactMsgContainer'>
          <p className='contactMsg'>
            Please feel free to connect if you would like to:
            <br />
            &bull; Volunteer
            <br />
            &bull; Get a sign for your yard
            <br />
            &bull; Get more information
            <br />
            &bull; Send a message of support
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
              placeholder='Phone Number (888-888-8888)'
              value={contactPhoneNumber}
              onChange={this.contactFormChange}
              name='contactPhoneNumber'
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
            <button className='contactSubmitBtn' onClick={this.checkEmail}>
              Send
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;

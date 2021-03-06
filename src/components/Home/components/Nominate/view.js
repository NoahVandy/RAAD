import React from 'react';
import '../../../../App.css';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    backgroundColor: '#b9904e',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: 'white',
    minWidth: 300,
    height: '100vh'
  },
  loginInput: {
    minWidth: 225,
    '& label.Mui-focused': {
      color: '#F1F0FF',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'white',
    },
    '& label': {
      color: '#F1F0FF',
    },
    '& .MuiInput-underline:before': {
      borderBottomColor: 'white',
    },
    '& .MuiInputBase-input': {
      color: '#F1F0FF',
      backgroundColor: 'transparent'
    },
    color: '#F1F0FF'
  },
  button: {
    backgroundColor: '#fff',
    color: '#7373AF'
  }
});

export default function NominateView({ from, setFrom, text, setText, handleSubmit }) {
  const classes = useStyles();

  return (
    <div className="App">
        <div class="row">
          <h3 class="heading-h3 nominate__heading">Nominate a child</h3>
        </div>
        <div class="nominate__container">
          <div class="row">
            <form method="post" action="#" class="contact-form">
              <div class="row">
                <div class="col span-1-of-3">
                  <label class="nominate__text" for="email">Email</label>
                </div>
                <div class="col span-2-of-3">
                  <input type="email" name="email" id="email" placeholder="Your email" required value={from} onChange={(e) => setFrom(e.target.value)}/>
                </div>
              </div>

              <div class="row">
                <div class="col span-1-of-3">
                  <label class="nominate__text">Your story</label>
                </div>
                <div class="col span-2-of-3">
                  <textarea name="message" placeholder="Your story, please include your name and the name of your child" value={text} onChange={(e) => setText(e.target.value)} ></textarea>
                </div>
              </div>
              <div class="row">
                <div class="col span-1-of-3">
                  <label>&nbsp;</label>
                </div>
                <div>
                  <input class="nominate__btn" value="Send nomination" onClick={handleSubmit}/>
                </div>
              </div>
            </form>
          </div>
        </div>
    </div>
  );
}

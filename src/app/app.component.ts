import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <style>
      .login-container {
        height: 43.75em;
        width: 60em;
        margin: 6em auto;
        border-radius: 10px;
        display: flex;
        justify-content: space-between;
        overflow: hidden;
      }

      .login-info-container {
        width: 50%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding-top: 0.5rem;
        border-radius: 5px;
        background-color: #f8f3ff;
      }

      .title {
        text-transform: capitalize;
        font-size: 2.25rem;
        font-weight: 600;
        letter-spacing: 1px;
        color: #9089cc;
      }

      .login-info-container > p {
        font-size: 1.25em;
        margin-top: 1.5em;
      }

      .inputs-container {
        height: 55%;
        width: 85%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
      }

      .input, .btn {
        width: 90%;
        height: 3.125rem;
        font-size: 1em;
      }

      .input {
        padding-left: 20px;
        border: none;
        border-radius: 5px;
        font-weight: 600;
        letter-spacing: 1px;
        box-sizing: border-box;
      }

      .input:hover {
        border: 2px solid #674baf;
      }

      .btn {
        width: 80%;
        letter-spacing: 1px;
        text-transform: uppercase;
        color: white;
        border: none;
        border-radius: 5px;
        background-color: #674baf;
        cursor: pointer;
      }

      .inputs-container p {
        margin: 0;
      }

      .span {
        color: #e882e8;
        font-weight: 600;
        cursor: pointer;
      }

      @media screen and (max-width: 1000px) {
        .login-container {
          width: 70%;
          margin-top: 3rem;
        }
        .login-info-container {
          width: 100%;
          border-radius: 5px;
        }
      }

      @media screen and (max-width: 650px) {
        .login-container {
          width: 90%;
        }
      }

      @media screen and (max-width: 500px) {
        .login-container {
          height: 90%;
        }
        .login-info-container > p {
          margin: 0;
        }
      }
    </style>

    <div class="login-container">
      <div class="login-info-container">
        <h1 class="title">Log in with</h1>
        <div class="inputs-container">
          <input class="input" type="text" placeholder="Username">
          <input class="input" type="text" placeholder="Password">
          <p>Forgot password? <span class="span">Click here</span></p>
          <button class="btn">login</button>
          <p>Don't have an account? <span class="span">Sign Up</span></p>
        </div>
      </div>
    </div>
  `
})
export class AppComponent {

}

import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';
import 'react-datepicker/dist/react-datepicker.css';

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
    background: linear-gradient(180deg, #22202C 0%, #402845 100%);
  }

  body, input, textarea, button {
    font: 16px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }

  /* div.Toastify__toast {
    font-family: 'Titillium Web';
    padding-left: 16px;
    padding-right: 16px;
  } */

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  button {
    cursor: pointer;
    font-size: 16px;
    border-radius: 4px;
    border: 0;
  }

  .react-datepicker__input-container {
    display: block !important;
  }

  .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--selected {
    background-color: #e65175 !important;
  }

.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--selected:hover {
    background-color: #e65175 !important;
  }

  .react-datepicker__month--selected, .react-datepicker__month--in-selecting-range, .react-datepicker__month--in-range {
    background-color: #e65175 !important;
  }

  .react-datepicker__month--selected:hover, .react-datepicker__month--in-selecting-range:hover, .react-datepicker__month--in-range:hover {
    background-color: #e33b63 !important;
  }

  .react-datepicker__day--selected, .react-datepicker__day--in-selecting-range, .react-datepicker__day--in-range,
  .react-datepicker__month-text--selected,
  .react-datepicker__month-text--in-selecting-range,
  .react-datepicker__month-text--in-range {
    background-color: #e65175 !important;
  }

  .react-datepicker__day--selected:hover, .react-datepicker__day--in-selecting-range:hover, .react-datepicker__day--in-range:hover,
  .react-datepicker__month-text--selected:hover,
  .react-datepicker__month-text--in-selecting-range:hover,
  .react-datepicker__month-text--in-range:hover {
    background-color: #e33b63 !important;
  }

  .react-datepicker__day--keyboard-selected,
  .react-datepicker__month-text--keyboard-selected {
    background-color: #e65175 !important;
  }

  .react-datepicker__day--keyboard-selected:hover,
  .react-datepicker__month-text--keyboard-selected:hover {
    background-color: #e33b63 !important;
  }

  .react-datepicker__month-text.react-datepicker__month--selected:hover, .react-datepicker__month-text.react-datepicker__month--in-range:hover {
    background-color: #e65175 !important;
  }

  .react-datepicker__close-icon::after {
    background-color: #e65175 !important;
  }
`;

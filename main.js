import {function_conditional_text} from './functions.js';

const MY_PI = Math.PI;
const my_text_input = document.getElementById('my_text_input');
const my_number_input = document.getElementById('my_number_input');
const my_checkbox_input = document.getElementById('my_checkbox_input');
const my_radio_group = document.getElementsByName('radio_grouping');

// const my_radio_group = document.querySelectorAll('input[name="radio_grouping"]');


const my_submit_button = document.getElementById('my_submit_button');
const my_reset_button = document.getElementById('my_reset_button');
const my_result_table = document.getElementById('my_result_table');

let my_answer = 0;

function main_submit ()
{
    const my_name = my_text_input.value;
    const my_number = my_number_input.value;
    const my_checkbox_status = my_checkbox_input.checked;
    const my_radio_value = Array.from(my_radio_group).find(my_radio => my_radio.checked)?.value;
    my_answer = Math.round((my_number*MY_PI+my_answer)*100)/100;

    const my_conditional_text = function_conditional_text(my_answer)

    const my_html = `
        <table>
          <tr><td>Text</td><td>${my_name}</td></tr>
          <tr><td>Number</td><td>${my_answer} (${my_conditional_text})</td></tr>
          <tr><td>Checkbox</td><td>${my_checkbox_status}</td></tr>
          <tr><td>Radio</td><td>${my_radio_value}</td></tr>
        </table>
        `;

    my_result_table.innerHTML = my_html;
}

function main_reset()
{
    my_text_input.value = '';
    my_number_input.value = '';
    my_checkbox_input.checked = false;
    Array.from(my_radio_group).forEach(my_radio => my_radio.checked = false);
    my_answer = 0;
    my_result_table.innerHTML = '';
}

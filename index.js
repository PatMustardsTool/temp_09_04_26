import {function_generate_password, function_generate_html, function_result_svg} from './my_js_modules/functions.js';
import {function_animation_reset} from './my_js_modules/animations.js';

// let my_array = [1,2,3,8,5,6];
// let my_max = Math.max(...my_array)
// console.log(my_max);

const my_form = document.getElementById('my_form');
const my_reset_icon = document.getElementById('my_reset_icon');
const my_text_input = document.getElementById('my_text_input');
const my_number_input = document.getElementById('my_number_input');
const my_checkbox_input = document.getElementById('my_checkbox_input');
const my_radio_group = document.getElementsByName('radio_group');
const my_result_table = document.getElementById('my_result_table');
const my_result_svg = document.getElementById('my_result_svg');

let my_calculated_number = 0;
function function_index_submit()
{
    const my_number = Number(my_number_input.value);

    const my_form_dict = {
        text: my_text_input.value,
        number: my_number,
        checkbox_status: my_checkbox_input.checked,
        radio_value: Array.from(my_radio_group).find(my_radio_input => my_radio_input.checked)?.value
    };

    [my_calculated_number, my_form_dict.password] = function_generate_password(my_form_dict , my_calculated_number);
    my_result_table.innerHTML = function_generate_html(my_form_dict, my_calculated_number);
    function_result_svg(my_calculated_number, my_result_svg);
}

function function_index_reset()
{
    function_animation_reset(my_reset_icon);
    my_calculated_number = 0;
    my_form.reset();
    function_result_svg(my_calculated_number, my_result_svg);
    // my_text_input.value = '';
    // my_number_input.value = '';
    // my_checkbox_input.checked = false;
    // Array.from(my_radio_group).forEach(my_radio => my_radio.checked = false);
    // my_result_table.innerHTML = '';
}

my_form.addEventListener('submit', (event) => {
    event.preventDefault();
    function_index_submit();
});

my_reset_icon.addEventListener('click', function_index_reset);

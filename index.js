const MY_PI = Math.PI;
const my_text_input = document.getElementById('my_text_input');
const my_number_input = document.getElementById('my_number_input');
const my_submit_button = document.getElementById('my_submit_button');
const my_reset_button = document.getElementById('my_reset_button');
const my_result_div = document.getElementById('my_result_div');

let my_answer = 0;
let my_conditional_text;

my_submit_button.onclick = function ()
{
    const my_name = my_text_input.value;
    const my_number = my_number_input.value;
    my_answer = Math.round((my_number*MY_PI+my_answer)*100)/100;

    if (my_answer < 10)
    {
        my_conditional_text = 'Weak'
    }
    else if (my_answer < 100)
    {
        my_conditional_text = 'Strong'
    }
    else
    {
        my_conditional_text = 'Grand'
    }

    const my_html = `Text: ${my_name}<br>Number: ${my_answer} (${my_conditional_text})`;

    my_result_div.innerHTML = my_html;
    console.log(`Answer: ${my_answer}`);
}

my_reset_button.onclick = function ()
{
    my_text_input.value = '';
    my_number_input.value = '';
    my_answer = 0;
    my_result_div.innerHTML = '';
}
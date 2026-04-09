const MY_PI = 3.141592652;
const my_text_input = document.getElementById('my_text_input')
const my_number_input = document.getElementById('my_number_input')
const my_submit_button = document.getElementById('my_submit_button')

let my_answer = 0;

my_submit_button.onclick = function () {
    const my_name = my_text_input.value;
    const my_number = my_number_input.value;
    my_answer= my_number*MY_PI+my_answer;
    console.log(my_answer);
    let my_html= `Text: ${my_name}<br>Number: ${my_answer.toFixed(2)}`;
    document.getElementById('my_result').innerHTML = my_html;
}
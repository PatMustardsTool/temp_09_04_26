let my_name;

document.getElementById('my_submit_button').onclick = function () {
    my_name = document.getElementById('my_name_input').value;
    console.log(my_name);
    document.getElementById('my_header').textContent = `Hello, ${my_name}`;
}
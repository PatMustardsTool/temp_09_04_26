let my_name;

document.getElementById('my_submit_button').onclick = function () {
    my_name = document.getElementById('my_name').value;
    console.log(my_name);
    document.getElementById('my_header').value = `Hello, ${my_name}`;
}
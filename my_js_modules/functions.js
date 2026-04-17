export function function_validate_form(my_form_dict)
{
    return Number.isFinite(my_form_dict.number) && my_form_dict.number >= 1 && my_form_dict.number <= 10;
}

export function function_generate_password(my_form_dict, my_calculated_number)
{
    const my_pi = Math.PI;
    const my_calculation = Math.round((my_calculated_number + my_form_dict.number) * my_pi * 100) / 100;
    const my_password = `${my_calculation}${my_form_dict.text}`

    return [my_calculation, my_password];
}

export function function_generate_html(my_form_dict)
{
    return `
        <tr><td>Text</td><td>${my_form_dict.text}</td></tr>
        <tr><td>Number</td><td>${my_form_dict.number}</td></tr>
        <tr><td>Checkbox</td><td>${my_form_dict.checkbox_status}</td></tr>
        <tr><td>Radio</td><td>${my_form_dict.radio_value}</td></tr>
        <tr><td>Password</td><td>${my_form_dict.password}</td></tr>
    `;
}

export function function_result_svg(my_calculated_value, my_result_svg)
{
    if (my_calculated_value > 0 && my_calculated_value < 10)
    {
        my_result_svg.style.fill = 'red';
        my_result_svg.style.transform = 'rotate(180deg)';
    }
    else if (my_calculated_value > 100)
    {
        my_result_svg.style.fill = 'green';
        my_result_svg.style.transform = '';
    }
    else
    {
        my_result_svg.style.fill = 'none';
        my_result_svg.style.transform = '';
    }
}
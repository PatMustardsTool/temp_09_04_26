export function function_result_svg(my_answer, my_result_svg)
{
    if (my_answer > 0 && my_answer < 10)
    {
        my_result_svg.style.fill = 'red';
        my_result_svg.style.transform = 'rotate(180deg)';
    }
    else if (my_answer > 100)
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
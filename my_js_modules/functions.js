export function function_result_image(my_answer, my_result_image)
{
    if (my_answer > 0 && my_answer < 10)
    {
        my_result_image.src = 'my_images/thumb.svg'
        my_result_image.style.transform = 'rotate(-180deg)'
    }
    else if (my_answer > 100)
    {
        my_result_image.src = 'my_images/thumb.svg'
        my_result_image.style.transform = ''
    }
    else {
        my_result_image.src = ''
        my_result_image.style.transform = ''
    }
}
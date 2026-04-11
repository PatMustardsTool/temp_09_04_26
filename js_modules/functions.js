export function function_conditional_text(my_answer)
{
    let my_conditional_text;
    if (my_answer < 10)
    {
        my_conditional_text = 'Weak';
    }
    else if (my_answer < 100)
    {
        my_conditional_text = 'Strong';
    }
    else {
        my_conditional_text = 'Grand';
    }

    return my_conditional_text;
}
export function function_reset_spin(my_icon)
{
    my_icon.classList.remove('animation_reset_spin');
    void my_icon.offsetWidth;
    my_icon.classList.add('animation_reset_spin');
}
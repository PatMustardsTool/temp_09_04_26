export function function_animation_reset(my_icon)
{
    const my_keyframes = [
        { transform: 'rotate(0deg)' },
        { transform: 'rotate(360deg)' }
    ];

    const my_options = {
        duration: 500,
        easing: 'ease-in-out'
    };

    my_icon.animate(my_keyframes, my_options);
}
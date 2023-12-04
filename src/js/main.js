import './lib/lib'

$('button').on("click", function() {
    $(this).toggleClass('active');
});

$('button').addAttribute("type", "name").removeAttribute("type");
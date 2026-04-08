<?php

/*
Plugin Name: Disabled right click plugin
Description: A simple plugin to demonstrate WordPress plugin development.
Version: 1.0
Author: Emil
Author URI: https://www.linkedin.com/in/emil-peitersen-165a70256/
Text Domain: disabled-right-click-plugin
*/

add_action('wp_footer', 'disable_right_click');

function disable_right_click() {
    echo "<script>
        document.addEventListener('contextmenu', event => event.preventDefault());
    </script>";
}
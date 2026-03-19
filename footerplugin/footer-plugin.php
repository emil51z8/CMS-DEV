<?php
/*
Plugin Name: Footer plugin
Description: A simple plugin to demonstrate WordPress plugin development.
Version: 1.0
Author: Emil
Author URI: https://www.linkedin.com/in/emil-peitersen-165a70256/
Text Domain: footer-plugin
*/

function footer_plugin_output() {
    echo '<footer class="simple-footer">
        <p>&copy; 2026 My WordPress Site Bike Shop. All rights reserved Emil Peitersen.</p>
    </footer>';
}

function simple_footer_styles() {
    wp_enqueue_style(
        'simple-footer-style',
        plugin_dir_url(__FILE__) . 'css/footer.css'
    );
}

add_action('wp_footer', 'footer_plugin_output');
add_action('wp_enqueue_scripts', 'simple_footer_styles');
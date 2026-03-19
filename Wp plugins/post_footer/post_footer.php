<?php
/*
Plugin Name: Post footer plugin
Description: A simple plugin to demonstrate WordPress plugin development.
Version: 1.0
Author: Emil
Author URI: https://www.linkedin.com/in/emil-peitersen-165a70256/
Text Domain: post-footer-plugin
*/

add_filter('the_content', 'add_footer_text');

function add_footer_text($content) {
    $content .= "<p><em>Tak fordi du læser mit indlæg!</em></p>";
    return $content;
}
?>
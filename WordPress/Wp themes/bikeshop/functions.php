<?php
 
function wptheme_script_enqueue() {
 
    wp_enqueue_style(
        'customstyle',
        get_template_directory_uri() . '/css/app.css',
        array(),
        '1.0',
        'all'
    );
 
    wp_enqueue_script(
        'customjs',
        get_template_directory_uri() . '/js/app.js',
        array(),
        '1.0',
        true
    );
 
}
 
add_action('wp_enqueue_scripts', 'wptheme_script_enqueue');

function my_register_cakes_post_type() {
    register_post_type('cake', [
        'labels' => [
            'name' => 'Cakes',
            'singular_name' => 'Cake',
        ],
        'public' => true,
        'has_archive' => true,
        'show_in_rest' => true, // important for Gutenberg + REST API
        'menu_icon' => 'dashicons-buddicons-community',
        'supports' => ['title', 'editor', 'thumbnail', 'excerpt'],
        'rewrite' => ['slug' => 'cakes'],
    ]);
}
add_action('init', 'my_register_cakes_post_type');
 
 
?>
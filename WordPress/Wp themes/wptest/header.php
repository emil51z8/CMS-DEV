<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
    <?php wp_body_open(); ?>
    
    <header>
        <div class="site-header">
            <h1>
                <a href="<?php echo esc_url( home_url( '/' ) ); ?>">
                    <?php bloginfo( 'name' ); ?>
                </a>
            </h1>
            <p><?php bloginfo( 'description' ); ?></p>
        </div>
        
        <nav>
            <?php
            wp_nav_menu( array(
                'theme_location' => 'primary',
                'fallback_cb'     => 'wp_page_menu',
            ) );
            ?>
        </nav>
    </header>
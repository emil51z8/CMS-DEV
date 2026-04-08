<?php get_header(); ?>

<main>
<?php
$args = array(
    'post_type' => 'post',
    'category_name' => 'bike',
);

$query = new WP_Query($args);

if ($query->have_posts()) :
    while ($query->have_posts()) : $query->the_post();
?>
        <article>
            <h2><?php the_title(); ?></h2>
            <div><?php the_content(); ?></div>
        </article>
<?php
    endwhile;
    wp_reset_postdata();
else :
?>
    <p>No posts found.</p>
<?php endif; ?>
</main>

<?php get_footer(); ?>
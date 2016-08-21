<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title><?php echo page_title('Page can’t be found'); ?> - <?php echo site_name(); ?></title>

    <meta name="description" content="<?php echo site_description(); ?>">

    <link rel="stylesheet" href="<?php echo theme_url('/css/reset.css'); ?>">
    <link rel="stylesheet" href="<?php echo theme_url('/css/style.css'); ?>">
    <link rel="stylesheet" href="<?php echo theme_url('/css/small.css'); ?>" media="(max-width: 400px)">

    <link rel="alternate" type="application/rss+xml" title="RSS" href="<?php echo rss_url(); ?>">
    <link rel="shortcut icon" href="<?php echo theme_url('img/favicon.png'); ?>">

    <!--[if lt IE 9]>
      <script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->

      <meta name="viewport" content="width=device-width">
      <meta name="generator" content="Anchor CMS">

      <meta property="og:title" content="<?php echo site_name(); ?>">
      <meta property="og:type" content="website">
      <meta property="og:url" content="<?php echo e(current_url()); ?>">
      <meta property="og:image" content="<?php echo theme_url('img/og_image.gif'); ?>">
      <meta property="og:site_name" content="<?php echo site_name(); ?>">
      <meta property="og:description" content="<?php echo site_description(); ?>">

    <?php if (customised()): ?>
        <!-- Custom CSS -->
        <style><?php echo article_css(); ?></style>

        <!--  Custom Javascript -->
        <script><?php echo article_js(); ?></script>
    <?php endif;?>
  </head>
  <body class="<?php echo body_class(); ?>">
    <div class="main-wrap">

      <header id="top">
        <a id="logo" href="<?php echo base_url(); ?>"></a>
      </header>

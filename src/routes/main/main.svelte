<script>
  import { Link } from "svelte-routing";
  import "./main.css";
</script>

<main id="main-body">
  <div id="main-banner">
    <h1>Paweł Stepaniuk</h1>
    <div id="main-description">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio a quos sit
      molestias mollitia exercitationem nihil eos ex doloribus quibusdam
      possimus consequatur perferendis atque fuga, soluta magnam ad sunt sequi.
    </div>
  </div>

  <nav id="main-nav">
    <Link to="design">Design</Link>
    <Link to="dev">Dev</Link>
    <Link to="photos">Photography</Link>
  </nav>
  <h2 id="main-social-media-heading">Social media</h2>
  <section id="main-social-media">
    <a href="/" class="main-social-media-link">#</a>
    <a href="/" class="main-social-media-link">#</a>
    <a href="/" class="main-social-media-link">#</a>
    <a href="/" class="main-social-media-link">#</a>
  </section>
  <a
    href="mailto:pawel66556655@gmail.com"
    target="_blank"
    id="main-contact-me-button">Contact me</a
  >

  <div id="main-footer">Created by Paweł Stepaniuk</div>
</main>

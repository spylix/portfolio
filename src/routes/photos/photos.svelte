<script>
  import "./photos.css";

  const moveToCategory = (e) => {
    document
      .getElementById(e.target.innerHTML.toLowerCase())
      .scrollIntoView({ behavior: "smooth" });
  };

  let isEnlargedPhoto = false;
  let enlargedPhotoOpacity = 0;

  const toggleEnlargedPhoto = () => {
    if (isEnlargedPhoto) {
        enlargedPhotoOpacity = 0;
      document.getElementsByTagName("body")[0].style.overflow = "";
      setTimeout(() => {
      isEnlargedPhoto = false;
      }, 300);
    } else {
      isEnlargedPhoto = true;
      document.getElementsByTagName("body")[0].style.overflow = "hidden";
      setTimeout(() => {
        enlargedPhotoOpacity = 1;
      }, 0);
    }
  };
</script>

<main id="photos-main">
  <h1 id="photos-header">Paweł Stepaniuk</h1>
  <nav id="photos-nav">
    <button class="photos-nav-button" on:click={moveToCategory}>People</button>
    <button class="photos-nav-button" on:click={moveToCategory}
      >Exploration</button
    >
    <button class="photos-nav-button" on:click={moveToCategory}>Food</button>
    <button class="photos-nav-button" on:click={moveToCategory}>Other</button>
  </nav>
  <div id="photos-grid">
    <div class="photos-grid-column-left">
      <div class="photos-grid-photo" on:click={toggleEnlargedPhoto} />
      <div class="photos-grid-photo" on:click={toggleEnlargedPhoto} />
      <h2 class="photos-grid-title" id="people">People</h2>
      <div class="photos-grid-photo" on:click={toggleEnlargedPhoto} />
      <div class="photos-grid-photo" on:click={toggleEnlargedPhoto} />
      <div class="photos-grid-photo" on:click={toggleEnlargedPhoto} />
      <div class="photos-grid-photo" on:click={toggleEnlargedPhoto} />
    </div>
    <div class="photos-grid-column-right">
      <div class="photos-grid-photo" on:click={toggleEnlargedPhoto} />
      <div class="photos-grid-photo" on:click={toggleEnlargedPhoto} />
      <div class="photos-grid-photo" on:click={toggleEnlargedPhoto} />
      <div class="photos-grid-photo" on:click={toggleEnlargedPhoto} />
      <h2 class="photos-grid-title" id="exploration">Exploration</h2>
      <div class="photos-grid-photo" on:click={toggleEnlargedPhoto} />
      <div class="photos-grid-photo" on:click={toggleEnlargedPhoto} />
    </div>
  </div>

  {#if isEnlargedPhoto}
    <div id="enlarged-photo" style={`opacity: ${enlargedPhotoOpacity}`}>
      <div class="enlarged-photo-buttons">
        <button class="enlarged-photo-button">#</button>
        <button class="enlarged-photo-button">#</button>
        <button class="enlarged-photo-button">#</button>
        <button class="enlarged-photo-button">#</button>
      </div>
      <div id="enlarged-photo-photo" />
      <div class="enlarged-photo-buttons">
        <button class="enlarged-photo-button" on:click={toggleEnlargedPhoto}
          >X</button
        >
        <div class="enlarged-photo-arrow-buttons">
          <button class="enlarged-photo-button">{"<"}</button>
          <button class="enlarged-photo-button">{">"}</button>
        </div>
        <div id="enlarged-photo-footer">Paweł Stepaniuk</div>
      </div>
    </div>
  {/if}
</main>

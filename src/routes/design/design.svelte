<script>
  import DesignPage from "./design-page.svelte";
  import "./design.css";

  let showPage = -1;

  const animateColorStripes = () => {
    const colors = document.getElementsByClassName("design-stripe-color");

    document.getElementById("design-stripe-label").style.transform =
      "translateY(120px)";

    // Hide background images
    document.getElementById("design-background").style.transform =
      "translateX(100vw)";
    document.getElementById("design-laptop").style.transform =
      "translateX(-40vw)";
    document.getElementById("design-heading").style.transform =
      "translateY(-200px)";
    document.getElementById("design-description").style.transform =
      "translateY(-400px)";

    // Change widths of color stripes - most of them to 0
    for (let i = 0; i < colors.length; i++) {
      let width = "0px";
      if (i === 1 || i === 2) width = "400px";
      colors[i].style.width = width;
    }

    // Update height of remaining 2 stripes
    setTimeout(() => {
      colors[1].style.height = "100px";
      colors[2].style.height = "100px";
      colors[2].style.background = "var(--seventh-color)";
    }, 600);

    // Change url
    setTimeout(() => {
      window.history.pushState({}, "", "http://localhost:3000/design/1");
      showPage = 1;
    }, 1200);
  };
</script>

{#if showPage === -1}
  <main id="design-body">
    <div id="design-landing">
      <h1 id="design-heading">Paweł Stepaniuk</h1>
      <div id="design-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dolorem,
        perspiciatis consectetur, tempora aliquid tempore vel ipsum ad illo ab
        autem magni minima doloremque quos recusandae explicabo amet incidunt
        repellendus?
      </div>
      <img src="../../static/design-laptop.svg" alt="" id="design-laptop" />
      <img
        src="../../static/design-background.svg"
        alt=""
        id="design-background"
      />
      <button id="design-stripe" on:click={animateColorStripes}>
        <div class="design-stripe-color" />
        <div class="design-stripe-color" />
        <div class="design-stripe-color" />
        <div class="design-stripe-color" />
        <div class="design-stripe-color" />
        <div class="design-stripe-color" />
        <div class="design-stripe-color" />
        <h2 id="design-stripe-label">Go to the designs</h2>
      </button>
    </div>
  </main>
{:else}
  <DesignPage />
{/if}

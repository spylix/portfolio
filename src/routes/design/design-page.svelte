<script>
  import { onMount } from "svelte";

  import "./design.css";
  import "./design-page.css";

  let headingStyle = "transform: translateY(-70px)";
  let buttonSpanStyle = "opacity: 0";

  const initialAnimation = () => {
    setTimeout(() => {
      headingStyle = "transform: translateY(0)";
      buttonSpanStyle = "opacity: 1";
    }, 0);
  };

  onMount(() => {
    initialAnimation();
  });
</script>

<div id="design-body">
  <div id="design-body-heading" style={headingStyle}>
    <h1>Title</h1>
  </div>
  <div id="design-body-buttons">
    <button class="design-page-button">
      <span style={buttonSpanStyle}>Previous</span>
    </button>
    <button class="design-page-button">
      <span style={buttonSpanStyle}>Next</span>
    </button>
  </div>
</div>

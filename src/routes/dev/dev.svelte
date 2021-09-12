<script>
  import MediaQuery from "svelte-media-query";

  import "./dev.css";

  const projects = [
    { name: "Lufthansa", date: "2021-05-04" },
    { name: "Drewniane Podlasie", date: "2020-01-01" },
    { name: "Ice Skating 101", date: "2018-11-20" },
  ];

  const scrollToProjects = () => {
    document
      .getElementById("dev-project-list")
      .scrollIntoView({ behavior: "smooth" });
  };
</script>

<main id="dev-body">
  <div id="dev-landing">
    <div class="dev-landing-body">
      <h1>Paweł Stepaniuk</h1>
      <section id="dev-landing-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae hic
        veritatis veniam perspiciatis fugiat labore! Voluptas optio id, corrupti
        est quibusdam autem sint, omnis hic repellat maiores praesentium quaerat
        suscipit!
      </section>
      <div id="dev-landing-buttons">
        <a
          href="mailto:pawel66556655@gmail.com"
          target="_blank"
          class="dev-landing-button">Contact Me</a
        >
        <button class="dev-landing-button" on:click={scrollToProjects}
          >My Projects</button
        >
      </div>
    </div>
    <MediaQuery query="(min-width: 1000px)" let:matches>
      {#if matches}
        <section class="dev-landing-body">
          <div id="dev-timeline">
            {#each projects as project}
              <div
                class="dev-timeline-entry"
                style={`bottom: ${
                  ((new Date(project.date).getTime() -
                    new Date("2018-11-01").getTime()) /
                    (Date.now() - new Date("2018-11-01").getTime())) *
                  100
                }%`}
              >
                <div class="dev-timeline-entry-title">{project.name}</div>
                <div class="dev-timeline-entry-date">{project.date}</div>
              </div>
            {/each}
          </div>
        </section>
      {/if}
    </MediaQuery>
  </div>

  <div id="dev-project-list">
    {#each projects as project}
      <div class="dev-project">
        <div class="dev-project-heading">
          <div class="dev-project-image" />
          <h2 class="dev-project-title">{project.name}</h2>
        </div>
        <div class="dev-project-tag-list">
          <div class="dev-project-tag">JavaScript</div>
          <div class="dev-project-tag">React</div>
          <div class="dev-project-tag">AWS</div>
        </div>
        <div class="dev-project-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          doloribus placeat natus numquam, cumque adipisci voluptatibus!
          Delectus sequi fugiat reprehenderit provident distinctio, deserunt
          doloremque quas perferendis ex illo harum laudantium!
        </div>
        <button class="dev-project-button">More info</button>
      </div>
    {/each}
  </div>

  <div id="dev-footer">
    <div class="dev-footer-column">
      <div class="dev-footer-row">
        <a href="/" class="main-social-media-link">#</a>
        <a href="/" class="main-social-media-link">#</a>
      </div>
      <div class="dev-footer-row">
        <a href="/" class="main-social-media-link">#</a>
        <a href="/" class="main-social-media-link">#</a>
      </div>
    </div>
    <div class="dev-footer-column">
      <a
        href="mailto:pawel66556655@gmail.com"
        target="_blank"
        class="dev-landing-button">Contact Me</a
      >
      <div id="main-footer">Created by Paweł Stepaniuk</div>
    </div>
  </div>
</main>

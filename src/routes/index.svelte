<script>
  import { Router, Route } from "svelte-routing";
  import Main from "./main/main.svelte";
  import Photos from "./photos/photos.svelte";
  import Dev from "./dev/dev.svelte";
  import Design from "./design/design.svelte";
  import "./index.css";
</script>

<Router>
  <Route path="/">
    <Main />
  </Route>

  <Route path="photos">
    <Photos />
  </Route>

  <Route path="photos/photos">
    <Photos />
  </Route>

  <Route path="dev">
    <Dev />
  </Route>

  <Route path="design">
    <Design />
  </Route>
</Router>

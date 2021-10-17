import { publish } from "gh-pages";

publish(
  "public", // path to public directory
  {
    branch: "gh-pages",
    repo: "https://github.com/spylix/portfolio.git",
    user: {
      name: "Paweł Stepaniuk",
      email: "pawel66556655@gmail.com",
    },
  },
  () => {
    console.log("Deploy Complete!");
  }
);

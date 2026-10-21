
import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    name: "MerlMovie Public Domain Starter",
    status: "running",
    message: "Public-domain movie plugin endpoint",
    sources: [
      {
        name: "Internet Archive",
        url: "https://archive.org",
        description: "Search for films and verify their public-domain status."
      },
      {
        name: "Library of Congress",
        url: "https://www.loc.gov/film-and-videos/",
        description: "Explore films and videos; check rights before reuse."
      }
    ]
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});

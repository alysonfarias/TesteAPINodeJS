const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const PORT = process.env.PORT || 8877;
const swaggerFile = require('./swagger_output.json')

app.get('/about', (req, res) => {
  res.json({
    profile: {
      name: "Alyson Farias",
      location: "Recife, Brazil",
    },
   curiosities: {
      hobbies: ["Read", "Workout", "Code", "Series", "Podcasts"],
    },
   hardskills: {
      languages: ["HTML", "CSS", "Javascript","TypeScript", "C#", "SQL"],
      frameworks: ["Angular, Tailwind.css, Bootstrap"],
      SGBD: ["MySQL, MongoDB"],
      studyingAndImproving: ["Angular", "ReactJS", "NodeJS", "TailwindCSS", "Bootstrap"]
    }
  });
})

app.get('/', (req, res) => {
  res.json('Hello World!');})

app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})
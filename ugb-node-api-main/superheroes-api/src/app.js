const express = require("express");
const sequelize = require("./database/database");
const cors = require('cors');

const Hero = require("./models/Hero");
const Movie = require("./models/Movie");


const app = express();
app.use(cors())
app.use(express.json());

Hero.belongsToMany(Movie, {
    through: "HeroMovies"
})

Movie.belongsToMany(Hero, {
    through: "MoviesHero"
})

app.use("/heroes", require("./routes/heroes.routes.js"));

sequelize
    .sync()
    .then(() => {
        console.log("Banco de Dados sincronizado.")
     })
    .catch((error) => {
        console.log("Erro ao sincronizar o Banco de Dados", error)
     })

module.exports = app;
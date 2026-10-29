const express = require("express");
const sequelize = require("./database/database");

const Hero = require("./models/Hero");
const Movie = require("./models/Movie");
const heroesRoutes = require("./routes/heroes.routes.js")

const app = express();

Hero.belongsToMany(Movie, {
    through: "HeroMovies"
})

Movie.belongsToMany(Hero, {
    through: "MoviesHero"
})

app.use("/heroes", heroesRoutes);

sequelize
    .sync()
    .then(() => {
        console.log("Banco de Dados sincronizado.")
     })
    .catch((error) => {
        console.log("Erro ao sincronizar o Bando", error)
     })

module.exports = app;
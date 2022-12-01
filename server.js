const express = require('express')
const app = express()
const port = process.env.PORT || 3000
require("dotenv").config()

app.get(`/`, (req, res) => {
    res.send(`<h2>99 Bottles of beer on the wall</h2>
    <a href = "/98">Take one down, pass it around<a/>`)
})

app.get(`/:numOfBottles`, (req, res) => {
    let numOfBottles = req.params.numOfBottles
    if (numOfBottles > 0) {
    res.send(`<h3>${numOfBottles} Bottles of beer on the wall</h3>
    <a href = "/${numOfBottles -1}">Take one down, pass it around<a/>`)}
    else {
        res.send(`I'm sorry to be the one who has to tell you - there is no more beer. <a href = "/">Buy more beer<a/>`)
    }
})

//
/*
99 little bugs in the code
99 little bugs
Take on down
Patch it around
127 bugs in the code

//Make the bugs go down by one, but then have some sort of functionality where the bug count can randomly go up

You have a lot of freedom to make it work how you want!
*/
/*app.get(`/`, (req, res) => {
    res.send(`<h2>99 little bugs in the code</h2>
    <a href = "/98">Take one down, patch it around<a/>`)
})

app.get(`/:numOfBugs`, (req, res) => {
    let numOfBugs = req.params.numOfBugs
    if (numOfBugs === 'number' && numOfBugs < 99) {
    res.send(`<h3>${numOfBugs} little bugs</h3>
    <a href = "/${numOfBugs--}">Take one down, patch it around<a/>`)}
    else {
        res.send(`${Math.floor(Math.random()*((numOfBugs*10)))} bugs in the code <a href = "/">Fix more bugs<a/>`)
    }
})
*/

//${Math.floor(Math.random()*numOfBugs/100)}
app.listen(port, (req, res) => {
    console.log(`listening to port ${port}`)
})


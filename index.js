const express = require('express')
const app = express();
const A = 2000
const students = [
    {
        Name: "John Doe",
        Age: 20,
        Grade: "A"
    },
    {
        Name: "Jane Smith",
        Age: 22,
        Grade: "B"
    },
    {
        Name: "Alex Smith",
        Age: 42,
        Grade: "B"
    },
    {
        Name: "Mark Doe",
        Age: 23,
        Grade: "B"
    },
    {
        Name: "Max Doe",
        Age: 21,
        Grade: "B"
    },

    


]

const music = [
    {
        id: 1,
        stage_name: "Wizkid",
        real_name: "Ayodeji Ibrahim Balogun",
        age: 34,
        state_of_origin: "Lagos State",
        genre: ["Afrobeats", "Afropop"],
        record_label: "Starboy Entertainment",
        popular_songs: ["Essence", "Ojuelegba", "Come Closer"],
        instagram: "@wizkidayo",
        image: "https://seeafricatoday.com/wp-content/uploads/2023/02/Wizkid.jpg",
        music_link: "https://open.spotify.com/artist/3TVXtAsR1Inumwj472S9r4",
        debut_year: 2010
    },

    {
        id: 2,
        stage_name: "Davido",
        real_name: "David Adedeji Adeleke",
        age: 31,
        state_of_origin: "Osun State",
        genre: ["Afrobeats", "Pop"],
        record_label: "Davido Music Worldwide (DMW)",
        popular_songs: ["Fall", "If", "Unavailable"],
        image: "https://seeafricatoday.com/wp-content/uploads/2023/02/Davido.webp",
        instagram: "@davido",
        debut_year: 2011
    },

    {
        id: 3,
        stage_name: "Burna Boy",
        real_name: "Damini Ebunoluwa Ogulu",
        age: 33,
        state_of_origin: "Rivers State",
        genre: ["Afrofusion", "Dancehall"],
        record_label: "Spaceship Entertainment",
        popular_songs: ["Last Last", "Ye", "Gbona"],
        instagram: "@burnaboygram",
        image: "https://seeafricatoday.com/wp-content/uploads/2022/07/Burna-Boy-concert.jpg",
        debut_year: 2012
    },

    {
        id: 4,
        stage_name: "Olamide",
        real_name: "Olamide Adedeji",
        age: 35,
        state_of_origin: "Ogun State",
        genre: ["Afrobeats", "Rap"],
        record_label: "YBNL Nation",
        popular_songs: ["Wo", "Rock", "Motigbana"],
        instagram: "@olamide",
        debut_year: 2011
    },

    {
        id: 5,
        stage_name: "Rema",
        real_name: "Divine Ikubor",
        age: 24,
        state_of_origin: "Edo State",
        genre: ["Afrobeats", "Trap"],
        record_label: "Mavin Records",
        popular_songs: ["Calm Down", "Dumebi", "Soundgasm"],
        instagram: "@heisrema",
        debut_year: 2019
    },

    {
        id: 6,
        stage_name: "Tems",
        real_name: "Temilade Openiyi",
        age: 29,
        state_of_origin: "Lagos State",
        genre: ["R&B", "Afrobeats"],
        record_label: "RCA Records",
        popular_songs: ["Free Mind", "Essence", "Damages"],
        instagram: "@temsbaby",
        debut_year: 2018
    },

    {
        id: 7,
        stage_name: "Fireboy DML",
        real_name: "Adedamola Adefolahan",
        age: 29,
        state_of_origin: "Ogun State",
        genre: ["Afrobeats", "R&B"],
        record_label: "YBNL Nation",
        popular_songs: ["Peru", "Vibration", "Jealous"],
        instagram: "@fireboydml",
        debut_year: 2019
    },
    {
        id: 8,
        stage_name: "Ayra Starr",
        real_name: "Oyinkansola Aderibigbe",
        age: 22,
        state_of_origin: "Kwara State",
        genre: ["Afrobeats", "Pop"],
        record_label: "Mavin Records",
        popular_songs: ["Rush", "Bloody Samaritan", "Away"],
        instagram: "@ayrastarr",
        debut_year: 2021
    }
]






app.get('/home', (req, res) => {
    res.send('Welcome Home')
    console.log('welcome');
})

app.get("/student", (req, res) => {
    res.send(students)
})

app.get("/artist", (req, res) => {
    res.send(music)
})

app.listen(A, () => {
    console.log(`I am running on port 2000`);

})

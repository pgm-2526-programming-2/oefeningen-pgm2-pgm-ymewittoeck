//Ophalen van waardes uit een array of object en die opslaan in een variable

const person = ["Yme", "Wittoeck"]

const firstName = person[0]
const lastName = person[1]


//destructuring
//DOor aan de linkerzijde vierkante haakjes te gebruike weten we dat we waardes uit een array gaan destructuren
const [firstN, lastN] = ["Yme", "Wittoeck"]

const results = ["Ignace", "Arif", "KObe", "Justin"]
const [firstWinner, ,thirdWinner] = results // je kan elementen overslaan

console.log(firstWinner, thirdWinner)

const songs = [
    {
        name: Ophelia,
        artist: "Taylor Swift"
    },
    {
        name:"Still DRE",
        artist: "Snoop Dogg"
    }
]

const [,firstTrack] = songs

//Combinatie van de rest operator and destructuring
//Doel = array opsplitsen in eerste element en de rest
const [head, ...tail] = [1, 2, 3, 4,5] // Tail is een array met [2, 3, 4, 5]
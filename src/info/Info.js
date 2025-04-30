import self from "../img/self4.png"
import mock1 from "../img/veramo1.png"
import mock2 from "../img/veramo2.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Nick",
    lastName: "Reynolds",
    initials: "NR", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Full Stack Developer and Product Manager",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '👦🏻',
            text: 'building Apps for People'
        },
        {
            emoji: '🌎',
            text: 'based in the US'
        },
        {
            emoji: "💼",
            text: "Looking for work"
        },
        {
            emoji: "📧",
            text: "nicholas.s.reynolds@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://github.com/nickreynolds",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/reynoldsnick/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hi! I'm Nick. I led Identity R&D at Consensys Mesh, studied Digital Media Design at the University of Pennsylvania, and work to build a better internet with more agency.",
    skills:
        {
            proficientWith: ['javascript', 'typescript', 'nodejs', 'react', 'react-native', 'solidity', 'golang'],
            exposedTo: ['rust', 'python']
        }
    ,
    hobbies: [
        {
            label: 'climbing',
            emoji: '🧗🏼'
        },
        {
            label: 'biking',
            emoji: '🚴🏼'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'cooking',
            emoji: '🌶'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Veramo",
            source: "https://github.com/decentralized-identity/veramo", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "Bringing Identity to AI",
            blogpost: "https://medium.com/veramo/veramo-didcomm-bringing-identity-to-ai-f7efd1fbdf5d",
            image: mock2
        }
    ]
}
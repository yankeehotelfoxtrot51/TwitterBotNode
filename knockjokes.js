console.log('running...')

var jokes = [
    {name: 'Dozen', answer: 'anybody want to let me in?'},
    {name: 'Avenue', answer: 'knocked on this door before?'},
    {name: 'Ice Cream', answer: 'if you don\'t let me in!'},
    {name: 'Adore', answer: 'is between us. Open up!'},
    {name: 'Lettuce', answer: 'in. It\'s cold out here!'},
    {name: 'Bed', answer: 'you can not guess who I am.'},
    {name: 'Al', answer: 'give you a kiss if you open the door.'},
    {name: 'Olive', answer: 'you!'},
    {name: 'Abby', answer: 'birthday to you!'},
    {name: 'Rufus', answer: 'the most important part of your house.'},
    {name: 'Cheese', answer: 'a cute girl.'}
]

function completeJoke(){
    console.log('running complete joke...');
    var joke = jokes[Math.floor(Math.random()*jokes.length)];
    console.log('knock knock, ' + 
    '\n' + 'who\'s there? ' + 
    '\n' + joke.name + 
    '\n' + joke.name + ' who?' + 
    '\n' + '...' +
    '\n' + joke.name + ' ' + joke.answer);
}

//completeJoke();
exports.completeJoke = completeJoke;
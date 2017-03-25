var option = window.prompt('"Okay you little pest, I finally caught you! You ve been a thorn in my side for far too long! The time has come Mr. Stanning. You can no longer stop me, especially now since I have got you tied up with my super strong black licorice rope! Don’t even try to chew through it, remember, you’re allergic!” "Okay Stanning, you got this, this is my chance to escape and save the day like the hero I am.” type "eat" to eat the licorice, type "wait" to wait for help, or type "call" to call the squad')
option = option.trim()
option = option.toLowerCase()

var randomNumber = Math.random()
var dayTime = Math.random()
var helpful = Math.random()
if (option === 'eat') {
  var confirm = window.confirm('Are you sure? This is a really important choice.')
  if (confirm === true) {
    window.alert('You start chewing through the licorice')
    if (randomNumber > 0.7) {
      window.alert('You knew about your alergies, yet you still did this? Your alergies cause you to burst into flames and die.')
    } else if (randomNumber > 0.4) {
      window.alert('Defeating him was more important than your alergies. You swollow your pride and a lot of licorice and break free. You beat him up! Great job!')
    } else {
      window.alert('You start biting at the licorice and realize it was just black licorice simply painted red, oddly enough you are not alergic to black licorice. It is actually your favorite type of food, you find yourself getting carried away with eating it and forget why you were there in the first place. The bad guy has time to run away! Way to go, I guess? *sigh* ')
    }
  } else {
    window.alert('You decide eating the licorice is a bad idea.')
  }
} else if (option === 'wait') {
  var favoriteNumber = window.prompt('What was your least favorite number again?')
  favoriteNumber = favoriteNumber.trim()
  favoriteNumber = parseInt(favoriteNumber)
  if (isNaN(favoriteNumber)) {
    favoriteNumber = 100
  }
  if (favoriteNumber >= 50) {
    number = 'a lot of'
  } else {
    number = favoriteNumber
  }
  window.alert('Feeling you have no real options here, you give into despair for ' + number + ' years, you lose.')
} else if (option === 'call') {
  window.alert('You lean back and call the squad with your loudest voice')
  if (dayTime > 0.5 && helpful > 0.4 ) {
    window.alert('Your squad bursts through the door, unties you, and together you beat up the baddies')
  } else {
    window.alert('I guess you didn\'t yell loud enough, whoops. You lose.')
  }
} else {
  window.alert('That was not a valid option, sorry')
}

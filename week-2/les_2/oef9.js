let woordenArray = ['appel', 'peer', 'kiwi', 'banaan']

let langsteWoord = woordenArray[0]

for (let i = 1; i < woordenArray.length; i++) {
  if (woordenArray[i].length > langsteWoord.length) {
    langsteWoord = woordenArray[i]
  }
}


console.log(langsteWoord)
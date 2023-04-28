function char(str){
    const word = str.split(' ')
    let shortWord = word[0]
    let longWord = word[0]
    
    for(let i = 0 ; i < word.length ; i++){
        let words = word[i]

        if(words.length < shortWord.length){
            shortWord = words
        }
        if(words.length > longWord.length){
            longWord = words
        }


    }
    console.log(longWord , shortWord)

}



char('My most important friend is my Mother, I like her.')
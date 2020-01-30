const getPossibleCriminals = function(possibleCriminalName){
    possibleCriminalName = possibleCriminalName.toLowerCase();
    const criminalsList = getCriminals();
    const criminalsNames = getNames(criminalsList);
    let results = [];
    for(i = 0; i < criminalsList.size; i++){
        firstName = criminalsNames[i];
        aliases = (criminalsList.get(firstName) ? criminalsList.get(firstName) : "No known aliases")
        //if there's an exact match...
        if(firstName.toUpperCase() === possibleCriminalName.toUpperCase()){
            results.push({result: `First name: ${firstName}, Aliases: ${aliases}`, priority: 1})
        } 
        //if there's no exact match, check for partial matches
        else if(firstName.toUpperCase().includes(possibleCriminalName.toUpperCase())){
            results.push({result: `First name: ${firstName}, Aliases: ${aliases}`, priority: 2})
        } 
        //if there are no partial matches, check for any matching with aliases
        else if(aliases.toUpperCase().includes(possibleCriminalName.toUpperCase())){
            results.push({result: `First name: ${firstName}, Aliases: ${aliases}`, priority: 3})
        }
    }

    return getHighestPriorityResult(results);
}

const getHighestPriorityResult = (results) => {
    let highestPriority;
    for(let i = 0; i < results.length; i++){
        if (i === 0) highestPriority = results[0].priority
        else if(highestPriority < results[i].priority) highestPriority = results[i].priority
    }
    let possibleCriminals = [];
    results.filter(result => result.priority === highestPriority).forEach(element => {
        possibleCriminals = [...possibleCriminals, element.result]
    });
    return possibleCriminals;
}

const getNames = (criminals) => {
    let criminalsNames = [];
    for (const [key, value] of criminals) {
        criminalsNames.push(key)
      }
    return criminalsNames
}

const getCriminals = () => {
    var criminals = new Map();
    criminals.set("Paul White", "Roger Night, Peter Llong Jr."); 
    criminals.set("Roger Fedexer", "Rob Ford, Pete Lord, Roger McWire"); 
    criminals.set("Paul White Jr.", null);
    criminals.set("Red Fortress", "Roger Rabbit, Ross Winter"); 
    criminals.set("Redford Fort", "Red Strong, Red Fort");

    return criminals;
}

module.exports = {
    getPossibleCriminals
};
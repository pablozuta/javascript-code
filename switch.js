const favoriteAnimal = "bobcat"

switch(favoriteAnimal) {
    case "jaguar":
    case "bobcat":
    case "cat": {
        console.log("All Cats Are Beautiful");
        break
    }
    case "dog": {
        console.log("Dogs are Good Boys");
        break
    }
    case "shark": {
        console.log("Interesting Choice");
        break
    }
    default: {
        console.log("Never Heard of That Animal Bro");
    }
}
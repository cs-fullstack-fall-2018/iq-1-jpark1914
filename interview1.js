var password = "help";
var input =  password;


checkUnique();
checkPassword()
function checkUnique()
{

    if (input) {
        var inputArr = input.split(" ");

        for (var i = 0; i < inputArr.length; i++) {
            var arr1 = inputArr.charAt(i).join();
            for (var j = i + 1; j < inputArr.length; j++) {
                var arr2 = inputArr.charAt(j + 1).join();
            }
        }
        if (arr1 !== arr2) {
            console.log("They have unique characters");
        } else {
            console.log("They have simliar characters")
        }
    }
    return newInput
}

function checkPassword() {
    if (password == newInput) {
        return console.log("Passwords Match");
    } else {
        return console.log("Passwords Don't Match");
    }
}

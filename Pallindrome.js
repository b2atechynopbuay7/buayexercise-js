
function Palindrome(entry){
   
       var formated_string = entry.toLowerCase();
        var counter = 0;
   
        //if entered string is empty return false
        if(formated_string ==="") {
            return false;
        }
    
        if ((formated_string .length) % 2 === 0) {
            counter = (formated_string .length) / 2;
        } else {
    // If the length of the string is 1 then it becomes a palindrome
            if (formated_string .length === 1) {
                console.log("Entry is a palindrome.");
                return true;
            } else {
    // If the length of the string is odd ignore middle character
                counter = (formated_string .length - 1) / 2;
            }
        }
    // Loop through to check the first character to the last character and then move next
        for (var x = 0; x < counter; x++) {
    // Compare characters and drop them if they do not match 
            if (formated_string [x] != formated_string .slice(-1-x)[0]) {
                console.log("Entry is not a palindrome.");
                return false;
            }
        }
        console.log("The entry is a palindrome.");
        return true;
    }

// To check with an example
Palindrome("madam");
Palindrome("Mohamed");
Palindrome("Buay");
// Example 1:
// Input: s = "()"
// Output: true
// Example 2:
// Input: s = "()[]{}"
// Output: true
// Example 3:
// Input: s = "(]"
// Output: false
 
s = "()";

var isValid = function(s) {
    splited = s.split('');
    console.log(splited);
    for (i=0;i<s.length;i++)
    {
        if(splited[i]=="(" && splited[i+1]==")" || splited[i]=="[" && splited[i+1]=="]" ||splited[i]=="{" && splited[i+1]=="}")
        {
            return "true";
        }
        else{
            return "false";
        }
    }
};

console.log(isValid(s));
/* একটা ফাংশন লিখবা যেটাকে তুমি কোন সংখ্যাকে ইনপুট হিসেবে দিলে সে সেই সংখ্যার square করে সেই square কে রিটার্ন করবে। অর্থাৎ তুমি ইনপুট হিসেবে 5 দিলে সেটাতে স্কয়ারে হিসেবে 25 আউটপুট হিসেবে পাবে।  */ 

function getSquare(num){
    return Math.pow(num, 2);
}

const number = 5;

console.log();
let setSquare = getSquare(number);
console.log("The square of " , number, " is: ", setSquare);
console.log();
//A 90-100, B 90-89, C 70-79, D 60-69, F 0-59

let studentScore = function (score, possibleScore){
    if (typeof score === 'number' && typeof possibleScore === 'number') {
        let percentage = (score * 100) /  possibleScore;
        let letterGrade = '';
        if (percentage >= 90) {
            letterGrade = 'A';
        }
        else if (percentage >= 80 && percentage <= 89) {
            letterGrade = 'B';
        } 
        else if (percentage >= 70 && percentage <= 79) {
            letterGrade = 'C';
        }
        else if (percentage >= 60 && percentage <= 69) {
            letterGrade = 'D';
        }
        else{
            letterGrade = 'F';
        }
    
        return `You got a ${letterGrade} (${percentage})`;
    
    } else {
        throw Error ('Please provide numbers.');
    }
};

try {
    console.log(studentScore(15, 20));
    console.log(studentScore(19, 20));
    console.log(studentScore('8', 20));
} catch (error) {
    console.log(error.message);
};

/*

There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks 😉
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

*/

/* Test 1
let teamDolphins1 = 96
let teamDolphins2 = 108
let teamDolphins3 = 89
let teamKoalas1 = 88
let teamKoalas2 = 95
let teamKoalas3 = 40
*/
/* Test 2
let teamDolphins1 = 97
let teamDolphins2 = 112
let teamDolphins3 = 101
let teamKoalas1 = 109
let teamKoalas2 = 95
let teamKoalas3 = 123
*/

let teamDolphins1 = 97
let teamDolphins2 = 112
let teamDolphins3 = 101
let teamKoalas1 = 109
let teamKoalas2 = 95
let teamKoalas3 = 106


let avgTeamDolphins = (teamDolphins1 + teamDolphins2 + teamDolphins3) / 3
console.log(`Team Dolphin score ${avgTeamDolphins} points`)
let avgTeamKoalas = (teamKoalas1 + teamKoalas2 + teamKoalas3) / 3
console.log(`Team Koalas score ${avgTeamKoalas} points`)

if (avgTeamDolphins >= 100 || avgTeamKoalas >= 100) {
    if (avgTeamDolphins > avgTeamKoalas)
        console.log(`Team Dolphins win`)
    else if (avgTeamKoalas > avgTeamDolphins)
        console.log(`Team Koalas win`)
    else
        console.log(`Both has same points, Match is draw`)
} else
    console.log(`Neither of them score 100 or more, So none are winner`)
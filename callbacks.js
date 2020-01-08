// Callbacks

// Purpose of this is act on the obj and selectively pull out the part of the obj and return an another obj. We can do that with help of callback pattern.
let newObj = pullScores(learner1, 1);
// s1q1 = section1 and quiz 1
let learner1 = {
    firstName: "Neeraj",
    lastName: "Kumar",
    scores: {
        s1q1: "5:8",
        s1q2: "9:10",
        s1q3: null,
        s1q4: "1:5",
        s1q5: "12:15",
        s2q1: "6:8",
        s2q2: null,
        s2q3: "4:20",
        s2q4: null,
        s3q1: null,
        s3q2: "6:10",
        s3q3: "7:7"
    }
};

const pullScores = function (obj, section = 1) {
    let scores = {};

    for (let key in obj.scores) {
        if (key.includes("s" + section)) {
            scores[key] = obj.scores[key];
        }
    }
    return scores;
}


// Callback pattern: we pass a function into another function

const pullScores = function (obj, section = 1, callback) {
    let scores = {};

    for (let key in obj.scores) {
        if (key.includes("s" + section)) {
            let val = obj.scores[key]
            // Now we check callback make sure its a function we don't want to invoke the callback function unless really is a function, and we check that we invoke the function passing the values and it return a result and those results give place instead of scores[key] instead of original value
            if (typeof callback === "function") {
                val = callback(val);
            }
            scores[key] = val;
        }
    }
    return scores;
}

let newObj = pullScores(learner1, 1);

console.log(newObj) // { s1q1: "5:8", s1q2: "9:10", s1q3: null, s1q4: "1:5", s1q5: "12:15"}

// now we passing the callback in the parameters, let we wanted to take any null values and set them to 0;

const pullScores = function (obj, section = 1, callback) {
    let scores = {};

    for (let key in obj.scores) {
        if (key.includes("s" + section)) {
            let val = obj.scores[key]
            if (typeof callback === "function") {
                val = callback(val);
            }
            scores[key] = val;
        }
    }
    return scores;
}

let newObj = pullScores(learner1, 1, function (val) {
    if (val === null) {
        return 0;
    } else {
        return val
    }
})

// now
console.log(newObj);
// { s1q1: "5:8", s1q2: "9:10", s1q3: 0, s1q4: "1:5", s1q5: "12:15"};

// Now we return over score based on 0 to 100;

let newObj = pullScores(learner1, 1, function (val) {
    if (val === null) {
        return 0;
    } else {
        let arr = val.split(":");
        return arr[0] / arr[1] * 100;
    }
})

// Now
console.log(newObj);
// { s1q1: 62.5, s1q2: 90, s1q3: 0, s1q4: 20, s1q5: 80};

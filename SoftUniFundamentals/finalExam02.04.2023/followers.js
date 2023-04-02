function task(arr) {
    let obj = {};
    let line = arr.shift();
  
    while (line !== "Log out") {

        if (line.includes('New')) {
            let foll = line.split('New follower: ');
            let userName = foll[1];
            if (!obj.hasOwnProperty(userName)) {
                obj[userName] = {};
                obj[userName][`likes`] = 0;
                obj[userName][`comments`] = 0;
            }
        }
        else if (line.includes('Like:')) {
            let like = line.split('Like: ');
            let likesLine = like.join('').split(': ');
            let userName = likesLine[0];
            let likesCount = Number(likesLine[1]);

            if (!obj.hasOwnProperty(userName)) {
                obj[userName] = {};
                obj[userName][`likes`] = likesCount;

            }
            else {
                obj[userName][`likes`] += likesCount;
            }
        }
        else if (line.includes('Comment:')) {
            let comment = line.split('Comment: ');
            let userName = comment[1]
            if (!obj.hasOwnProperty(userName)) {
                obj[userName] = {};
                obj[userName][`comments`] = 1;
            }
            else {
              if(obj[userName].hasOwnProperty('comments')) {
              obj[userName][`comments`] += 1;
              }
              else {
                   obj[userName][`comments`] = 1;
                 }
            }

        }
        else if (line.includes('Blocked:')) {
            let block = line.split('Blocked: ');
            let userName = block[1];
            if (!obj.hasOwnProperty(userName)) {
                console.log(`${userName} doesn't exist.`);
            }
            else {
                delete obj[userName];
            }
        }

        line = arr.shift();
    }
    let countFollowersArray = Object.keys(obj);
    console.log(`${countFollowersArray.length} followers`);
for (const key in obj) {
    
    let sumLikes = obj[key]['likes'];
    if(sumLikes === undefined) {
        sumLikes = 0;
    }
    let sumComments = obj[key]['comments'];
    if(sumComments === undefined) {
        sumComments = 0;
    }
    let sum = sumLikes + sumComments;
    console.log(`${key}: ${sum}`);
}
}
task((["Blocked: Amy",
"Comment: Amy",
"New follower: Amy",
"Like: Tom: 5",
"Like: Ellie: 5",
"Log out"])
)
task((["Like: Katy: 3",
"Comment: Katy",
"New follower: Bob",
"Blocked: Bob",
"New follower: Amy",
"Like: Amy: 4",
"Log out"])
)
task((["New follower: George",
"Like: George: 5",
"New follower: George",
"Log out"])
)
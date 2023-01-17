function triangle(t) {
    for (let i = 1; i <= t; i++) {
        let row = "";
        for (let j = 1; j <= i; j++) {
          row += i + " ";
        }
        console.log(row);
      }
    }

triangle(100)
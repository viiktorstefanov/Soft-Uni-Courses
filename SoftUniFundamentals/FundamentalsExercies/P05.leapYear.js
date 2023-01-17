function leap(a) {
    if ((0 == a % 4) && (0 != a % 100) || (0 == a % 400)) {
        console.log('yes');
    } else {
        console.log('no');
    }
}
leap(2000)
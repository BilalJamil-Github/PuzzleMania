let xposition;
let anotherXposition;
let boxes = document.getElementsByClassName('boxes');
let X = document.getElementById('X');
boxes = Array.from(boxes);
let arr = [];
while (arr.length != 8) {
    let rn = Math.floor(Math.random() * 8 + 1);
    if (!arr.includes(rn)) {
        arr.push(rn);
    }
}
arr[8] = "";
console.log(arr);
arr.forEach((element, index) => {
    boxes[index].innerHTML = element;
    boxes[index].style.fontSize = "60px";
    boxes[index].style.textAlign = 'centre';
    boxes[index].style.color = 'white';
    boxes[index].style.fontWeight = 'bold';
});

document.onkeydown = (e) => {
    switch (e.keyCode) {
        case 38: // Up arrow
            if (anotherXposition != 0 && anotherXposition != 1 && anotherXposition != 2) {
                xposition = arr.indexOf("");
                anotherXposition = xposition - 3;
                console.log(anotherXposition);
                arr[xposition] = arr[anotherXposition];
                arr[anotherXposition] = "";
                console.log(arr);
            }
            break;
        case 40: // Down arrow
            if (anotherXposition != 7 && anotherXposition != 8 && anotherXposition != 6) {
                xposition = arr.indexOf("");
                anotherXposition = xposition + 3;
                console.log(anotherXposition);
                arr[xposition] = arr[anotherXposition];
                arr[anotherXposition] = "";
                console.log(arr);
            }
            break;
        case 37: // Left arrow
            if (anotherXposition != 0 && anotherXposition != 3 && anotherXposition != 6) {
                xposition = arr.indexOf("");
                anotherXposition = xposition - 1;
                console.log(anotherXposition);
                arr[xposition] = arr[anotherXposition];
                arr[anotherXposition] = "";
                console.log(arr);
            }
            break;
        case 39: // Right arrow
            if (anotherXposition != 2 && anotherXposition != 5) {
                xposition = arr.indexOf("");
                if (xposition < 8) {
                    anotherXposition = xposition + 1;
                }
                console.log(anotherXposition);
                arr[xposition] = arr[anotherXposition];
                arr[anotherXposition] = "";
                console.log(arr);
            }
            break;
    }
    arr.forEach((element, index) => {
        boxes[index].innerHTML = element;
    });
};
function checkResult() {

    // Store marks in an array
    let marks = [
        Number(document.getElementById("s1").value),
        Number(document.getElementById("s2").value),
        Number(document.getElementById("s3").value),
        Number(document.getElementById("s4").value)
    ];

    let total = 0;

    // Loop to calculate total
    for (let i = 0; i < marks.length; i++) {
        total += marks[i];
    }

    document.getElementById("sum").innerHTML = "Total Marks: " + total + " / 400";

    // Decision making
    let result;

    if (total >= 300) {
        result = "PASS – Excellent";
    } else if (total >= 200) {
        result = "PASS";
    } else {
        result = "FAIL";
    }

    document.getElementById("status").innerHTML = result;
}

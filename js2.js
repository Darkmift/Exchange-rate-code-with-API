var promise1 = new Promise(function(resolve, reject) {
    $.get("returnjson.php", function(data) {
        resolve(data);
    });

});

promise1
    .then(function(resolve) {
        console.log(resolve);
        // expected output: "Success!"
    });
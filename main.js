function bubbleSort(states) {
    var n = states.length;
    var swapped;

    do {
        swapped = false;
        for (var i = 0; i < n - 1; i++) {
            if (states[i] > states[i + 1]) {
                // Swap elements if they are in the wrong order
                var temp = states[i];
                states[i] = states[i + 1];
                states[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);

    return states;
}

var states = ["Abia", "Imo", "Anambra", "Enugu", "Ebonyi"];
var sortedStates = bubbleSort(states.slice()); 
console.log(sortedStates);

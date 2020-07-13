var worker;
function startWorker() {
    worker = newWorker("JS/worker.js")
    worker.onmessage = function(event) {
        document.getElementById("output").innerHTML += '<li>' + event.data + '</li>';
    };
}
function stopWorker() {
    worker.terminate() ;
}
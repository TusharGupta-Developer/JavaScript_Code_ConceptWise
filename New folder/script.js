var a = [];
var b = [];

for (let i = 0; i < 368; i++) {
    a[i] = 0;
    b[i] = 1;
}

function updateContainer() {
    var containers = document.getElementsByClassName("container1");

    for (let i = 0; i < containers.length; i++) {
        var containerContent = '';
        for (let j = 0; j < 368; j++) {
            containerContent += a[j] + " " + b[j] + " ";
        }
        containers[i].textContent = containerContent;
    }
}
for (let i = 0; i < 368; i++) {
    setInterval(() => {
        if (a[i] === 0) {
            a[i] = 1;
        } else {
            a[i] = 0;
        }
        if (b[i] === 0) {
            b[i] = 1;
        } else {
            b[i] = 0;
        }
        updateContainer();
    }, 1000);
}

// Initial content update
updateContainer();


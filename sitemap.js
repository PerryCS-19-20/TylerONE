
function buildMap(x) {
    var createList = document.createElement("ul")
    var body = document.getElementById(x);
    body.appendChild(createList);

    var list1 = document.createElement("li");
    createList.appendChild(list1);
    var a1 = document.createElement("a")
    a1.textContent = "Home";
    a1.href = "index.html";
    list1.appendChild(a1);

    var list3 = document.createElement("li");
    createList.appendChild(list3);
    list3.textContent = "Class Projects";

    var createlist2 = document.createElement("ul");
    list3.appendChild(createlist2);


    var list9 = document.createElement("li");
    createlist2.appendChild(list9);
    var a8 = document.createElement("a")
    a8.textContent = "Java Event";
    a8.href = "javaEvent.html";
    list9.appendChild(a8);
}

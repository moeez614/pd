

console.log("moeezian webwork");

const timu = document.getElementById("list-menu");
const login = document.getElementById("logint");
const bar = document.createElement("i");
const mori = document.getElementById("mori");

if (window.matchMedia("(max-width: 768px)").matches) {
    timu.style.display = "none";
    login.style.display = "none";
    bar.classList.add("fa-solid", "fa-bars");
    bar.style.color = "black";
    mori.appendChild(bar);
    mori.style.paddingLeft = "10px";
    mori.style.fontSize = "20px";
    mori.addEventListener("click", () => {
        let box = document.createElement("div");
        box.innerHTML = `<ul style = "list-style: none;padding: 10px">
                    <li><a href="" style="text-decoration:none; color:black;list-style: none">Buy</a></li>
                    <li><a href="" style="text-decoration:none ; color:black;list-style: none">Homes</a></li>
                    <li><a href="" style="text-decoration:none ; color:black;list-style: none">Plots</a></li>
                    <li><a href="" style="text-decoration:none ; color:black;list-style: none">Property</a></li>
                    <li><a href="" style="text-decoration:none ; color:black;list-style: none">Commercial</a></li>
                </ul>`;
        document.body.appendChild(box);
        bar.classList.add("fa-solid", "fa-xmark");
        bar.style.color = "black";
        bar.style.fontSize = "25px";
        mori.addEventListener("click", () => {
            bar.style.display = "none";
            mori.classList.add("fa-solid", "fa-bars");
            mori.style.color = "black";
            box.innerHTML = "";
        })
        // box edit ho ria paii janna
        box.style.position = "absolute";
        box.style.top = "130px";
        box.style.left = "50%";
        box.style.backgroundColor = "white";
        box.style.listStyle = "none";
        box.style.pad
        box.style.display = "flex";

        // box.style.
        // document.body.appendChild(box);

    })
}

const find = document.getElementById("find-btn");

find.addEventListener("click", () => {
    let city = document.getElementById("dcity");
    console.log(city.value)
    let address = document.getElementById("address");
    let type = document.getElementById("dtype");
    let budget = document.getElementById("budget");
    console.log(budget.value)
    if (budget.value < 1000) {
        window.alert("Please enter valid budget");
    }
    let area = document.getElementById("area");
    if (area.value < 1) {
        window.alert("please enter valid area");
    }
    let url = {
        city: city.value,
        address: address.value,
        type: type.value,
        budget: budget.value,
        area: area.value
    }
    console.log(url);

    fetch("http://Localhost:3000/form", {
        method: "POST",
        headers: {
            "Content-Type": "applcation/json"
        },
        body: JSON.stringify(url)
    })
        .then(response => response.json())
        .then(data => console.log(data))

})
// 12 june 2025
let divnew=document.createElement("div");

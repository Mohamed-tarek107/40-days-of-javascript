const tabs = document.querySelector(".tabs");
console.log("Tabs element:", tabs);

const switcher = function switchToTabs(tabnumber){
    console.log("Switching to tab:", tabnumber);
    const childs = tabs.querySelector(".tab-headers").children;
    const contents = tabs.querySelector(".tab-contents").children;
    console.log("Tab headers:", childs);
    console.log("Tab contents:", contents);

   for (let child of childs) {
    if (child.dataset.tab == tabnumber) {
        child.classList.add("active");
    } else {
        child.classList.remove("active");
    }
}
    for (let content of contents){
        if(content.dataset.tab == tabnumber)
        {
           content.classList.add("active")
        }else{
            content.classList.remove("active")
        }
    }
}

tabs.querySelector(".tab-headers").addEventListener("click", function (e){
    console.log("Tab header clicked:", e.target);
    if(e.target.classList.contains("tab")){
        const tabnumber = e.target.dataset.tab;
        console.log("Tab number from click:", tabnumber);
        switcher(tabnumber);
    }
});

document.addEventListener("keydown", (e) => {
    console.log("Key pressed:", e.key);
    if (e.key === "1") switcher("1");
    if (e.key === "2") switcher("2");
    if (e.key === "3") switcher("3");
});
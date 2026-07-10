function createCard(title, cName, views, yearsOld, duration, thumbnail){ 
    let card = document.querySelector(".container")
    card.innerHTML = `
    <div class="card">
    <div class="thumbnail">
        <img src="${thumbnail}">
        <span class="duration">${duration}</span>
    </div>

    <div class="content">
        <h4>${title}</h4>

        <p>${cName} • ${views} views • ${yearsOld} years ago</p>
    </div>
</div>
    `
    document.body.append(card)
    
    
}

createCard(
    "Installing VS Code & How Websites Work | Sigma Web Development Course-Tutorial #1",
     "CodeWithHarry", 
     7.6 + "M" + "views" , 2, 
     "31:20", 
     "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw"
    )





function newImage(url,left, bottom){
    let Entity = document.createElement("img");
    Entity.src = url;
    Entity.style.position = "fixed";
    Entity.style.left = left + 'px';
    Entity.style.bottom = bottom + 'px';
    document.body.append(Entity);
}

newImage('assets/green-character.gif', 100, 100)
newImage("assets/pine-tree.png", 450, 200); 
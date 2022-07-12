function newImage(url, left, bottom) {
  let Entity = document.createElement("img");
  Entity.src = url;
  Entity.style.position = "fixed";
  Entity.style.left = left + "px";
  Entity.style.bottom = bottom + "px";
  document.body.append(Entity);
}

newImage("assets/green-character.gif", 100, 100);
newImage("assets/pine-tree.png", 450, 200);
newImage("assets/tree.png", 200, 300);
newImage("assets/pillar.png", 350, 100);
newImage("assets/crate.png", 150, 200);
newImage("assets/well.png", 500, 425);

function newItem(url, left, bottom) {
  let Entity = newImage(url, left, bottom);
  Entity.addEventListener("click", () => {
    Entity.remove();
  });
}

newItem("assets/sword.png", 500, 405);
newItem("assets/shield.png", 165, 185);
newItem("assets/staff.png", 600, 100);



// Just to remember code v
// let sword = document.createElement("img");
// sword.src = "assets/sword.png";
// sword.position = "fixed";
// sword.left = "500px";
// sword.bottom = "405px";
// document.body.append(sword);

// sword.addEventListener("click", function () {
//   sword.remove();
// });

const targetElement = document.querySelector(".countries");

fetch("./data.json")
  .then((response) => response.json())
  .then((json) => {
    // const parentDiv = document.createElement("div");
    // const button = document.createElement("button");
    // button.innerHTML = "submit";
    // parentDiv.appendChild(button);
    // targetElement.appendChild(parentDiv);

    for (const el of json) {
      const parentDiv = document.createElement("div");
      const imageDiv = document.createElement("img");
      const countryDataDiv = document.createElement("div");
      const countryNameDiv = document.createElement("div");
      const countryPopulationDiv = document.createElement("div");
      const countryRegionDiv = document.createElement("div");
      const countryCapitalDiv = document.createElement("div");

      parentDiv.className = "country";

      imageDiv.src = el.flags.png;
      imageDiv.height = 150;
      imageDiv.width = 230;
      countryNameDiv.innerText = el.name;
      countryPopulationDiv.innerText = el.population;
      countryRegionDiv.innerText = `Region : ${el.region}`;
      countryCapitalDiv.innerText = el.capital;

      countryDataDiv.append(
        countryNameDiv,
        countryPopulationDiv,
        countryRegionDiv,
        countryCapitalDiv
      );

      parentDiv.append(imageDiv, countryDataDiv);

      targetElement.appendChild(parentDiv);
    }
  });

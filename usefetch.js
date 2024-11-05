console.log("hello fetch");

const divEle = document.getElementById("data-box");

async function fetchdata() {
    try {
        // Display loading message
        divEle.innerHTML = "<p>Loading recipes...</p>";

        const response = await fetch("https://dummyjson.com/recipes");
        
        if (!response.ok) {
            throw new Error("Failed to fetch data. Please try again later.");
        }

        const res = await response.json();
        console.log(res.recipes[0]);  // Log the first recipe for debugging

        // Clear loading message
        divEle.innerHTML = '';

        if (!res.recipes || res.recipes.length === 0) {
            divEle.innerHTML = "<p>No recipes found.</p>";
            return;
        }

        // Loop through the recipes and display
        res.recipes.forEach((recipe, index) => {
            const para = document.createElement("p");

            // Create an ordered list for the ingredients
            const ingredientsList = document.createElement("ol");
            recipe.ingredients.forEach(ingredient => {
                const li = document.createElement("li");
                li.textContent = ingredient;
                ingredientsList.appendChild(li);
            });

            // Create an ordered list for the instructions
            const instructionsList = document.createElement("ol");
            if (recipe.instructions && typeof recipe.instructions === 'object') {
                // Iterate through the instructions object
                Object.entries(recipe.instructions).forEach(([stepNumber, instruction]) => {
                    if (instruction.trim() !== "") {
                        const li = document.createElement("li");
                        li.textContent = instruction.trim();
                        instructionsList.appendChild(li);
                    }
                });
            } else {
                const li = document.createElement("li");
                li.textContent = "Instructions not available.";
                instructionsList.appendChild(li);
            }

            // Compose the recipe details
            para.innerHTML = `
                <span>Recipe ${index + 1}:</span><br>
                <strong>Name:</strong> ${recipe.name}<br>
                <strong>Ingredients:</strong><br>
            `;
            para.appendChild(ingredientsList);  // Append the ordered list for ingredients
            para.innerHTML += `<br><strong>Instructions:</strong><br>`;
            para.appendChild(instructionsList);  // Append the ordered list for instructions
            divEle.append(para);
        });

    } catch (error) {
        console.log(error);
        divEle.innerHTML = `<p class="error">Error: ${error.message}</p>`;
    } finally {
        console.log("Fetch operation completed.");
    }
}

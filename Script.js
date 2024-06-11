
const stack = []; // Crear una array vacío

// Obtener elementos del DOM
const pushButton = document.getElementById("pushButton");
const popButton = document.getElementById("popButton");
const stackContainer = document.querySelector(".stack-container");

// Función para agregar un elemento al array
function pushToStack(element) {
    stack.push(element);
    // Actualizar la representación gráfica (DOM)
    const stackItem = document.createElement("div");
    stackItem.classList.add("stack-item");
    stackItem.textContent = element;
    stackContainer.appendChild(stackItem);
}

// Función para eliminar el ultimo elemento del array
function popFromStack() {
    if (stack.length === 0) {
        alert("No hay elementos para eliminar!!");
        return;
    }
    const removedElement = stack.pop();
    // Actualizar la representación gráfica (DOM)
    stackContainer.removeChild(stackContainer.lastChild);
    alert(`Elemento eliminado: ${removedElement}`);
}

// Evento listeners para los botones
pushButton.addEventListener("click", () => {
    const newElement = prompt("Ingresa un elemento:");
    if (newElement) {
        pushToStack(newElement);
    }
});

popButton.addEventListener("click", () => {
    popFromStack();
});

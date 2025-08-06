console.log("Test_new.js loaded");
function greet(name) {
    const message = `Hello, ${name}!`;
    document.body.innerHTML += `<p>${message}</p>`;
}
// Example usage
greet("Test User");
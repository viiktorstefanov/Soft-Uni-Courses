function extract(content) {
let contentElement = document.getElementById('content');
console.log(contentElement.textContent)
let pattern = /\((?<towns>[A-Za-z\s]+)\)/g;
let matches = contentElement.textContent.matchAll(pattern);
let result = [];
for (const match of matches) {
    result.push(match.groups.towns)
}
return result.join('; ')
}
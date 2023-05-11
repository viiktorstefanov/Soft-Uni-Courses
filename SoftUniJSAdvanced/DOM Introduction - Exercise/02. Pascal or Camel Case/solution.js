function solve() {
   let text = document.getElementById('text').value;
   let typeOfText = document.getElementById('naming-convention').value;
  let result = document.getElementById('result');
  let finalResult = '';

  if(typeOfText === "Camel Case") {
    text = text.toLowerCase();
    for( let i = 0; i < text.length; i++) {
      let currChar = text[i];
      if(currChar === " ") {
        let upperCharr = text[i+1].toUpperCase();
        finalResult += upperCharr;
        i++;
      }
      else {
        finalResult += currChar;
      }
    }
    result.textContent = finalResult;
  }
  else if (typeOfText === "Pascal Case") {
    text = text.toLowerCase();
    for( let i = 0; i < text.length; i++) {
      let currChar = text[i];
      if(i === 0) {
        currChar = text[i].toUpperCase();
      }
      if(currChar === " ") {
        currChar = text[i+1].toUpperCase();
        finalResult += currChar;
        i++;
      }
      else {
        finalResult += currChar;
      }
    }
    result.textContent = finalResult;
  }
  else {
    result.textContent = "Error!"
  }
}

// second way 

function solve() {
  const input = document.getElementById('text').value;
  const namingCase = document.getElementById('naming-convention').value;

  const result = document.getElementById('result');

  const toPascal = (text) =>
    text
      .split(' ')
      .map((w) => w[0].toUpperCase() + w.slice(1).toLowerCase())
      .join('');

  const toCamel = (text) => {
    text = toPascal(text);
    return text[0].toLowerCase() + text.slice(1);
  };

  if (namingCase === 'Pascal Case') {
    result.textContent = toPascal(input);
  } else if (namingCase === 'Camel Case') {
    result.textContent = toCamel(input);
  } else {
    result.textContent = 'Error!';
  }
}
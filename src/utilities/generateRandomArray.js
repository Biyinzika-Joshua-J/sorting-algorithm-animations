function generateRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  
export function listGenerator(min, max, maxBars) {
    let list = [];
    for (let i = 0; i < maxBars; i++) list.push(generateRandomValue(min, max));
    return list;
  }

  
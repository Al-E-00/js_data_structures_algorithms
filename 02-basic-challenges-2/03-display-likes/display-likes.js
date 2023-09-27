function displayLikes(arrNames) {
  switch (arrNames.length) {
    case 0: {
      return 'no one likes this';
    }
    case 1: {
      return `${arrNames[0]} likes this`;
    }
    case 2: {
      return `${arrNames[0]} and ${arrNames[1]} like this`;
    }
    case 3: {
      return `${arrNames[0]}, ${arrNames[1]} and ${arrNames[2]} like this`;
    }
    default: {
      return `${arrNames[0]}, ${arrNames[1]} and ${
        arrNames.length - 2
      } others like this`;
    }
  }
}

module.exports = displayLikes;

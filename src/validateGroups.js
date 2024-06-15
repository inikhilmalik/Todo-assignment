export const validateGroups = (groups) => {
    const allNumbers = new Set();
    groups.forEach(group => {
      for (let i = group.from; i <= group.to; i++) {
        if (i < 1 || i > 10) {
          return false; 
        }
        allNumbers.add(i);
      }
    });
    if (allNumbers.size !== 10) {
      return false; 
    }
  
    groups.sort((a, b) => a.from - b.from); 
    for (let i = 1; i < groups.length; i++) {
      if (groups[i - 1].to !== groups[i].from - 1) {
        return false;
      }
    }
  
    for (let i = 1; i < groups.length; i++) {
      if (groups[i - 1].to >= groups[i].from) {
        return false; 
      }
    }
  
    return true;
  };
  
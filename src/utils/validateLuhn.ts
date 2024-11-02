const validateLuhn = (num: string): boolean => {
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    let intVal = parseInt(num[i]);
    if (i % 2 === num.length % 2) {
      intVal *= 2;
      if (intVal > 9) intVal -= 9;
    }
    sum += intVal;
  }
  return sum % 10 === 0;
};

export default validateLuhn;

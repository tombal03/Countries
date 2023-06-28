export const validateName = (name) => {
  return name !== "";
};

export const validateDifficulty = (difficulty) => {
  return difficulty !== "";
};

export const validateDuration = (duration) => {
  const parsedValue = parseInt(duration, 10);
  
  if (isNaN(parsedValue) || !Number.isInteger(parsedValue) || duration !== parsedValue.toString()) {
    return false;
  }
  return true
};

export const validateSeason = (season) => {
  return season !== "";
};

export const validateSelectedCountries = (selectedCountries) => {
  return selectedCountries.length > 0;
};

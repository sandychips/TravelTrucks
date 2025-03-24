export default function createQueryParams(filters) {
  const params = new URLSearchParams();

  Object.keys(filters).forEach(key => {
    const value = filters[key];
    // Якщо значення фільтра є об'єктом (наприклад, equipment), обробляємо його окремо
    if (typeof value === 'object' && value !== null) {
      Object.keys(value).forEach(subKey => {
        if (value[subKey] !== false) {
          // Додаємо тільки ті параметри, що мають значення, відмінне від false
          params.append(subKey, value[subKey]);
        }
      });
    } else if (value) {
      // Додаємо прості параметри, якщо їх значення не порожнє
      params.append(key, value);
    }
  });

  return params.toString(); // Повертає рядок query параметрів
}

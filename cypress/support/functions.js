export function generateUniqueName(prefix = '') {
    const timestamp = Date.now()
    return prefix + '_' + timestamp
  }

  export function generateUniqueBuyPrice() {
    const minPrice = 1000;
    const maxPrice = 10000;
    return (Math.random() * (maxPrice - minPrice) + minPrice).toFixed(0)
  }
  
  export function generateUniqueSellPrice(buyPrice) {
    const margin = parseFloat(buyPrice) 
    const sellPrice = parseFloat(buyPrice) + margin 
    return sellPrice.toFixed(0)
  }
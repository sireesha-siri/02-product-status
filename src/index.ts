// Write your TypeScript code here
// Define a ProductStatus enum with appropriate values
enum ProductStatus {
  InStock = 0,
  LowStock = 1,
  OutOfStock = 2,
}

// Define a Product object type
type Product = {
  name: string
  price: number
  status: ProductStatus
}

function getProductStatusMessage(status: ProductStatus): string {
  // Your implementation here
  switch (status) {
    case ProductStatus.InStock:
      return 'Product is available'
    case ProductStatus.LowStock:
      return 'Product stock is limited'
    case ProductStatus.OutOfStock:
      return 'Product is currently unavailable'
    default:
      return 'Unknown product status'
  }
}

function printProductInfo(product: Product): void {
  // Your implementation here
  const statusMessage = getProductStatusMessage(product.status)
  console.log(
    `Product: ${product.name}, Price: $${product.price}, Status: ${statusMessage}`,
  )
}

// Test your functions with these examples
const keyboard = {
  name: 'Mechanical Keyboard',
  price: 79.99,
  status: 0, // InStock
}

const monitor = {
  name: 'Gaming Monitor',
  price: 299.99,
  status: 2, // OutOfStock
}

const headphones = {
  name: 'Wireless Headphones',
  price: 149.99,
  status: 1, // LowStock
}

// Print the product information for each product
printProductInfo(keyboard)
printProductInfo(monitor)
printProductInfo(headphones)

export {ProductStatus, getProductStatusMessage, printProductInfo}

Let's practice working with TypeScript enums by implementing a product status tracking system.

### Set Up Instructions

<details>
<summary>Click to view</summary>

- Download dependencies by running `npm install`
- Compile the TypeScript code using `npx tsc`
- Run the compiled code using `node dist/index.js`
</details>

### Functionality

<details>
<summary>Core Functionality</summary>
<br/>

- Create a `ProductStatus` enum with the following status values:

  - `InStock` (value: 0)
  - `LowStock` (value: 1)
  - `OutOfStock` (value: 2)

- Implement the `getProductStatusMessage` function that:

  - Takes a `ProductStatus` parameter
  - Returns a string message based on the product status
  - For `InStock`: "Product is available"
  - For `LowStock`: "Product stock is limited"
  - For `OutOfStock`: "Product is currently unavailable"
  - For any other value: "Unknown product status"

- Implement the `printProductInfo` function that:

  - Takes a product object with `name` (string), `price` (number), and `status` (ProductStatus) properties
  - Logs the product information in a readable format, including the status message

</details>

<details>

<summary>Example</summary>

```
// Using the enum
const keyboard = {
  name: "Mechanical Keyboard",
  price: 79.99,
  status: ProductStatus.InStock
};

printProductInfo(keyboard);
// Output: "Product: Mechanical Keyboard - $79.99 - Product is available"

const monitor = {
  name: "Gaming Monitor",
  price: 299.99,
  status: ProductStatus.OutOfStock
};

printProductInfo(monitor);
// Output: "Product: Gaming Monitor - $299.99 - Product is currently unavailable"


```

</details>

> ### _Things to Keep in Mind_

> - All components you implement should go in the `src/index.js` directory.
> - Don't change the component folder names as those are the files being imported into the tests.
> - **Do not remove the pre-filled code**
> - Make sure you add appropriate TypeScript type annotations.
> - Ensure type safety by explicitly typing all parameters and return values
> - All typings must be explicit with no usage of **any** type
> - Want to quickly review some of the concepts you’ve been learning? Take a look at the Cheat Sheets.
# 02-product-status

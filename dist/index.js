"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductStatus = void 0;
exports.getProductStatusMessage = getProductStatusMessage;
exports.printProductInfo = printProductInfo;
var ProductStatus;
(function (ProductStatus) {
    ProductStatus[ProductStatus["InStock"] = 0] = "InStock";
    ProductStatus[ProductStatus["LowStock"] = 1] = "LowStock";
    ProductStatus[ProductStatus["OutOfStock"] = 2] = "OutOfStock";
})(ProductStatus || (exports.ProductStatus = ProductStatus = {}));
function getProductStatusMessage(status) {
    switch (status) {
        case ProductStatus.InStock:
            return 'Product is available';
        case ProductStatus.LowStock:
            return 'Product stock is limited';
        case ProductStatus.OutOfStock:
            return 'Product is currently unavailable';
        default:
            return 'Unknown product status';
    }
}
function printProductInfo(product) {
    const statusMessage = getProductStatusMessage(product.status);
    console.log(`Product: ${product.name}, Price: $${product.price}, Status: ${statusMessage}`);
}
const keyboard = {
    name: 'Mechanical Keyboard',
    price: 79.99,
    status: 0,
};
const monitor = {
    name: 'Gaming Monitor',
    price: 299.99,
    status: 2,
};
const headphones = {
    name: 'Wireless Headphones',
    price: 149.99,
    status: 1,
};
printProductInfo(keyboard);
printProductInfo(monitor);
printProductInfo(headphones);

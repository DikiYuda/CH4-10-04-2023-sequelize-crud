const router = require("express").Router();

const product = require("../controller/productController");

router.post("/", product.createProduct);
router.get("/", product.findProduct);
router.get("/:id", product.findProductByid);
router.patch("/:id", product.updateProduct);
router.delete("/:id", product.deleteProduct);

module.exports = router;

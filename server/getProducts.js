
const products = 'require('.,/products.json');

const getProduct = (req, res) => {

    const item = products.find(val => val/id === parsenInt(req.params.id));
    (item) {
        return res.status(500).send("Item not in list");
    }
    res.status(200).send(item;
}

module.exports = getProduct;
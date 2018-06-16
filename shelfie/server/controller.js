module.exports = {
  getInventory: (req, res, next) => {
    const dbInstance = req.app.get('db');
    console.log('Fetching Product Inventory');
    dbInstance.get_inventory()
      .then(products =>
        res.status(200).json(products)
      )
      .catch(err => {
        res.status(500).send({ error: "Oops! Something went wrong." });
        console.log(err)
      });
  },
  createProduct: (req, res, next) => {
    const dbInstance = req.app.get('db');
    const { name, price, image } = req.body;
    console.log(name, price, image);
    dbInstance.create_product([name, price, image])
      .then(() => res.sendStatus(200))
      .catch(err => {
        res.status(500).send({ error: "Oops! Something went wrong." });
        console.log(err)
      });
  },
}
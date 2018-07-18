module.exports = {
  getInventory: (req, res, next) => {   // add another method for retrieving an individual product
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
      .then(products => res.status(201).json(products))
      .catch(err => {
        res.status(500).send({ error: "Oops! Something went wrong." });
        console.log(err)
      });
  },
  deleteProduct: (req, res, next) => {
    const dbInstance = req.app.get('db');
    const { params } = req;
    console.log(`Removing Product Id: ${params.id}`);
    dbInstance.delete_product(params.id)
      .then(() => res.sendStatus(200))
      .catch(err => {
        res.status(500).send({ error: "Oops! Something went wrong." });
        console.log(err)
      });
  },
  // editProduct: (req, res, next) => {
  //   const dbInstance = req.app.get('db');
  //   const { params } = req;
  //   console.log(`Editing Product Id: ${params.id}`);
  //   dbInstance.delete_product(params.id)
  //     .then(() => res.sendStatus(200))
  //     .catch(err => {
  //       res.status(500).send({ error: "Oops! Something went wrong." });  // look up stagus code for something doesn't exist 404
  //       console.log(err)
  //     });
  // },
}
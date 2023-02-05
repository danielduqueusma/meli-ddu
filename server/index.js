const express = require("express");
const axios = require('axios');
const PORT = process.env.PORT || 3001;
const app = express();
const path = require('path');

/**
 * @description Request to MELI api.
 * @returns {Object} Response formatted as JSON.
 * @implements {Object.items} Will return only 4 items as expected.
 */
app.get("/api/items", async (req, res) => {
    const products = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${req.query.search}`);
    const formattedResponse = {
        "author": {
            "name": "Daniel",
            "lastName": "Duque",
        },
        "categories": products.data?.available_filters.find(value => value.id === 'category' ? value : []).values.map(value => value.name),
        "items": products.data?.results.map(value => {
            return {
                "id": value?.id,
                "title": value?.title,
                "price": new Intl.NumberFormat().format(value?.price),
                "picture": value?.thumbnail,
                "condition": value?.condition,
                "free_shipping": value?.shipping.free_shipping,
                "address": value?.address
            }
        }).slice(0, 4)
    }
    res.status(200).send(formattedResponse).end();
});

/**
 * @description Request to MELI api for detail page.
 * @returns {Object} Response formatted as JSON.
 */
app.get('/api/items/:id', async (req, res) => {
    const detail = await axios.get(`http://api.mercadolibre.com/items/${req.params.id}`);
    const description = await axios.get(`http://api.mercadolibre.com/items/${req.params.id}/description`);
    const categoryId = await axios.get(`http://api.mercadolibre.com/categories/${detail.data.category_id}`);
    const products = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${categoryId.data.name}`);

    const formattedResponse = {
        "author": {
            "name": "Daniel",
            "lastName": "Duque",
        },
        "item": {
            "id": detail.data?.id,
            "title": detail.data?.title,
            "price": new Intl.NumberFormat().format(detail.data?.price),
            "categories": products.data?.available_filters.find(value => value.id === 'category' ? value : []).values.map(value => value.name),
            "picture": detail.data?.pictures[0].url,
            "condition": detail.data?.condition,
            "free_shipping": detail.data.shipping?.free_shipping,
            "sold_quantity": detail.data?.sold_quantity,
            "description": description.data?.plain_text
        }
    }
    res.status(200).send(formattedResponse).end();
})


/**
 * @description Request to MELI api.
 * @returns {Object} Response formatted as JSON.
 * @implements {Object.items} Will return only 4 items as expected.
 */
/**
 * @description Server running on PORT.
 */
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

app.use(express.static(path.resolve(__dirname, '../client/build')));
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

const router = require('express').Router();
const { Product }= require('../models/product.model.js')

router.get('/search', async(req, res)=> {
    try {
        const { title } = req.query
		console.log(title);
        const agg = [
			{
				$search: {
                    index: 'autoComplete',
					compound: {
						should: [
							{
								autocomplete: {
									query: title,
									path:  "name",
									fuzzy: {},
								},
							},
							{
								autocomplete: {
									query: title,
									path:  "brandName",
									fuzzy: {},
								},
							},
							{
								autocomplete: {
									query: title,
									path:  "description",
									fuzzy: {},
								},
							},
						]
					}
				},
			},
			{
				$limit: 10,
			},
			{
				$project: {
					_id: 0,
					name: 1,
					image: 1,
				},
			},
		]

    const response = await Product.aggregate(agg)
    
    return res.json(response)
    } catch (error) {
        console.log(error);
        res.status(400).json('Something Wrong with your search request')
    }
})

module.exports = router;
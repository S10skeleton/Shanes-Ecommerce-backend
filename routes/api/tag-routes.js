const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

  // find all tags
  // be sure to include its associated Product data
  router.get('/', async (req, res) => {
    try {
      const tagData = await Tag.findAll({
        include: [{ model: Product }]
      });
      res.status(200).json(tagData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  // find a single tag by its `id`
  // be sure to include its associated Product data
  router.get('/:id', async (req, res) => {
    try {
      const categoryData = await Category.findByPk(req.params.id, {
        include: [{ model: Product }],
      });
      if (!categoryData) {
        res.status(404).json({ message: 'No category found with this id!' });
        return;
      }
      res.status(200).json(categoryData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  // create a new tag
router.post('/', (req, res) => {
  // create a new tag
});

  // update a tag's name by its `id` value
router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

  // delete on tag by its `id` value
router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;

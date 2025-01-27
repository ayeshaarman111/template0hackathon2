const product = {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'id',
      title: 'ID',
      type: 'string',
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },  // Optionally add hotspot to allow image cropping in Sanity dashboard
    },
    {
      name: 'imagePath',
      title: 'Image Path',
      type: 'url',
      validation: Rule => Rule.optional(),
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: Rule => Rule.min(0).positive(),  // Price should be a positive number
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'discountPercentage',
      title: 'Discount Percentage',
      type: 'number',
      validation: Rule => Rule.min(0).max(100),  // Ensure discount percentage is between 0 and 100
    },
    {
      name: 'isFeaturedProduct',
      title: 'Is Featured Product',
      type: 'boolean',
    },
    {
      name: 'stockLevel',
      title: 'Stock Level',
      type: 'number',
      validation: Rule => Rule.min(0),  // Stock level should be >= 0
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
    },
  ],
};

export default product;

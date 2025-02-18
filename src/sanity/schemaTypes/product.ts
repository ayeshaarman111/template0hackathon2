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
      name:"slug",
      type:"slug",
      title:"slug",
      options:{
        source:"id"
      }
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
      
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      
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
     
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
    },
  ],
};

export default product;

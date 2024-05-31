export const CategoryDisplayData = [
  {
    key: 1,
    name: 'SKINCARE',
    circleCategoryImg: require('../assets/images/Category_Thumbnail/skincare.webp'),
    thumbnail:require("../assets/images/Category_Thumbnail/skincare1.webp"),
    thumbnail1:require("../assets/images/Category_Thumbnail/skincare2.webp"),
    product: [
      {
        key: 1,
        name: 'TONER',
        category: 'SKINCARE',
        description:
          'Good Vibes Rose Glow Toner | Lightweight, Brightening| With Honey | (200 ml)',
        image: require('../assets/images/Category/SKINCARE/Prodcut1/1.webp'),
        carousel: [
          {image: require('../assets/images/Category/SKINCARE/Prodcut1/1.webp')},
          {image: require('../assets/images/Category/SKINCARE/Prodcut1/3.webp')},
          {image: require('../assets/images/Category/SKINCARE/Prodcut1/2.webp')},
        ],
        price: '205',
        discount: '20',
        ratings: '4.5',
        reviews:85,
        company: 'Good Vibes',
        qty:0,
      },
      {
        key: 2,
        name: 'Facewash',
        description: 'Good Vibes Coffee Nourishing Face Wash - 120 ml ',      
        image: require('../assets/images/Category/SKINCARE/Product2/1.webp'),
        price: '215',
        discount: '6',
        ratings: '4.3',
        reviews:115,     
        carousel: [
          {image: require('../assets/images/Category/SKINCARE/Product2/1.webp')},
          {image: require('../assets/images/Category/SKINCARE/Product2/2.webp')},
        ],

        company: 'Good Vibes',
        qty:0,

        category: 'SKINCARE',
      },
      {
        key: 3,
        name: 'Night Cream',
        description: 'Good Vibes Coffee Nourishing Night Cream- 120 g ',      
        image: require('../assets/images/Category/SKINCARE/Product3/1.webp'),
        price: '999',
        discount: '35',
        ratings: '5.3',
        reviews:115,
        carousel: [
          {image: require('../assets/images/Category/SKINCARE/Product3/1.webp')},
          {image: require('../assets/images/Category/SKINCARE/Product3/2.webp')},
          {image: require('../assets/images/Category/SKINCARE/Product3/3.webp')},
        ],
        company: 'St Botanica',
        qty:0,

        category: 'SKINCARE',
      },
    ],
  },
  {
    key: 2,
    name: 'DEAL OF THE DAY',
    circleCategoryImg: require('../assets/images/Category_Thumbnail/deals.webp'),
    thumbnail:require("../assets/images/Category_Thumbnail/deals1.webp"),

    product: [
      {
        key: 4,
        name: 'LIPSTICK',
        category: 'Best Deal',
        description:'Faces Canada Ultime Pro HD Intense Matte Lips + Primer - Wine Shot (1.4g)',      
         image: require('../assets/images/Category/Deal/Prodcut1/1.webp'),
        carousel: [
       
       {         image: require('../assets/images/Category/Deal/Prodcut1/1.webp'),},
       {         image: require('../assets/images/Category/Deal/Prodcut1/2.webp'),},
        ],
        price: '799',
        discount: '25',
        ratings: '4.6',
        reviews:815,
        company: 'FacesCanada',
        qty:0,
      },
      {
        key: 5,
        name: 'LIPSTICK',
        description: 'Buy NY Bae Runway Serum Lipstick - Brown Bay 17 (4.2 g)|Brown|Highly Pigmented|Vitamin E & Fruit Oils',      
        image: require('../assets/images/Category/Deal/Product2/1.webp'),
        price: '249',
        discount: '25',
        ratings: '4.3',
        reviews:115,     
        carousel: [
{        image: require('../assets/images/Category/Deal/Product2/1.webp'),
},
{        image: require('../assets/images/Category/Deal/Product2/2.webp'),
},
        ],

        company: 'NY BAE',
        qty:0,

        category: 'Best Deal',
      },
      {
        key: 6,
        name: 'Oil',
        description: 'Good Vibes Rosemary Oil - 120 ml ',      
        image: require('../assets/images/Category/Deal/Product3/1.webp'),
        price: '385',
        discount: '28',
        ratings: '3.3',
        reviews:289,
        carousel: [
          {        image: require('../assets/images/Category/Deal/Product3/1.webp'),
        },
          {        image: require('../assets/images/Category/Deal/Product3/2.webp'),
        },
        ],
        company: 'Good Vibes',
        qty:0,

        category: 'Best Deal',
      },
    ],
  },
  {
    key: 3,
    name: 'MAKEUP',
    circleCategoryImg: require('../assets/images/Category_Thumbnail/makeup.webp'),
    thumbnail:require("../assets/images/Category_Thumbnail/makeup1.webp"),
    thumbnail1:require("../assets/images/Category_Thumbnail/makeup2.webp"),

    product: [
      {
        key: 7,
        name: 'Primer',
        category: 'MAKEUP',
        description:'Purplle Make Splash Hydrating Face Primer',      
         image: require('../assets/images/Category/Makeup/Prodcut1/1.webp'),
        carousel: [
       
{         image: require('../assets/images/Category/Makeup/Prodcut1/1.webp'),
},       
{         image: require('../assets/images/Category/Makeup/Prodcut1/2.webp'),
},       

    
        ],
        price: '599',
        discount: '25',
        ratings: '4.6',
        reviews:115,
        company: 'Purplle',
        qty:0,
      },
      {
        key: 8,
        name: 'Foundation',
        description:'L.A Girl Pro Coverage HD Foundation 28 ml' ,
        image: require('../assets/images/Category/Makeup/Product2/1.webp'),
        price: '829',
        discount: '25',
        ratings: '4.3',
        reviews:125,     
        carousel: [
{         image: require('../assets/images/Category/Makeup/Product2/1.webp'),
},
{         image: require('../assets/images/Category/Makeup/Product2/1.webp'),
},
        ],

        company: 'L.A Girl',
        qty:0,

        category: 'MAKEUP',
      },
      {
        key: 9,
        name: 'Highlighter',
        description: 'Purplle Sparkle Lightweight Illuminating Highlighter ',      
        image: require('../assets/images/Category/Makeup/Product3/1.webp'),
        price: '400',
        discount: '38',
        ratings: '4.8',
        reviews:289,
        carousel: [
{         image: require('../assets/images/Category/Makeup/Product3/1.webp'),
}
        ],
        company: 'Purplle',
        qty:0,

        category: 'MAKEUP',
      },
    ],
  },

  {
    key: 5,
    name: 'HAIRCARE',
    circleCategoryImg: require('../assets/images/Category_Thumbnail/haircare.webp'),
    thumbnail:require("../assets/images/Category_Thumbnail/haircare1.webp"),
    thumbnail1:require("../assets/images/Category_Thumbnail/haircare2.webp"),
    product: [
      {
        key: 10,
        name: 'Shampoo',
        category: 'Haircare',
        description:'Tresemme Hair Shampoo 700 ml',      
        image: require('../assets/images/Category/haircare/Prodcut1/1.webp'),
        carousel: [
        {        image: require('../assets/images/Category/haircare/Prodcut1/1.webp'),
      },

       
        ],
        price: '200',
        discount: '21',
        ratings: '4.6',
        reviews:115,
        company: 'Tresemme',
        qty:0,
      },
      {
        key: 11,
        name: 'Hair Oil',
        description:'Love Beauty & Planet Onion Black Seed Hair Oil' ,
        image: require('../assets/images/Category/haircare/Product2/1.webp'),
        price: '550',
        discount: '25',
        ratings: '4.3',
        reviews:125,     
        carousel: [
{        image: require('../assets/images/Category/haircare/Product2/1.webp'),
},
        ],

        company: 'Love Beauty',
        qty:0,

        category: 'Haircare',
      },

    ],

  },
  {
    key: 6,
    name: 'ELITE OFFERS',
    circleCategoryImg: require('../assets/images/Category_Thumbnail/elite.webp'),
    thumbnail:require("../assets/images/Category_Thumbnail/elite1.webp"),
    thumbnail1:require("../assets/images/Category_Thumbnail/elite2.webp"),
    product: [
      {
        key: 12,
        name: 'Foundation',
        category: 'ELITE OFFERS',
        description:'Maybelline New York Fit Me Matte + Poreless Liquid Foundation, Pouch Format, 322 Warm Honey, 1.3 Ounce',      
        image: require('../assets/images/Category/elite/Prodcut1/1.webp'),
        carousel: [
       
       
{        image: require('../assets/images/Category/elite/Prodcut1/1.webp'),
},
        ],
        price: '500',
        discount: '26',
        ratings: '4.6',
        reviews:115,
        company: 'Maybelline',
        qty:0,
      },
      {
        key: 13,
        name: 'Scrub',
        description:'Caffeine Naked & Raw Coffe Body Scrub' ,
        image: require('../assets/images/Category/elite/Product2/2.webp'),
        price: '520',
        discount: '25',
        ratings: '4.3',
        reviews:125,     
        carousel: [
         {
           image: require('../assets/images/Category/elite/Product2/2.webp'),

         } 
        ],

        company: 'Plum',
        qty:0,

        category: 'ELITE OFFERS',
      },

    ],
  },

  {
    key: 7,
    name: 'KOREAN BEAUTY',
    circleCategoryImg: require('../assets/images/Category_Thumbnail/korean-beauty.webp'),
    thumbnail:require("../assets/images/Category_Thumbnail/korean-beauty1.webp"),
    thumbnail1:require("../assets/images/Category_Thumbnail/korean-beauty2.webp"),

    product: [
      {
        key: 'one',
        name: 'TONER',
        description: 'Hello Onika',
        image: require('../assets/images/Category/SKINCARE/one.jpg'),
        price: '1669',
        discount: '5',
        ratings: '5.3',
        reviews:115,
        qty:0,

        company: 'Lakme',
        
        category: 'KOREAN BEAUTY',
      },
      {
        key: 'two',
        name: 'TONER',
        description: 'Good To See You',
        image: require('../assets/images/Category/SKINCARE/two.jpg'),
        price: '1669',
        discount: '5',
        ratings: '5.3',
        reviews:115,
        qty:0,

        company: 'Biotique',
        
        category: 'KOREAN BEAUTY',
      },
    ],
  },
  {
    key: 8,
    name: 'COMBO',
    circleCategoryImg: require('../assets/images/Category_Thumbnail/combo.webp'),
    thumbnail:require("../assets/images/Category_Thumbnail/combo1.webp"),

    product: [
      {
        key: 'one',
        name: 'TONER',
        description: 'Hello Onika',
        image: require('../assets/images/Category/SKINCARE/one.jpg'),
        price: '1669',
        discount: '5',
        ratings: '5.3',
        reviews:115,
        qty:0,

        company: 'Lakme',
        
        category: 'KOREAN BEAUTY',
      },
      {
        key: 'two',
        name: 'TONER',
        description: 'Good To See You',
        image: require('../assets/images/Category/SKINCARE/two.jpg'),
        price: '1669',
        discount: '5',
        ratings: '5.3',
        reviews:115,
        qty:0,

        company: 'Biotique',
        
        category: 'KOREAN BEAUTY',
      },
    ],
  },
  {
    key: 9,
    name: 'NEW LAUNCHES',
    circleCategoryImg: require('../assets/images/Category_Thumbnail/new.webp'),
    product: [
      {
        key: 'one',
        name: 'TONER',
        description: 'Hello Onika',
        image: require('../assets/images/Category/SKINCARE/one.jpg'),
        price: '1669',
        discount: '5',
        ratings: '5.3',
        reviews:115,
        qty:0,

        company: 'Lakme',
        
        category: 'KOREAN BEAUTY',
      },
      {
        key: 'two',
        name: 'TONER',
        description: 'Good To See You',
        image: require('../assets/images/Category/SKINCARE/two.jpg'),
        price: '1669',
        discount: '5',
        ratings: '5.3',
        reviews:115,
        qty:0,

        company: 'Biotique',
        
        category: 'KOREAN BEAUTY',
      },
    ],
  },
];

export const featured=[

  {
    key: 14,
    description:'Lash Sensational Sky High Waterproof Mascara - Lengthening And Volumizing Mascara With Bamboo Extract & Fibres - Very Black 6 ml',
    image: require('../assets/images/featured/1_1.webp'),
    carousel: [
      {    image: require('../assets/images/featured/1_1.webp'),
    },
      {image: require('../assets/images/featured/1.webp')},

    ],
    price: '599',
    discount: '25',
    ratings: '4.3',
    reviews:195,
    company: 'Maybelline',
    qty:0
    
  },
  {
    key: 15,

    description:
      'Purplle True Jewel 24K Gold Primer | Matte | Shine Control | Long Lasting |Dermatologically Tested - (20 ml)',
    image: require('../assets/images/featured/2.webp'),
    carousel: [
      {    image: require('../assets/images/featured/2.webp'),    },
      {    image: require('../assets/images/featured/2_2.webp'),    },
    ],
    price: '475',
    discount: '28',
    ratings: '4.7',
    reviews:185,
    qty:0,

    company: 'Purplle',
    
  },
  {
    key: 16,
    description:'NY bae Translucent Loose Powder Compact  (Translucent, 5.8 g), With the NY Bae Translucent Loose Powder by your side',
    image: require('../assets/images/featured/3.webp'),
    carousel: [
      {    image: require('../assets/images/featured/3.webp'),
    },
{    image: require('../assets/images/featured/3_3.webp'),
}
    ],
    price: '285',
    discount: '28',
    ratings: '5.3',
    reviews:116,
    company: 'NY Bae',
    qty:0

    
  },
  {
    key: 17,

    description:'Maybelline New York The Colossal Volume Express Waterproof Mascara - Black (10 g)' ,   
    image: require('../assets/images/featured/four.webp'),
    carousel: [
{    image: require('../assets/images/featured/4.webp'),
},
{image: require('../assets/images/featured/4_4.webp'),},
{image: require('../assets/images/featured/4_4_4.webp'),}
],
    price: '449',
    discount: '29',
    ratings: '4.7',
    reviews:715,
    qty:0,

    company: 'Maybelline',
    
  },
  {
    key:18 ,
    description:'NY Bae Matte Finish Setting Spray (30 ml) | For Oily Skin | Enriched with Green Tea Extracts | Sets Makeup | Long lasting | Travel Friendly',
    image: require('../assets/images/featured/10.webp'),
    carousel: [

{      image: require('../assets/images/featured/10_1.webp'),
},
{
  image: require('../assets/images/featured/10_2.webp'),

}    ],
    price: '220',
    discount: '30',
    ratings: '4.7',
    reviews:235,

    company: 'NY Bae',
    qty:0

    
  },

  {
    key: 19,

    description:
      'Lakme 9 to 5 Impact Eye Liner - Black (3.5 ml)',
      image: require('../assets/images/featured/6.webp'),
      carousel: [
{    image: require('../assets/images/featured/6.webp'),
},
{    image: require('../assets/images/featured/6_6.webp'),
}    ],
    price: '350',
    discount: '22',
    ratings: '4.6',
    reviews:153,
    company: 'Lakme',
    qty:0,

  },
  {
    key: 20,

    description:
      'Pilgrim 24K Gold Serum With Niacinamide & Hyaluronic Acid | Fragrance free | For All Skin types | (20 ml)',
      image: require('../assets/images/featured/seven.webp'),
      carousel: [
        {      image: require('../assets/images/featured/7.webp'),
  },  
        {    image: require('../assets/images/featured/2.webp'),
      },
  ],
    price: '595',
    discount: '33',
    ratings: '4.7',
    reviews:178,
    qty:0,

    company: 'Pilgirm',
    
  },
  {
    key: 57,
    image: require('../assets/images/featured/5.webp'),

    description:'Plum Onion and Biotin Sulphate-free & Paraben-free Shampoo for Hairfall Control for All Hair Types | With Onion Extract, Biotin, D-Panthenol | Reduces Hair Breakage, Boosts Scalp Health' ,   image: require('../assets/images/Category/SKINCARE/one.jpg'),
    carousel: [

{      image: require('../assets/images/featured/8.webp'),
},
{      image: require('../assets/images/featured/8_8.webp'),
},
    ],
    price: '349',
    discount: '13',
    ratings: '4.8',
    reviews:235,
    company: 'Plum',
    qty:0

    
  },
  {
    key: 22,

    description:
      "Pond's Age Miracle Wrinkle Corrector Day Cream, 50g",
      image: require('../assets/images/featured/5.webp'),
      carousel: [
{    image: require('../assets/images/featured/5.webp'),
},
{    image: require('../assets/images/featured/5_5.webp'),
},    
{    image: require('../assets/images/featured/5_5_5.webp'),
},    
],
    price: '825',
    discount: '20',
    ratings: '4.9',
    reviews:415,
    qty:0,

    company: 'Ponds',
    
  },
  
  {
    key: 23,
    description:'Stay Quirky Take It Off Me Micellar Water |Makeup Remover| Cleansing water (100 ml)',
    image: require('../assets/images/featured/nine.webp'),
    carousel: [

{      image: require('../assets/images/featured/9.webp'),
},
{
  image: require('../assets/images/featured/9_9.webp'),

}    ],
    price: '150',
    discount: '10',
    ratings: '4.9',
    reviews:235,

    company: 'Stay Quirky',
    qty:0

    
  },

 
]

export const brandData = [
  {
    key: 1,
    name: 'Purplle',
    thumbnail: require('../assets/images/Brand/one.webp'),
    carousel: [
      {image: require('../assets/images/Brand/Posters/one/Slider/one.gif')},
      {image: require('../assets/images/Brand/Posters/one/Slider/two.gif')},
    ],
    product: [
      {
        // Just Look How Dare-Devil We're Looking 💀
        key: 24,
    
        description: 'Purplle Foundation Concealer',
        image: require('../assets/images/Brand/Posters/Purplle/1.webp'),
        carousel: [
       {        image: require('../assets/images/Brand/Posters/Purplle/1.webp'),
      },
       {        image: require('../assets/images/Brand/Posters/Purplle/1_1.webp'),
      },
          {
          },
          {
          },
        ],
        price: '470',
        discount: '25',
        ratings: '4.7',
        reviews:115,
        company: 'Purplle',
        qty:0

      },
 
      {
        // Just Look How Dare-Devil We're Looking 💀
        key: 25,
    
        description: 'Purplle Secret Keeper Concealer',
        image: require('../assets/images/Brand/Posters/Purplle/2.webp'),
        carousel: [
       {        image: require('../assets/images/Brand/Posters/Purplle/2_@.webp'),
      },
          {
          },
          {
          },
        ],
        price: '335',
        discount: '25',
        ratings: '4.7',
        reviews:115,
        company: 'Purplle',
        qty:0

      },
      {
        // Just Look How Dare-Devil We're Looking 💀
        key: 26,
    
        description: 'Purplle Lip',
        image: require('../assets/images/Brand/Posters/Purplle/3.webp'),
        carousel: [
       {        image: require('../assets/images/Brand/Posters/Purplle/3.webp'),
      }
        
        ],
        price: '199',
        discount: '25',
        ratings: '4.7',
        reviews:115,
        company: 'Purplle',
        qty:0

      },
 
    ],
  },

  {    key: 2,
    name: ' Good Vibes',
    thumbnail: require('../assets/images/Brand/two.webp'),
    thumbnail2: require('../assets/images/Brand/2_2.webp'),
    carousel: [
      {image: require('../assets/images/Brand/Posters/one/Slider/one.gif')},
      {image: require('../assets/images/Brand/Posters/one/Slider/two.gif')},
    ],
    product: [
      {
        // Just Look How Dare-Devil We're Looking 💀
        key: 27,
    
        description: 'Good Vibes Mulberry Brightening Face Wash | Cleansing, Lightening | (120 ml)',
        image: require('../assets/images/Brand/Posters/vibes/1.webp'),
        carousel: [
       
          {
            image: require('../assets/images/Brand/Posters/vibes/1.webp'),

          },
      
        ],
        price: '205',
        discount: '25',
        ratings: '4.7',
        reviews:115,
        company: 'Good Vibes',
        qty:0

      },
 
      {
        // Just Look How Dare-Devil We're Looking 💀
        key: 28,
    
        description: 'Good Vibes Sun Protecting Sheet Mask - Oatmeal (20 ml)',
        image: require('../assets/images/Brand/Posters/vibes/2.webp'),
        carousel: [
       
      {        image: require('../assets/images/Brand/Posters/vibes/2.webp'),
    }
        ],
        price: '125',
        discount: '25',
        ratings: '4.7',
        reviews:115,
        company: 'Good Vibes',
        qty:0

      },
      {
        // Just Look How Dare-Devil We're Looking 💀
        key: 29,
    
        description: 'Good Vibes Grape Seed Skin Tightening Face Serum | Brightening, Lightening, Toning 10 ml',
        image: require('../assets/images/Brand/Posters/vibes/3.webp'),
        carousel: [
       
          
            {        image: require('../assets/images/Brand/Posters/vibes/3.webp'),}
          
       
        ],
        price: '205',
        discount: '25',
        ratings: '4.7',
        reviews:115,
        company: 'Good Vibes',
        qty:0

      },
 
    ],
  },

  {
    key: 3,
    name: 'NY Bae',
    thumbnail: require('../assets/images/Brand/three.webp'),
    thumbnail1: require('../assets/images/Brand/3.webp'),
    thumbnail2: require('../assets/images/Brand/3_3.webp'),
    carousel: [
      {image: require('../assets/images/Brand/Posters/one/Slider/one.gif')},
      {image: require('../assets/images/Brand/Posters/one/Slider/two.gif')},
    ],
    product: [
      {
        // Just Look How Dare-Devil We're Looking 💀
        key: 30,
    
        description: "Brighten up your 'gram Nail Lacquer Neon Pink 1",
        image: require('../assets/images/Brand/Posters/nybae/1.webp'),
        carousel: [
       {

         image: require('../assets/images/Brand/Posters/nybae/1.webp'),
       } 

       
        ],
        price: '100',
        discount: '25',
        ratings: '4.7',
        reviews:115,
        company: 'NY bae',
        qty:0

      },
 
      {
        // Just Look How Dare-Devil We're Looking 💀
        key: 31,
    
        description: 'Foundation Concealer Contour Color Corrector Stick, For Fair Skin, Golden - Grander than Central 3',
        image: require('../assets/images/Brand/Posters/nybae/2.webp'),
        carousel: [
       
          {

            image: require('../assets/images/Brand/Posters/nybae/2.webp'),
          }


        ],
        price: '200',
        discount: '25',
        ratings: '4.7',
        reviews:115,
        company: 'NY bae',
        qty:0

      },
      {
        // Just Look How Dare-Devil We're Looking 💀
        key: 32,
    
        description: 'Super Matte Lipstick, Nude - Impeccable Isabella 15',
        image: require('../assets/images/Brand/Posters/nybae/3.webp'),
        carousel: [
         {

           image: require('../assets/images/Brand/Posters/nybae/3.webp')
         } ,

        ],
        price: '175',
        discount: '25',
        ratings: '4.7',
        reviews:115,
        company: 'NY bae',
        qty:0

      },
 
    ],
  },

  {
    key: 4,
    name: 'MAC',
    thumbnail: require('../assets/images/Brand/five.webp'),
    carousel: [
      {image: require('../assets/images/Brand/Posters/one/Slider/one.gif')},
      {image: require('../assets/images/Brand/Posters/one/Slider/two.gif')},
    ],
    product: [
      {
        // Just Look How Dare-Devil We're Looking 💀
        key: 33,
        description: 'MAC COSMETICS Prep + Prime Fix + - Sized To Go Face Primer',
        image: require('../assets/images/Brand/Posters/mac/1.webp'),
        carousel: [
     
          {
            image: require('../assets/images/Brand/Posters/mac/1.webp'),
          },
          {
            image: require('../assets/images/Brand/Posters/mac/1_!.webp'),
          },
       
        ],
        price: '999',
        discount: '25',
        ratings: '4.2',
        reviews:115,
        qty:0,
        company: 'MAC',
      },
      {
        // Just Look How Dare-Devil We're Looking 💀
        key: 34,
        description: "MAC COSMETICS In Extreme Dimension 24-Hour Kajal Eye Liner - Black",

        image: require('../assets/images/Brand/Posters/mac/2.webp'),
        carousel: [
       
          {
            image: require('../assets/images/Brand/Posters/mac/2.webp'),
          },
       
        ],
        price: '800',
        discount: '25',
        ratings: '4.2',
        reviews:115,
        qty:0,

        company: 'MAC',
      },
      {
        // Just Look How Dare-Devil We're Looking 💀
        key: 35,
        description: 'MAC COSMETICS Retro Matte Liquid Lip Colour - Dance With Me',
        image: require('../assets/images/Brand/Posters/mac/3.webp'),
        carousel: [
       
          {
            image: require('../assets/images/Brand/Posters/mac/3.webp'),
          },
       
        ],
        price: '999',
        discount: '5',
        ratings: '4.2',
        company: 'MAC',
        qty:0,

      },
    ],
  },

  {
    key: 5,
    name: 'WoW',
    thumbnail: require('../assets/images/Brand/six.webp'),
    thumbnail1: require('../assets/images/Brand/6.webp'),
    carousel: [
      {key:1,image: require('../assets/images/posters/Poster1/one.jpg'),},
      {key:2,image: require('../assets/images/posters/Poster1/two.jpg'),},
    ],
    product: [
      {
        // Just Look How Dare-Devil We're Looking 💀
        key: 1,
        name: 'Perfume',
        description: 'Hellow Veronika ',
        image: require('../assets/images/Brand/Posters/one/Product2/product2.jpg'),
        carousel: [
          {
            image: require('../assets/images/Brand/Posters/one/Product2/product2_1.jpg')
          },
          {
            image: require('../assets/images/Brand/Posters/one/Product2/product2_2.jpg')
          },
        ],
        price: '205',
        discount: '35',
        ratings: '5.3',
        reviews:115,
        company: 'Good Vibes',
        qty:0,


      },
      {
        // Just Look How Dare-Devil We're Looking 💀
        key: 2,
        name: 'Toner',
        description: 'Hellow Veronika',
        description: "I think You Should have one of these, I'll Get you this for sure",

        image: require('../assets/images/Brand/Posters/one/Product1/product1.jpg'),
        carousel: [
      
          {
            image: require('../assets/images/Brand/Posters/one/Product1/product1_1.jpg'),
          },
          {
            image: require('../assets/images/Brand/Posters/one/Product1/product1_2.jpg'),
          },
        ],
        price: '171',
        discount: '25',
        ratings: '5.3',
        reviews:115,
        company: 'Good Vibes',
        qty:0,

      },
   
    ],
  },
 
 
  // POSTERS EXTRA THUMBNAIL1 THUMBNAIL2  KEY 1 KEY 2 FOR SIZE  RENDER POSTER 1
  {
    key: 6,
    name: 'Schwarzkopf',
    thumbnail1: require('../assets/images/Brand/7.webp'),
    carousel: [
      {key:1,image: require('../assets/images/posters/Poster1/one.jpg'),},
      {key:2,image: require('../assets/images/posters/Poster1/two.jpg'),},
    ],
    product: [
      {
        // Just Look How Dare-Devil We're Looking 💀
        key: 1,
        name: 'Perfume',
        description: 'Hellow Veronika ',
        image: require('../assets/images/Brand/Posters/one/Product2/product2.jpg'),
        carousel: [
          {
            image: require('../assets/images/Brand/Posters/one/Product2/product2_1.jpg')
          },
          {
            image: require('../assets/images/Brand/Posters/one/Product2/product2_2.jpg')
          },
        ],
        price: '205',
        discount: '35',
        ratings: '5.3',
        reviews:115,
        company: 'Good Vibes',        qty:0,


      },
      {
        // Just Look How Dare-Devil We're Looking 💀
        key: 1,
        name: 'Toner',
        description: 'Hellow Veronika',
        description: "I think You Should have one of these, I'll Get you this for sure",

        image: require('../assets/images/Brand/Posters/one/Product1/product1.jpg'),
        carousel: [
      
          {
            image: require('../assets/images/Brand/Posters/one/Product1/product1_1.jpg'),
          },
          {
            image: require('../assets/images/Brand/Posters/one/Product1/product1_2.jpg'),
          },
        ],
        price: '171',
        discount: '25',
        ratings: '5.3',
        reviews:115,
        company: 'Good Vibes',        qty:0,

      },
   
    ],
  },

  {
    key: 7,
    name: 'BIOTIQUE',
    thumbnail1: require('../assets/images/Brand/9.webp'),
    thumbnail2: require('../assets/images/Brand/9_9.webp'),
    carousel: [
      {key:1,image: require('../assets/images/posters/Poster1/one.jpg'),},
      {key:2,image: require('../assets/images/posters/Poster1/two.jpg'),},
    ],
    product: [
      {
        // Just Look How Dare-Devil We're Looking 💀
        key: 1,
        name: 'Perfume',
        description: 'Hellow Veronika ',
        image: require('../assets/images/Brand/Posters/one/Product2/product2.jpg'),
        carousel: [
          {
            image: require('../assets/images/Brand/Posters/one/Product2/product2_1.jpg')
          },
          {
            image: require('../assets/images/Brand/Posters/one/Product2/product2_2.jpg')
          },
        ],
        price: '205',
        discount: '35',
        ratings: '5.3',
        reviews:115,
        company: 'Good Vibes',
        qty:0,

      },
      {
        // Just Look How Dare-Devil We're Looking 💀
        key: 2,
        name: 'Toner',
        description: 'Hellow Veronika',
        description: "I think You Should have one of these, I'll Get you this for sure",

        image: require('../assets/images/Brand/Posters/one/Product1/product1.jpg'),
        carousel: [
      
          {
            image: require('../assets/images/Brand/Posters/one/Product1/product1_1.jpg'),
          },
          {
            image: require('../assets/images/Brand/Posters/one/Product1/product1_2.jpg'),
          },
        ],
        price: '171',
        discount: '25',
        ratings: '5.3',
        reviews:115,
        company: 'Good Vibes',
        qty:0,

      },
   
    ],
  },

// small images carousel THUMBNAIL2 AKA RENDERPOSTER2
{
  key: 8,
  name: 'LAKME',
  thumbnail2: require('../assets/images/Brand/11.webp'),
  carousel: [
    {key:1,image: require('../assets/images/posters/Poster1/one.jpg'),},
    {key:2,image: require('../assets/images/posters/Poster1/two.jpg'),},
  ],
  product: [
    {
      // Just Look How Dare-Devil We're Looking 💀
      key: 1,
      name: 'Perfume',
      description: 'Hellow Veronika ',
      image: require('../assets/images/Brand/Posters/one/Product2/product2.jpg'),
      carousel: [
        {
          image: require('../assets/images/Brand/Posters/one/Product2/product2_1.jpg')
        },
        {
          image: require('../assets/images/Brand/Posters/one/Product2/product2_2.jpg')
        },
      ],
      price: '205',
      discount: '35',
      ratings: '5.3',
      reviews:115,
      company: 'Good Vibes',
      qty:0,

    },
    {
      // Just Look How Dare-Devil We're Looking 💀
      key: 2,
      name: 'Toner',
      description: 'Hellow Veronika',
      description: "I think You Should have one of these, I'll Get you this for sure",

      image: require('../assets/images/Brand/Posters/one/Product1/product1.jpg'),
      carousel: [
    
        {
          image: require('../assets/images/Brand/Posters/one/Product1/product1_1.jpg'),
        },
        {
          image: require('../assets/images/Brand/Posters/one/Product1/product1_2.jpg'),
        },
      ],
      price: '171',
      discount: '25',
      ratings: '5.3',
      reviews:115,
      company: 'Good Vibes',
      qty:0,

    },
 
  ],
},
{
  key: 9,
  name: "L'OREAL",
  thumbnail2: require('../assets/images/Brand/12.webp'),
  carousel: [
    {key:1,image: require('../assets/images/posters/Poster1/one.jpg'),},
    {key:2,image: require('../assets/images/posters/Poster1/two.jpg'),},
  ],
  product: [
    {
      // Just Look How Dare-Devil We're Looking 💀
      key: 1,
      name: 'Perfume',
      description: 'Hellow Veronika ',
      image: require('../assets/images/Brand/Posters/one/Product2/product2.jpg'),
      carousel: [
        {
          image: require('../assets/images/Brand/Posters/one/Product2/product2_1.jpg')
        },
        {
          image: require('../assets/images/Brand/Posters/one/Product2/product2_2.jpg')
        },
      ],
      price: '205',
      discount: '35',
      ratings: '5.3',
      reviews:115,
      company: 'Good Vibes',
      qty:0,

    },
    {
      // Just Look How Dare-Devil We're Looking 💀
      key: 2,
      name: 'Toner',
      description: 'Hellow Veronika',
      description: "I think You Should have one of these, I'll Get you this for sure",

      image: require('../assets/images/Brand/Posters/one/Product1/product1.jpg'),
      carousel: [
    
        {
          image: require('../assets/images/Brand/Posters/one/Product1/product1_1.jpg'),
        },
        {
          image: require('../assets/images/Brand/Posters/one/Product1/product1_2.jpg'),
        },
      ],
      price: '171',
      discount: '25',
      ratings: '5.3',
      reviews:115,
      company: 'Good Vibes',
      qty:0,

    },
 
  ],
},
{
  key: 10,
  name: 'MAMAEARTH',
  thumbnail2: require('../assets/images/Brand/13.webp'),
  carousel: [
    {key:1,image: require('../assets/images/posters/Poster1/one.jpg'),},
    {key:2,image: require('../assets/images/posters/Poster1/two.jpg'),},
  ],
  product: [
    {
      // Just Look How Dare-Devil We're Looking 💀
      key: 1,
      name: 'Perfume',
      description: 'Hellow Veronika ',
      image: require('../assets/images/Brand/Posters/one/Product2/product2.jpg'),
      carousel: [
        {
          image: require('../assets/images/Brand/Posters/one/Product2/product2_1.jpg')
        },
        {
          image: require('../assets/images/Brand/Posters/one/Product2/product2_2.jpg')
        },
      ],
      price: '205',
      discount: '35',
      ratings: '5.3',
      reviews:115,
      company: 'Good Vibes',
      qty:0,

    },
    {
      // Just Look How Dare-Devil We're Looking 💀
      key: 2,
      name: 'Toner',
      description: 'Hellow Veronika',
      description: "I think You Should have one of these, I'll Get you this for sure",

      image: require('../assets/images/Brand/Posters/one/Product1/product1.jpg'),
      carousel: [
    
        {
          image: require('../assets/images/Brand/Posters/one/Product1/product1_1.jpg'),
        },
        {
          image: require('../assets/images/Brand/Posters/one/Product1/product1_2.jpg'),
        },
      ],
      price: '171',
      discount: '25',
      ratings: '5.3',
      reviews:115,
      company: 'Good Vibes',
      qty:0,

    },
 
  ],
},
{
  key: 11,
  name: 'AQUALOGICA',
  thumbnail2: require('../assets/images/Brand/14.webp'),
  carousel: [
    {image: require('../assets/images/Brand/Posters/one/Slider/one.gif')},
    {image: require('../assets/images/Brand/Posters/one/Slider/two.gif')},
  ],
  product: [
    {
      // Just Look How Dare-Devil We're Looking 💀
      key: 1,
      name: 'Perfume',
      description: 'Hellow Veronika ',
      image: require('../assets/images/Brand/Posters/one/Product2/product2.jpg'),
      carousel: [
        {
          image: require('../assets/images/Brand/Posters/one/Product2/product2_1.jpg')
        },
        {
          image: require('../assets/images/Brand/Posters/one/Product2/product2_2.jpg')
        },
      ],
      price: '205',
      discount: '35',
      ratings: '5.3',
      reviews:115,
      company: 'Good Vibes',
      qty:0,

    },
    {
      // Just Look How Dare-Devil We're Looking 💀
      key: 2,
      name: 'Toner',
      description: 'Hellow Veronika',
      description: "I think You Should have one of these, I'll Get you this for sure",

      image: require('../assets/images/Brand/Posters/one/Product1/product1.jpg'),
      carousel: [
    
        {
          image: require('../assets/images/Brand/Posters/one/Product1/product1_1.jpg'),
        },
        {
          image: require('../assets/images/Brand/Posters/one/Product1/product1_2.jpg'),
        },
      ],
      price: '171',
      discount: '25',
      ratings: '5.3',
      reviews:115,
      company: 'Good Vibes',
      qty:0,

    },
 
  ],
},

{
  key: 12,
  name: 'ENGAGE',
  thumbnail2: require('../assets/images/Brand/sq.gif'),
  carousel: [
    {key:1,image: require('../assets/images/posters/Poster1/one.jpg'),},
    {key:2,image: require('../assets/images/posters/Poster1/two.jpg'),},
  ],
  product: [
    {
      // Just Look How Dare-Devil We're Looking 💀
      key: 1,
      name: 'Perfume',
      description: 'Hellow Veronika ',
      image: require('../assets/images/Brand/Posters/one/Product2/product2.jpg'),
      carousel: [
        {
          image: require('../assets/images/Brand/Posters/one/Product2/product2_1.jpg')
        },
        {
          image: require('../assets/images/Brand/Posters/one/Product2/product2_2.jpg')
        },
      ],
      price: '205',
      discount: '35',
      ratings: '5.3',
      reviews:115,
      company: 'Good Vibes',
      qty:0,

    },
    {
      // Just Look How Dare-Devil We're Looking 💀
      key: 2,
      name: 'Toner',
      description: 'Hellow Veronika',
      description: "I think You Should have one of these, I'll Get you this for sure",

      image: require('../assets/images/Brand/Posters/one/Product1/product1.jpg'),
      carousel: [
    
        {
          image: require('../assets/images/Brand/Posters/one/Product1/product1_1.jpg'),
        },
        {
          image: require('../assets/images/Brand/Posters/one/Product1/product1_2.jpg'),
        },
      ],
      price: '171',
      discount: '25',
      ratings: '5.3',
      reviews:115,
      company: 'Good Vibes',
      qty:0,

    },
 
  ],
},
{
  key: 13,
  name: 'Sugar',
  thumbnail2: require('../assets/images/Brand/16.webp'),
  carousel: [
    {key:1,image: require('../assets/images/posters/Poster1/one.jpg'),},
    {key:2,image: require('../assets/images/posters/Poster1/two.jpg'),},
  ],
  product: [
    {
      // Just Look How Dare-Devil We're Looking 💀
      key: 1,
      name: 'Perfume',
      description: 'Hellow Veronika ',
      image: require('../assets/images/Brand/Posters/one/Product2/product2.jpg'),
      carousel: [
        {
          image: require('../assets/images/Brand/Posters/one/Product2/product2_1.jpg')
        },
        {
          image: require('../assets/images/Brand/Posters/one/Product2/product2_2.jpg')
        },
      ],
      price: '205',
      discount: '35',
      ratings: '5.3',
      reviews:115,
      company: 'Good Vibes',
      qty:0,

    },
    {
      // Just Look How Dare-Devil We're Looking 💀
      key: 2,
      name: 'Toner',
      description: 'Hellow Veronika',
      description: "I think You Should have one of these, I'll Get you this for sure",

      image: require('../assets/images/Brand/Posters/one/Product1/product1.jpg'),
      carousel: [
    
        {
          image: require('../assets/images/Brand/Posters/one/Product1/product1_1.jpg'),
        },
        {
          image: require('../assets/images/Brand/Posters/one/Product1/product1_2.jpg'),
        },
      ],
      price: '171',
      discount: '25',
      ratings: '5.3',
      reviews:115,
      company: 'Good Vibes',
      qty:0,

    },
 
  ],
},
{
  key: 14,
  name: 'PLUM',
  thumbnail2: require('../assets/images/Brand/18.webp'),
  carousel: [
    {key:1,image: require('../assets/images/posters/Poster1/one.jpg'),},
    {key:2,image: require('../assets/images/posters/Poster1/two.jpg'),},
  ],
  product: [
    {
      // Just Look How Dare-Devil We're Looking 💀
      key: 1,
      name: 'Perfume',
      description: 'Hellow Veronika ',
      image: require('../assets/images/Brand/Posters/one/Product2/product2.jpg'),
      carousel: [
        {
          image: require('../assets/images/Brand/Posters/one/Product2/product2_1.jpg')
        },
        {
          image: require('../assets/images/Brand/Posters/one/Product2/product2_2.jpg')
        },
      ],
      price: '205',
      discount: '35',
      ratings: '5.3',
      reviews:115,
      company: 'Good Vibes',
      qty:0,

    },
    {
      // Just Look How Dare-Devil We're Looking 💀
      key: 2,
      name: 'Toner',
      description: 'Hellow Veronika',
      description: "I think You Should have one of these, I'll Get you this for sure",

      image: require('../assets/images/Brand/Posters/one/Product1/product1.jpg'),
      carousel: [
    
        {
          image: require('../assets/images/Brand/Posters/one/Product1/product1_1.jpg'),
        },
        {
          image: require('../assets/images/Brand/Posters/one/Product1/product1_2.jpg'),
        },
      ],
      price: '171',
      discount: '25',
      ratings: '5.3',
      reviews:115,
      company: 'Good Vibes',
      qty:0,

    },
 
  ],
},
];




export const poster=[
  {
    key: 1,
    name: 'MAYBELLINE',
    thumbnail: require('../assets/images/posters/Poster1/1.webp'),
    carousel: [
      {key:1,image: require('../assets/images/posters/Poster1/one.jpg'),},
      {key:2,image: require('../assets/images/posters/Poster1/two.jpg'),},
    ],
    product: [
      {
        // Just Look How Dare-Devil We're Looking 💀
        key: 1,
        name: 'Perfume',
        description: 'Hellow Veronika ',
        image: require('../assets/images/Brand/Posters/one/Product2/product2.jpg'),
        carousel: [
          {
            image: require('../assets/images/Brand/Posters/one/Product2/product2_1.jpg')
          },
          {
            image: require('../assets/images/Brand/Posters/one/Product2/product2_2.jpg')
          },
        ],
        price: '205',
        discount: '35',
        ratings: '5.3',
        reviews:115,
        company: 'Good Vibes',

      },
      {
        // Just Look How Dare-Devil We're Looking 💀
        key: 1,
        name: 'Toner',
        description: 'Hellow Veronika',
        description: "I think You Should have one of these, I'll Get you this for sure",

        image: require('../assets/images/Brand/Posters/one/Product1/product1.jpg'),
        carousel: [
      
          {
            image: require('../assets/images/Brand/Posters/one/Product1/product1_1.jpg'),
          },
          {
            image: require('../assets/images/Brand/Posters/one/Product1/product1_2.jpg'),
          },
        ],
        price: '171',
        discount: '25',
        ratings: '5.3',
        reviews:115,
        company: 'Good Vibes',
      },
   
    ],
  },
  {
    key: 2,
    carousel: [
      {image: require('../assets/images/posters/Poster3/one.webp'),},
      {image: require('../assets/images/posters/Poster3/zero.webp'),},
    ],  
   
  },
  { key:3, 
      image: require('../assets/images/posters/Poster2/one.webp'),
      image1: require('../assets/images/insta.jpeg'),
  },

  //second
  {
    key: 4,
    name: 'CatCare',
    carousel: [
      {

        image: require('../assets/images/New/3.jpg'),
      } ,
  
     {

      image: require('../assets/images/New/5.jpg'),
    } ,
  
     {

       image: require('../assets/images/New/4.jpg'),
     },
     {

       image: require('../assets/images/New/2.jpg'),
     },
     {

      image: require('../assets/images/New/6.jpg'),
    } ,
     {

       image: require('../assets/images/New/1.jpg'),
     },
    ],
    product: [
      {
        // Just Look How Dare-Devil We're Looking 💀
        key: 39,
description:"Captain Zack The Cat Groom Box",
        image: require('../assets/images/Brand/Posters/CAT/3.webp'),
        carousel: [
          {
            image: require('../assets/images/Brand/Posters/CAT/3_1.webp'),
          },
          {
            image: require('../assets/images/Brand/Posters/CAT/3_@.webp'),
          },
        ],
        price: '999',
        discount: '4',
        ratings: '5.3',
        reviews:815,
        company: 'Captain Zack',
        qty:0

      },
      {
        // Just Look How Dare-Devil We're Looking 💀
        key: 40,
description:"Whiskas Tuna in Jelly Meal Adult Cat Wet Food",
        image: require('../assets/images/Brand/Posters/CAT/5.jpg'),
        carousel: [
          {
            image: require('../assets/images/Brand/Posters/CAT/5.jpg'),
          },
          {
            image: require('../assets/images/Brand/Posters/CAT/5_!.jpg'),
          },
        ],
        price: '2040',
        discount: '20',
        ratings: '5.3',
        reviews:815,
        company: 'Whiskas',
        qty:0


      },
      {
        // Just Look How Dare-Devil We're Looking 💀
        key: 41,
description:"Sheba Chicken With Tuna In Gravy Rich Premium Adult Fine Cat Wet Food",
        image: require('../assets/images/Brand/Posters/CAT/4.jpg'),
        carousel: [
          {
            image: require('../assets/images/Brand/Posters/CAT/4.jpg'),
          },
          {
            image: require('../assets/images/Brand/Posters/CAT/4_1.webp'),
          },
        ],
        price: '5645',
        discount: '20',
        ratings: '5.3',
        reviews:815,
        company: 'Sheba',
        qty:0


      },
      {
        // Just Look How Dare-Devil We're Looking 💀
        key: 42,
        description: 'Purina Pro Plan LIVECLEAR Adult 7+ Prime Plus Longer Life Formula Dry Cat Food',
        image: require('../assets/images/Brand/Posters/CAT/2.webp'),
        carousel: [
          {
            image: require('../assets/images/Brand/Posters/CAT/2.webp'),
          },
          {
            image: require('../assets/images/Brand/Posters/CAT/2_2.webp'),
          },
        ],
        price: '999',
        discount: '10',
        ratings: '5.3',
        reviews:115,
        company: 'Purina Pro',
        qty:0


      },
      {
        // Just Look How Dare-Devil We're Looking 💀
        key: 43,
        description: 'Meow Mix Original Choice Dry Cat Food',
        image: require('../assets/images/Brand/Posters/CAT/1.webp'),
        carousel: [
          {
            image: require('../assets/images/Brand/Posters/CAT/1.webp'),
          },
          {
            image: require('../assets/images/Brand/Posters/CAT/1_!.webp'),
          },
        ],
        price: '999',
        discount: '15',
        ratings: '5.3',
        reviews:115,
        company: 'Purina Pro',
        qty:0


      },
      {
        // Just Look How Dare-Devil We're Looking 💀
        key: 44,
        description: 'Petvit Detangle & Shine Pet Shampoo For Cat',
        image: require('../assets/images/Brand/Posters/CAT/6.webp'),
        carousel: [
          {
            image: require('../assets/images/Brand/Posters/CAT/6.webp'),
          },
      
        ],
        price: '970',
        discount: '15',
        ratings: '5.3',
        reviews:115,
        company: 'Petvit',
        qty:0


      },
      {
        // Just Look How Dare-Devil We're Looking 💀
        key: 45,
        description: 'Sheba Chicken With Tuna In Gravy Rich Premium Adult Fine Cat Wet Food',
        image: require('../assets/images/Brand/Posters/CAT/7.jpg'),
        carousel: [
          {
            image: require('../assets/images/Brand/Posters/CAT/7.jpg'),
          },
          {
            image: require('../assets/images/Brand/Posters/CAT/7_1.jpg'),
          },
      
        ],
        price: '876',
        discount: '15',
        ratings: '5.3',
        reviews:115,
        company: 'Temptations',
        qty:0


      },
   
    ],
  }, 
  {
    key: 5,
    name: 'Havelles',
    thumbnail: require('../assets/images/Brand/Extra/have.webp'),

    carousel: [
      {key:1,image: require('../assets/images/posters/Poster1/one.jpg'),},
      {key:2,image: require('../assets/images/posters/Poster1/two.jpg'),},
    ],
    product: [
      {
        // Just Look How Dare-Devil We're Looking 💀
        key: 1,
        name: 'Perfume',
        description: 'Hellow Veronika ',
        image: require('../assets/images/Brand/Posters/one/Product2/product2.jpg'),
        carousel: [
          {
            image: require('../assets/images/Brand/Posters/one/Product2/product2_1.jpg')
          },
          {
            image: require('../assets/images/Brand/Posters/one/Product2/product2_2.jpg')
          },
        ],
        price: '205',
        discount: '35',
        ratings: '5.3',
        reviews:115,
        company: 'Good Vibes',
        qty:0


      },
      {
        // Just Look How Dare-Devil We're Looking 💀
        key: 1,
        name: 'Toner',
        description: 'Hellow Veronika',
        description: "I think You Should have one of these, I'll Get you this for sure",

        image: require('../assets/images/Brand/Posters/one/Product1/product1.jpg'),
        carousel: [
      
          {
            image: require('../assets/images/Brand/Posters/one/Product1/product1_1.jpg'),
          },
          {
            image: require('../assets/images/Brand/Posters/one/Product1/product1_2.jpg'),
          },
        ],
        price: '171',
        discount: '25',
        ratings: '5.3',
        reviews:115,
        company: 'Good Vibes',
        qty:0

      },
   
    ],
  }, 

  {
    key: 6,
    name: 'BaByliss',
    thumbnail: require('../assets/images/Brand/Extra/bio.webp'),

    carousel: [
      {key:1,image: require('../assets/images/posters/Poster1/one.jpg'),},
      {key:2,image: require('../assets/images/posters/Poster1/two.jpg'),},
    ],
    product: [
      {
        // Just Look How Dare-Devil We're Looking 💀
        key: 1,
        name: 'Perfume',
        description: 'Hellow Veronika ',
        image: require('../assets/images/Brand/Posters/one/Product2/product2.jpg'),
        carousel: [
          {
            image: require('../assets/images/Brand/Posters/one/Product2/product2_1.jpg')
          },
          {
            image: require('../assets/images/Brand/Posters/one/Product2/product2_2.jpg')
          },
        ],
        price: '205',
        discount: '35',
        ratings: '5.3',
        reviews:115,
        company: 'Good Vibes',
        qty:0


      },
      {
        // Just Look How Dare-Devil We're Looking 💀
        key: 1,
        name: 'Toner',
        description: 'Hellow Veronika',
        description: "I think You Should have one of these, I'll Get you this for sure",

        image: require('../assets/images/Brand/Posters/one/Product1/product1.jpg'),
        carousel: [
      
          {
            image: require('../assets/images/Brand/Posters/one/Product1/product1_1.jpg'),
          },
          {
            image: require('../assets/images/Brand/Posters/one/Product1/product1_2.jpg'),
          },
        ],
        price: '171',
        discount: '25',
        ratings: '5.3',
        reviews:115,
        company: 'Good Vibes',
        qty:0

      },
   
    ],
  }, 
  {
    key: 7,
    name: 'Revlon',
    thumbnail: require('../assets/images/Brand/Extra/lips.webp'),

    carousel: [
      {key:1,image: require('../assets/images/posters/Poster1/one.jpg'),},
      {key:2,image: require('../assets/images/posters/Poster1/two.jpg'),},
    ],
    product: [
      {
        // Just Look How Dare-Devil We're Looking 💀
        key: 1,
        name: 'Perfume',
        description: 'Hellow Veronika ',
        image: require('../assets/images/Brand/Posters/one/Product2/product2.jpg'),
        carousel: [
          {
            image: require('../assets/images/Brand/Posters/one/Product2/product2_1.jpg')
          },
          {
            image: require('../assets/images/Brand/Posters/one/Product2/product2_2.jpg')
          },
        ],
        price: '205',
        discount: '35',
        ratings: '5.3',
        reviews:115,
        company: 'Good Vibes',
        qty:0


      },
      {
        // Just Look How Dare-Devil We're Looking 💀
        key: 1,
        name: 'Toner',
        description: 'Hellow Veronika',
        description: "I think You Should have one of these, I'll Get you this for sure",

        image: require('../assets/images/Brand/Posters/one/Product1/product1.jpg'),
        carousel: [
      
          {
            image: require('../assets/images/Brand/Posters/one/Product1/product1_1.jpg'),
          },
          {
            image: require('../assets/images/Brand/Posters/one/Product1/product1_2.jpg'),
          },
        ],
        price: '171',
        discount: '25',
        ratings: '5.3',
        reviews:115,
        company: 'Good Vibes',
        qty:0

      },
   
    ],
  }, 
  {
    key: 8,
    name: 'Ri Re',
    thumbnail: require('../assets/images/Brand/Extra/ri.webp'),

    carousel: [
      {key:1,image: require('../assets/images/posters/Poster1/one.jpg'),},
      {key:2,image: require('../assets/images/posters/Poster1/two.jpg'),},
    ],
    product: [
      {
        // Just Look How Dare-Devil We're Looking 💀
        key: 1,
        name: 'Perfume',
        description: 'Hellow Veronika ',
        image: require('../assets/images/Brand/Posters/one/Product2/product2.jpg'),
        carousel: [
          {
            image: require('../assets/images/Brand/Posters/one/Product2/product2_1.jpg')
          },
          {
            image: require('../assets/images/Brand/Posters/one/Product2/product2_2.jpg')
          },
        ],
        price: '205',
        discount: '35',
        ratings: '5.3',
        reviews:115,
        company: 'Good Vibes',
        qty:0


      },
      {
        // Just Look How Dare-Devil We're Looking 💀
        key: 1,
        name: 'Toner',
        description: 'Hellow Veronika',
        description: "I think You Should have one of these, I'll Get you this for sure",

        image: require('../assets/images/Brand/Posters/one/Product1/product1.jpg'),
        carousel: [
      
          {
            image: require('../assets/images/Brand/Posters/one/Product1/product1_1.jpg'),
          },
          {
            image: require('../assets/images/Brand/Posters/one/Product1/product1_2.jpg'),
          },
        ],
        price: '171',
        discount: '25',
        ratings: '5.3',
        reviews:115,
        company: 'Good Vibes',
        qty:0

      },
   
    ],
  }, 

]

const Data = {CategoryDisplayData, brandData,featured,poster};
export default Data;

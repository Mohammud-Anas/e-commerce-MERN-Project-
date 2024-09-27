const fs = require("fs");
const data = [
  {
    product_id: "17282025987373164398",
    product_title:
      "Leriya Fashion Oversized Shirt for Women | Shirt for Women Stylish Western | Women Long Shirt",
    product_description:
      "Product Detail: This oversized shirt for women includes a women's shirt in comfortable rayon fabric. Versatile Style: Leriya Fashion women oversized printed shirt is used for Western Wear, birthday party wear, Office wear, casual wear, Beach Wear, Summer Wear, Hangouts, Picnic, Vacation Wear. Easy Pairing: This casual baggy shirts for women Korean style is lightweight, breathable & made of soft fabric. It's easy to pair with jeans, shorts & skirt. Fashion Forward: Elevate your summer wardrobe with this shirt for women stylish western, a perfect transition into a new summer oversized shirts season. Size Recommendation: Please use the infographic size chart guidance to determine your perfect size for extra-large women's shirts; a size large is recommended for a comfortable fit.",
    product_photos: [
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTRVb_8lW_rZCVo5pMOIpRG-Wgh-k0XP0CufVHKvFi6JFqxMW3sOYXdjgZwz-sDprQCZAjyUSyfjvwnM6v7T47wltQket1V&usqp=CAE",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSZT06b3zSuRrZimaC1A2GzXZTLqNrqHos11aOOB6o6QevC7NLjSR8IJEY0MuD2WzZyDi4f4EDM1YEkngp7PvCNicLJzUD9&usqp=CAE",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQQLo-usfgUpFQOU9LDuj2vo0QOQMBYmZDHmed0_C1Hq2b8BNVBzy6gHAMf9RCViBnXi0jDeQ_NfVNM2k8YMOFImInE1zFt&usqp=CAE",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT_h2sKoBA84yaLpbIf3ly9kpZfRw6dLhvlZHuPxt0Tj_rL_gYKBugmQREo45uN4fuoNpXQxeZco0SfgMfUrUXD3y5ba78Wjg&usqp=CAE",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSefFph17g2jJQ4YOHlANQ32Ewkv5sC2ZKkTGvV88Y6TWWh_7ySIPt-mgCgQjDoWOvy8ps5kxYDD0kcUZTaDCbphWWOWxd2&usqp=CAE",
    ],
    product_attributes: {
      Size: "S",
      Material: "Cotton",
      "Size Types": "Regular",
    },
    product_rating: null,
    product_page_url:
      "https://google.com/shopping/product/17282025987373164398?gl=in&hl=en&prds=pid%3A8992842142590895733",
    product_offers_page_url:
      "https://google.com/shopping/product/17282025987373164398/offers?gl=in&hl=en&prds=pid%3A8992842142590895733",
    product_specs_page_url:
      "https://google.com/shopping/product/17282025987373164398/specs?gl=in&hl=en&prds=pid%3A8992842142590895733",
    product_reviews_page_url:
      "https://google.com/shopping/product/17282025987373164398/reviews?gl=in&hl=en&prds=pid%3A8992842142590895733",
    product_num_reviews: 0,
    product_num_offers: null,
    typical_price_range: ["₹329.00", "₹329.00"],
    offer: {
      store_name: "Amazon.in",
      store_rating: null,
      offer_page_url:
        "https://www.amazon.in/Leriya-Fashion-Oversized-Stylish-Western/dp/B0CZDZ4TN6?source=ps-sl-shoppingads-lpcontext&ref_=fplfs&psc=1&smid=A1WYWER0W24N8S",
      store_review_count: 0,
      store_reviews_page_url: null,
      price: "₹329.00",
      shipping: "₹40.00 delivery",
      tax: null,
      on_sale: false,
      original_price: null,
      product_condition: "NEW",
      top_quality_store: false,
    },
  },
  {
    product_id: "883673506969759830",
    product_title:
      "Mast & Harbour Floral Print Tie-Up Neck Dobby Woven Mini Ruched Wrap Style Dress(M) by Myntra",
    product_description:
      "Pink and red floral print wrap style dress Tie-up neck Three-quarter, puff sleeve Ruched Gathered or pleated detail Mini length in tulip hem Dobby fabric Concealed zip closure",
    product_photos: [
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRT2JzuERlaPTV26vvSH6g-1-gLpE3gtideLzkfF2KJjfQoRNYWFjF-dECsWau9xge5hC53itlWOU6ZPThX9WLyhnOx_ocG&usqp=CAE",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSMf9No9sH1Arh8MsbIkIFCo9bI4gv-r3Nnjw3a1HFZzVZBwE0Z2ledO1qVMUZ4_awyTWnsUHdamdAZTzplXUX_RRs76is_&usqp=CAE",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT2kq849ciXsus8S8DiUyD5Z1-k4JnuBUVKgKX4-hplczTsXX-HUza9lwmOUa2IIkFJNsrwTBhFzK1UxdVjjeAXXXewUqjS&usqp=CAE",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTOBINaRBU8E9YPUtZz9gAJAvVwJS8xiEv_Ulfzvr_MDKIGGFHAvVSrT0vCyfo4c0DPLoOgbj4OIcSseR1eH0DtzjE-Lv1LpA&usqp=CAE",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcToOLWNvQwT8na9V9PJ4_1WMHKW72tNAN2lRfRn854t8irWf7dywu3UOtz6mRcKwLgSfLVW6QBLmcFsr-E3-KqC1Y12KxjV&usqp=CAE",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQglNYrmpgr3t_0ZFbjrmSIZeCCLJqP-A1NTiJQ1l4kQtdSM-18wECCfdhfF6TnAUpZBSm8gfX9eyrqJx-uNZNUww5ynUAB&usqp=CAE",
    ],
    product_attributes: {
      Silhouette: "Wrap",
      Pattern: "Floral",
      Size: "M",
      "Sleeve Style": "Three-quarter Sleeve",
      Length: "Mini",
      "Size Types": "Regular",
    },
    product_rating: null,
    product_page_url:
      "https://google.com/shopping/product/883673506969759830?gl=in&hl=en&prds=pid%3A720813131464721582",
    product_offers_page_url:
      "https://google.com/shopping/product/883673506969759830/offers?gl=in&hl=en&prds=pid%3A720813131464721582",
    product_specs_page_url:
      "https://google.com/shopping/product/883673506969759830/specs?gl=in&hl=en&prds=pid%3A720813131464721582",
    product_reviews_page_url:
      "https://google.com/shopping/product/883673506969759830/reviews?gl=in&hl=en&prds=pid%3A720813131464721582",
    product_num_reviews: 0,
    product_num_offers: null,
    typical_price_range: ["₹493", "₹571"],
    offer: {
      store_name: "Myntra",
      store_rating: null,
      offer_page_url:
        "http://www.myntra.com/Dresses/Mast+%26+Harbour/Mast--Harbour-Floral-Print-Tie-Up-Neck-Dobby-Woven-Mini-Ruched-Wrap-Style-Dress/25480600/buy",
      store_review_count: 0,
      store_reviews_page_url: null,
      price: "₹681.00",
      shipping: "Delivery by Sat, 3 Aug",
      tax: null,
      on_sale: false,
      original_price: null,
      product_condition: "NEW",
      top_quality_store: false,
      coupon_code: "MYNTRA100",
      coupon_discount: "₹100",
    },
  },
  {
    product_id: "16550030160719616936",
    product_title:
      "Fashion Basket Women Embroidered Anarkali Kurta with Dupatta For Men (Pink, L)",
    product_description:
      "Pink, Women Embroidered Anarkali Kurta with Dupatta Casual Suit Sets perfect for Occasion occasion. Suggested care is to Machine wash.",
    product_photos: [
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSSWiUbwkrY0C7NlcXleWES3B1VcUHXpR5CvNqixZ1QNoICa2b6k5hic1YGgUqAxTto3w6EGnsayKbrHBX6075uAgtddhQz&usqp=CAE",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQkMyseaCxuG_wOAp36JCNlnPburiTnVh9U0rBjf_k9rI1IdK3bpJql-gbH_fbc0jn9Pcei9WDZFP1oXmX-ifglseMQbLutlA&usqp=CAE",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSup2CbVKaQ2qLXb7DlS80B3bYJpxsPRg7bh0OP1ozZV-lR-oCpkWPm7FRSuTDcJ5YhvyKbUFvVCNXqgfZ0XZE_vQjndiCgeg&usqp=CAE",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQwEKCs-gTEQRfWWYqMT_YrIlq4sQJn6tZasmljzNmTAlQFUO6ttQyrWD-JoNiotPws167R5gn0OzNsfunS1eETEYm3VsSn&usqp=CAE",
    ],
    product_attributes: null,
    product_rating: null,
    product_page_url:
      "https://google.com/shopping/product/16550030160719616936?gl=in&hl=en&prds=pid%3A4349743504321479750",
    product_offers_page_url:
      "https://google.com/shopping/product/16550030160719616936/offers?gl=in&hl=en&prds=pid%3A4349743504321479750",
    product_specs_page_url:
      "https://google.com/shopping/product/16550030160719616936/specs?gl=in&hl=en&prds=pid%3A4349743504321479750",
    product_reviews_page_url:
      "https://google.com/shopping/product/16550030160719616936/reviews?gl=in&hl=en&prds=pid%3A4349743504321479750",
    product_num_reviews: 0,
    product_num_offers: null,
    typical_price_range: ["₹1,599", "₹1,661"],
    offer: {
      store_name: "AJIO.com",
      store_rating: null,
      offer_page_url:
        "https://www.ajio.com/fashion-basket-women-embroidered-anarkali-kurta-with-dupatta/p/700085501_pink#gmf",
      store_review_count: 0,
      store_reviews_page_url: null,
      price: "₹1,899.00",
      shipping: "Free delivery by Thu, 8 Aug",
      tax: null,
      on_sale: false,
      original_price: null,
      product_condition: "NEW",
      top_quality_store: false,
    },
  },
  {
    product_id: "11319839074643304007",
    product_title: "Trending Stylus Women Dresses",
    product_description:
      "Fabric: Rayon Sleeve Length: Three-Quarter Sleeves Pattern: Solid Net Quantity (N): 1 Sizes: S (Bust Size: 36 in, Length Size: 44 in) XL (Bust Size: 42 in, Length Size: 44 in) L (Bust Size: 40 in, Length Size: 44 in) M (Bust Size: 38 in, Length Size: 44 in) XXL (Bust Size: 44 in, Length Size: 44 in) An elegant look by wearing this unique western wear collection from the house of Havisha Traders. Made of Premium fabric, these dresses provide comfort during normal and low temperatures and also will help you stay relaxed all day long. The product material is also sure to keep you comfortable. Look classy and stylish in this piece and revel in the comfort of the fabric. This dress is comfortable to wear and will make you look stunning. It comes with Flare and Balloon Sleeves with High Neck Country of Origin: India",
    product_photos: [
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQZ49XthNoO9S-B8--Kq6chGnsIcRSjT0XF_G2ZzI4HRM41F1YhcFk8U6tGgolBqglm4tXfx2qTDMD3m5Ck1sSaBTVT160_uQ&usqp=CAE",
    ],
    product_attributes: {
      Neckline: "High Neck",
      "Sleeve Style": "Three-quarter Sleeve",
      Color: "Teal",
    },
    product_rating: null,
    product_page_url:
      "https://google.com/shopping/product/11319839074643304007?gl=in&hl=en&prds=pid%3A8931030423021535037",
    product_offers_page_url:
      "https://google.com/shopping/product/11319839074643304007/offers?gl=in&hl=en&prds=pid%3A8931030423021535037",
    product_specs_page_url:
      "https://google.com/shopping/product/11319839074643304007/specs?gl=in&hl=en&prds=pid%3A8931030423021535037",
    product_reviews_page_url:
      "https://google.com/shopping/product/11319839074643304007/reviews?gl=in&hl=en&prds=pid%3A8931030423021535037",
    product_num_reviews: 0,
    product_num_offers: null,
    typical_price_range: ["₹410.00", "₹416.00"],
    offer: {
      store_name: "Meesho",
      store_rating: null,
      offer_page_url:
        "https://www.meesho.com/trending-stylus-women-dresses/p/3hcvv7?utm_source=google&utm_medium=cpc&utm_campaign=gmc&srsltid=AfmBOopQzyyRYGD30Rad9w60-UtPvXs9IUiM24OyfDXh5wz5k8Au13qxNrI",
      store_review_count: 0,
      store_reviews_page_url: null,
      price: "₹410.00",
      shipping: "Free delivery",
      tax: null,
      on_sale: false,
      original_price: null,
      product_condition: "NEW",
      top_quality_store: false,
    },
  },
  {
    product_id: "4907955124183284181",
    product_title:
      "Leriya Fashion Co Ord Set for Women Ethnic Wear | Ethnic Co Ord Set for Women Festive | Co Ord Set for Women",
    product_description:
      "Kurti and Pant Fabric:- Soft Rayon || Color:- Blue || Pattern:- Fancy Floral Print || Fit Type:- Regular Package content:- 1 kurta Pant For Women Only. || Type: Short Kurta Set for Women || Kurti Length :- Hip Length || Pant Length :- Ankle Occasion:- Casual Wear || Office Wear || Formal wear || Evening wear || Work Wear || Party Wear || Regular Outing Wear || Business Wear || Regular Wear || Best Gift For girls, Mom, Sister, Girlfriend, Wife.",
    product_photos: [
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSOPIqdrVOLdM6atLyfqtTFfD9uu7P06njhwlm1-LVJA91zSX-TcrHCJU2tIJbC_EO3DrlP4bfwy1LJI0LTMjDoZ04hXPJjbA&usqp=CAE",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRgjueHU9t3ozn4QNijx_GKc_qoBkWZjHTgqs-gOKWpFiJYKiMtnUsA7U3SM0XRa76DDhrgQm1rJgFf0k4uL_YXM2NWzp-MFQ&usqp=CAE",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQwWKAXbYg3qO82uw4hp_TG8ykQK_CERzHaa5K-7LYgIylcblacUNe1Sqh2AK4zimyUMrjZqPBG0aSNgEwZbl7DT2HQBBvb&usqp=CAE",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ-RzRk9oQtyhLzepkZVBXkCDbLtCDv9n3cslzCnB_Kwfz495OQcZPIGQUgCKzpbDHD8xjIJFEh4kc7Pid8_S_FE7-bIcyblg&usqp=CAE",
    ],
    product_attributes: null,
    product_rating: null,
    product_page_url:
      "https://google.com/shopping/product/4907955124183284181?gl=in&hl=en&prds=pid%3A5252727420526288382",
    product_offers_page_url:
      "https://google.com/shopping/product/4907955124183284181/offers?gl=in&hl=en&prds=pid%3A5252727420526288382",
    product_specs_page_url:
      "https://google.com/shopping/product/4907955124183284181/specs?gl=in&hl=en&prds=pid%3A5252727420526288382",
    product_reviews_page_url:
      "https://google.com/shopping/product/4907955124183284181/reviews?gl=in&hl=en&prds=pid%3A5252727420526288382",
    product_num_reviews: 0,
    product_num_offers: null,
    typical_price_range: ["₹529.00", "₹539.00"],
    offer: {
      store_name: "Amazon.in",
      store_rating: null,
      offer_page_url:
        "https://www.amazon.in/Leriya-Fashion-Kurta-Pant-Set/dp/B0CJM7DZKG?source=ps-sl-shoppingads-lpcontext&ref_=fplfs&psc=1&smid=A1WYWER0W24N8S",
      store_review_count: 0,
      store_reviews_page_url: null,
      price: "₹529.00",
      shipping: "Free delivery",
      tax: null,
      on_sale: false,
      original_price: null,
      product_condition: "NEW",
      top_quality_store: false,
    },
  },
  {
    product_id: "3853672706634882054",
    product_title:
      "Label Shaurya Sanadhya Black Georgette Dress (2XL) At Nykaa Fashion - Your Online Shopping Store",
    product_description:
      "Take your style game to the next level with this dress from Label Shaurya Sanadhya. Style it with a pair of heels and statement jewellery to look stunning.",
    product_photos: [
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQQnAQbGLsKNLtp_9tTb-KMwwihwqpWmbW6a31BCUxf0buofNMBGzAKAsRiS6vDdoHymg_n8OdcLpMF0evd57ndiBCeu9yh&usqp=CAE",
    ],
    product_attributes: { Size: "2XL", "Size Types": "Regular" },
    product_rating: null,
    product_page_url:
      "https://google.com/shopping/product/3853672706634882054?gl=in&hl=en&prds=pid%3A99801770353495287",
    product_offers_page_url:
      "https://google.com/shopping/product/3853672706634882054/offers?gl=in&hl=en&prds=pid%3A99801770353495287",
    product_specs_page_url:
      "https://google.com/shopping/product/3853672706634882054/specs?gl=in&hl=en&prds=pid%3A99801770353495287",
    product_reviews_page_url:
      "https://google.com/shopping/product/3853672706634882054/reviews?gl=in&hl=en&prds=pid%3A99801770353495287",
    product_num_reviews: 0,
    product_num_offers: null,
    typical_price_range: ["₹2,000.00", "₹2,000.00"],
    offer: {
      store_name: "Nykaa Fashion",
      store_rating: null,
      offer_page_url:
        "https://www.nykaafashion.com/label-shaurya-sanadhya-black-georgette-dress/p/2193303?adsource=shopping_india&skuId=2193309",
      store_review_count: 0,
      store_reviews_page_url: null,
      price: "₹1,875.00",
      shipping: "Free delivery by Mon, 5 Aug",
      tax: null,
      on_sale: false,
      original_price: null,
      product_condition: "NEW",
      top_quality_store: false,
    },
  },
  {
    product_id: "4302297392219386664",
    product_title: "Dillu Fashion Women Ethnic Dress White Dress",
    product_description:
      "Dillu Fashion Rayon Fabric With Polka Dot Print Pattern In Round Neck And Knee Length Short Dress For Festive And Party Wear Use",
    product_photos: [
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSbne1jU_eEtq6Xl2gJiAML7yfaI6vsXlPL-HQXKZeW1U-kvDZBKKnU-d0frI3PmJH9wEJR_PX9SSXSyaAImMSAHNsSNoUY&usqp=CAE",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTUlcfTeu0LliMcMZe6nM1wsAVL02sVm93H5HI3qeHJf_1GCLyMgWkLftxrH2D6Yo67Eru3uWQrlwHwrfPTdRoZne94Cj3f&usqp=CAE",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQdYG-LcbpDjxCYjnzMGVqWtBgRB63jGWc4kgL9cyHvFSPTULuN-kQNDTqeWQkKXOdwJ2QNhDkXhHdjN70ogGtShUoi8C-n7Q&usqp=CAE",
    ],
    product_attributes: {
      Pattern: "Polka Dot",
      Size: "M",
      Neckline: "Round Neck",
      Length: "Mini",
      "Size Types": "Regular",
    },
    product_rating: null,
    product_page_url:
      "https://google.com/shopping/product/4302297392219386664?gl=in&hl=en&prds=pid%3A2770738953630772629",
    product_offers_page_url:
      "https://google.com/shopping/product/4302297392219386664/offers?gl=in&hl=en&prds=pid%3A2770738953630772629",
    product_specs_page_url:
      "https://google.com/shopping/product/4302297392219386664/specs?gl=in&hl=en&prds=pid%3A2770738953630772629",
    product_reviews_page_url:
      "https://google.com/shopping/product/4302297392219386664/reviews?gl=in&hl=en&prds=pid%3A2770738953630772629",
    product_num_reviews: 0,
    product_num_offers: null,
    typical_price_range: ["₹484.00", "₹484.00"],
    offer: {
      store_name: "Shopsy By Flipkart",
      store_rating: null,
      offer_page_url:
        "https://www.shopsy.in/dillu-fashion-women-ethnic-dress-white/p/itmf5728391179b7?pid=DREGGSF4P22VGW4C&lid=LSTDREGGSF4P22VGW4C5IHBDN&marketplace=FLIPKART",
      store_review_count: 0,
      store_reviews_page_url: null,
      price: "₹484.00",
      shipping: "Free delivery by Mon, 5 Aug",
      tax: null,
      on_sale: false,
      original_price: null,
      product_condition: "NEW",
      top_quality_store: false,
    },
  },
  {
    product_id: "14150887664956501966",
    product_title:
      "aayu Women Lavender Georgette Smocked Bodycon Dress (M) by Myntra",
    product_description:
      "Lavender self design bodycon dress Square neck Long, puff sleeve Smocked detail Above knee length in straight hem Georgette fabric",
    product_photos: [
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTPmMNofo5y4yt0vnakGXBJyzNPrCxbd2WiXc9V0XdDV_JyN1c-M3ynsu_1EOAwJ0rEJx7URXbhOm6K73ZLOj-dCiURQ4vL&usqp=CAE",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSG9J5QnaIxSnoUGL0lAH8NCqpcbSJIo18Ol8Wsc3Op7upRYCGb48GpF8RqkkKdOB7ymLqR6qGbrCLFHqNRnVMvZen8VU_iLg&usqp=CAE",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQIihQwP9WTPrRcHKQSVfvqsP1phFqWvIlyErrYrzbgq2zPa60RK3LzFPBQ0dOEYTolba-uh1tems0sKIB2ft8Rz8wJjvc4&usqp=CAE",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQWTAPxE68KkDeix90UntoS5UH9CfkNmu8UiXAiKE1mV57x4endBMTGF132ydruYcSfA7kHLse98qVvxfvgyfbJzp0t_p2Bhg&usqp=CAE",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQRN0GnNqa6NPgroRRGzZB_rphcOzwyL1gc1sgYlgP_5hBPV1G5qYqAyzY0V0VvY2DRKwgSG4dJo776o4kcrrydsCcpSbPL_A&usqp=CAE",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSHd9JWi9TWon5BuqVeAcC1d3K0tG9WRbYHW4Ys5f_MseEgVWuKaerRErq4TGsBAfW-GreDcRrR3YX71IJ42JCsH0QOS33P&usqp=CAE",
    ],
    product_attributes: {
      Silhouette: "Fitted",
      Size: "M",
      Neckline: "Square Neck",
      "Sleeve Style": "Long Sleeve",
      Length: "Mini",
      "Size Types": "Regular",
    },
    product_rating: null,
    product_page_url:
      "https://google.com/shopping/product/14150887664956501966?gl=in&hl=en&prds=pid%3A16047105449089261261",
    product_offers_page_url:
      "https://google.com/shopping/product/14150887664956501966/offers?gl=in&hl=en&prds=pid%3A16047105449089261261",
    product_specs_page_url:
      "https://google.com/shopping/product/14150887664956501966/specs?gl=in&hl=en&prds=pid%3A16047105449089261261",
    product_reviews_page_url:
      "https://google.com/shopping/product/14150887664956501966/reviews?gl=in&hl=en&prds=pid%3A16047105449089261261",
    product_num_reviews: 0,
    product_num_offers: null,
    typical_price_range: ["₹499.00", "₹499.00"],
    offer: {
      store_name: "Myntra",
      store_rating: null,
      offer_page_url:
        "http://www.myntra.com/Dresses/aayu/aayu-Women-Lavender-Georgette-Smocked-Bodycon-Dress/20501422/buy",
      store_review_count: 0,
      store_reviews_page_url: null,
      price: "₹599.00",
      shipping: "Delivery by Sat, 3 Aug",
      tax: null,
      on_sale: false,
      original_price: null,
      product_condition: "NEW",
      top_quality_store: false,
      coupon_code: "MYNTRA100",
      coupon_discount: "₹100",
    },
  },
  {
    product_id: "12640621189521639189",
    product_title: "Purshottam Wala Women Ethnic Dress Black Dress",
    product_description:
      "Spruce Up Your Wardrobe With This Dress Form Purshottam Wala. This Maxi Dress Is Perfect For A Day Out With Friends Or A Night Of Get Togethers With Family.",
    product_photos: [
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQtQjYQOpLR1QIQX4X-j-96BEqrWhxYoO51CglL3NwhOr3-5dzAl5awTFKR4047mycok-HuvdWcrpAn3WaRNVCRjDeDTOxBHw&usqp=CAE",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQikVzZSFBB2PkjVXrQLYOnf2Y_mKB4lGydao706Ubjlu6QHorbZhzcJyqCrM2iZAOGDGqjxnGFozF9Jw3IpWEGILu6vmKc&usqp=CAE",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTqpyMx1Bh1YZXUmpkFeaNoDLLwDq64wOoVWM8HJpkMuw0HqCfw9fXGW2q8czYGCTsrishW-1WL52kHMbPutYDxgBqxB612lw&usqp=CAE",
    ],
    product_attributes: {
      Size: "XS",
      "Sleeve Style": "Sleeveless",
      Length: "Maxi",
      Color: "Black",
      "Size Types": "Regular",
    },
    product_rating: null,
    product_page_url:
      "https://google.com/shopping/product/12640621189521639189?gl=in&hl=en&prds=pid%3A26421625284590209",
    product_offers_page_url:
      "https://google.com/shopping/product/12640621189521639189/offers?gl=in&hl=en&prds=pid%3A26421625284590209",
    product_specs_page_url:
      "https://google.com/shopping/product/12640621189521639189/specs?gl=in&hl=en&prds=pid%3A26421625284590209",
    product_reviews_page_url:
      "https://google.com/shopping/product/12640621189521639189/reviews?gl=in&hl=en&prds=pid%3A26421625284590209",
    product_num_reviews: 0,
    product_num_offers: null,
    typical_price_range: ["₹389.00", "₹389.00"],
    offer: {
      store_name: "Flipkart",
      store_rating: null,
      offer_page_url:
        "http://www.flipkart.com/purshottam-wala-women-ethnic-dress-black/p/itmd1036842af9e2?pid=DREG62QVKAJQKCFW&lid=LSTDREG62QVKAJQKCFWOQWTFN&marketplace=FLIPKART&cmpid=content_dress_8965229628_gmc",
      store_review_count: 0,
      store_reviews_page_url: null,
      price: "₹389.00",
      shipping: "Free delivery by Mon, 5 Aug",
      tax: null,
      on_sale: false,
      original_price: null,
      product_condition: "NEW",
      top_quality_store: false,
    },
  },
  {
    product_id: "3187879407084834074",
    product_title: "Women Stylish Self-Design Dress",
    product_description:
      "Fabric: Georgette Sleeve Length: Long Sleeves Net Quantity (N): 1 Sizes: S (Bust Size: 34 in, Length Size: 36 in) XL (Bust Size: 40 in, Length Size: 36 in) L (Bust Size: 38 in, Length Size: 36 in) M (Bust Size: 36 in, Length Size: 36 in) Take your vacation style to a whole new level with outfits accentuated with beautiful detailing. Tiered, ballooning, smocking, oversized, robe-like silhouettes in prints and patterns, such as floral, horticool, joyful trends, and more are the key elements of the vacay attire trend Country of Origin: India",
    product_photos: [
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTum0_12TqWLkfoA64pxunbZHSdenZxd8NM1BuGw9cajKh6bHxfTVQg15X6BPF_LPzAu0B9ijAr0KmuQOWJ7JqpPEjaF5yy&usqp=CAE",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQt-8GsMMT2m5Gb_ARF9i_UaoM-qYOxLu4cUjTdhCMmLKs61k4si8MLM8rfxMSy43YZgpe7QkkeFSYhf3q-QWeDHM-SWWsw&usqp=CAE",
    ],
    product_attributes: {
      Pattern: "Floral",
      "Sleeve Style": "Long Sleeve",
      Color: "Maroon",
    },
    product_rating: null,
    product_page_url:
      "https://google.com/shopping/product/3187879407084834074?gl=in&hl=en&prds=pid%3A7153817889933757326",
    product_offers_page_url:
      "https://google.com/shopping/product/3187879407084834074/offers?gl=in&hl=en&prds=pid%3A7153817889933757326",
    product_specs_page_url:
      "https://google.com/shopping/product/3187879407084834074/specs?gl=in&hl=en&prds=pid%3A7153817889933757326",
    product_reviews_page_url:
      "https://google.com/shopping/product/3187879407084834074/reviews?gl=in&hl=en&prds=pid%3A7153817889933757326",
    product_num_reviews: 0,
    product_num_offers: null,
    typical_price_range: ["₹410", "₹416"],
    offer: {
      store_name: "Meesho",
      store_rating: null,
      offer_page_url:
        "https://www.meesho.com/women-stylish-self-design-dress/p/4z8728?utm_source=google&utm_medium=cpc&utm_campaign=gmc&srsltid=AfmBOoqB4mYNvhhpm6h7HmdXMf-Jmo-2BZorEqLHEgYrl1JisQlbuNiqftw",
      store_review_count: 0,
      store_reviews_page_url: null,
      price: "₹403.00",
      shipping: "Free delivery",
      tax: null,
      on_sale: false,
      original_price: null,
      product_condition: "NEW",
      top_quality_store: false,
    },
  },
  {
    product_id: "10536661327012580963",
    product_title:
      "Berrylush Floral Georgette Bodycon Mini Dress (XL) by Myntra",
    product_description:
      "Spring Is The Perfect Time To Let Your Casual Style Meet A Trendy And Extremely Feminine Fashion Statement With The Addition Of This Captivating Black And Blue Floral Print Sweetheart Neck Bodycon Mini Dress From Berrylush. Spotlighting A Cinematic Amalgam Of This Black And Blue Floral Print That Gives This Dress A Bold And Beautiful Appearance With A Tinge Of Nature's Beauty. Made From High-quality Crepe Polyester Fabric That Lends This Dress Excellent Resistance From Water-based Stains And Wrinkles. Moreover, The Woven Detailing Enhances The Overall Durability Of This Dress With A Hint Of Elasticity For Flexible Body Movements. Complete Your Look Fabulously By Wearing This Mini Dress With A Pair Of High-heels, Minimalistic Floral Jewellery, And A Cute Matching Side Bag.",
    product_photos: [
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR1wnT4WFxIFKbJEgXsNOwgsGMiyEYI-5PZlIXC12D5AkKsVRnhHFrjWjrUyRzKBGUZsugYeOPpPh5-2KV4KKnYyQZ8SSHf&usqp=CAE",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRFEZqo9YtXvu6N-zGcbMbOjVORIf62Ssubudf18VMrv7VxDWmDmaej5x4jhM2b53bL8hinFIJNsGFHFXyN7g-aVpjYp9IM&usqp=CAE",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQO1N4YQcqcdTunDtunLpt-BSgMhCUuQG2s6lRWsBoHKsyqwh3LTaoWWtPhdZr6mLSvocsQpdgyMRBtqyMbBjjQVFFre5ye&usqp=CAE",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS5_xHt9AbfA7dqkhcAa6aUelaolc3kWt9pW2oS_HPqixvCb2VSVWcdfc_3veEXzsKFU0M7be8WTN55dwG9cfvZ8Jk3Z4Qu&usqp=CAE",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR88RGlclMV2GTEmqPCnkMW4c7zYQMCO5umgltPZfftrFng-QLd1Mux_TXgsBpP7RW2xmRPjYsgBGuJh9Fxpac6NQkwHVou&usqp=CAE",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTfWI6peYZbNkpE3DTkwlNp0xqD0Mqk-oUHGbkE8owxF3Q7I9OopCdwrb4Jz2dkjWyuBoA8-EB75Zh7cqCgKdvaYZxZo04t&usqp=CAE",
    ],
    product_attributes: {
      Silhouette: "Fitted",
      Pattern: "Floral",
      Size: "XL",
      Material: "Polyester",
      Neckline: "Sweetheart",
      "Sleeve Style": "Long Sleeve",
      Length: "Mini",
      "Size Types": "Regular",
    },
    product_rating: 4.5,
    product_page_url:
      "https://google.com/shopping/product/10536661327012580963?gl=in&hl=en&prds=pid%3A6655103520651907625",
    product_offers_page_url:
      "https://google.com/shopping/product/10536661327012580963/offers?gl=in&hl=en&prds=pid%3A6655103520651907625",
    product_specs_page_url:
      "https://google.com/shopping/product/10536661327012580963/specs?gl=in&hl=en&prds=pid%3A6655103520651907625",
    product_reviews_page_url:
      "https://google.com/shopping/product/10536661327012580963/reviews?gl=in&hl=en&prds=pid%3A6655103520651907625",
    product_num_reviews: 8,
    product_num_offers: null,
    typical_price_range: ["₹647", "₹809"],
    offer: {
      store_name: "Myntra",
      store_rating: null,
      offer_page_url:
        "http://www.myntra.com/Dresses/Berrylush/Berrylush-Floral-Georgette-Bodycon-Mini-Dress/21278614/buy",
      store_review_count: 0,
      store_reviews_page_url: null,
      price: "₹989.00",
      shipping: "Delivery by Sat, 3 Aug",
      tax: null,
      on_sale: false,
      original_price: null,
      product_condition: "NEW",
      top_quality_store: false,
      coupon_code: "MYNTRA100",
      coupon_discount: "₹100",
    },
  },
  {
    product_id: "1:14897174281638380165",
    product_title: "Cute A Line Long Sleeves Lace Fashion Dress",
    product_description:
      "Cute A line long sleeves lace fashion dressMaterial blendedColorgreenSizecm Free SizeSize skirt length 115 sleeve length 60 bust 96 waist 6472",
    product_photos: [
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRO0J0DY2k2T6MX4NLO4INVovRql0AyaNoAIuLrXbw8sHwMo9xZeF2xyMxHxY0frXoXeTgmQy6o1vgVxUDKJkl3WU5xFtR3EA&usqp=CAE",
    ],
    product_attributes: {
      Material: "Lace",
      "Sleeve Style": "Long Sleeve",
    },
    product_rating: null,
    product_page_url:
      "https://google.com/shopping/product/1?gl=in&hl=en&prds=pid%3A14897174281638380165",
    product_offers_page_url:
      "https://google.com/shopping/product/1/offers?gl=in&hl=en&prds=pid%3A14897174281638380165",
    product_specs_page_url:
      "https://google.com/shopping/product/1/specs?gl=in&hl=en&prds=pid%3A14897174281638380165",
    product_reviews_page_url:
      "https://google.com/shopping/product/1/reviews?gl=in&hl=en&prds=pid%3A14897174281638380165",
    product_num_reviews: 0,
    product_num_offers: null,
    typical_price_range: null,
    offer: {
      store_name: "Luulla - Girl Fashion Store",
      store_rating: null,
      offer_page_url:
        "https://www.luulla.com/product/1657763/cute-a-line-long-sleeves-lace-fashion-dress?b_currency=usd&set_b_currency=1&srsltid=AfmBOopZD3c1RbAKkSJ5FdF630dwLwr2ArVcYQfZ_-eNOdL6MFNxB89nQPY",
      store_review_count: 0,
      store_reviews_page_url: null,
      price: "₹3,013.99 + tax",
      shipping: "₹4,604.70 delivery by Fri, 4 Oct",
      tax: null,
      on_sale: true,
      original_price: "₹3,767.48",
      product_condition: "NEW",
      top_quality_store: false,
    },
  },
  {
    product_id: "8370522361289304424",
    product_title:
      "MOMINA FASHION Women Embroidered Straight Kurta Set with Dupatta For Women (White, M)",
    product_description:
      "White, Women Embroidered Straight Kurta Set with Dupatta Kurta Suit Sets perfect for Universal occasion. Suggested care is to Dry clean.",
    product_photos: [
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR9QaDzEbP48qtHJLanMvRgQEegSgrmi__MghAPPLYC-Ly7pv0AIG3Z1g-M2cZNVeoFQAmd3z4n3-X7GBuvmPphTQs7Mlxlqw&usqp=CAE",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTOROS0Mwqj4NryzCXCBxxJqW0xfLpWcYXo2L_8E2obNVLcMJnDy988SmN0mIpMv0gDx1tju477MfPVM-YE3hDVZfVE9OaHUg&usqp=CAE",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSr1Jw1oFUC73AO_pf2S4z6BhiZU48ePUAOvEAh6C3AAMmdZfwum1g1OY7qnLs2SrPRGCDp8ZKkiX7s3V_ObRMq5mqWSmIE&usqp=CAE",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRkoJ7-_FIdwK8c_E-BYKoV9DaRO3cv_OWrdJgUnAiQr9LeUnHL6jroATZ6KwrQkCjuR2JwWlfPUWf735QeKwG6w0N5J79WPA&usqp=CAE",
    ],
    product_attributes: null,
    product_rating: null,
    product_page_url:
      "https://google.com/shopping/product/8370522361289304424?gl=in&hl=en&prds=pid%3A10376799073081881625",
    product_offers_page_url:
      "https://google.com/shopping/product/8370522361289304424/offers?gl=in&hl=en&prds=pid%3A10376799073081881625",
    product_specs_page_url:
      "https://google.com/shopping/product/8370522361289304424/specs?gl=in&hl=en&prds=pid%3A10376799073081881625",
    product_reviews_page_url:
      "https://google.com/shopping/product/8370522361289304424/reviews?gl=in&hl=en&prds=pid%3A10376799073081881625",
    product_num_reviews: 0,
    product_num_offers: null,
    typical_price_range: ["₹1,365.00", "₹1,365.00"],
    offer: {
      store_name: "AJIO.com",
      store_rating: null,
      offer_page_url:
        "https://www.ajio.com/momina-fashion-women-embroidered-straight-kurta-set-with-dupatta/p/700093579_white#gmf",
      store_review_count: 0,
      store_reviews_page_url: null,
      price: "₹1,522.00",
      shipping: "Free delivery by Thu, 8 Aug",
      tax: null,
      on_sale: false,
      original_price: null,
      product_condition: "NEW",
      top_quality_store: false,
    },
  },
  {
    product_id: "6205726831908726153",
    product_title:
      "Leriya Fashion Ethnic Co Ord Set for Women Kurta Set for Women | 2 Piece Kurta Set | Kurta with Pant for Women | Co-ord Set",
    product_description:
      "Size Recommendation: Please use the infographic size chart guidance to determine your perfect size; a size large is recommended for a comfortable fit. Occasions: Leriya Fashion Kurta Set – Co-Ord for Women is used for Western Wear, western Dress wear, Office wear, Night Wear, Beach Wear, Summer Wear, Hangouts, Picnic, Vacation Wear. Great Sleep Pajama Set, Women's Loungewear, Pajama Night Suits Set, kurta pant set. Summer-Ready Co-Ord Sets: Embrace the season in style with our summer women's Kurta sets, designed to keep you cool and fashionable in the warmer months.",
    product_photos: [
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRxODwM0Hiew7UZdMwLhdBkX4r6VieYa1wADurLsQSD7h8C1gI4vFDLaHvwVQecbspZ1nP3gpt76fCAT9fLvzV966smzwjU&usqp=CAE",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSqU3CQRSTf354doU3pJpFYVzTsxw1MPRhGW_Qj8H8_kOGrORn8lPgYIn2xJR8udUWbuKDDZsW17zhxijbfL3qMFQfkFQTy&usqp=CAE",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSzaJc3JJHUoPW9DBWK-v9AaEK8BggWFwgWjPCab0c8IQe7F-F3xJ39SPU7Dg7j1RB1cbhs4zEkseQwZ50l-sIY7nORCtbG&usqp=CAE",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSbv9xo0u_A0iJ0PuNALrEu62Dhmkk-bpRlO7DIZqXsHPOpLub5zDwzJAieOMpMulDbxxqPxovIuAHGobxjU6G2LsPR57C7yA&usqp=CAE",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSlm2y8nmdTS8g3_FZPAFba_VggHjGU3JbJfSRIg0D-d9_klejzAaGQ9AnMHcjKs3i_AxEasEPV-hbl0vqcNGRHuGkQjTEXUQ&usqp=CAE",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSgnyE6D7KJC8LPjlgFaM7Y1FxlOlRI4G2VEFAGKPu12NML1kX8DVHncEjObr0ydPwunTEBYOhsmiwVHgVArr-zeo3Sn7J61Q&usqp=CAE",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQU7ZD_Q67r5QZ4Yo2laneLSkVw-IWsB6d1-YpMqWJTrGhoxDOTaZnh5ElwnQmYdVaqqghR0kCLUvZehZnSclLcevhLbmWNGA&usqp=CAE",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS0tryMZOb8ohMJY9t-rWtWIRkpq8raMmENF5SWZrlf0ORpa0BPXKRyeZJyA3rjP6z8HvlrrU-752d0BOMJmtsFzqs9oIr7&usqp=CAE",
    ],
    product_attributes: { Color: "Off White" },
    product_rating: null,
    product_page_url:
      "https://google.com/shopping/product/6205726831908726153?gl=in&hl=en&prds=pid%3A6477094276443441368",
    product_offers_page_url:
      "https://google.com/shopping/product/6205726831908726153/offers?gl=in&hl=en&prds=pid%3A6477094276443441368",
    product_specs_page_url:
      "https://google.com/shopping/product/6205726831908726153/specs?gl=in&hl=en&prds=pid%3A6477094276443441368",
    product_reviews_page_url:
      "https://google.com/shopping/product/6205726831908726153/reviews?gl=in&hl=en&prds=pid%3A6477094276443441368",
    product_num_reviews: 0,
    product_num_offers: null,
    typical_price_range: ["₹529.00", "₹539.00"],
    offer: {
      store_name: "Amazon.in",
      store_rating: null,
      offer_page_url:
        "https://www.amazon.in/Leriya-Fashion-Ethnic-Women-Co-ord/dp/B0CNZ2V3RR?source=ps-sl-shoppingads-lpcontext&ref_=fplfs&psc=1&smid=A1WYWER0W24N8S",
      store_review_count: 0,
      store_reviews_page_url: null,
      price: "₹529.00",
      shipping: "Free delivery",
      tax: null,
      on_sale: false,
      original_price: null,
      product_condition: "NEW",
      top_quality_store: false,
    },
  },
  {
    product_id: "10999507527227754117",
    product_title: "all about you Cinched Waist Shirt Dress(L) by Myntra",
    product_description:
      "Olive green solid shirt dress Shirt collar Long, cuffed sleeves Tie-up detail Above knee length in flared hem Button closure",
    product_photos: [
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS_xgnSYVoPsQj1niQqpBGcyzxsqj7YVpa57Qw8jOlDg_cR7l04yJqs46a2nBUQs6BoXTFh9vovIdffDMV_7YAHmxQEN1DY0w&usqp=CAE",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRpbVbAqpjvaLkDkM15L95yIqkymttmSUWzRKZUB5Vqq1kJcg_a-TaS0kaeiwsE_1oot0WKKtA8KrbMyToy63XjIKGf1kqIBg&usqp=CAE",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTHHNs1hwSzTtG3BIHcu9YxYmxAivAYkbZ2Klkfv2pZywt8WJbKboDImv1YRPV7IWqlINsjdfv_4XOW0_jo0eWZXiwgW9OzoA&usqp=CAE",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQQfazHfEHpvO9m5781hYRdzJ_e0SVtOWpbstFIloJ-mTRAd2KHRIvjznSdVlarfeYlXFZKeRJFzGYuGjCsAoCJv7KWLXZQDw&usqp=CAE",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQLa0myvOb1O2LsfOYm82_IaWEth3_DzCZNG6oOOhv2FX0VnybJFj8oLxcAQjWXheZQJKpZBNuXOMtt8D6Fp78RXlNK7HqJAQ&usqp=CAE",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQTE_DgiFeg3lX-uzOIl2u-aW-luuQpBd4DaQgBZKN0DlFg0dQS9BR7b1WZfonv3rvdbp-shs9VFc4M5782HowUZiwPd7AfYg&usqp=CAE",
    ],
    product_attributes: {
      Size: "L",
      Neckline: "Collared",
      "Sleeve Style": "Long Sleeve",
      Length: "Mini",
      "Size Types": "Regular",
    },
    product_rating: null,
    product_page_url:
      "https://google.com/shopping/product/10999507527227754117?gl=in&hl=en&prds=pid%3A2142874957169773343",
    product_offers_page_url:
      "https://google.com/shopping/product/10999507527227754117/offers?gl=in&hl=en&prds=pid%3A2142874957169773343",
    product_specs_page_url:
      "https://google.com/shopping/product/10999507527227754117/specs?gl=in&hl=en&prds=pid%3A2142874957169773343",
    product_reviews_page_url:
      "https://google.com/shopping/product/10999507527227754117/reviews?gl=in&hl=en&prds=pid%3A2142874957169773343",
    product_num_reviews: 0,
    product_num_offers: null,
    typical_price_range: ["₹619.00", "₹679.00"],
    offer: {
      store_name: "Myntra",
      store_rating: null,
      offer_page_url:
        "http://www.myntra.com/Dresses/all+about+you/all-about-you-Cinched-Waist-Shirt-Dress/26334902/buy",
      store_review_count: 0,
      store_reviews_page_url: null,
      price: "₹679.00",
      shipping: "Delivery by Sat, 3 Aug",
      tax: null,
      on_sale: false,
      original_price: null,
      product_condition: "NEW",
      top_quality_store: false,
      coupon_code: "MYNTRA100",
      coupon_discount: "₹100",
    },
  },
  {
    product_id: "2352891032855915628",
    product_title: "Prasheem Fashion Women Two Piece Dress Black Dress",
    product_description:
      "Style Code Is Chex_2023 T-s. Type Is Two Piece Dress. Length Is Mini/short. Color Is Black. Ideal For Is Women. Fabric Is Lycra Blend. Suitable For Is Western Wear.",
    product_photos: [
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSc-cwOeQYvTYUtAYGby4VKxe_APow3z0yT-WAUEiytMaJ7qNmI5icCRwqUtBxDHBCjUNNcGwoEB9cKaHdGhGT7A34kfz9i&usqp=CAE",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQyHcHWTXLyNFnDmx5JUCH2AHHV6c4VI32UYQ6booABE8NHrMkz7qlUY4V3N9DVTYpJtjY9CWWIAnHDE6aWLhAwU31G41Nv&usqp=CAE",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS0fvyxU-Jv3WcVWC3xsJVCjd8vWf1m422MiLsIIvtkmv-TCAOLg_adUUzfl5qa9k4YrSxN-KbG-sSzb_cHE2XA673E1vdV&usqp=CAE",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTcHqVSmwCFa0pfdiFL0i4grfbhQCDR9az_YR1gxqyvs7SchLZu7YFIaL5ASz8yladGbdgiWEOZu9nJh0AKHgggeiz8Ap22&usqp=CAE",
    ],
    product_attributes: {
      Size: "M",
      Length: "Mini",
      "Size Types": "Regular",
    },
    product_rating: null,
    product_page_url:
      "https://google.com/shopping/product/2352891032855915628?gl=in&hl=en&prds=pid%3A4855307104592706791",
    product_offers_page_url:
      "https://google.com/shopping/product/2352891032855915628/offers?gl=in&hl=en&prds=pid%3A4855307104592706791",
    product_specs_page_url:
      "https://google.com/shopping/product/2352891032855915628/specs?gl=in&hl=en&prds=pid%3A4855307104592706791",
    product_reviews_page_url:
      "https://google.com/shopping/product/2352891032855915628/reviews?gl=in&hl=en&prds=pid%3A4855307104592706791",
    product_num_reviews: 0,
    product_num_offers: null,
    typical_price_range: ["₹379.00", "₹379.00"],
    offer: {
      store_name: "Flipkart",
      store_rating: null,
      offer_page_url:
        "http://www.flipkart.com/prasheem-fashion-women-two-piece-dress-black/p/itm68139add3ada1?pid=DREH2N4WCDHZBVQT&lid=LSTDREH2N4WCDHZBVQTY6HAYG&marketplace=FLIPKART&cmpid=content_dress_8965229628_gmc",
      store_review_count: 0,
      store_reviews_page_url: null,
      price: "₹379.00",
      shipping: "Free delivery by Mon, 5 Aug",
      tax: null,
      on_sale: false,
      original_price: null,
      product_condition: "NEW",
      top_quality_store: false,
    },
  },
  {
    product_id: "10841076019549469517",
    product_title:
      "Label Shaurya Sanadhya White Polka Dot Ruffle Fit And Flare Short Dress (S) At Nykaa Fashion - Your Online Shopping Store",
    product_description:
      "Make a statement everywhere you go as you flaunt this dress from Label Shaurya Sanadhya. Style it with a pair of heels and minimal jewellery to look stunning.",
    product_photos: [
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ2jnbPPSfolzVXtEy1ubrJ1LPY-Nm9-MsCYNgW_8xWqN00CHjPYbiBe_y3mRFKKnJYvmVpiT5LkbKp5NllAbWDkeW7_bM0&usqp=CAE",
    ],
    product_attributes: {
      Silhouette: "Fit and Flare",
      Pattern: "Polka Dot",
      Size: "S",
      Length: "Mini",
      "Size Types": "Regular",
    },
    product_rating: null,
    product_page_url:
      "https://google.com/shopping/product/10841076019549469517?gl=in&hl=en&prds=pid%3A15291761181596286616",
    product_offers_page_url:
      "https://google.com/shopping/product/10841076019549469517/offers?gl=in&hl=en&prds=pid%3A15291761181596286616",
    product_specs_page_url:
      "https://google.com/shopping/product/10841076019549469517/specs?gl=in&hl=en&prds=pid%3A15291761181596286616",
    product_reviews_page_url:
      "https://google.com/shopping/product/10841076019549469517/reviews?gl=in&hl=en&prds=pid%3A15291761181596286616",
    product_num_reviews: 0,
    product_num_offers: null,
    typical_price_range: ["₹2,560.00", "₹2,560.00"],
    offer: {
      store_name: "Nykaa Fashion",
      store_rating: null,
      offer_page_url:
        "https://www.nykaafashion.com/label-shaurya-sanadhya-white-polka-dot-ruffle-fit-and-flare-short-dress/p/2193031?adsource=shopping_india&skuId=2193033",
      store_review_count: 0,
      store_reviews_page_url: null,
      price: "₹2,400.00",
      shipping: "Free delivery by Mon, 5 Aug",
      tax: null,
      on_sale: false,
      original_price: null,
      product_condition: "NEW",
      top_quality_store: false,
    },
  },
  {
    product_id: "1580970790356218877",
    product_title: "Alamode Label Jeremy Summer Two Piece Set Brown / S",
    product_description:
      "Material - Cotton Crepe Blend Set of Top and Shorts - Inner not included Introducing the JeremyCoord Set, the perfect summer ensemble that combines comfort, style, and versatility. Designed for those fashion-forward individuals who want to look effortlessly trendy, this set features a top and shortsin a variety of vibrant colours! Made with luxe quality fabric!",
    product_photos: [
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTFny22dAvSQrjWy6RDIoYyxEmZrXrxRohKeg7iN148IUxJ1J87vgCLIJfik5l0nagMJLfQyVXs8050zpv_AbneF6Ui4JG8GA&usqp=CAE",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQd-WpTlhFdhSD9xnKYKr7GiYgwuLDGv6Wb09-wetYQOin4sGbMIwTaHqpxZXaxNSxfTswH1jM_oFMJTYHMajZu-XM--BShuQ&usqp=CAE",
    ],
    product_attributes: { Color: "Brown" },
    product_rating: null,
    product_page_url:
      "https://google.com/shopping/product/1580970790356218877?gl=in&hl=en&prds=pid%3A4701624417264429736",
    product_offers_page_url:
      "https://google.com/shopping/product/1580970790356218877/offers?gl=in&hl=en&prds=pid%3A4701624417264429736",
    product_specs_page_url:
      "https://google.com/shopping/product/1580970790356218877/specs?gl=in&hl=en&prds=pid%3A4701624417264429736",
    product_reviews_page_url:
      "https://google.com/shopping/product/1580970790356218877/reviews?gl=in&hl=en&prds=pid%3A4701624417264429736",
    product_num_reviews: 0,
    product_num_offers: null,
    typical_price_range: ["₹2,499.00", "₹2,499.00"],
    offer: {
      store_name: "Alamode By Akanksha",
      store_rating: null,
      offer_page_url:
        "https://www.alamodelabel.in/products/jeremy-summer-crepe-coord-set?variant=45656385126704&srsltid=AfmBOooxQXyFLhmnX3EodSG51xo8AFzF_m6UkOAx25SoE-kQtOQ0h370SVY",
      store_review_count: 0,
      store_reviews_page_url: null,
      price: "₹2,499.00",
      shipping: "₹50.00 delivery by Thu, 8 Aug",
      tax: null,
      on_sale: false,
      original_price: null,
      product_condition: "NEW",
      top_quality_store: false,
    },
  },
  {
    product_id: "5517548413572100604",
    product_title: "Berrylush Off-Shoulder Maxi Dress (S) by Myntra",
    product_description:
      "Pattern Is Solid. Style Code Is Dr6144pk. Pack Of Is 1. Sleeve Length Is Sleeveless. Color Is Pink. Ideal For Is Women. Sleeve Is Off Shoulder Sleeve. Suitable For Is Western Wear. Type Is A-line. Length Is Maxi/full Length. Fabric Care Is Machine Wash. Neck Is Off Shoulder. Net Quantity Is 1. Fabric Is Polyester.",
    product_photos: [
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSvo8lZO1dbubkzZmP2xSfCnO1hpSRPd3OTIixMsUo6OPrsrh10j3w-hgGZiNLZhO9VImUDIMiIDDckj96DCFUwQkyrYNnJPA&usqp=CAE",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRf3vuBvq3fEGJw5OX-K8d1qhWkKh5gUgleDkfNkmaEhfRXCHYyXBK9YrqUJ-7z4cqhm4P_ckHg82h8q9mxsneFGYq2Had4tA&usqp=CAE",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSSI51RN3BgosMMPNS1VUEaLPMj-iQcmpEx87qsilPsgXkgHFFi_pOYdmVwMIU-3Ala-dC3QvbjzsW4-ypUsyFia-xmUl5x&usqp=CAE",
    ],
    product_attributes: {
      Size: "S",
      Material: "Polyester",
      "Shoulder Style": "Off-the-shoulder",
      "Sleeve Style": "Short Sleeve",
      Length: "Maxi",
      "Size Types": "Regular",
    },
    product_rating: null,
    product_page_url:
      "https://google.com/shopping/product/5517548413572100604?gl=in&hl=en&prds=pid%3A9179288339191797918",
    product_offers_page_url:
      "https://google.com/shopping/product/5517548413572100604/offers?gl=in&hl=en&prds=pid%3A9179288339191797918",
    product_specs_page_url:
      "https://google.com/shopping/product/5517548413572100604/specs?gl=in&hl=en&prds=pid%3A9179288339191797918",
    product_reviews_page_url:
      "https://google.com/shopping/product/5517548413572100604/reviews?gl=in&hl=en&prds=pid%3A9179288339191797918",
    product_num_reviews: 0,
    product_num_offers: "2",
    typical_price_range: ["₹823.00", "₹1,679.00"],
    offer: {
      store_name: "Flipkart",
      store_rating: null,
      offer_page_url:
        "http://www.flipkart.com/berrylush-women-a-line-pink-dress/p/itm8067ea1c82304?pid=DREH2HGPZ8SHGHHB&lid=LSTDREH2HGPZ8SHGHHBAW3PMI&marketplace=FLIPKART&cmpid=content_dress_8965229628_gmc",
      store_review_count: 0,
      store_reviews_page_url: null,
      price: "₹1,679.00",
      shipping: "Free delivery by Wed, 7 Aug",
      tax: null,
      on_sale: false,
      original_price: null,
      product_condition: "NEW",
      top_quality_store: false,
    },
  },
  {
    product_id: "13902755703715211917",
    product_title: "Daevish Women Maxi Multicolor Dress",
    product_description:
      "Impress Everyone With Your Stunning Look By Wearing This Gorgeous Dress. The Trendy Work & Designs Speak A Language Of Elegance And Felinity, Using The Finest Quality Fabrics And Is Trendy Fashionable As Well As Comfortable. It Is Light In Weight And Will Be Soft For Your Skin.",
    product_photos: [
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRAwpOnQtaHz5k9dTOB0rfxe_2dITmLorTDGpXzJAQvbGtKC2H8QWrLsaXKZ_ZhqKWNwXtSWz9JEVIn2ojP7WmNejHRMxL3&usqp=CAE",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQwGeu_2vUV9VrII6ExlXcJoWSr2pKn74831whTT4dGmzhiTbS5twHUWMG1lYJI3IwkS3_DivzflgN9yJmWVWl9twyL-Pn-Qg&usqp=CAE",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTDL963lS0sHUxfBzyhDHwalef6YvP2xvfa4Yr_jlzPwJ1EEItxCn2XPFKN03X4wK7C9_jtov7JyBF_Lzf9KvWW2v8zFRmtog&usqp=CAE",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTub7x489w2GBclRsrAF_JDrMQuwLMaFfirSf8lgLZo_Fc9BtlATALAKKozXpYHmgj-TX5MXrUv6aTnVqRLdvKwgvHKNbZ68g&usqp=CAE",
    ],
    product_attributes: {
      Size: "XS",
      Length: "Maxi",
      "Size Types": "Regular",
    },
    product_rating: null,
    product_page_url:
      "https://google.com/shopping/product/13902755703715211917?gl=in&hl=en&prds=pid%3A16830642066887679509",
    product_offers_page_url:
      "https://google.com/shopping/product/13902755703715211917/offers?gl=in&hl=en&prds=pid%3A16830642066887679509",
    product_specs_page_url:
      "https://google.com/shopping/product/13902755703715211917/specs?gl=in&hl=en&prds=pid%3A16830642066887679509",
    product_reviews_page_url:
      "https://google.com/shopping/product/13902755703715211917/reviews?gl=in&hl=en&prds=pid%3A16830642066887679509",
    product_num_reviews: 0,
    product_num_offers: null,
    typical_price_range: ["₹349", "₹369"],
    offer: {
      store_name: "Shopsy By Flipkart",
      store_rating: null,
      offer_page_url:
        "https://www.shopsy.in/daevish-women-maxi-multicolor-dress/p/itm732c269911db5?pid=DREG89K77WNJERHN&lid=LSTDREG89K77WNJERHNWWXXFF&marketplace=FLIPKART",
      store_review_count: 0,
      store_reviews_page_url: null,
      price: "₹374.00",
      shipping: "Free delivery by Mon, 5 Aug",
      tax: null,
      on_sale: false,
      original_price: null,
      product_condition: "NEW",
      top_quality_store: false,
    },
  },
  {
    product_id: "3628017995253752231",
    product_title: "Women fashion dress",
    product_description:
      "Fabric: Georgette Sleeve Length: Long Sleeves Net Quantity (N): 1 Sizes: S, M Country of Origin: India",
    product_photos: [
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSacDYC2SZp01RfJCVNBh4GxW8p4E7VVMVx4heEOSXjh786O8gl_CKH4RlejxVSDeAtBtp7ZBO31KOrNwQGIhKrWkwKH994&usqp=CAE",
    ],
    product_attributes: { "Sleeve Style": "Long Sleeve" },
    product_rating: null,
    product_page_url:
      "https://google.com/shopping/product/3628017995253752231?gl=in&hl=en&prds=pid%3A8394943362913873796",
    product_offers_page_url:
      "https://google.com/shopping/product/3628017995253752231/offers?gl=in&hl=en&prds=pid%3A8394943362913873796",
    product_specs_page_url:
      "https://google.com/shopping/product/3628017995253752231/specs?gl=in&hl=en&prds=pid%3A8394943362913873796",
    product_reviews_page_url:
      "https://google.com/shopping/product/3628017995253752231/reviews?gl=in&hl=en&prds=pid%3A8394943362913873796",
    product_num_reviews: 0,
    product_num_offers: null,
    typical_price_range: ["₹447", "₹448"],
    offer: {
      store_name: "Meesho",
      store_rating: null,
      offer_page_url:
        "https://www.meesho.com/women-fashion-dress/p/4dokk6?utm_source=google&utm_medium=cpc&utm_campaign=gmc&srsltid=AfmBOooWrKAVRF8wfZtmdQX2A25Pc8punuyuKIjELOifDMerX6Fq8w-lPh0",
      store_review_count: 0,
      store_reviews_page_url: null,
      price: "₹456.00",
      shipping: "Free delivery",
      tax: null,
      on_sale: false,
      original_price: null,
      product_condition: "NEW",
      top_quality_store: false,
    },
  },
  {
    product_id: "16823086353390484253",
    product_title: "aayu Floral Georgette Midi Dress (M) by Myntra",
    product_description:
      "Floral print midi dress Sweet heart neck Short, puff sleeves Midi length in flared hem Georgette fabric Concealed closure",
    product_photos: [
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTh6nnWZ4vSOZtm8o95mAqV2D_P6HCLS9KAtIHIaSs5G04NOp13hiaL8_Bm17_Ufq_Bixgtm1gdkzMRE3iHnF22G1AGnaLtkQ&usqp=CAE",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQkEXZh-E0xQUsDh8nuXQ4P36sywCCPWy8YSZDwXk6yPiLO7pJQZa49x0FJqkCrrQdgqTkWjJbF5n5iI-lgffZGsUJzudVm&usqp=CAE",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcShgw0ThcMWPxdrJh6w5i8wE1YLIsAiH2Dg6rpQTYxbAxfJgSCwdhSEBUxBrAMOkChe0k7KQ1N4oQQ2hoOyVf1rtaP2sMLfFA&usqp=CAE",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTiLW6W4E3Q2hUXydMUgZiwfP_ncpZBoNH7iLxeLoqFwYmH7usyqEtZe3O65RcZeQ_cA5BqIdli86q6GHr3a4nOZMeA6nIjzQ&usqp=CAE",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRD5QhhZavu8OWzNPtRNA6pYtUUkrxXos9Wqi7DJlrH0g2cbHntUF-jtiLeK0VasG2mv6PNVJZIEa2T6d0KWw5zqbg6F_vPiQ&usqp=CAE",
    ],
    product_attributes: {
      Pattern: "Floral",
      Size: "M",
      Neckline: "Sweetheart",
      "Sleeve Style": "Short Sleeve",
      Length: "Midi",
      "Size Types": "Regular",
    },
    product_rating: null,
    product_page_url:
      "https://google.com/shopping/product/16823086353390484253?gl=in&hl=en&prds=pid%3A18002955927314192056",
    product_offers_page_url:
      "https://google.com/shopping/product/16823086353390484253/offers?gl=in&hl=en&prds=pid%3A18002955927314192056",
    product_specs_page_url:
      "https://google.com/shopping/product/16823086353390484253/specs?gl=in&hl=en&prds=pid%3A18002955927314192056",
    product_reviews_page_url:
      "https://google.com/shopping/product/16823086353390484253/reviews?gl=in&hl=en&prds=pid%3A18002955927314192056",
    product_num_reviews: 0,
    product_num_offers: null,
    typical_price_range: ["₹523.00", "₹523.00"],
    offer: {
      store_name: "Myntra",
      store_rating: null,
      offer_page_url:
        "http://www.myntra.com/Dresses/aayu/aayu-Floral-Georgette-Midi-Dress/21850888/buy",
      store_review_count: 0,
      store_reviews_page_url: null,
      price: "₹727.00",
      shipping: "Delivery by Sat, 3 Aug",
      tax: null,
      on_sale: false,
      original_price: null,
      product_condition: "NEW",
      top_quality_store: false,
      coupon_code: "MYNTRA100",
      coupon_discount: "₹100",
    },
  },
  {
    product_id: "13897041779830834671",
    product_title:
      "Areeba Fashion Women Black Fit And Flare Dress / Comfy Ravishing Women Dresses",
    product_description:
      "AREEBA FASHION Women Black Fit and Flare Dress: Fabric: Crepe. Sleeve Length: Sleeveless. Pattern: Printed. Net Quantity (N): 1. Sizes:. S (Bust Size: 36 in, Length Size: 52 in) . M (Bust Size: 38 in, Length Size: 52 in) . L (Bust Size: 40 in, Length Size: 52 in) . XL (Bust Size: 42 in, Length Size: 52 in) . XXL (Bust Size: 44 in, Length Size: 52 in) . Get ready to receive a lot of compliments on this dress. It has Fit and Flare Dress that makes your perfect dressup for summer.. Country of Origin: India. Easy Returns Available In Case Of Any Issue. SKU: AFD-24-BLACK. Supplier Name: AREEBA FASHION. Code: 852-257754323-997. Catalog Name: Comfy Ravishing Women Dresses. CatalogID_76496574. M04-C07-SC1025. .",
    product_photos: [
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR0EpKazi6UOM18wKMr-e9CLMd-KMP_QFbUwB3OCBNwvQk9olsPbGd7o0ecQd8KfVmfpSQtEIapUAFikAdY3wa4JdnH81e73w&usqp=CAE",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ_AFrs1KGDb3ymSeZowB5OMmOIbFWxX_zpLHomCYQIbOTNz5LSwpodlF3LsezV1gwJ2pJYz-x2y-pG7RHvKG7eDGtLrJzr6A&usqp=CAE",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTIsXsLYpl60o7zwIkZnRfNQw3_XqYzI5QO1E5jHqh0PhvNB4tTOgxLkWG8oATdo5mUXpwazVIYswDuaSRMk-4E3yk1Rl2qsw&usqp=CAE",
    ],
    product_attributes: {
      Silhouette: "Fit and Flare",
      "Sleeve Style": "Sleeveless",
    },
    product_rating: null,
    product_page_url:
      "https://google.com/shopping/product/13897041779830834671?gl=in&hl=en&prds=pid%3A5789071297557293165",
    product_offers_page_url:
      "https://google.com/shopping/product/13897041779830834671/offers?gl=in&hl=en&prds=pid%3A5789071297557293165",
    product_specs_page_url:
      "https://google.com/shopping/product/13897041779830834671/specs?gl=in&hl=en&prds=pid%3A5789071297557293165",
    product_reviews_page_url:
      "https://google.com/shopping/product/13897041779830834671/reviews?gl=in&hl=en&prds=pid%3A5789071297557293165",
    product_num_reviews: 0,
    product_num_offers: null,
    typical_price_range: ["₹418", "₹420"],
    offer: {
      store_name: "fcity.in",
      store_rating: null,
      offer_page_url:
        "https://fcity.in/257754323/buyit?srsltid=AfmBOopfQ2UWPq3iNVxnE3U2sHh-UYQxC9VZMtPlAQ9cU-lkK8IfsyuPFo4",
      store_review_count: 0,
      store_reviews_page_url: null,
      price: "₹413.00",
      shipping: "Free delivery by Wed, 7 Aug",
      tax: null,
      on_sale: false,
      original_price: null,
      product_condition: "NEW",
      top_quality_store: false,
    },
  },
  {
    product_id: "7879069484418745493",
    product_title:
      "Fashion Basket Women Embroidered Anarkali Kurta & Dupatta Set For Women (Pink, XXL)",
    product_description:
      "Pink, Women Embroidered Anarkali Kurta & Dupatta Set Kurta Suit Sets perfect for Occasion occasion. Suggested care is to Dry clean.",
    product_photos: [
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTt_7zgiI8ElOu8ao0KuXwGhGk3t_7o4vPODsXl2tiYBkRTJKoqkdUVQWRzDE8166k_WIGLt6k0_KZannGlFDNZHs_03dMhUA&usqp=CAE",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSaDLwRdUVItP_Xk-B6zJkd0pU9PXD_29AXGAzV8vKEk6xm2A_d-wosKqVke77i_mz2iYyZkjFN2RoDTWW1AZHCuzzRPXSz1g&usqp=CAE",
    ],
    product_attributes: null,
    product_rating: null,
    product_page_url:
      "https://google.com/shopping/product/7879069484418745493?gl=in&hl=en&prds=pid%3A11928959559673880648",
    product_offers_page_url:
      "https://google.com/shopping/product/7879069484418745493/offers?gl=in&hl=en&prds=pid%3A11928959559673880648",
    product_specs_page_url:
      "https://google.com/shopping/product/7879069484418745493/specs?gl=in&hl=en&prds=pid%3A11928959559673880648",
    product_reviews_page_url:
      "https://google.com/shopping/product/7879069484418745493/reviews?gl=in&hl=en&prds=pid%3A11928959559673880648",
    product_num_reviews: 0,
    product_num_offers: null,
    typical_price_range: ["₹1,999.00", "₹1,999.00"],
    offer: {
      store_name: "AJIO.com",
      store_rating: null,
      offer_page_url:
        "https://www.ajio.com/fashion-basket-women-embroidered-anarkali-kurta--dupatta-set/p/700014446_pink#gmf",
      store_review_count: 0,
      store_reviews_page_url: null,
      price: "₹2,299.00",
      shipping: "Free delivery by Thu, 8 Aug",
      tax: null,
      on_sale: false,
      original_price: null,
      product_condition: "NEW",
      top_quality_store: false,
    },
  },
  {
    product_id: "5070228680664808607",
    product_title: "LIBAS Women Embroidered A-line Kurta Set",
    product_description:
      "Complemented with trousers with a partially elasticated waistband and roomy pockets. Adorned with intricate thread work and schiffli detailing, this style is ideal for casual outings.",
    product_photos: [
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSbFSlJCPeiEk5v0wdtVaOupm6yQBdPQd0eQm-CmrWmWBs3Uv-fiSVCiERiH2B_6gKWTSa3Og8SXFglsHreYhx3Rtv9I8sG&usqp=CAE",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS8J20_p26EK7Ak077IYS1Z5O3Z4ylBxEw0-iWL5tuz4DSgdVfbjUQYg1qhzeSZs4Rya_-vqG5Zf65M14vsI2cveUtLCufIDA&usqp=CAE",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS9Uve9m9luEY_c9lp3oUV4xPaK38yWc39EzVjDLgmPDrQe0QJlYuxH7ufUnKXontK9M2mCRLQZoZZs2d2uD8_bSzsNRac5&usqp=CAE",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRviBt8YF3CAT4-1sSlY0LpPaZNpAQUy-RInZ1aN2RgHdTn32w0cqVI5w4WF0ZqXWfz49k8irj6BGNLN9wE04mmkAsvF8ZihQ&usqp=CAE",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRcHerDkm07ZSvqrP8PPElkZYHIEhqjCzMRR8W0aScxTsFa5ngyjIFsnp-uyomsWOLZ0s7DwaPZ1WE35Y8ksMtuquwjIOmmTA&usqp=CAE",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQcLOgWa6wgspG66DT-6qm3nemvF8sjqdBLueM4z_cqLz8Ck74ceYL9R1XiDK71qgmi8673AbeDvbQpm818RjU3iSWYraiQxA&usqp=CAE",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRuhm4eU5wtLy4PYuiGD1MXiTTEL9YycTIpuqaZRRT4szNIH-bj2TO5GbMNo_wn_92k8tRC5TRpuuC2gOJ8Qqy639zAKj7n0A&usqp=CAE",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcScvaZy8uUsC95W0qrgMXg3gq8PveL7717R0jTD07qSL7-g1fxIEwm3BJcvHCXSmHiitqrLHl2MhV90LdXqFSP6wzU4rDNP&usqp=CAE",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQK7EJGtZYXQf2rUbYKLqRv3EqCnMIFzJEPMwPP6ukzLYwRsmvyBdDaYiJuTv5kvnL_hxPo4yt6-8bdO7Vjgwk2v6qj_G2bRw&usqp=CAE",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT0rYBDrrBbZTuD8U2wc2z5syk49mJexUc9h0CLIgcBkwuelmwjqdT378ZlSGMSf3cNik6urKsiuG1fsDB2AUWhM55mkqgB&usqp=CAE",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSNBO5pwh5qu-G9_MdQ-_5U4aBfCdVhdTCcGSPzLs9grdhtdzfRhtaMUbuYiKAemdGl3_dgCKXYIGxUPYqvnrCuZ7XwsxMF&usqp=CAE",
    ],
    product_attributes: null,
    product_rating: 4,
    product_page_url:
      "https://google.com/shopping/product/5070228680664808607?gl=in&hl=en&prds=pid%3A8896234754982929351",
    product_offers_page_url:
      "https://google.com/shopping/product/5070228680664808607/offers?gl=in&hl=en&prds=pid%3A8896234754982929351",
    product_specs_page_url:
      "https://google.com/shopping/product/5070228680664808607/specs?gl=in&hl=en&prds=pid%3A8896234754982929351",
    product_reviews_page_url:
      "https://google.com/shopping/product/5070228680664808607/reviews?gl=in&hl=en&prds=pid%3A8896234754982929351",
    product_num_reviews: 4,
    product_num_offers: "5+",
    typical_price_range: ["₹1,121", "₹1,814"],
    offer: {
      store_name: "Libas",
      store_rating: null,
      offer_page_url:
        "https://www.libas.in/products/off-white-embroidered-cotton-straight-kurta-with-trousers-35214?variant=43131381383318&currency=INR&utm_medium=product_sync&utm_source=google&utm_content=sag_organic&utm_campaign=sag_organic&srsltid=AfmBOoojWfOdtYZU9fpBVjZ9KcCSBPmtb8o6ivz_wcykwwbpBoWrJ3SwOYU",
      store_review_count: 0,
      store_reviews_page_url: null,
      price: "₹1,649.00",
      shipping: "Free delivery by Thu, 8 Aug",
      tax: null,
      on_sale: true,
      original_price: "₹3,299.00",
      product_condition: "NEW",
      top_quality_store: false,
      coupon_code: "KIARA10",
      coupon_discount_percent: "10",
    },
  },
  {
    product_id: "13572155707689462425",
    product_title: "Greciilooks Women A-line Red Dress",
    product_description:
      "Elevate Your Party Style With Our Stunning One-piece Bodycon Dress Designed For Women. Crafted To Accentuate Your Curves And Exude Elegance, This Dress Is The Epitome Of Chic. Whether It's A Night Out With Friends Or A Special Occasion, You'll Dazzle In This Timeless Piece. Made From High-quality Fabric, It Offers Both Comfort And Sophistication, It's The Perfect Choice For Any Fashion Forward Woman. Available In A Range Of Sizes And Colors To Suit Your Individual Taste, This Dress Is A Must-have In Every Wardrobe. Make A Statement And Turn Heads Wherever You Go With Our Irresistible Party Wear Bodycon Dress.",
    product_photos: [
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT8EEm6KB6MGPitdeGegYR-DVefjjqp8HCsu5qL548z8SgciYZml_NHiXSkBzzWmxwjRzcbTu71iGoRP9vexrWWFN0Wm1LhLg&usqp=CAE",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQc2QzvTGBEfEeONM63CQNG2L-QA1y_xirSjE0Lz1R_Ss98ct4S1SSxw3kp2_CL6R72TSIX-3GouGWpqpaitNQfUdtNT0Ob&usqp=CAE",
    ],
    product_attributes: {
      Silhouette: "Fitted",
      Size: "M",
      "Sleeve Style": "Long Sleeve",
      "Size Types": "Regular",
    },
    product_rating: null,
    product_page_url:
      "https://google.com/shopping/product/13572155707689462425?gl=in&hl=en&prds=pid%3A15361465955329679305",
    product_offers_page_url:
      "https://google.com/shopping/product/13572155707689462425/offers?gl=in&hl=en&prds=pid%3A15361465955329679305",
    product_specs_page_url:
      "https://google.com/shopping/product/13572155707689462425/specs?gl=in&hl=en&prds=pid%3A15361465955329679305",
    product_reviews_page_url:
      "https://google.com/shopping/product/13572155707689462425/reviews?gl=in&hl=en&prds=pid%3A15361465955329679305",
    product_num_reviews: 0,
    product_num_offers: null,
    typical_price_range: ["₹799.00", "₹1,999.00"],
    offer: {
      store_name: "Flipkart",
      store_rating: null,
      offer_page_url:
        "http://www.flipkart.com/greciilooks-women-a-line-red-dress/p/itmd15ac467e25d3?pid=DREH2QKEBUT4YNU3&lid=LSTDREH2QKEBUT4YNU3GX007B&marketplace=FLIPKART&cmpid=content_dress_8965229628_gmc",
      store_review_count: 0,
      store_reviews_page_url: null,
      price: "₹799.00",
      shipping: "Free delivery by Mon, 5 Aug",
      tax: null,
      on_sale: false,
      original_price: null,
      product_condition: "NEW",
      top_quality_store: false,
    },
  },
  {
    product_id: "16537063299636413286",
    product_title: "Aahwan Women A-line Black Dress",
    product_description:
      "Pattern Is Solid. Style Code Is 194-black. Pack Of Is 1. Sleeve Length Is Short Sleeve. Color Is Black. Ideal For Is Women. Sleeve Is Puff Sleeves. Suitable For Is Western Wear. Type Is A-line. Length Is Above Knee/mid Thigh Length. Fabric Care Is Machine Wash Only. Neck Is Sweetheart Neck. Net Quantity Is 1. Fabric Is Polyester.",
    product_photos: [
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTwHdPHkeJB6dn5odDfYVlrJBb6JPC0t3IJjF6_DT1N9FYb1Jrl9p-gVPIzzhORoBJfc_pk64c-8jAqHdvOBlKtfxIurT00&usqp=CAE",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRhnmKO4GQcB8y9-A9pujccxzpkRPNW5TMWOt6E9hNGtorOx5pzzHmIVEJ5timt9MdVV8kzRCdcnLh-qAqxhlG4H8cYyYa9&usqp=CAE",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSlgwAYdRs6vqQYUuH3Xfn-FOYyej0wmd-n_zN79AhwR1BNDHJoM359NTHqvQBcU3RxaTFQibPsR02UxKkW5pcZzHtum2h_&usqp=CAE",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTIxaV_vG1a34E8mmqCKOGBXiktjO5gHRaQ5zeBMbxp_VFyqjg8qHDAPNJ7N2YBl6dx8IUBkq1OwGfU5WKc6pvEJCeBnldo&usqp=CAE",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRRRQqUYD-AD7T-vHR2j40MF2qnpi5lKVUlutU5XocRkUWGtlKQHvCXbbK1qPk6YFwNVY3W5I_x_CaHg2aspY25I8CwWUOC&usqp=CAE",
    ],
    product_attributes: {
      Size: "M",
      Material: "Polyester",
      Neckline: "Sweetheart",
      "Sleeve Style": "Short Sleeve",
      Length: "Mini",
      "Size Types": "Regular",
    },
    product_rating: null,
    product_page_url:
      "https://google.com/shopping/product/16537063299636413286?gl=in&hl=en&prds=pid%3A16764752871661584343",
    product_offers_page_url:
      "https://google.com/shopping/product/16537063299636413286/offers?gl=in&hl=en&prds=pid%3A16764752871661584343",
    product_specs_page_url:
      "https://google.com/shopping/product/16537063299636413286/specs?gl=in&hl=en&prds=pid%3A16764752871661584343",
    product_reviews_page_url:
      "https://google.com/shopping/product/16537063299636413286/reviews?gl=in&hl=en&prds=pid%3A16764752871661584343",
    product_num_reviews: 0,
    product_num_offers: null,
    typical_price_range: ["₹444.00", "₹444.00"],
    offer: {
      store_name: "Shopsy By Flipkart",
      store_rating: null,
      offer_page_url:
        "https://www.shopsy.in/aahwan-women-a-line-black-dress/p/itm83b84bcc74229?pid=DREGHYEATBNPRRQ4&lid=LSTDREGHYEATBNPRRQ4T0WQAZ&marketplace=FLIPKART",
      store_review_count: 0,
      store_reviews_page_url: null,
      price: "₹444.00",
      shipping: "Free delivery by Mon, 5 Aug",
      tax: null,
      on_sale: false,
      original_price: null,
      product_condition: "NEW",
      top_quality_store: false,
    },
  },
  {
    product_id: "2545752466318904916",
    product_title:
      "Womenue Bronze Haze Ruched Glam Dress (L) At Nykaa Fashion - Your Online Shopping Store",
    product_description:
      "Step into the spotlight with this glamorous ruched dress in a mesmerizing bronze haze hue from Womenue. Perfect for glamorous evenings and special occasions, this mini dress features a flattering V-neckline and full sleeves for added sophistication. Crafted from luxurious polyester fabric, it exudes opulence and allure. Dry clean only to maintain its exquisite quality.",
    product_photos: [
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQyL2tHnS6pccf9oRAAbVV09D2zannRtH1l5yOSnOxJCwSBCP7Fh7FrIs4ZTevT4eqwNYqB9KHJXLHBU_83QEK4swtvV3I_&usqp=CAE",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSvyFPbtDjDcCw3tN_Uy3j_N70-zdu6uQVcMdVyi1i9g9VLn-khV_a64Yc17ZmC0VgzWWPBDJdJ_Gzttc3We9X-b00j6GqW&usqp=CAE",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTLbV3oa2XB7WZ-ulh-ZtyxRtmPIS9sypjozDgl9hIJgpnreYRaGN5Mc67H6Dbom-uru7nutM7d4aKCANOUFKUwFwH93E_9ZA&usqp=CAE",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQeOiXOHI6_Y3NqoYnlDlZCs-HiCh5VXQjE8lECO7e4puC0ZLnIrlkNijvoCzJFWDQfO2JQuNyyyO70kh8LLvl_B1Bjqfu1&usqp=CAE",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTi3qBOJ45U19VFROFenRhh19TtmxRw0HoE3-cEbKDfVkqWB_cCpZByRWOGPpo6SqEC_D-H3cQb2iO5nyj7DOOi0PaESwK6XQ&usqp=CAE",
    ],
    product_attributes: {
      Size: "L",
      Material: "Polyester",
      Neckline: "V-neck",
      "Sleeve Style": "Long Sleeve",
      Length: "Mini",
      "Size Types": "Regular",
    },
    product_rating: null,
    product_page_url:
      "https://google.com/shopping/product/2545752466318904916?gl=in&hl=en&prds=pid%3A15968274265667471551",
    product_offers_page_url:
      "https://google.com/shopping/product/2545752466318904916/offers?gl=in&hl=en&prds=pid%3A15968274265667471551",
    product_specs_page_url:
      "https://google.com/shopping/product/2545752466318904916/specs?gl=in&hl=en&prds=pid%3A15968274265667471551",
    product_reviews_page_url:
      "https://google.com/shopping/product/2545752466318904916/reviews?gl=in&hl=en&prds=pid%3A15968274265667471551",
    product_num_reviews: 0,
    product_num_offers: null,
    typical_price_range: ["₹1,863.00", "₹2,168.00"],
    offer: {
      store_name: "Nykaa Fashion",
      store_rating: null,
      offer_page_url:
        "https://www.nykaafashion.com/womenue-bronze-haze-ruched-glam-dress/p/16091205?adsource=shopping_india&skuId=16090437",
      store_review_count: 0,
      store_reviews_page_url: null,
      price: "₹2,168.00",
      shipping: "Free delivery by Mon, 5 Aug",
      tax: null,
      on_sale: false,
      original_price: null,
      product_condition: "NEW",
      top_quality_store: false,
    },
  },
  {
    product_id: "15465181964293148226",
    product_title: "StyleCast x Revolte Bodycon Mini Dress (M) by Myntra",
    product_description:
      "Maroon self design solid bodycon dress Round neck Sleeveless, no sleeves Embellished detail Above knee length in straight hem",
    product_photos: [
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRcUGgno65rp-aIjWYdfw606BgH8Q7ZI-mPmnIulIUMeuY6ll7DsAFZgFVrZThCf6SKvqjp6AJHVuLRVjhdhhP_UmHOp5X0&usqp=CAE",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRwu9b_lkVEFXyrAd2TL_gkoVysWvvIHMbUH37bgMBPea2JtpcwAYXU3QpA6bYovvaK4cMpVw7U1qFhkdXGm1Qai3kDxZg6GA&usqp=CAE",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSM0TTbb4QSpd7vKII8kq6cQNjx57pfLr21lhBBVBiZ3UJ-J4J7XdiSn5H-FWjTKIvP9eNMxMNmjUvUXKMqBbTJFA7xwFujyQ&usqp=CAE",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRlwt_FgWtJRkJYEzZlTQ37p-Hy8VYpXtTGBaYW7MQcIh7aQChIH8TsGDCSB6r0UOSS2E708xSEoZmmb1f909YCm1LcsOQ7&usqp=CAE",
    ],
    product_attributes: {
      Silhouette: "Fitted",
      Size: "M",
      Neckline: "Round Neck",
      "Sleeve Style": "Sleeveless",
      Length: "Mini",
      "Size Types": "Regular",
    },
    product_rating: null,
    product_page_url:
      "https://google.com/shopping/product/15465181964293148226?gl=in&hl=en&prds=pid%3A10805771796120284719",
    product_offers_page_url:
      "https://google.com/shopping/product/15465181964293148226/offers?gl=in&hl=en&prds=pid%3A10805771796120284719",
    product_specs_page_url:
      "https://google.com/shopping/product/15465181964293148226/specs?gl=in&hl=en&prds=pid%3A10805771796120284719",
    product_reviews_page_url:
      "https://google.com/shopping/product/15465181964293148226/reviews?gl=in&hl=en&prds=pid%3A10805771796120284719",
    product_num_reviews: 0,
    product_num_offers: null,
    typical_price_range: ["₹599.00", "₹599.00"],
    offer: {
      store_name: "Myntra",
      store_rating: null,
      offer_page_url:
        "http://www.myntra.com/Dresses/StyleCast+x+Revolte/StyleCast-x-Revolte-Bodycon-Mini-Dress/30026727/buy",
      store_review_count: 0,
      store_reviews_page_url: null,
      price: "₹699.00",
      shipping: "Delivery by Sat, 3 Aug",
      tax: null,
      on_sale: false,
      original_price: null,
      product_condition: "NEW",
      top_quality_store: false,
      coupon_code: "MYNTRA100",
      coupon_discount: "₹100",
    },
  },
  {
    product_id: "11677253242617884684",
    product_title:
      "SASSAFRAS Floral Printed Tiered Maxi Fit & Flare Dress(M) by Myntra",
    product_description:
      "Multi colour floral printed fit & flare dress Round neck Sleeveless maxi length in flared hem Crepe fabric",
    product_photos: [
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSf4Zn1UvbM-DnLAbDr2_1lirclkenb3YDlXwCTV2lQn6kg8Ph1DREGidruB8q0_UnVV3GXJgl3bJAGm5ICMbDSdl60q8h-&usqp=CAE",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRcrQghXD_-32lcZlKcsN5VA7dHYQfaaxDRuWpy7AIMbh42CRSQVw2_qnWFZn8mbVxymA2Odt5rHKG3omvNUV62T3LPBUSqcA&usqp=CAE",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQSbNhvNl-4l_lG1ceDsn10Qy--1VB7sNhKk3FXTK7X751g3RqbCBAB0iM5CUax6YxNO35NZ6ICQwKHKdHU6SZjR84XW8uE&usqp=CAE",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQicwdJkOA3Jya_LbmFQzSWcCyuv8Hs_tqzxA1E_LeMDpi1Apnwig-Qn4thCa3qgHbDYxtaTMKrWxr0On7hoR310DwRcGW-&usqp=CAE",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ0AgZ7o_ifxH53KFqKghHt0xciVld3-zrpOHQvr0-4-ppejBFQjYpULHBHUO4hG7j-Po-MMQ2ZUXF1FLP9WZzFsOHoFlA0Fw&usqp=CAE",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ6ZuCtdwR60DRC-TO7fbwJYZZKnoTydO8ICND6iGRTABSK5tzK8mLwIRgmL2IdhQszWKo95Z0o8IixHtBVy_TUDrKr3xD2&usqp=CAE",
    ],
    product_attributes: {
      Silhouette: "Fit and Flare",
      Pattern: "Floral",
      Size: "M",
      Neckline: "Round Neck",
      "Sleeve Style": "Sleeveless",
      Length: "Maxi",
      "Size Types": "Regular",
    },
    product_rating: 4.5,
    product_page_url:
      "https://google.com/shopping/product/11677253242617884684?gl=in&hl=en&prds=pid%3A12108758937533563619",
    product_offers_page_url:
      "https://google.com/shopping/product/11677253242617884684/offers?gl=in&hl=en&prds=pid%3A12108758937533563619",
    product_specs_page_url:
      "https://google.com/shopping/product/11677253242617884684/specs?gl=in&hl=en&prds=pid%3A12108758937533563619",
    product_reviews_page_url:
      "https://google.com/shopping/product/11677253242617884684/reviews?gl=in&hl=en&prds=pid%3A12108758937533563619",
    product_num_reviews: 42,
    product_num_offers: null,
    typical_price_range: ["₹599.00", "₹599.00"],
    offer: {
      store_name: "Myntra",
      store_rating: null,
      offer_page_url:
        "http://www.myntra.com/Dresses/SASSAFRAS/SASSAFRAS-Floral-Printed-Tiered-Maxi-Fit--Flare-Dress/22924268/buy",
      store_review_count: 0,
      store_reviews_page_url: null,
      price: "₹699.00",
      shipping: "Delivery by Sat, 3 Aug",
      tax: null,
      on_sale: true,
      original_price: "₹1,999.00",
      product_condition: "NEW",
      top_quality_store: false,
      coupon_code: "MYNTRA100",
      coupon_discount: "₹100",
    },
  },
  {
    product_id: "9678072355107265132",
    product_title:
      "Label Shaurya Sanadhya Pink Floral Lace Dress (L) At Nykaa Fashion - Your Online Shopping Store",
    product_description:
      "Take your style game to the next level with this dress from Label Shaurya Sanadhya. Style it with a pair of heels and statement jewellery to look stunning.",
    product_photos: [
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQo8K3KW3XtejJ5fD7jN_huK2wo_CamuB0jLyNi7VFZswWb1cDuV6_YO19DZjqa9inwA4tFZjLbUnejHOdLX0XKmhP9ByAt&usqp=CAE",
    ],
    product_attributes: {
      Pattern: "Floral",
      Size: "L",
      Material: "Lace",
      "Size Types": "Regular",
    },
    product_rating: null,
    product_page_url:
      "https://google.com/shopping/product/9678072355107265132?gl=in&hl=en&prds=pid%3A9502347330091894627",
    product_offers_page_url:
      "https://google.com/shopping/product/9678072355107265132/offers?gl=in&hl=en&prds=pid%3A9502347330091894627",
    product_specs_page_url:
      "https://google.com/shopping/product/9678072355107265132/specs?gl=in&hl=en&prds=pid%3A9502347330091894627",
    product_reviews_page_url:
      "https://google.com/shopping/product/9678072355107265132/reviews?gl=in&hl=en&prds=pid%3A9502347330091894627",
    product_num_reviews: 0,
    product_num_offers: null,
    typical_price_range: ["₹2,400.00", "₹2,400.00"],
    offer: {
      store_name: "Nykaa Fashion",
      store_rating: null,
      offer_page_url:
        "https://www.nykaafashion.com/label-shaurya-sanadhya-pink-floral-lace-dress/p/2192999?adsource=shopping_india&skuId=2193003",
      store_review_count: 0,
      store_reviews_page_url: null,
      price: "₹2,400.00",
      shipping: "Free delivery by Mon, 5 Aug",
      tax: null,
      on_sale: false,
      original_price: null,
      product_condition: "NEW",
      top_quality_store: false,
    },
  },
  {
    product_id: "7906157658390396876",
    product_title: "AASK Women Fit and Flare Dress",
    product_description:
      "Care Instructions: Hand Wash Only The swing midi dress with good draping will flow nice to show your charming curve, help you gain a lot of compliments. This elastic waist elegant floral long dress definitely could be a great buy as a wedding dress or party dress for women. Not only being an all-match smocked dress women, but also all year round fashion dresses for women 2023 for you must have ! Our ruffled sleeve maxi dress for women also can be a maternity dress thanks to the loose comfy A line design. This ladies pleated dress for women casual can be dressed up for date night or dressed down for casual coffee. A stylish v neck ruffled dress can be dressed up for date night or dressed down for casual coffee; Perfect as a casual dress for daily life thanks to the soft material, proving you a wonderful wearing experience; The floral bohemian dresses for women vacation/beach/cocktail and party and even perfect for an office setting; A lightweight fall dress for women 2021 perfectly pair with high heels/boots/sandals and a hat to create a holiday look fashion; The long sleeve and maxi length also can be a winter dress which goes well with warm jacket or woolen coat to fully show your elegance. SKIN-FRIENDLY FABRIC: The boho maxi dresses for women are made of nice lightweight material; A soft and comfortable fabric, which flows with body conture wonderfully; This pleated A-Line dress should be the new trendy fall dresses for women 2021; In keeping with this Vintagehalloween theme, a pleated ditsy floral midi dress is 100% suit for you; A ruffled vintage dress for women maxi also can be a maternity dress thanks to the loose comfy A line design.",
    product_photos: [
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQxSqzP4yrrJ5ZqBesbdR2Nah9KS26_SumHdYY3Ni-wK4PyazileansD5fF766K1ZFCV9IUNXwL1esgvAFv8belz5biqZV3&usqp=CAE",
    ],
    product_attributes: {
      Silhouette: "Fit and Flare",
      Pattern: "Floral",
      Size: "2XL",
      Material: "Polyester",
      Neckline: "V-neck",
      "Sleeve Style": "Long Sleeve",
      Length: "Midi",
      Color: "Light Green",
      "Size Types": "Regular",
    },
    product_rating: null,
    product_page_url:
      "https://google.com/shopping/product/7906157658390396876?gl=in&hl=en&prds=pid%3A17150116410671496279",
    product_offers_page_url:
      "https://google.com/shopping/product/7906157658390396876/offers?gl=in&hl=en&prds=pid%3A17150116410671496279",
    product_specs_page_url:
      "https://google.com/shopping/product/7906157658390396876/specs?gl=in&hl=en&prds=pid%3A17150116410671496279",
    product_reviews_page_url:
      "https://google.com/shopping/product/7906157658390396876/reviews?gl=in&hl=en&prds=pid%3A17150116410671496279",
    product_num_reviews: 0,
    product_num_offers: null,
    typical_price_range: ["₹799.00", "₹799.00"],
    offer: {
      store_name: "Amazon.in",
      store_rating: null,
      offer_page_url:
        "https://www.amazon.in/AASK-Women-Flare-Light-Green/dp/B0BY4FN63R?source=ps-sl-shoppingads-lpcontext&ref_=fplfs&psc=1&smid=A3JN9DBXVJMNSP",
      store_review_count: 0,
      store_reviews_page_url: null,
      price: "₹799.00",
      shipping: "Free delivery",
      tax: null,
      on_sale: false,
      original_price: null,
      product_condition: "NEW",
      top_quality_store: false,
    },
  },
  {
    product_id: "7771335109392610211",
    product_title: "Maa Fab Women Maxi Blue Dress",
    product_description:
      "Pattern Is Printed. Style Code Is Maxi 135 To 181 - 05. Pack Of Is 2. Sleeve Length Is Sleeveless. Color Is Blue. Ideal For Is Women. Sleeve Is Regular Sleeves. Suitable For Is Western Wear. Type Is Maxi. Length Is Midi/calf Length. Fabric Care Is Regular Machine Wash. Neck Is Boat Neck. Net Quantity Is 2. Fabric Is Crepe.",
    product_photos: [
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQYziB992Hof5JDQWQytfZAcNDM3MkVconYOcwh5tGi2hnqz4NqUbyJ-QCbtySVva5bTXBmY8-kTzf7RiCsE-cuM5uZvS77&usqp=CAE",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT8hMZXA6jxVyay1fKCFR-gKNFlmEFmRrOHdVPQ9R_te-1sPYMh9AkiHLIS2Y4rhSVLVIwsHGWZ67eBWXCdeYo1Mz0ksKKt&usqp=CAE",
    ],
    product_attributes: {
      Size: "S",
      Neckline: "Boat Neck",
      "Sleeve Style": "Sleeveless",
      Length: "Maxi",
      Color: "Rainbow",
      "Size Types": "Regular",
    },
    product_rating: null,
    product_page_url:
      "https://google.com/shopping/product/7771335109392610211?gl=in&hl=en&prds=pid%3A13946168533986220315",
    product_offers_page_url:
      "https://google.com/shopping/product/7771335109392610211/offers?gl=in&hl=en&prds=pid%3A13946168533986220315",
    product_specs_page_url:
      "https://google.com/shopping/product/7771335109392610211/specs?gl=in&hl=en&prds=pid%3A13946168533986220315",
    product_reviews_page_url:
      "https://google.com/shopping/product/7771335109392610211/reviews?gl=in&hl=en&prds=pid%3A13946168533986220315",
    product_num_reviews: 0,
    product_num_offers: null,
    typical_price_range: ["₹499.00", "₹499.00"],
    offer: {
      store_name: "Flipkart",
      store_rating: null,
      offer_page_url:
        "http://www.flipkart.com/maa-fab-women-maxi-blue-dress/p/itm2ab005e5ac2d5?pid=DREGUTYAFXYMB2EV&lid=LSTDREGUTYAFXYMB2EVERPZZW&marketplace=FLIPKART&cmpid=content_dress_8965229628_gmc",
      store_review_count: 0,
      store_reviews_page_url: null,
      price: "₹499.00",
      shipping: "Free delivery by Mon, 5 Aug",
      tax: null,
      on_sale: false,
      original_price: null,
      product_condition: "NEW",
      top_quality_store: false,
    },
  },
  {
    product_id: "1:10681935537285272680",
    product_title: "Fashion Sexy Ripped One-piece Suit",
    product_description:
      "Product information: Style: Sexy pattern: plain Style: jumpsuit Top style: vest Top sleeve length: sleeveless Popular elements: hollow, hole, stitching Craft: collage/splicing Fabric name: polyester Main fabric composition: polyester fiber (polyester) The content of main fabric ingredients: 81%-90% Main fabric composition 2: Chlorine fiber (chlorinated fiber) The content of main fabric ingredient 2: 10% or less Colour: Black Size: S, M, L, XL, XXL Suitable age: 18-24 years old Style type: temperament commuting Size Information: Note: 1. Asian sizes are 1 to 2 sizes smaller than European and American people. Choose the larger size if your size between two sizes. Please allow 2-3cm differences due to manual measurement. 2. Please check the size chart carefully before you buy the item, if you don't know how to choose size, please contact our customer service. 3.As you know, the different computers display colors differently, the color of the actual item may vary slightly from the following images. Packing list: Ladies polyester jumpsuit*1 Product Image:",
    product_photos: [
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQNGWmzbcMkjDElhabw0X4T8LnSGmvO2iSHQKQVxoeoqEemC8PKp6KtiuwaDTZo--pvBcaELcDtAjzX6Dc-AgF-37E0anpSUQ&usqp=CAE",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQgYqG1vdAP3_Lbpyh5MqfZnbun24T39fVzgogGS2MWNEPlazkNbvChuPMCmu-5CiD-uWwlpsW3unC8D8WKucHlG4sssEch&usqp=CAE",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTVWHfz2Vt-5u45wQV2dfVYS6WjubkQ1Fura1rnhO1cjD3K7fUjlf7rZdEjZeon-tOtDHbIGfvIH0lDkvD5El5RS1z6-dPLlg&usqp=CAE",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQCOYLbOO4JpvQ5PYPl84J3jfQ-FFjKfpmYeVqbpQtoUH3XxbrBKj6ZtTglU0OZ_B8iFKPO7i01FiU_wZpiL5YaGd4fdGot&usqp=CAE",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS3mxtthVqMO9M-de1Qf-G3P1AgwHjMVgw_0f_lzLBV9AjkE96lnN2p22h4gdQ4vBKJP0ekKztWGV7g3U5IVhVDQni7c_W7&usqp=CAE",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTKuZ1r2CDdY4KwkCZ4djG5r5l6iWiPevDRet7C1W9iHeL7yzSx7iXKhim1xv2JGsmvpETf0jLyG4i_MptvBcDtUmry-3F4&usqp=CAE",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRfEad4ozH7hMGG2vmbkVQzZ8PY_yIrZ4qntq5yRx-Ya-ie-SZ1OcOMsqdO6tRQwmEMx1Bh-D2PV2pMLG2K8FQLfb4LQzDE&usqp=CAE",
    ],
    product_attributes: { Style: "Jumpsuit", Material: "Polyester" },
    product_rating: null,
    product_page_url:
      "https://google.com/shopping/product/1?gl=in&hl=en&prds=pid%3A10681935537285272680",
    product_offers_page_url:
      "https://google.com/shopping/product/1/offers?gl=in&hl=en&prds=pid%3A10681935537285272680",
    product_specs_page_url:
      "https://google.com/shopping/product/1/specs?gl=in&hl=en&prds=pid%3A10681935537285272680",
    product_reviews_page_url:
      "https://google.com/shopping/product/1/reviews?gl=in&hl=en&prds=pid%3A10681935537285272680",
    product_num_reviews: 0,
    product_num_offers: null,
    typical_price_range: null,
    offer: {
      store_name: "Trendiner Fashion",
      store_rating: null,
      offer_page_url:
        "https://trendiner.com/product/fashion-sexy-ripped-one-piece-suit/?attribute_color=Black&attribute_size=L&srsltid=AfmBOor-HVMw-LmM_jr1CMd8mDFj_laEC6ozPXEob0JYJYlpmCdsEX2Zxsg",
      store_review_count: 0,
      store_reviews_page_url: null,
      price: "₹2,978.70",
      shipping: "Delivery date and cost shown at checkout",
      tax: null,
      on_sale: false,
      original_price: null,
      product_condition: "NEW",
      top_quality_store: false,
    },
  },
  {
    product_id: "13905109803983760691",
    product_title:
      "Twenty Dresses by Nykaa Fashion Maroon Love All Around Maxi Dress (M) At Nykaa Fashion - Your Online Shopping Store",
    product_description:
      "This maroon maxi dress is crafted in polyester georgette and has a polyester knit lining inside, it features a square neckline with full bishop sleeves, has a fit and flare silhouette, smocked back and a concealed side zip for closure. Style With: A pair of block heels and a mini handbag will be all you need.",
    product_photos: [
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT9jX6jOC93B1N8hsJpp2H2wCYkujfAlB6BmudSl8OFI6djxbNPKqPwaikurtl3wboNS73Ow1rPHBQemIjgMEt4fVJtiiaM&usqp=CAE",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTkBEEzXFdW0N6ccIF7helRrd4ETiZoVx2PNmX2uoXjpizDrO0ioOiYC8OA7uPATPDFJ8zJQBxGd5Su8xAkThnzRsVU6BFl&usqp=CAE",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRz5TwO-W73Ng3mNhZXoMbBCvuCo-DqvdA1zskMTJ3L1aUPt_BfysGLq4oMefGoEV5BstrZV8o1t7iM9pQdqoxwXh_a1iqnzQ&usqp=CAE",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQVa2NsWt3uzC2oNcmyhqpNCN_prMtbfgzkRzfhrmT2zCiud7nwsZTzTz7YpfVnj5MBle2UFB1aCXE0-Pkds7MnGcgitLDb&usqp=CAE",
    ],
    product_attributes: {
      Silhouette: "Fit and Flare",
      Size: "M",
      Material: "Polyester",
      Neckline: "Square Neck",
      Length: "Maxi",
      "Size Types": "Regular",
    },
    product_rating: null,
    product_page_url:
      "https://google.com/shopping/product/13905109803983760691?gl=in&hl=en&prds=pid%3A7918986202710157328",
    product_offers_page_url:
      "https://google.com/shopping/product/13905109803983760691/offers?gl=in&hl=en&prds=pid%3A7918986202710157328",
    product_specs_page_url:
      "https://google.com/shopping/product/13905109803983760691/specs?gl=in&hl=en&prds=pid%3A7918986202710157328",
    product_reviews_page_url:
      "https://google.com/shopping/product/13905109803983760691/reviews?gl=in&hl=en&prds=pid%3A7918986202710157328",
    product_num_reviews: 0,
    product_num_offers: "2",
    typical_price_range: ["₹2,348.00", "₹2,655.00"],
    offer: {
      store_name: "Nykaa",
      store_rating: null,
      offer_page_url:
        "https://www.nykaa.com/twenty-dresses-by-nykaa-fashion-maroon-love-all-around-maxi-dress-m-m/p/12021656?ptype=product&skuId=12021656&srsltid=AfmBOoolc35cQIAE27sYPoDkmyxae125F1V_PHBkFCm6Nh_7CKq00qsdxro",
      store_review_count: 0,
      store_reviews_page_url: null,
      price: "₹2,655.00",
      shipping: "Free delivery by Sat, 3 Aug",
      tax: null,
      on_sale: true,
      original_price: "₹2,795.00",
      product_condition: "NEW",
      top_quality_store: false,
    },
  },
  {
    product_id: "15147395379441386481",
    product_title: "aayu Georgette Maxi Dress (S) by Myntra",
    product_description:
      "Purple solid maxi dress V-neck Sleeveless, no sleeves Gathered or pleated detail Maxi length in flared hem Georgette fabric Zip closure",
    product_photos: [
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQPXmwLg_ZwFugMrhbt6PIc8iFQVXTD8W_8KI8tYk1Jp9p8IZZ5WOYGDGBkCljFd6onh1q60qmX-uGyA5PNnJy59VgrpI6x&usqp=CAE",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQhSIWefcXklJ2gtn22zwwBoxWwFlysMeRl8qwJOXw7TbggMF5XSipWlGTNVBoCch8Y1sXTijMhIpIPwYKT86l4N4QIo3vP&usqp=CAE",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTlga0kTMcBJ8WgCu_CX5e_eoDuiC2YDs-2dz4Fy9bUICh-oWilRtDvdDTIakNsEOSDAZ5PjP6cFFPHQLE9oUWI7aEXem5R8Q&usqp=CAE",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTwou8MLaOJAcp9WGKLOjiSTA1gkt_qr9PZ5XJf6N-sE9fg3BfdyZ4fPf29U8155Ip4PnldeFkTxkarfxF8ViWOYkpsowCe&usqp=CAE",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSUFk8HWd6K7irrtRwR4Oc6vTOxyaC7rJRogSguHQe29bfV6blCAhibgQgLT1b6PyrOqLpzMCJxr263UiftJynoQ0ZEkfYOGA&usqp=CAE",
    ],
    product_attributes: {
      Size: "S",
      Neckline: "V-neck",
      "Sleeve Style": "Sleeveless",
      Length: "Maxi",
      Color: "Purple",
      "Size Types": "Regular",
    },
    product_rating: null,
    product_page_url:
      "https://google.com/shopping/product/15147395379441386481?gl=in&hl=en&prds=pid%3A13983005331072303265",
    product_offers_page_url:
      "https://google.com/shopping/product/15147395379441386481/offers?gl=in&hl=en&prds=pid%3A13983005331072303265",
    product_specs_page_url:
      "https://google.com/shopping/product/15147395379441386481/specs?gl=in&hl=en&prds=pid%3A13983005331072303265",
    product_reviews_page_url:
      "https://google.com/shopping/product/15147395379441386481/reviews?gl=in&hl=en&prds=pid%3A13983005331072303265",
    product_num_reviews: 0,
    product_num_offers: null,
    typical_price_range: ["₹705.00", "₹705.00"],
    offer: {
      store_name: "Myntra",
      store_rating: null,
      offer_page_url:
        "http://www.myntra.com/Dresses/aayu/aayu-Georgette-Maxi-Dress/28098790/buy",
      store_review_count: 0,
      store_reviews_page_url: null,
      price: "₹805.00",
      shipping: "Delivery by Sat, 3 Aug",
      tax: null,
      on_sale: false,
      original_price: null,
      product_condition: "NEW",
      top_quality_store: false,
      coupon_code: "MYNTRA100",
      coupon_discount: "₹100",
    },
  },
  {
    product_id: "2094913610566506948",
    product_title:
      "Midsummer Women Lavender Embellished Knee Length Dress (S) At Nykaa Fashion - Your Online Shopping Store",
    product_description:
      "Make a fashion statement with this stylish dress from Mid Summer. Crafted from linen, this wardrobe essential offers both comfort and elegance. Complete your outfit with trendy heels and minimal accessories.",
    product_photos: [
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT8SXu7cw2zfHBs_PetvaYSOVX1twUSYVMvJ9zzHgA3E3URbc9SZBDisLubyscieeyiuULam4M1_831st-H76uJh_0PRhoi&usqp=CAE",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRF5fJYzVBKwh9VRJd925b74J377gHg5kwM83nB0Y10lzreKh77iSqfNVGFxRz6xkWlnB5XngxUdo0vFawygzdEDpQVZLcp&usqp=CAE",
    ],
    product_attributes: {
      Size: "S",
      Material: "Linen",
      "Size Types": "Regular",
    },
    product_rating: null,
    product_page_url:
      "https://google.com/shopping/product/2094913610566506948?gl=in&hl=en&prds=pid%3A14230693409009728845",
    product_offers_page_url:
      "https://google.com/shopping/product/2094913610566506948/offers?gl=in&hl=en&prds=pid%3A14230693409009728845",
    product_specs_page_url:
      "https://google.com/shopping/product/2094913610566506948/specs?gl=in&hl=en&prds=pid%3A14230693409009728845",
    product_reviews_page_url:
      "https://google.com/shopping/product/2094913610566506948/reviews?gl=in&hl=en&prds=pid%3A14230693409009728845",
    product_num_reviews: 0,
    product_num_offers: null,
    typical_price_range: ["₹3,490.00", "₹3,490.00"],
    offer: {
      store_name: "Nykaa Fashion",
      store_rating: null,
      offer_page_url:
        "https://www.nykaafashion.com/mid-summer-women-lavender-embellished-knee-length-dress/p/14536654?adsource=shopping_india&skuId=14536304",
      store_review_count: 0,
      store_reviews_page_url: null,
      price: "₹3,490.00",
      shipping: "Free delivery by Mon, 5 Aug",
      tax: null,
      on_sale: false,
      original_price: null,
      product_condition: "NEW",
      top_quality_store: false,
    },
  },
  {
    product_id: "14285550000166265118",
    product_title:
      "Berrylush Women Gorgeous Green Solid Flounced Dress (S) by Myntra",
    product_description:
      "Stay in vogue when you wear this gorgeous dress. Beautifully tailored with a solid pattern, short sleeves and flared fit, it will up your style quotient. Gorgeous green shade Alluring solid pattern Short sleeves Flared fit Polyester, machine wash Trend Alert A flounced hem is a very wide pleated ruffle at the bottom of an item of clothing. It adds movement, interest, as well as ornamentation to the garment.",
    product_photos: [
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRkuQXD572ctzCdK69mz2XY2pTmk1IFEURY_RIYzTd7mkks1YNsE-EQMeiYqgwHU3Q1FDWPwbVUkvcC4l0MhIubTPjRtNvwrw&usqp=CAE",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQXzUZ5OxPhlj0Qct1uHD2IXjbgRp7lTVrHr3mr3I7iPBFqk64svMBXZwJxd4AnRQK1eDswbi5xdgDE7ZZAb3IQD_YInm8f&usqp=CAE",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRXnDq-8dJdM-ueVsxJrphSWjWEuaHUAHNeDEIVnsRM4dy9oKdz1hmuIohjglF3UugEEdV51kL1-625p8DlMrk5w6mGJ8PL&usqp=CAE",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTByJscrAgVMxxJnLQBK96qtKUfbjXyf69R_fWQHw8MCz_PYzfUgoavGr_jbyZgMKu7UDanEdxpAbCsRudTjpwo6olyCW34&usqp=CAE",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRe855ZXIoS5tq_t8eA0t0kHOnm-6Tr3RIvAC1zR_H04CkgNoHwHNQ525Tf2xxYHlOswowRhY1Et8RsFk7zTX2Ugxg4IMnO-A&usqp=CAE",
    ],
    product_attributes: {
      Silhouette: "Asymmetrical",
      Size: "S",
      Material: "Polyester",
      Neckline: "Round Neck",
      "Sleeve Style": "Short Sleeve",
      Length: "Maxi",
      "Size Types": "Regular",
    },
    product_rating: 4.4,
    product_page_url:
      "https://google.com/shopping/product/14285550000166265118?gl=in&hl=en&prds=pid%3A9663703250407183768",
    product_offers_page_url:
      "https://google.com/shopping/product/14285550000166265118/offers?gl=in&hl=en&prds=pid%3A9663703250407183768",
    product_specs_page_url:
      "https://google.com/shopping/product/14285550000166265118/specs?gl=in&hl=en&prds=pid%3A9663703250407183768",
    product_reviews_page_url:
      "https://google.com/shopping/product/14285550000166265118/reviews?gl=in&hl=en&prds=pid%3A9663703250407183768",
    product_num_reviews: 34,
    product_num_offers: "4",
    typical_price_range: ["₹737", "₹923"],
    offer: {
      store_name: "Berrylush",
      store_rating: null,
      offer_page_url:
        "https://www.berrylush.com/products/dr772gr-berrylush-green-solid-side-slit-maxi-dress",
      store_review_count: 0,
      store_reviews_page_url: null,
      price: "₹867.00",
      shipping: "Free delivery by Fri, 9 Aug",
      tax: null,
      on_sale: false,
      original_price: null,
      product_condition: "NEW",
      top_quality_store: false,
      coupon_code: "FLAT20",
      coupon_discount_percent: "20",
    },
  },
  {
    product_id: "2277216259752984506",
    product_title:
      "Fashion Basket Women Embroidered Straight Kurta with Palazzos & Dupatta For Women (Green, XL)",
    product_description:
      "Green, Women Embroidered Straight Kurta with Palazzos & Dupatta Classic Kurta Suit Sets perfect for Occasion occasion. Suggested care is to Dry clean.",
    product_photos: [
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRj8Lgwy9ccQ_00_FTaNOvqPKPhXiiR6NG6NHT9h0wyHpPdRgSUTxrNhW0MO08BehlAUIueYj-j8coTeT0HTenBm2Ibu0OZ8w&usqp=CAE",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRP-lpIqB6jnxHcK-qOolVpjZSSbI6i2ifq_lYZQjWaGgAK4bvgK3I9JJnazceSfwpcSKDrzLEqZt6LYKUxrt90FOU_bSt-&usqp=CAE",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRcfvoNExKtdvuFdis_WQQbpCsOmSeXsN6nCDX0uyNB7fZKD6V0Sfz5MtpubExQTBqwTeb_sfsKhLhClZ97-6DhN5kLIMGOLA&usqp=CAE",
    ],
    product_attributes: null,
    product_rating: null,
    product_page_url:
      "https://google.com/shopping/product/2277216259752984506?gl=in&hl=en&prds=pid%3A8128599125979762",
    product_offers_page_url:
      "https://google.com/shopping/product/2277216259752984506/offers?gl=in&hl=en&prds=pid%3A8128599125979762",
    product_specs_page_url:
      "https://google.com/shopping/product/2277216259752984506/specs?gl=in&hl=en&prds=pid%3A8128599125979762",
    product_reviews_page_url:
      "https://google.com/shopping/product/2277216259752984506/reviews?gl=in&hl=en&prds=pid%3A8128599125979762",
    product_num_reviews: 0,
    product_num_offers: null,
    typical_price_range: ["₹1,599", "₹1,666"],
    offer: {
      store_name: "AJIO.com",
      store_rating: null,
      offer_page_url:
        "https://www.ajio.com/fashion-basket-women-embroidered-straight-kurta-with-palazzos--dupatta/p/467346110_green#gmf",
      store_review_count: 0,
      store_reviews_page_url: null,
      price: "₹1,899.00",
      shipping: "Free delivery by Thu, 8 Aug",
      tax: null,
      on_sale: false,
      original_price: null,
      product_condition: "NEW",
      top_quality_store: false,
    },
  },
  {
    product_id: "12081832187759651195",
    product_title: "Sheetal Associates Women Maxi Bodycon Dress",
    product_description:
      "Fabric: polyster blend 90% Polyester, 10% Spandex , Super soft and comfortable fabric inside Style: Elegant v neck, short Sleeves, rich bodycon dress that hide belly fat, dress Fit Type: Slim Fit; Occasion: Casual || Party || Beach || Formal || Meeting || Office wear Closure Type: Pull On; Material Composition: Polyester Blend",
    product_photos: [
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTpMVtYC9vhOt2laaqR1ROGaLc--WS7hDmf4S07Ht_tpklcSXIfTmI4tO3uaMTmaxE3tPGTjL3QYO3f8LgyX0LPt_fYtxQa&usqp=CAE",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTt58VYJG4ThdrPFsHRNWaxNaTQvmPVBlGo5YhBHxWFoUMf-PBTeLZSTN7HmJny2Zvf0BzoaS3MRava9aarkD8oL6rBM5n4&usqp=CAE",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSb5qBzSKG049VAr2Uv4WFloH1InT1qykwhFELs0Se4mEGUKt5upm_tru5VCYqznnU0AcaWEx6H-A4UmBRF-6hu31FF8Q_l&usqp=CAE",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTHjuBlyMVeaz3VphVZBDzN1T9fxwfD3VPLYoktZ0apxevj-r-qfx9hu0j1kOU46lB-2g9BQqw3MmnQGyHv_4hI2gibrir2Og&usqp=CAE",
    ],
    product_attributes: {
      Silhouette: "Fitted",
      Size: "2XL",
      Material: "Polyester",
      Neckline: "V-neck",
      "Sleeve Style": "Short Sleeve",
      Length: "Maxi",
      Color: "Black",
      "Size Types": "Regular",
    },
    product_rating: null,
    product_page_url:
      "https://google.com/shopping/product/12081832187759651195?gl=in&hl=en&prds=pid%3A5462658122182332461",
    product_offers_page_url:
      "https://google.com/shopping/product/12081832187759651195/offers?gl=in&hl=en&prds=pid%3A5462658122182332461",
    product_specs_page_url:
      "https://google.com/shopping/product/12081832187759651195/specs?gl=in&hl=en&prds=pid%3A5462658122182332461",
    product_reviews_page_url:
      "https://google.com/shopping/product/12081832187759651195/reviews?gl=in&hl=en&prds=pid%3A5462658122182332461",
    product_num_reviews: 0,
    product_num_offers: null,
    typical_price_range: ["₹379.00", "₹379.00"],
    offer: {
      store_name: "Amazon.in",
      store_rating: null,
      offer_page_url:
        "https://www.amazon.in/Sheetal-Associates-Womens-Bishop-Bodycon/dp/B0B74HMLHN?source=ps-sl-shoppingads-lpcontext&ref_=fplfs&psc=1&smid=A1WYWER0W24N8S",
      store_review_count: 0,
      store_reviews_page_url: null,
      price: "₹398.00",
      shipping: "₹40.00 delivery",
      tax: null,
      on_sale: false,
      original_price: null,
      product_condition: "NEW",
      top_quality_store: false,
    },
  },
];
const transformData = (data) => {
  return data.map((item) => {
    return {
      // Add new fields
      images: item.product_photos,
      thumbnail: item.product_photos[0],
      price: item.offer.price,

      // Keep the images array

      // Keep or modify other fields as needed
      title: item.product_title,
      description: item.product_description,
      category: "Fashion",
      product_owner: "66a62082d437850f9adaa00f",
      // Remove unwanted fields
      // Do not include 'offer' in the new object
    };
  });
};

const transformedData = transformData(data);

// Convert the transformed data to JSON format
const jsonData = JSON.stringify(transformedData, null, 2);

// Write the JSON data to a sample.json file
fs.writeFile("sample.json", jsonData, "utf8", (err) => {
  if (err) {
    console.error("An error occurred while writing JSON to file:", err);
  } else {
    console.log("JSON file has been saved.");
  }
});

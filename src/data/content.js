const img = (id, w = 900) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=75`

export const business = {
  name: 'Homemade Kitchen',
  street: '123 Main Street',
  city: 'Chicago, IL',
  phone: '(773) 555-0123',
  phoneHref: 'tel:+17735550123',
  email: 'hello@homemadekitchen.com',
  directionsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=123+Main+Street+Chicago+IL',
  hours: [
    { days: 'Monday - Friday', time: '11 AM - 9 PM' },
    { days: 'Saturday - Sunday', time: '10 AM - 10 PM' },
  ],
}

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'menu', label: 'Our Menu' },
  { id: 'about', label: 'About Us' },
  { id: 'catering', label: 'Catering' },
  { id: 'contact', label: 'Contact' },
]

export const images = {
  hero: img('1504674900247-0877df9cc836', 1600),
  heroSide: img('1598103442097-8b74394b95c6', 700),
  story: img('1556910103-1c02745aae4d', 1100),
  storyDetail: img('1466637574441-749b8f19452f', 600),
  special: img('1534939561126-855b8675edd7', 1100),
  catering: img('1555244162-803834f70033', 1100),
}

export const featuredDishes = [
  {
    id: 'homestyle-chicken',
    name: 'Homestyle Chicken',
    price: 18.99,
    description:
      'Golden oven-roasted chicken rubbed with garlic, thyme and lemon, served with pan juices and seasonal vegetables.',
    image: img('1598103442097-8b74394b95c6', 700),
    tag: 'Customer Favorite',
  },
  {
    id: 'beef-pot-roast',
    name: 'Beef Pot Roast',
    price: 21.99,
    description:
      'Chuck roast braised low and slow for six hours until fork-tender, finished with rich homemade gravy.',
    image: img('1529692236671-f1f6cf9683ba', 700),
    tag: 'Slow-Cooked',
  },
  {
    id: 'creamy-chicken-pasta',
    name: 'Creamy Chicken Pasta',
    price: 17.99,
    description:
      'Fresh fettuccine tossed with seared chicken, garlic parmesan cream sauce and cracked black pepper.',
    image: img('1645112411341-6c4fd023714a', 700),
  },
  {
    id: 'grilled-salmon',
    name: 'Grilled Salmon',
    price: 23.99,
    description:
      'Atlantic salmon fillet grilled with lemon-dill butter, served over herbed rice and a crisp garden salad.',
    image: img('1611599537845-1c7aca0091c0', 700),
    tag: 'Chef’s Pick',
  },
  {
    id: 'homemade-lasagna',
    name: 'Homemade Lasagna',
    price: 18.99,
    description:
      'Layers of pasta, slow-simmered beef ragù, ricotta and melted mozzarella, baked fresh every morning.',
    image: img('1574894709920-11b28e7367e3', 700),
  },
  {
    id: 'chicken-mashed-potatoes',
    name: 'Chicken & Mashed Potatoes',
    price: 16.99,
    description:
      'Pan-seared chicken with buttery skin-on mashed potatoes, green beans and our Sunday-style gravy.',
    image: img('1432139555190-58524dae6a55', 700),
  },
]

export const specialDish = {
  id: 'todays-special',
  name: 'Slow-Cooked Beef Pot Roast',
  price: 19.99,
  regularPrice: 21.99,
  description: 'with mashed potatoes, roasted carrots and homemade gravy.',
}

export const menuCategories = [
  {
    id: 'starters',
    label: 'Starters',
    image: img('1466637574441-749b8f19452f', 700),
    note: 'Perfect for sharing while your meal is prepared.',
    items: [
      { name: 'Buttermilk Biscuits', description: 'Three warm biscuits with honey butter and strawberry jam.', price: 6.99 },
      { name: 'Loaded Potato Skins', description: 'Cheddar, crispy bacon, sour cream and fresh chives.', price: 9.49 },
      { name: 'Grandma’s Deviled Eggs', description: 'Classic creamy filling, smoked paprika, pickled onion.', price: 7.99 },
      { name: 'Crispy Chicken Tenders', description: 'Hand-breaded to order, with honey mustard or ranch.', price: 10.99 },
      { name: 'Spinach Artichoke Dip', description: 'Baked bubbly and golden, served with toasted pita.', price: 10.49 },
    ],
  },
  {
    id: 'mains',
    label: 'Main Dishes',
    image: img('1600891964092-4316c288032e', 700),
    note: 'Served with your choice of two homestyle sides.',
    items: [
      { name: 'Homestyle Roast Chicken', description: 'Half chicken roasted with garlic, thyme and lemon.', price: 18.99 },
      { name: 'Beef Pot Roast', description: 'Six-hour braised chuck roast with rich pan gravy.', price: 21.99 },
      { name: 'Country Meatloaf', description: 'Beef and pork meatloaf with a sweet tomato glaze.', price: 17.49 },
      { name: 'Grilled Salmon', description: 'Lemon-dill butter, herbed rice, seasonal greens.', price: 23.99 },
      { name: 'Chicken Fried Steak', description: 'Crispy tenderized steak smothered in peppered gravy.', price: 19.49 },
      { name: 'Chicken & Mashed Potatoes', description: 'Pan-seared chicken, buttery mash, green beans.', price: 16.99 },
    ],
  },
  {
    id: 'pasta',
    label: 'Pasta',
    image: img('1621996346565-e3dbc646d9a9', 700),
    note: 'Made with fresh pasta and sauces simmered in-house.',
    items: [
      { name: 'Homemade Lasagna', description: 'Beef ragù, ricotta, mozzarella, baked fresh daily.', price: 18.99 },
      { name: 'Creamy Chicken Pasta', description: 'Fettuccine, seared chicken, garlic parmesan cream.', price: 17.99 },
      { name: 'Spaghetti & Meatballs', description: 'Hand-rolled meatballs in Sunday tomato sauce.', price: 16.49 },
      { name: 'Baked Mac & Cheese', description: 'Three-cheese blend with a buttery breadcrumb crust.', price: 13.99 },
      { name: 'Penne Primavera', description: 'Seasonal vegetables, garlic, olive oil and basil.', price: 15.49 },
    ],
  },
  {
    id: 'soups-salads',
    label: 'Soups & Salads',
    image: img('1604152135912-04a022e23696', 700),
    note: 'Soups are made fresh each morning. Add chicken to any salad +$4.',
    items: [
      { name: 'Chicken Noodle Soup', description: 'Egg noodles, carrots, celery and slow-simmered broth.', price: 6.99 },
      { name: 'Roasted Tomato Basil Soup', description: 'Velvety and bright, with a grilled cheese crouton.', price: 6.49 },
      { name: 'Hearty Beef & Vegetable', description: 'Tender beef and garden vegetables in rich stock.', price: 7.49 },
      { name: 'Harvest Salad', description: 'Mixed greens, apples, candied pecans, goat cheese.', price: 11.99 },
      { name: 'Classic Cobb Salad', description: 'Chicken, bacon, egg, avocado, blue cheese, tomato.', price: 13.99 },
    ],
  },
  {
    id: 'desserts',
    label: 'Desserts',
    image: img('1571877227200-a0d98ea607e9', 700),
    note: 'Baked in small batches every day - ask what’s fresh from the oven.',
    items: [
      { name: 'Warm Apple Pie', description: 'Flaky butter crust, cinnamon apples, vanilla ice cream.', price: 7.49 },
      { name: 'Triple Chocolate Cake', description: 'Moist layers with fudge frosting and chocolate curls.', price: 7.99 },
      { name: 'Banana Pudding', description: 'Vanilla custard, fresh bananas, vanilla wafers.', price: 6.49 },
      { name: 'Peach Cobbler', description: 'Served warm with a scoop of vanilla bean ice cream.', price: 7.49 },
      { name: 'Homemade Tiramisu', description: 'Espresso-soaked ladyfingers and mascarpone cream.', price: 7.99 },
    ],
  },
  {
    id: 'drinks',
    label: 'Drinks',
    image: img('1600271886742-f049cd451bba', 700),
    note: 'Free refills on iced tea, lemonade and coffee.',
    items: [
      { name: 'Fresh-Squeezed Lemonade', description: 'Classic, strawberry or mint.', price: 3.99 },
      { name: 'Southern Sweet Tea', description: 'Brewed fresh every morning - sweet or unsweet.', price: 2.99 },
      { name: 'Fresh Orange Juice', description: 'Squeezed to order.', price: 4.49 },
      { name: 'House Coffee', description: 'Locally roasted medium blend.', price: 2.79 },
      { name: 'Hot Apple Cider', description: 'Mulled with cinnamon and orange peel.', price: 3.99 },
      { name: 'Old-Fashioned Milkshake', description: 'Vanilla, chocolate or strawberry.', price: 5.99 },
    ],
  },
]

export const features = [
  {
    icon: 'leaf',
    title: 'Fresh Ingredients',
    text: 'Produce, dairy and meats delivered daily from trusted local farms and suppliers.',
  },
  {
    icon: 'whisk',
    title: 'Made From Scratch',
    text: 'Sauces, soups, breads and desserts are made in our kitchen - nothing from a can.',
  },
  {
    icon: 'book',
    title: 'Family Recipes',
    text: 'Dishes passed down through generations and cooked the way they were meant to be.',
  },
  {
    icon: 'clock',
    title: 'Prepared Daily',
    text: 'Every meal is cooked fresh each day in small batches, so it’s always at its best.',
  },
]

export const cateringEvents = [
  { icon: 'users', title: 'Family Gatherings', text: 'Reunions, graduations and Sunday dinners for the whole crew.' },
  { icon: 'cake', title: 'Birthday Parties', text: 'Crowd-pleasing platters and homemade cakes for every age.' },
  { icon: 'briefcase', title: 'Corporate Lunches', text: 'Boxed lunches and hot buffets delivered on time, every time.' },
  { icon: 'gift', title: 'Holiday Dinners', text: 'Roasts, sides and pies for Thanksgiving, Christmas and more.' },
]

export const reviews = [
  {
    name: 'Sarah M.',
    location: 'Lincoln Park',
    rating: 5,
    text: 'The food tastes exactly like something made in your own kitchen. Fresh, comforting and delicious.',
  },
  {
    name: 'David R.',
    location: 'Wicker Park',
    rating: 5,
    text: 'The pot roast is the best I’ve had since my grandmother’s. Generous portions and the staff treat you like family.',
  },
  {
    name: 'Angela T.',
    location: 'Oak Park',
    rating: 5,
    text: 'We used Homemade Kitchen to cater my daughter’s graduation party. Forty guests, zero leftovers, and so many compliments.',
  },
  {
    name: 'Marcus L.',
    location: 'Logan Square',
    rating: 5,
    text: 'My go-to weeknight dinner. The lasagna reheats beautifully and the chicken noodle soup cures everything.',
  },
]

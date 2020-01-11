const menu = {
    _courses: {
      appetizers: [],
      mains: [],
      desserts: []
    },
    
    //get and set courses
    get appetizers() {
      return this._courses.appetizers;
    },
    set appetizers(appetizerIn) {
      this._courses.appetizers = appetizerIn;
    },
    get mains() {
      return this._courses.mains;
    },
    set mains(mainIn) {
      this._courses.mains = mainIn;
    },
    get desserts() {
      return this._courses.mains;
    },
    set desserts(dessertIn) {
      this._courses.desserts = dessertIn;
    },
    
    //get courses
    get courses() {
      return {
        appetizers: this.appetizers,
        mains: this.mains,
        desserts: this.desserts,
      };
    },
    
    //add dishes to courses
    addDishToCourse (courseName, dishName, dishPrice) {
      const dish = {
        name: dishName,
        price: dishPrice,
      };
      return this._courses[courseName].push(dish);
    },
    
    //get random dish
    getRandomDishFromCourse(courseName) {
      const dishes = this._courses[courseName];
      const randomIndex = Math.floor(Math.random() * dishes.length);
      return dishes[randomIndex];
    },
    
    //menu generator
    generateRandomMeal() {
      const appetizer = this.getRandomDishFromCourse('appetizers');
      const main = this.getRandomDishFromCourse('mains');
      const dessert = this.getRandomDishFromCourse('desserts');
      const totalPrice = appetizer.price + main.price + dessert.price;
      return `Appetizer: ${appetizer.name}. Main: ${main.name}. Dessert: ${dessert.name}. Total price: £${totalPrice}`;
    }
  };
  
  //adding dishes to menu
  menu.addDishToCourse('appetizers', 'Potato Salad', 4.55);
  menu.addDishToCourse('appetizers', 'Tomato Soup', 3.25);
  menu.addDishToCourse('appetizers', 'Olives', 2.55);
  
  menu.addDishToCourse('mains', 'New York Strip', 15.55);
  menu.addDishToCourse('mains', 'Lasagna', 12.25);
  menu.addDishToCourse('mains', 'Roast Dinner', 14.75);
  
  menu.addDishToCourse('desserts', 'Chocolate Cake', 5.75);
  menu.addDishToCourse('desserts', 'Tiramisu', 5.25);
  menu.addDishToCourse('desserts', 'Cheese Board', 7.55);
  
  //generate and print meal
  const meal = menu.generateRandomMeal();
  console.log(meal);
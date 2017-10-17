CREATE TABLE grocery_items (
  itemID SERIAL PRIMARY KEY,
  itemName VARCHAR(255) NOT NULL UNIQUE,
  price decimal(4, 2) NOT NULL,
  section VARCHAR(255) NOT NULL
);

CREATE TABLE shoppers (
  shopperId SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);

CREATE TABLE orders (
  orderID SERIAL PRIMARY KEY,
  shopperId INTEGER REFERENCES shoppers NOT NULL
);

CREATE TABLE orderItems (
  orderID INTEGER REFERENCES orders NOT NULL,
  groceryItem INTEGER REFERENCES grocery_items(itemID) NOT NULL
);
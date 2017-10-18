CREATE TABLE grocery_items (
  itemID SERIAL PRIMARY KEY,
  itemName VARCHAR(255) NOT NULL UNIQUE,
  section VARCHAR(255) NOT NULL,
  price decimal(4, 2) NOT NULL
);

CREATE TABLE shoppers (
  shopperId SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE orders (
  orderID SERIAL PRIMARY KEY,
  shopperId INTEGER REFERENCES shoppers NOT NULL
);

CREATE TABLE orderItems (
  orderID INTEGER REFERENCES orders NOT NULL,
  groceryItem INTEGER REFERENCES grocery_items(itemid) NOT NULL
);


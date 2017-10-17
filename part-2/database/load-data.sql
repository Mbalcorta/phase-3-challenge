INSERT INTO shoppers(name) VALUES('Jenny'),('Sebastian'),('Heather'),('Sal'),('OJ'),('Sunshine');

INSERT INTO orders(shopperid) VALUES(1),(1),(4),(4),(3),(3),(3);

INSERT INTO orderitems(orderid, groceryitem) VALUES(1, 1),(1, 2),(1, 1),(2, 4),(3, 6),(4, 4),(4, 5), (5, 5), (6, 2);

INSERT INTO grocery_items(itemname, price, section) VALUES
('apples', 2.99, 'produce'),
('Bacon',9.01,'meat'),
('Barbeque Sauce',16.96,'packaged'),
('Carrots',2.88,'produce'),
('Cheese',1.75,'dairy'),
('Coffee',6.17,'packaged');

INSERT INTO shoppers(name) VALUES('Jenny'),('Sebastian'),('Heather'),('Sal'),('OJ'),('Sunshine');

INSERT INTO orders(shopper_id) VALUES(1),(1),(4),(4),(3),(3),(3);

COPY items(name, price, section) FROM '/Users/mateobalcorta/Desktop/coding/phase2/phase-3-challenge/part-2/database/grocery.csv' DELIMITER ',' CSV HEADER;

INSERT INTO orders_items(orders_id, items_id) VALUES(1, 1),(1, 2),(1, 1),(2, 4),(3, 6),(4, 4),(4, 5), (5, 5), (6, 2), (7, 3);
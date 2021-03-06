DROP TABLE IF EXISTS orderItems CASCADE;

CREATE TABLE orderItems (
  order_id SMALLINT NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
  food_id INTEGER NOT NULL REFERENCES foods(id) ON DELETE CASCADE,
  quantity SMALLINT NOT NULL
);

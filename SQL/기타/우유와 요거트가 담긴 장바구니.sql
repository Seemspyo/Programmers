SELECT cart_id FROM
(SELECT * FROM cart_products WHERE name="우유") milk JOIN
(SELECT * FROM cart_products WHERE name="요거트") yogurt
USING(cart_id)
WHERE milk.name IS NOT NULL AND yogurt.name IS NOT NULL
GROUP BY cart_id
ORDER BY cart_id
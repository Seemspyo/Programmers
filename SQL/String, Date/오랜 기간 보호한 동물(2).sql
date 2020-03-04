SELECT outs.animal_id, outs.name FROM
(SELECT animal_id, name, datetime AS out_time FROM animal_outs) outs JOIN 
(SELECT animal_id, datetime AS in_time FROM animal_ins) ins
USING(animal_id)
ORDER BY out_time - in_time DESC
LIMIT 2
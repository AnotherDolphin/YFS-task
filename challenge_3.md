# Challenge 3
## SQL query for 5th highest funded startup

Assuming as mentioned in the hint that this is a structured table that includes the startups and has the total funded value ready, each with a distinct funded value:

`
SELECT startup_name, total_funded FROM startups 
ORDER BY total_funded limit 4,1;
`

From the records ordered by highest funded, the keyword `limit` will start from n-1 (5-1 = 4) and take one value from there, giving us a record with the fifth highest funded startup name and the agregate funded value.
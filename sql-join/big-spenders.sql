select "p"."amount",
       "c"."firstName",
       "c"."lastName"
  from "payments" as "p"
  join "customers" as "c" using ("customerId")
  order by "p"."amount" desc
  limit 10;

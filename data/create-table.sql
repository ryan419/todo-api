CREATE TYPE item_status AS ENUM ('todo', 'inprogress', 'done');

CREATE TABLE item (
   id serial PRIMARY KEY,
   description varchar(255),
   status item_status,
   deadline DATE
)

CREATE TABLE todo (
   id serial PRIMARY KEY,
   item_id integer NOT NULL references item(id),
   created_at timestamp DEFAULT now()
)

# Data Modeling Notes

## Requirements

A client has hired you to build an API for managing `zoos` and the `animals` kept at each `zoo`. The API will be use for `zoos` in the _United States of America_, no need to worry about addresses in other countries.

For the `zoos` the client wants to record:

- name.
- address.

For the `animals` the client wants to record:

- name.
- species.
- list of all the zoos where they have resided.

Determine the database tables necessary to track this information.
Label any relationships between table.

## A Good Data Model

- Captures ALL the information the system needs.
- Captures ONLY the information the system needs.
- Reflect Reality (From the point of view, of the system)
- Flexible, can evolve with the system
- Guarantees `data integrity`, without sacrificing too much performance
- Driven by the way we access data

## Components

- Entities (Nouns: zoo, animals, species), like a resource ==> Tables.
- Properties ==> Columns/Fields in the tables
- Relationships ==> Foreign Keys (FK)

## Work Flow

- Identify entities
- Identify relationships
- Identify properties

## Relationships 
- One to one
- One to many
- Many to many

_There are many animals in 1 species_
_One species can have many animals_

_There can be more than one animal in a zoo_
_An animal could have lived more than one zoo_

## Mantras

- Every table must have a **Primary Key**
- Work on **two or three** entities at a time
- **one to many** relationships are modeled using a **foreign key**
- The **foreign key** always goes on the **many side**
- The **foregin key** column must be the **same tpye** as the **primary key** that it references
- **Many to many**  relationships are modeled using a **third table**
- The third table could include other columns
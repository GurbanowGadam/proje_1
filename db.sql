DROP DATABASE IF EXISTS market;
DROP ROLE IF EXISTS market_db_user;


CREATE ROLE market_db_user LOGIN SUPERUSER PASSWORD '1234';
CREATE DATABASE market;

\c market


SET client_encoding TO 'UTF-8';

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";


CREATE TABLE categories(
    "id" uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    "name" CHARACTER VARYING(25) NOT NULL,
    "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT clock_timestamp() 
);


CREATE TABLE sub_categories(
    "id" uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    "name" CHARACTER VARYING(25) NOT NULL,
    "category_id" uuid NOT NULL,
    "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT clock_timestamp(),
    CONSTRAINT  sub_categories_category_id_fk
        FOREIGN KEY("category_id")
            REFERENCES categories("id")
                ON UPDATE CASCADE ON DELETE CASCADE
);
select * from categories ;
                  id                  |         name         |          created_at           
--------------------------------------+----------------------+-------------------------------
 7be26257-1509-428b-a134-9521af3a8a5a | ELEKTRONİK           | 2022-05-20 18:07:48.055519+05
 2965165b-18cf-41a2-98b3-1cecf64e8f6b | KIYAFETLER           | 2022-05-20 18:07:48.07309+05
 d98cdfa9-48a8-40f9-8b5f-e286aba90c11 | YİYECEK VE İÇECEKLER | 2022-05-20 18:07:48.073119+05
 9576a753-5f66-4f40-a3fa-cf59dc13310e | SAĞLIK VE GÜZELLİK   | 2022-05-20 18:07:48.073133+05
 d9902637-03f0-4d5a-abd2-1c2f6b58c8a0 | SPOR & EĞLENCE       | 2022-05-20 18:07:48.073146+05
 a6c8e51e-13b4-4ff9-85c6-1bcfca6ee79d | KİTAP & EĞLENCE      | 2022-05-20 18:07:48.073168+

insert into sub_categories(name, category_id)
values
('kameralar','7be26257-1509-428b-a134-9521af3a8a5a'),
('Bilgisayarlar, Tabletler','7be26257-1509-428b-a134-9521af3a8a5a'),
('Cep telefonu','7be26257-1509-428b-a134-9521af3a8a5a'),
('Ses ve Görüntü','7be26257-1509-428b-a134-9521af3a8a5a'),

('Bayan giyimi','2965165b-18cf-41a2-98b3-1cecf64e8f6b'),
('Erkeklerin kıyafetleri','2965165b-18cf-41a2-98b3-1cecf64e8f6b'),
('Çocuk giyim','2965165b-18cf-41a2-98b3-1cecf64e8f6b');

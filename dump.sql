--
-- PostgreSQL database dump
--

-- Dumped from database version 17.0
-- Dumped by pg_dump version 17.5 (Homebrew)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: add_product_grades(); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION public.add_product_grades() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
DECLARE
    grade_array TEXT[] := ARRAY['Grade A', 'Grade B', 'Grade C'];
    bag_size_array TEXT[] := ARRAY['50kg', '25kg', '10kg'];
    grade TEXT;
    bag_size TEXT;
BEGIN
    -- Loop over each grade and bag size combination
    FOREACH grade IN ARRAY grade_array
    LOOP
        FOREACH bag_size IN ARRAY bag_size_array
        LOOP
            -- Insert the product_id from the NEW row in the products table along with the grade and bag size
            INSERT INTO product_grade (
                product_id, 
                grade, 
                bag_size
            ) 
            VALUES (
                NEW.id,  -- Fetch the product_id from the newly inserted product
                grade, 
                bag_size
            );
        END LOOP;
    END LOOP;

    RETURN NEW;
END;
$$;


ALTER FUNCTION public.add_product_grades() OWNER TO postgres;

--
-- Name: update_updated_at_column(); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION public.update_updated_at_column() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$;


ALTER FUNCTION public.update_updated_at_column() OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: address; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.address (
    id numeric NOT NULL,
    first_line character varying NOT NULL,
    second_line character varying,
    city character varying NOT NULL,
    state character varying NOT NULL,
    country character varying NOT NULL,
    pincode numeric NOT NULL,
    user_id integer NOT NULL,
    heading character varying(256)
);


ALTER TABLE public.address OWNER TO postgres;

--
-- Name: address_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.address_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 2147138647
    CACHE 1;


ALTER SEQUENCE public.address_id_seq OWNER TO postgres;

--
-- Name: address_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.address_id_seq OWNED BY public.address.id;


--
-- Name: bag_size; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.bag_size (
    id integer NOT NULL,
    bag_size text NOT NULL,
    product_id integer
);


ALTER TABLE public.bag_size OWNER TO postgres;

--
-- Name: bag_size_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.bag_size_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.bag_size_id_seq OWNER TO postgres;

--
-- Name: bag_size_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.bag_size_id_seq OWNED BY public.bag_size.id;


--
-- Name: cart; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.cart (
    id integer NOT NULL,
    user_id integer,
    status integer NOT NULL,
    created_at time without time zone,
    updated_at time without time zone
);


ALTER TABLE public.cart OWNER TO postgres;

--
-- Name: cart_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.cart_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.cart_id_seq OWNER TO postgres;

--
-- Name: cart_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.cart_id_seq OWNED BY public.cart.id;


--
-- Name: cart_item; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.cart_item (
    cart_id integer NOT NULL,
    product_grade_id integer NOT NULL,
    price numeric NOT NULL,
    quantity integer NOT NULL,
    created_at text,
    updated_at text,
    product_id integer,
    id integer NOT NULL,
    name text,
    img text,
    brand text
);


ALTER TABLE public.cart_item OWNER TO postgres;

--
-- Name: cart_item_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.cart_item_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.cart_item_id_seq OWNER TO postgres;

--
-- Name: cart_item_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.cart_item_id_seq OWNED BY public.cart_item.id;


--
-- Name: grade; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.grade (
    id integer NOT NULL,
    product_id integer NOT NULL,
    grade text NOT NULL
);


ALTER TABLE public.grade OWNER TO postgres;

--
-- Name: grade_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.grade_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.grade_id_seq OWNER TO postgres;

--
-- Name: grade_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.grade_id_seq OWNED BY public.grade.id;


--
-- Name: images; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.images (
    id integer NOT NULL,
    product_id integer NOT NULL,
    uri text NOT NULL
);


ALTER TABLE public.images OWNER TO postgres;

--
-- Name: images_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.images_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.images_id_seq OWNER TO postgres;

--
-- Name: images_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.images_id_seq OWNED BY public.images.id;


--
-- Name: orders; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.orders (
    id integer NOT NULL,
    user_id integer NOT NULL,
    payment_mode character varying NOT NULL,
    created_at time without time zone
);


ALTER TABLE public.orders OWNER TO postgres;

--
-- Name: order_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.order_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 2147138647
    CACHE 1;


ALTER SEQUENCE public.order_id_seq OWNER TO postgres;

--
-- Name: order_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.order_id_seq OWNED BY public.orders.id;


--
-- Name: order_lines; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.order_lines (
    id integer NOT NULL,
    order_id integer NOT NULL,
    product_grade_id integer,
    price numeric,
    qty integer
);


ALTER TABLE public.order_lines OWNER TO postgres;

--
-- Name: order_line_sequence; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.order_line_sequence
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 2147138647
    CACHE 1;


ALTER SEQUENCE public.order_line_sequence OWNER TO postgres;

--
-- Name: order_line_sequence; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.order_line_sequence OWNED BY public.order_lines.id;


--
-- Name: product_grade; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.product_grade (
    id integer NOT NULL,
    product_id integer,
    grade text,
    bag_size text
);


ALTER TABLE public.product_grade OWNER TO postgres;

--
-- Name: product_grade_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.product_grade_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 2147138647
    CACHE 1;


ALTER SEQUENCE public.product_grade_seq OWNER TO postgres;

--
-- Name: product_grade_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.product_grade_seq OWNED BY public.product_grade.id;


--
-- Name: products; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.products (
    id integer NOT NULL,
    price numeric(10,2) NOT NULL,
    mrp numeric(10,2) NOT NULL,
    category character varying(255),
    sku character varying(50),
    name character varying(255),
    brand character varying(255),
    review numeric(3,1),
    min_order_qty integer,
    max_order_qty integer,
    in_stock integer,
    image text,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.products OWNER TO postgres;

--
-- Name: products_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.products_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
    CYCLE;


ALTER SEQUENCE public.products_id_seq OWNER TO postgres;

--
-- Name: products_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.products_id_seq OWNED BY public.products.id;


--
-- Name: user_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.user_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.user_id_seq OWNER TO postgres;

--
-- Name: user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.user_id_seq OWNED BY public.products.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer DEFAULT nextval('public.user_id_seq'::regclass) NOT NULL,
    "firstName" character varying(256),
    "lastName" character varying(256),
    email character varying(256),
    password character varying(256),
    "createdAt" timestamp without time zone,
    "updatedAt" timestamp without time zone
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: address id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.address ALTER COLUMN id SET DEFAULT nextval('public.address_id_seq'::regclass);


--
-- Name: bag_size id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.bag_size ALTER COLUMN id SET DEFAULT nextval('public.bag_size_id_seq'::regclass);


--
-- Name: cart id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cart ALTER COLUMN id SET DEFAULT nextval('public.cart_id_seq'::regclass);


--
-- Name: cart_item id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cart_item ALTER COLUMN id SET DEFAULT nextval('public.cart_item_id_seq'::regclass);


--
-- Name: grade id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.grade ALTER COLUMN id SET DEFAULT nextval('public.grade_id_seq'::regclass);


--
-- Name: images id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.images ALTER COLUMN id SET DEFAULT nextval('public.images_id_seq'::regclass);


--
-- Name: order_lines id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.order_lines ALTER COLUMN id SET DEFAULT nextval('public.order_line_sequence'::regclass);


--
-- Name: orders id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders ALTER COLUMN id SET DEFAULT nextval('public.order_id_seq'::regclass);


--
-- Name: product_grade id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.product_grade ALTER COLUMN id SET DEFAULT nextval('public.product_grade_seq'::regclass);


--
-- Name: products id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products ALTER COLUMN id SET DEFAULT nextval('public.products_id_seq'::regclass);


--
-- Data for Name: address; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.address (id, first_line, second_line, city, state, country, pincode, user_id, heading) FROM stdin;
1	C-1431/2	Indira Nagar	Lucknow	UP	India	226016	1	Home
3	177/A	Bleecker Street	NYC	New York	The USA	226010	2	Work
4	177/B	Bleecker Street	NYC	New York	The USA	226010	2	Work
5	House no. 1	Shaheed Bhagat Singh Ward, Indira Nagar	Lucknow	UP	India	226016	1	Home-2
\.


--
-- Data for Name: bag_size; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.bag_size (id, bag_size, product_id) FROM stdin;
22	50kg	1
23	25kg	1
24	10kg	1
25	50kg	2
26	25kg	2
27	10kg	2
28	50kg	3
29	25kg	3
30	10kg	3
31	50kg	4
32	25kg	4
33	10kg	4
34	50kg	11
35	25kg	11
36	10kg	11
37	50L	5
38	25L	5
39	10L	5
40	50L	10
41	25L	10
42	10L	10
\.


--
-- Data for Name: cart; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.cart (id, user_id, status, created_at, updated_at) FROM stdin;
1	1	1	10:53:59.541612	10:53:59.541612
\.


--
-- Data for Name: cart_item; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.cart_item (cart_id, product_grade_id, price, quantity, created_at, updated_at, product_id, id, name, img, brand) FROM stdin;
1	12	299.99	2	14:52:56.281087	14:52:56.281087	1	1	\N	https://drive.usercontent.google.com/download?id=1g2HR6XbJH_EivToGo4xTQlpoNfDmHajX&export=view&authuser=0	\N
\.


--
-- Data for Name: grade; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.grade (id, product_id, grade) FROM stdin;
2	1	Grade B
3	1	Grade C
5	2	Grade A
6	2	Grade B
7	2	Grade C
8	3	Grade A
9	3	Grade B
10	3	Grade C
11	4	Grade A
12	4	Grade B
13	4	Grade C
14	11	Grade A
15	11	Grade B
16	11	Grade C
18	5	Grade A
19	5	Grade B
20	5	Grade C
21	10	Grade A
22	10	Grade B
23	10	Grade C
1	1	Grade D
\.


--
-- Data for Name: images; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.images (id, product_id, uri) FROM stdin;
1	1	https://drive.google.com/uc?export=view&id=1aUckKwmZa6vxITVXTtWbe3qD1pB-BnNu
2	1	https://drive.usercontent.google.com/download?id=1aUckKwmZa6vxITVXTtWbe3qD1pB-BnNu&export=view&authuser=0
\.


--
-- Data for Name: order_lines; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.order_lines (id, order_id, product_grade_id, price, qty) FROM stdin;
2	2	22	300	3
3	2	15	350	1
4	3	22	300	2
5	4	22	300	2
6	5	22	300	2
7	6	22	300	2
8	7	22	300	2
9	8	22	300	2
10	9	22	300	5
11	9	16	350	13
12	10	22	300	5
13	10	16	350	13
14	11	15	350	5
15	12	21	300	1
16	14	19	350	4
17	15	19	350	2
18	16	19	350	6
19	17	19	350	4
20	18	19	350	4
21	19	19	350	4
22	20	25	300	1
23	21	18	350	4
24	22	19	350	4
25	24	18	350	7
26	25	19	350	2
27	27	15	350	6
28	28	15	350	2
29	29	40	330	4
30	30	15	350	2
31	30	25	300	2
32	30	31	320	2
33	32	15	350	1
34	33	22	300	120
35	36	22	300	4
36	36	18	350	3
\.


--
-- Data for Name: orders; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.orders (id, user_id, payment_mode, created_at) FROM stdin;
11	1	Credit	16:52:53.92939
12	1	Cash	17:02:16.252704
13	1	Credit	13:03:33.614524
14	1	Cheque	18:31:28.723892
15	1	Debit	18:37:22.490552
16	1	Cheque	18:39:18.202294
17	1	Cheque	18:40:03.923708
18	1	Cheque	18:41:29.355803
19	1	Debit	18:44:02.77175
20	1	Cheque	18:46:51.104648
21	1	Cheque	18:56:21.730823
22	1	Credit	10:56:10.939357
23	1	Credit	11:24:56.703913
24	1	Credit	14:42:51.516564
25	1	Credit	18:03:32.219613
26	1	Credit	20:07:31.255682
27	1	Cheque	09:01:59.843503
28	1	Cheque	09:12:00.255444
29	1	Cheque	13:17:17.680176
30	1	Credit	05:40:40.230505
31	1	Debit	06:29:32.062888
32	1	Credit	08:52:34.260423
33	1	Cash	09:55:09.930239
34	1	Credit	05:39:42.708836
35	1	Cheque	16:27:16.7425
36	1	Credit	20:20:16.359037
37	1	Cash	01:37:11.208558
2	1	Debit	03:20:01.242416
3	1	Cheque	01:10:39.362583
4	1	Cheque	01:11:47.958105
5	1	Cheque	01:19:54.764202
6	1	Credit	01:20:39.731166
7	1	Debit	01:34:33.732521
8	1	Cheque	11:40:13.092246
9	1	Credit	12:21:51.707511
10	1	Cash	12:23:12.923198
\.


--
-- Data for Name: product_grade; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.product_grade (id, product_id, grade, bag_size) FROM stdin;
12	1	Grade A	50kg
13	1	Grade A	25kg
14	1	Grade A	10kg
15	1	Grade B	50kg
16	1	Grade B	25kg
17	1	Grade B	10kg
18	1	Grade C	50kg
19	1	Grade C	25kg
20	1	Grade C	10kg
21	2	Grade A	50kg
22	2	Grade A	25kg
23	2	Grade A	10kg
24	2	Grade B	50kg
25	2	Grade B	25kg
26	2	Grade B	10kg
27	2	Grade C	50kg
28	2	Grade C	25kg
29	2	Grade C	10kg
30	3	Grade A	50kg
31	3	Grade A	25kg
32	3	Grade A	10kg
33	3	Grade B	50kg
34	3	Grade B	25kg
35	3	Grade B	10kg
36	3	Grade C	50kg
37	3	Grade C	25kg
38	3	Grade C	10kg
39	4	Grade A	50kg
40	4	Grade A	25kg
41	4	Grade A	10kg
42	4	Grade B	50kg
43	4	Grade B	25kg
44	4	Grade B	10kg
45	4	Grade C	50kg
46	4	Grade C	25kg
47	4	Grade C	10kg
48	5	Grade A	50kg
49	5	Grade A	25kg
50	5	Grade A	10kg
51	5	Grade B	50kg
52	5	Grade B	25kg
53	5	Grade B	10kg
54	5	Grade C	50kg
55	5	Grade C	25kg
56	5	Grade C	10kg
57	10	Grade A	50kg
58	10	Grade A	25kg
59	10	Grade A	10kg
60	10	Grade B	50kg
61	10	Grade B	25kg
62	10	Grade B	10kg
63	10	Grade C	50kg
64	10	Grade C	25kg
65	10	Grade C	10kg
66	11	Grade A	50kg
67	11	Grade A	25kg
68	11	Grade A	10kg
69	11	Grade B	50kg
70	11	Grade B	25kg
71	11	Grade B	10kg
72	11	Grade C	50kg
73	11	Grade C	25kg
74	11	Grade C	10kg
\.


--
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.products (id, price, mrp, category, sku, name, brand, review, min_order_qty, max_order_qty, in_stock, image, created_at, updated_at) FROM stdin;
1	350.00	349.00	Cement	UT123	Ultratech Cement Bag	Ultratech	4.5	1	100	50	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlFEuHS3BhfpRBf3PVQFuBDAjPqGJY2wkKzg&s	2024-10-22 10:53:59.541612	2024-10-22 10:53:59.541612
2	300.00	500.00	Cement	UT123	ACC Cement Bag	ACC	4.5	1	100	50	https://5.imimg.com/data5/UG/RV/MY-3268922/acc-cement.jpg	2024-10-22 10:53:59.541612	2024-10-22 10:53:59.541612
3	320.00	500.00	Cement	UT123	Dalmia Cement Bag	Dalmia	4.5	1	100	50	https://5.imimg.com/data5/UV/PU/XW/SELLER-68311677/dalmia-cement.jpg	2024-10-22 10:53:59.541612	2024-10-22 10:53:59.541612
4	330.00	500.00	Cement	UT123	Bangur Cement Bag	Bangur	4.5	1	100	50	https://5.imimg.com/data5/SELLER/Default/2021/1/GW/AM/FR/8514149/bangur-cement-ppc-500x500.jpeg	2024-10-22 10:53:59.541612	2024-10-22 10:53:59.541612
11	350.00	349.00	Cement	UT123	Ultratech Cement Bag	Ultratech	4.5	1	100	50	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlFEuHS3BhfpRBf3PVQFuBDAjPqGJY2wkKzg&s	2024-10-22 10:53:59.541612	2024-10-22 10:53:59.541612
10	349.00	350.00	Walling	SH123	Shalimar Paint Box	Shalimar	4.5	1	100	50	https://drive.google.com/uc?export=view&id=1PtD0RJadbYAdZfz6SpbIKB01Dj0oLLF7	2024-10-24 15:50:22.1415	2024-11-07 16:24:45.693844
5	349.00	350.00	Walling	SH123	Shalimar Paint Box	Shalimar	4.5	1	100	50	https://drive.google.com/uc?export=view&id=1R2l9j-L5H8FfK7X16hSK4QfQZ-41fzmf	2024-10-23 15:51:07.939603	2024-11-07 16:50:59.511304
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, "firstName", "lastName", email, password, "createdAt", "updatedAt") FROM stdin;
1	Tashvik	Srivastava	tashvik2811@gmail.com	Icici7897	2024-10-24 15:50:22.1415	2024-10-24 15:50:22.1415
2	Stephen	Strange	drstrange@avengers.com	Kamartaj	\N	\N
\.


--
-- Name: address_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.address_id_seq', 8, true);


--
-- Name: bag_size_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.bag_size_id_seq', 42, true);


--
-- Name: cart_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.cart_id_seq', 1, true);


--
-- Name: cart_item_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.cart_item_id_seq', 10, true);


--
-- Name: grade_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.grade_id_seq', 23, true);


--
-- Name: images_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.images_id_seq', 2, true);


--
-- Name: order_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.order_id_seq', 37, true);


--
-- Name: order_line_sequence; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.order_line_sequence', 36, true);


--
-- Name: product_grade_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.product_grade_seq', 74, true);


--
-- Name: products_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.products_id_seq', 11, true);


--
-- Name: user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.user_id_seq', 2, true);


--
-- Name: address address_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.address
    ADD CONSTRAINT address_pkey PRIMARY KEY (id);


--
-- Name: bag_size bag_size_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.bag_size
    ADD CONSTRAINT bag_size_pkey PRIMARY KEY (id);


--
-- Name: cart_item cart_item_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cart_item
    ADD CONSTRAINT cart_item_pkey PRIMARY KEY (id);


--
-- Name: cart cart_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cart
    ADD CONSTRAINT cart_pkey PRIMARY KEY (id);


--
-- Name: grade grade_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.grade
    ADD CONSTRAINT grade_pkey PRIMARY KEY (id);


--
-- Name: images images_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.images
    ADD CONSTRAINT images_pkey PRIMARY KEY (id);


--
-- Name: order_lines order_lines_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.order_lines
    ADD CONSTRAINT order_lines_pkey PRIMARY KEY (id);


--
-- Name: orders orders_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_pkey PRIMARY KEY (id);


--
-- Name: product_grade product_grade_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.product_grade
    ADD CONSTRAINT product_grade_pkey PRIMARY KEY (id);


--
-- Name: products products_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: idx_address_user_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_address_user_id ON public.address USING btree (user_id);


--
-- Name: idx_cart_item_cart_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_cart_item_cart_id ON public.cart_item USING btree (cart_id);


--
-- Name: idx_cart_item_price; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_cart_item_price ON public.cart_item USING btree (price);


--
-- Name: idx_cart_item_product_grade_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_cart_item_product_grade_id ON public.cart_item USING btree (product_grade_id);


--
-- Name: idx_cart_user_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_cart_user_id ON public.cart USING btree (user_id);


--
-- Name: idx_orders_payment_mode; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_orders_payment_mode ON public.orders USING btree (payment_mode);


--
-- Name: idx_orders_user_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_orders_user_id ON public.orders USING btree (user_id);


--
-- Name: idx_product_grade_product_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_product_grade_product_id ON public.product_grade USING btree (product_id);


--
-- Name: idx_products_category; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_products_category ON public.products USING btree (category);


--
-- Name: idx_products_name; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_products_name ON public.products USING btree (name);


--
-- Name: idx_products_price; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_products_price ON public.products USING btree (price);


--
-- Name: products trigger_add_product_grades; Type: TRIGGER; Schema: public; Owner: postgres
--

CREATE TRIGGER trigger_add_product_grades AFTER INSERT ON public.products FOR EACH ROW EXECUTE FUNCTION public.add_product_grades();


--
-- Name: products update_updated_at_trigger; Type: TRIGGER; Schema: public; Owner: postgres
--

CREATE TRIGGER update_updated_at_trigger BEFORE UPDATE ON public.products FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();


--
-- Name: bag_size bag_size_prod_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.bag_size
    ADD CONSTRAINT bag_size_prod_id_fkey FOREIGN KEY (product_id) REFERENCES public.products(id) NOT VALID;


--
-- Name: cart cart_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cart
    ADD CONSTRAINT cart_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- Name: cart_item fk_cart_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cart_item
    ADD CONSTRAINT fk_cart_id FOREIGN KEY (cart_id) REFERENCES public.cart(id);


--
-- Name: order_lines fk_order_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.order_lines
    ADD CONSTRAINT fk_order_id FOREIGN KEY (order_id) REFERENCES public.orders(id);


--
-- Name: order_lines fk_product_grade_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.order_lines
    ADD CONSTRAINT fk_product_grade_id FOREIGN KEY (product_grade_id) REFERENCES public.product_grade(id);


--
-- Name: orders fk_user_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT fk_user_id FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- Name: address fk_user_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.address
    ADD CONSTRAINT fk_user_id FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- Name: images img_pid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.images
    ADD CONSTRAINT img_pid_fkey FOREIGN KEY (product_id) REFERENCES public.products(id) NOT VALID;


--
-- Name: product_grade product_grade_product_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.product_grade
    ADD CONSTRAINT product_grade_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.products(id);


--
-- Name: grade product_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.grade
    ADD CONSTRAINT product_id_fkey FOREIGN KEY (product_id) REFERENCES public.products(id) NOT VALID;


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: pg_database_owner
--

GRANT USAGE ON SCHEMA public TO tashvik;


--
-- Name: TABLE address; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON TABLE public.address TO tashvik;


--
-- Name: SEQUENCE address_id_seq; Type: ACL; Schema: public; Owner: postgres
--

GRANT SELECT,USAGE ON SEQUENCE public.address_id_seq TO tashvik;


--
-- Name: TABLE bag_size; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON TABLE public.bag_size TO tashvik;


--
-- Name: SEQUENCE bag_size_id_seq; Type: ACL; Schema: public; Owner: postgres
--

GRANT SELECT,USAGE ON SEQUENCE public.bag_size_id_seq TO tashvik;


--
-- Name: TABLE cart; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON TABLE public.cart TO tashvik;


--
-- Name: SEQUENCE cart_id_seq; Type: ACL; Schema: public; Owner: postgres
--

GRANT SELECT,USAGE ON SEQUENCE public.cart_id_seq TO tashvik;


--
-- Name: TABLE cart_item; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON TABLE public.cart_item TO tashvik;


--
-- Name: SEQUENCE cart_item_id_seq; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON SEQUENCE public.cart_item_id_seq TO tashvik;


--
-- Name: TABLE grade; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON TABLE public.grade TO tashvik;


--
-- Name: SEQUENCE grade_id_seq; Type: ACL; Schema: public; Owner: postgres
--

GRANT SELECT,USAGE ON SEQUENCE public.grade_id_seq TO tashvik;


--
-- Name: TABLE images; Type: ACL; Schema: public; Owner: postgres
--

GRANT SELECT ON TABLE public.images TO tashvik;


--
-- Name: SEQUENCE images_id_seq; Type: ACL; Schema: public; Owner: postgres
--

GRANT SELECT,USAGE ON SEQUENCE public.images_id_seq TO tashvik;


--
-- Name: TABLE orders; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON TABLE public.orders TO tashvik;


--
-- Name: SEQUENCE order_id_seq; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON SEQUENCE public.order_id_seq TO tashvik;


--
-- Name: TABLE order_lines; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON TABLE public.order_lines TO tashvik;


--
-- Name: SEQUENCE order_line_sequence; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON SEQUENCE public.order_line_sequence TO tashvik;


--
-- Name: TABLE product_grade; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON TABLE public.product_grade TO tashvik;


--
-- Name: SEQUENCE product_grade_seq; Type: ACL; Schema: public; Owner: postgres
--

GRANT SELECT,USAGE ON SEQUENCE public.product_grade_seq TO tashvik;


--
-- Name: TABLE products; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON TABLE public.products TO tashvik;


--
-- Name: SEQUENCE products_id_seq; Type: ACL; Schema: public; Owner: postgres
--

GRANT SELECT,USAGE ON SEQUENCE public.products_id_seq TO tashvik;


--
-- Name: SEQUENCE user_id_seq; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON SEQUENCE public.user_id_seq TO tashvik;


--
-- Name: TABLE users; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON TABLE public.users TO tashvik;


--
-- PostgreSQL database dump complete
--


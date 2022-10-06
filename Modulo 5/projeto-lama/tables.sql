CREATE TABLE
    IF NOT EXISTS lama_bands (
        id VARCHAR(255) PRIMARY KEY,
        name VARCHAR(255) UNIQUE NOT NULL,
        music_genre VARCHAR(255) NOT NULL,
        responsible VARCHAR(255) UNIQUE NOT NULL
    );

CREATE TABLE
    IF NOT EXISTS lama_shows (
        id VARCHAR(255) PRIMARY KEY,
        week_day VARCHAR(255) NOT NULL,
        start_time INT NOT NULL,
        end_time INT NOT NULL,
        band_id VARCHAR(255) NOT NULL,
        FOREIGN KEY(band_id) REFERENCES lama_bands(id)
    );

CREATE TABLE
    IF NOT EXISTS lama_users (
        id VARCHAR(255) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
        role VARCHAR(255) NOT NULL DEFAULT "NORMAL"
    );

CREATE TABLE
    lama_tickets (
        id VARCHAR(255) PRIMARY KEY,
        ticket_name VARCHAR(255) NOT NULL UNIQUE,
        price FLOAT NOT NULL,
        total_quantity INT NOT NULL,
        sold_quantity INT NOT NULL DEFAULT 0,
        show_id VARCHAR(255) NOT NULL,
        FOREIGN KEY (show_id) REFERENCES lama_shows(id)
    );

CREATE TABLE
    lama_solds_tickets (
        id VARCHAR(255) PRIMARY KEY,
        ticket_quantity INT NOT NULL,
        name_ticket VARCHAR(255) NOT NULL,
        user_id VARCHAR(255) NOT NULL,
        FOREIGN KEY (name_ticket) REFERENCES lama_tickets(ticket_name),
        FOREIGN KEY (user_id) REFERENCES lama_users(id)
    );

CREATE TABLE
    lama_photos (
        id VARCHAR(255) PRIMARY KEY,
        photo VARCHAR(255) NOT NULL UNIQUE,
        show_id VARCHAR(255) NOT NULL,
        FOREIGN KEY (show_id) REFERENCES lama_shows(id)
    );
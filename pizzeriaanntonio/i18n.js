import { createI18n } from 'vue-i18n'

export const messages = {
    hr: {
        workHours: 'Radno vrijeme',
        paymentOptions: 'mogućnosti plaćanja',
        services: 'Usluge',
        location: 'Lokacija',
        contact: 'Kontakt',
        gallery: 'Galerija',
        welcome: 'Dobrodošli u Pizzeriju Antonnio!',
        tryNew: 'Probajte nešto novo!',
        welcome1: "Dobrodošli u novu pizzeriju u Šišanu, gdje se tradicija Napulja susreće s modernim okusima. Uživajte u napoletanskim pizzama, svježim sendvičima i domaćim desertima – sve u ugodnom ambijentu s opuštenom atmosferom.",
        days: {
            monday: 'Ponedjeljak',
            tuesday: 'Utorak',
            wednesday: 'Srijeda',
            thursday: 'Četvrtak',
            friday: 'Petak',
            saturday: 'Subota',
            sunday: 'Nedjelja'
        },
        pizza: {
            margarita_pizza: {
                name: 'Margarita',
                desc: 'Umak od rajčice San marzano, mozzarella, bosiljak, grana padano, maslinovo ulje',
            },
            marinara_pizza: {
                name: 'Marinara',
                desc: 'Umak od rajčice San marzano, češnjak, bosiljak, origano, maslinovo ulje'
            },
            gustosa_pizza: {
                name: 'Gustosa',
                desc: 'Umak od rajčice San marzano, mozzarella, sušena salama'
            },
            cottina_pizza: {
                name: 'Cottina',
                desc: 'Umak od rajčice San marzano, sir, kuhana šunka'
            },
            capricciosa_pizza: {
                name: 'Capricciosa',
                desc: 'Umak od rajčice San marzano, kuhana šunka, gauda sir, gljive, crne masline'
            },
            vegetariana_pizza: {
                name: 'Vegetariana',
                desc: 'Umak od rajčice San marzano, mozzarella, gljive, tikvice, dimljena paprika, krema od malanzana'
            },
            dalmatina_pizza: {
                name: 'Dalmatina',
                desc: 'Umak od žute rajčice, provola, dalmatinska dimljena panceta, burrata'
            },
            fantasia_pizza: {
                name: 'Fantasia',
                desc: 'Umak od rajčice San marzano, kuhana šunka, sir, gljive, dimljena paprika, dalmatinska panceta, kiselo vrhnje'
            },
            rustica_pizza: {
                name: 'Rustica',
                desc: 'Umak od rajčice San marzano, kuhana šunka, sir, gljive, luk, dalmatinska panceta, krema od češnjaka'
            },
            diavola_pizza: {
                name: 'Diavola',
                desc: 'Umak od rajčice San marzano, mozzarella, chorizo salama, Jalapeno papričice, Nduja kobasica, zelene masline'
            },
            tonnina_pizza: {
                name: 'Tonnina',
                desc: 'Umak od rajčice San marzano, sir, tuna, crveni luk, zelene masline'
            },
            dolce_vita_pizza: {
                name: 'Dolce Vita',
                desc: 'Umak od cherry rajčice, mozzarella, pršut, rukola, grana padano, maslinovo ulje'
            },
            quatro_formaggi_pizza: {
                name: 'Quatro formaggi',
                desc: 'Umak od rajčice San marzano, sir, mozzarella, gorgonzola, grana padano'
            },
            sapori_di_mare_pizza: {
                name: 'Sapori di mare',
                desc: 'Umak od rajčice San marzano, mozzarella, plodovi mora, češnjak'
            },
            bianca_divina_pizza: {
                name: 'Bianca Divina',
                desc: 'Mozzarella, gljive, buđola, dalmatinska panceta, vrhnje'
            },
            saporita_pizza: {
                name: 'Saporita',
                desc: 'Umak od rajčice San marzano, mozzarella, gorgonzola, chorizo salama, dalmatinska panceta, crveni luk'
            },
            smoked_pizza: {
                name: 'Smoked',
                desc: 'Umak od rajčice San marzano, provola, dalmatinska panceta, dimljena paprika, bresaola'
            },
            perla_di_bosco_pizza: {
                name: 'Perla di bosco',
                desc: 'Vrhnje, tartufata, mozzarella, gljive, ulje od bijelog tartufa, tartufi'
            },
            siciliana_pizza: {
                name: 'Siciliana',
                desc: 'Mozzarella, mortadela, pesto od pistacije, burrata'
            }
        },
        sandwich: {
            sandwich_italiano: {
                name: 'Sendvič Italiano',
                desc: 'Burrata, mortadela, pistacije'
            },
            sandwich_prosciutto: {
                name: 'Prosciutto',
                desc: 'Prosciutto crudo, mortadela, pesto genovese, rukola'
            },
            lasagne: {
                name: 'Lasagne alla bolognese',
            },
            menu_daily: {
                name: 'Meni dana'
            }
        },
        closed: 'Zatvoreno',
        our: 'Naše',
        openingTimesTitle: 'radno vrijeme',
        other: 'Ostalo',
        available: 'Dostupne',
        cash: 'Gotovina',
        card: 'Kartica',
        pets: "Kućni ljubimci",
        wifi: "Wi-Fi",
        accessibility: "Pristupačnost",
        airConditioning: "Klima",
        takeaway: "Hrana za ponijeti",
        seating: "Sjedenje vani",
        reservations: "Rezervacije",
        title_part1: "Sve",
        title_part2: "na jednom mjestu",
        contact_find_us: "Pronađite nas",
        contact_send_email: "Pošaljite nam poruku e-pošte",
        contact_call_us: "Nazovite nas",
        contact_send_message: "Pošaljite nam poruku",
        form: {
            name: "Vaše ime",
            email: "Vaša adresa e-pošte",
            phone: "Vaš telefon",
            subject: "Predmet",
            message: "Vaša poruka",
            send: "Pošalji"
        }
    },
    en: {
        workHours: 'Work Hours',
        paymentOptions: 'payment options',
        services: 'Services',
        location: 'Location',
        contact: 'Contact',
        welcome: 'Welcome to Pizzeria Antonnio!',
        tryNew: 'Try something new!',
        welcome1:
            "Welcome to the new pizzeria in Šišan, where Neapolitan tradition meets modern flavors. Enjoy authentic pizzas, fresh sandwiches, and homemade desserts – all in a cozy, relaxed atmosphere.",
        gallery: 'Gallery',
        days: {
            monday: 'Monday',
            tuesday: 'Tuesday',
            wednesday: 'Wednesday',
            thursday: 'Thursday',
            friday: 'Friday',
            saturday: 'Saturday',
            sunday: 'Sunday'
        },
        pizza: {
            margarita_pizza: {
                name: "Margherita",
                desc: "San Marzano tomato sauce, mozzarella, basil, Grana Padano, olive oil",
            },
            marinara_pizza: {
                name: "Marinara",
                desc: "San Marzano tomato sauce, garlic, basil, oregano, olive oil"
            },
            gustossa_pizza: {
                name: "Gustosa",
                desc: "San Marzano tomato sauce, mozzarella, dry salami"
            },
            cottina_pizza: {
                name: "Cottina",
                desc: "San Marzano tomato sauce, cheese, cooked ham"
            },
            capricciosa_pizza: {
                name: "Capricciosa",
                desc: "San Marzano tomato sauce, cooked ham, gouda cheese, mushrooms, black olives"
            },
            vegetariana_pizza: {
                name: "Vegetariana",
                desc: "San Marzano tomato sauce, mozzarella, mushrooms, zucchini, smoked pepper, eggplant cream"
            },
            dalmatina_pizza: {
                name: "Dalmatina",
                desc: "Yellow tomato sauce, provola, Dalmatian smoked bacon, burrata"
            },
            fantasia_pizza: {
                name: "Fantasia",
                desc: "San Marzano tomato sauce, cooked ham, cheese, mushrooms, smoked pepper, pancetta, sour cream"
            },
            rustica_pizza: {
                name: "Rustica",
                desc: "San Marzano tomato sauce, cooked ham, cheese, mushrooms, onion, pancetta, garlic cream"
            },
            diavola_pizza: {
                name: "Diavola",
                desc: "San Marzano tomato sauce, mozzarella, chorizo, jalapeños, 'Nduja sausage, green olives"
            },
            tonnina_pizza: {
                name: "Tonnina",
                desc: "San Marzano tomato sauce, cheese, tuna, red onion, green olives"
            },
            dolce_vita_pizza: {
                name: "Dolce Vita",
                desc: "Cherry tomato sauce, mozzarella, prosciutto, arugula, Grana Padano, olive oil"
            },
            quatro_formaggi_pizza: {
                name: "Quattro Formaggi",
                desc: "San Marzano tomato sauce, cheese, mozzarella, gorgonzola, Grana Padano"
            },
            sapori_di_mare_pizza: {
                name: "Sapori di Mare",
                desc: "San Marzano tomato sauce, mozzarella, seafood, garlic"
            },
            bianca_divina_pizza: {
                name: "Bianca Divina",
                desc: "Mozzarella, mushrooms, buđola, pancetta, cream"
            },
            saporita_pizza: {
                name: "Saporita",
                desc: "San Marzano tomato sauce, mozzarella, gorgonzola, chorizo, pancetta, red onion"
            },
            smoked_pizza: {
                name: "Smoked",
                desc: "San Marzano tomato sauce, provola, pancetta, smoked pepper, bresaola"
            },
            perla_di_bosco_pizza: {
                name: "Perla di Bosco",
                desc: "Cream, truffle sauce, mozzarella, mushrooms, white truffle oil, truffles"
            },
            siciliana_pizza: {
                name: "Siciliana",
                desc: "Mozzarella, mortadella, pistachio pesto, burrata"
            }
        },
        sandwich: {
            sandwich_italiano: {
                name: "Italiano Sandwich",
                desc: "Burrata, mortadella, pistachios"
            },
            sandwich_prosciutto: {
                name: "Prosciutto",
                desc: "Prosciutto crudo, mortadella, genovese pesto, arugula"
            },
            lasagne: {
                name: "Lasagna alla Bolognese",
            },
            menu_daily: {
                name: "Daily Menu"
            }
        },
        closed: 'Closed',
        our: 'Our',
        openingTimesTitle: 'work time',
        other: 'Other',
        available: 'Available',
        cash: 'Cash',
        card: 'Card',
        pets: "Pets",
        wifi: "Wi-Fi",
        accessibility: "Accessibility",
        airConditioning: "Air Conditioning",
        takeaway: "Takeaway",
        seating: "Outdoor Seating",
        reservations: "Reservations",
        title_part1: "Everything",
        title_part2: "in one place",
        contact_find_us: "Find us",
        contact_send_email: "Send us an email",
        contact_call_us: "Call us",
        contact_send_message: "Send us a message",
        form: {
            name: "Your name",
            email: "Your email address",
            phone: "Your phone number",
            subject: "Subject",
            message: "Your message",
            send: "Send"
        }
    },
    de: {
        workHours: 'Öffnungszeiten',
        paymentOptions: 'zahlungsmöglichkeiten',
        services: 'Dienstleistungen',
        location: 'Standort',
        contact: 'Kontakt',
        welcome: 'Willkommen in der Pizzeria Antonnio!',
        tryNew: 'Probieren Sie etwas Neues!',
        welcome1: "Willkommen in der neuen Pizzeria in Šišan, wo neapolitanische Tradition auf moderne Aromen trifft. Genießen Sie authentische Pizzen, frische Sandwiches und hausgemachte Desserts – alles in entspannter, gemütlicher Atmosphäre.",
        gallery: 'Galerie',
        days: {
            monday: 'Montag',
            tuesday: 'Dienstag',
            wednesday: 'Mittwoch',
            thursday: 'Donnerstag',
            friday: 'Freitag',
            saturday: 'Samstag',
            sunday: 'Sonntag'
        },
        pizza: {
            margarita_pizza: {
                name: 'Margherita',
                desc: 'San-Marzano-Tomatensauce, Mozzarella, Basilikum, Grana Padano, Olivenöl',
            },
            marinara_pizza: {
                name: 'Marinara',
                desc: 'San-Marzano-Tomatensauce, Knoblauch, Basilikum, Oregano, Olivenöl',
            },
            gustossa_pizza: {
                name: 'Gustosa',
                desc: 'San-Marzano-Tomatensauce, Mozzarella, luftgetrocknete Salami',
            },
            cottina_pizza: {
                name: 'Cottina',
                desc: 'San-Marzano-Tomatensauce, Käse, Kochschinken',
            },
            capricciosa_pizza: {
                name: 'Capricciosa',
                desc: 'San-Marzano-Tomatensauce, Kochschinken, Gouda, Champignons, schwarze Oliven',
            },
            vegetariana_pizza: {
                name: 'Vegetariana',
                desc: 'San-Marzano-Tomatensauce, Mozzarella, Champignons, Zucchini, geräucherter Paprika, Auberginencreme',
            },
            dalmatina_pizza: {
                name: 'Dalmatina',
                desc: 'Gelbe Tomatensauce, Provola, dalmatinischer Speck, Burrata',
            },
            fantasia_pizza: {
                name: 'Fantasia',
                desc: 'San-Marzano-Tomatensauce, Kochschinken, Käse, Champignons, geräucherter Paprika, Speck, Sauerrahm',
            },
            rustica_pizza: {
                name: 'Rustica',
                desc: 'San-Marzano-Tomatensauce, Kochschinken, Käse, Champignons, Zwiebeln, Speck, Knoblauchcreme',
            },
            diavola_pizza: {
                name: 'Diavola',
                desc: 'San-Marzano-Tomatensauce, Mozzarella, Chorizo, Jalapeños, Nduja-Wurst, grüne Oliven',
            },
            tonnina_pizza: {
                name: 'Tonnina',
                desc: 'San-Marzano-Tomatensauce, Käse, Thunfisch, rote Zwiebeln, grüne Oliven',
            },
            dolce_vita_pizza: {
                name: 'Dolce Vita',
                desc: 'Kirschtomatensauce, Mozzarella, Prosciutto, Rucola, Grana Padano, Olivenöl',
            },
            quatro_formaggi_pizza: {
                name: 'Quattro Formaggi',
                desc: 'San-Marzano-Tomatensauce, Käse, Mozzarella, Gorgonzola, Grana Padano',
            },
            sapori_di_mare_pizza: {
                name: 'Sapori di Mare',
                desc: 'San-Marzano-Tomatensauce, Mozzarella, Meeresfrüchte, Knoblauch',
            },
            bianca_divina_pizza: {
                name: 'Bianca Divina',
                desc: 'Mozzarella, Champignons, geräuchertes Fleisch, Speck, Sahne',
            },
            saporita_pizza: {
                name: 'Saporita',
                desc: 'San-Marzano-Tomatensauce, Mozzarella, Gorgonzola, Chorizo, Speck, rote Zwiebeln',
            },
            smoked_pizza: {
                name: 'Smoked',
                desc: 'San-Marzano-Tomatensauce, Provola, Speck, geräucherter Paprika, Bresaola',
            },
            perla_di_bosco_pizza: {
                name: 'Perla di Bosco',
                desc: 'Sahne, Trüffelcreme, Mozzarella, Champignons, weißes Trüffelöl, Trüffel',
            },
            siciliana_pizza: {
                name: 'Siciliana',
                desc: 'Mozzarella, Mortadella, Pistazienpesto, Burrata',
            }
        },
        sandwich: {
            sandwich_italiano: {
                name: 'Sandwich Italiano',
                desc: 'Burrata, Mortadella, Pistazien',
            },
            sandwich_prosciutto: {
                name: 'Prosciutto',
                desc: 'Prosciutto crudo, Mortadella, Pesto Genovese, Rucola',
            },
            lasagne: {
                name: 'Lasagne alla Bolognese',
            },
            menu_daily: {
                name: 'Tagesmenü',
            }
        },
        closed: 'Geschlossen',
        our: 'Unsere',
        openingTimesTitle: 'öffnungszeiten',
        other: 'Sonstiges',
        available: 'Verfügbare',
        cash: 'Bargeld',
        card: 'Karte',
        pets: "Haustiere",
        wifi: "Wi-fi",
        accessibility: "Barrierefreiheit",
        airConditioning: "Klimaanlage",
        takeaway: "Zum Mitnehmen",
        seating: "Sitzplätze im Freien",
        reservations: "Reservierungen",
        title_part1: "Alles",
        title_part2: "an einem Ort",
        contact_find_us: "Finden Sie uns",
        contact_send_email: "Senden Sie uns eine E-Mail",
        contact_call_us: "Rufen Sie uns an",
        contact_send_message: "Senden Sie uns eine Nachricht",
        form: {
            name: "Ihr Name",
            email: "Ihre E-Mail-Adresse",
            phone: "Ihre Telefonnummer",
            subject: "Betreff",
            message: "Ihre Nachricht",
            send: "Senden"
        }
    },
    it: {
        workHours: 'Orari di apertura',
        paymentOptions: 'opzioni di pagamento',
        services: 'Servizi',
        location: 'Posizione',
        contact: 'Contatto',
        welcome: 'Benvenuti alla Pizzeria Antonnio!',
        tryNew: 'Prova qualcosa di nuovo!',
        welcome1: "Benvenuti nella nuova pizzeria a Šišan, dove la tradizione napoletana incontra i sapori moderni. Gustate pizze autentiche, panini freschi e dolci fatti in casa – tutto in un'atmosfera accogliente e rilassata.",
        gallery: 'Galleria',
        days: {
            monday: 'Lunedì',
            tuesday: 'Martedì',
            wednesday: 'Mercoledì',
            thursday: 'Giovedì',
            friday: 'Venerdì',
            saturday: 'Sabato',
            sunday: 'Domenica'
        },
        pizza: {
            margarita_pizza: {
                name: 'Margherita',
                desc: 'Salsa di pomodoro San Marzano, mozzarella, basilico, Grana Padano, olio d\'oliva',
            },
            marinara_pizza: {
                name: 'Marinara',
                desc: 'Salsa di pomodoro San Marzano, aglio, basilico, origano, olio d\'oliva',
            },
            gustossa_pizza: {
                name: 'Gustosa',
                desc: 'Salsa di pomodoro San Marzano, mozzarella, salame stagionato',
            },
            cottina_pizza: {
                name: 'Cottina',
                desc: 'Salsa di pomodoro San Marzano, formaggio, prosciutto cotto',
            },
            capricciosa_pizza: {
                name: 'Capricciosa',
                desc: 'Salsa di pomodoro San Marzano, prosciutto cotto, formaggio gouda, funghi, olive nere',
            },
            vegetariana_pizza: {
                name: 'Vegetariana',
                desc: 'Salsa di pomodoro San Marzano, mozzarella, funghi, zucchine, peperone affumicato, crema di melanzane',
            },
            dalmatina_pizza: {
                name: 'Dalmatina',
                desc: 'Salsa di pomodoro giallo, provola, pancetta affumicata dalmata, burrata',
            },
            fantasia_pizza: {
                name: 'Fantasia',
                desc: 'Salsa di pomodoro San Marzano, prosciutto cotto, formaggio, funghi, peperone affumicato, pancetta, panna acida',
            },
            rustica_pizza: {
                name: 'Rustica',
                desc: 'Salsa di pomodoro San Marzano, prosciutto cotto, formaggio, funghi, cipolla, pancetta, crema d\'aglio',
            },
            diavola_pizza: {
                name: 'Diavola',
                desc: 'Salsa di pomodoro San Marzano, mozzarella, salame chorizo, jalapeño, salsiccia nduja, olive verdi',
            },
            tonnina_pizza: {
                name: 'Tonnina',
                desc: 'Salsa di pomodoro San Marzano, formaggio, tonno, cipolla rossa, olive verdi',
            },
            dolce_vita_pizza: {
                name: 'Dolce Vita',
                desc: 'Salsa di pomodorini, mozzarella, prosciutto, rucola, Grana Padano, olio d\'oliva',
            },
            quatro_formaggi_pizza: {
                name: 'Quattro Formaggi',
                desc: 'Salsa di pomodoro San Marzano, formaggio, mozzarella, gorgonzola, Grana Padano',
            },
            sapori_di_mare_pizza: {
                name: 'Sapori di Mare',
                desc: 'Salsa di pomodoro San Marzano, mozzarella, frutti di mare, aglio',
            },
            bianca_divina_pizza: {
                name: 'Bianca Divina',
                desc: 'Mozzarella, funghi, coppa, pancetta, panna',
            },
            saporita_pizza: {
                name: 'Saporita',
                desc: 'Salsa di pomodoro San Marzano, mozzarella, gorgonzola, chorizo, pancetta, cipolla rossa',
            },
            smoked_pizza: {
                name: 'Smoked',
                desc: 'Salsa di pomodoro San Marzano, provola, pancetta, peperone affumicato, bresaola',
            },
            perla_di_bosco_pizza: {
                name: 'Perla di Bosco',
                desc: 'Panna, crema di tartufo, mozzarella, funghi, olio al tartufo bianco, tartufo',
            },
            siciliana_pizza: {
                name: 'Siciliana',
                desc: 'Mozzarella, mortadella, pesto di pistacchio, burrata',
            }
        },
        sandwich: {
            sandwich_italiano: {
                name: 'Panino Italiano',
                desc: 'Burrata, mortadella, pistacchi',
            },
            sandwich_prosciutto: {
                name: 'Prosciutto',
                desc: 'Prosciutto crudo, mortadella, pesto genovese, rucola',
            },
            lasagne: {
                name: 'Lasagne alla bolognese',
            },
            menu_daily: {
                name: 'Menù del giorno',
            }
        },
        closed: 'Chiuso',
        our: 'I nostri',
        openingTimesTitle: 'orari di apertura',
        other: 'Altro',
        available: 'Disponibili',
        cash: 'Contanti',
        card: 'Carta',
        pets: "Animali domestici",
        wifi: "Wi-Fi",
        accessibility: "Accessibilità",
        airConditioning: "Aria condizionata",
        takeaway: "Da asporto",
        seating: "Posti a sedere all'aperto",
        reservations: "Prenotazioni",
        title_part1: "Tutto",
        title_part2: "in un unico posto",
        contact_find_us: "Trovaci",
        contact_send_email: "Inviaci un'e-mail",
        contact_call_us: "Chiamaci",
        contact_send_message: "Inviaci un messaggio",
        form: {
            name: "Il tuo nome",
            email: "Il tuo indirizzo e-mail",
            phone: "Il tuo numero di telefono",
            subject: "Oggetto",
            message: "Il tuo messaggio",
            send: "Invia"
        }
    },
}

const i18n = createI18n({
    locale: 'hr', // defaultni jezik
    messages
})

export default i18n

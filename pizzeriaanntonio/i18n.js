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
        days: {
            monday: 'Ponedjeljak',
            tuesday: 'Utorak',
            wednesday: 'Srijeda',
            thursday: 'Četvrtak',
            friday: 'Petak',
            saturday: 'Subota',
            sunday: 'Nedjelja'
        },
        closed: 'Zatvoreno',
        our: 'Naše',
        openingTimesTitle: 'radno vrijeme',
        available: 'Dostupne',
        cash: 'Gotovina',
        card: 'Kartica',

    },
    en: {
        workHours: 'Work Hours',
        paymentOptions: 'payment options',
        services: 'Services',
        location: 'Location',
        contact: 'Contact',
        welcome: 'Welcome to Pizzeria Antonnio!',
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
        closed: 'Closed',
        our: 'Our',
        openingTimesTitle: 'work time',
        available: 'Available',
        cash: 'Cash',
        card: 'Card',

    },
    de: {
        workHours: 'Öffnungszeiten',
        paymentOptions: 'zahlungsmöglichkeiten',
        services: 'Dienstleistungen',
        location: 'Standort',
        contact: 'Kontakt',
        welcome: 'Willkommen in der Pizzeria Antonnio!',
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
        closed: 'Geschlossen',
        our: 'Unsere',
        openingTimesTitle: 'öffnungszeiten',
        available: 'Verfügbare',
        cash: 'Bargeld',
        card: 'Karte',
    },
    it: {
        workHours: 'Orari di apertura',
        paymentOptions: 'opzioni di pagamento',
        services: 'Servizi',
        location: 'Posizione',
        contact: 'Contatto',
        welcome: 'Benvenuti alla Pizzeria Antonnio!',
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
        closed: 'Chiuso',
        our: 'I nostri',
        openingTimesTitle: 'orari di apertura',
        available: 'Disponibili',
        cash: 'Contanti',
        card: 'Carta',
    },
}

const i18n = createI18n({
    locale: 'hr', // defaultni jezik
    messages
})

export default i18n

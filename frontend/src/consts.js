export const AUTHENTICATED_NAVIGATION = {
    RESERVATIONS: 'Rezerwacje',
    CARS: 'Dostępne Samochody',
};

export const PUBLIC_NAVIGATION = {
    LOGIN: 'Zaloguj się',
    REGISTER: 'Utwórz konto',
};


export const PATHS = {
    DEFAULT: '/',
    LOGIN: '/login',
    REGISTER: '/register',
    RESERVATIONS: '/reservations',
    CARS: '/cars',
    ADD_CAR: '/add-car'
};

export const API_URL = 'http://localhost:2400';

export const CARS_API_URL = `${API_URL}/cars`;

export const RESERVATIONS_API_URL = `${API_URL}/reservations`;

export const DEFAULT_REQUEST_HEADERS = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
};

export const ERROR_MESSAGES = {
    BRAND_REQUIRED: 'Marka samochodu jest wymagana!',
    MODEL_REQUIRED: 'Model samochodu jest wymagany!',
    PRICE_REQUIRED: 'Cena samochodu jest wymagana!',
    NO_USER: 'Konto użytkownika nie istnieje!',
    WRONG_PASSWORD: 'Błędne Hasło!',
    EMAIL_REQUIRED: 'Email użytkownika jest wymagany!',
    NAME_REQUIRED: 'Imię użytkownika jest wymagane!',
    SURNAME_REQUIRED: 'Nazwisko użytkownika jest wymagane!',
    PASSWORD_REQUIRED: 'Hasło użytkownika jest wymagane!',
    WRONG_EMAIL_FORMAT: 'Niepoprawny format emaila!',
    BAD_REQUEST: 'Niepoprawne zapytanie!',
    AUTHENTICATION_FAILED: 'Weryfikacja użytkownika nie powiodła się!',
    ACCESS_DENIED: 'Brak dostępu!',
};

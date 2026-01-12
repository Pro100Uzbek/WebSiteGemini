const applianceBrands = [
    { id: 1, name: "Beko", logo: "Logos/logo-beko.png", color: "#e2001a" },
    { id: 2, name: "Gorenje", logo: "Logos/logo-gorenje.png", color: "#0056a3" },
    { id: 3, name: "Samsung", logo: "Logos/logo-samsung.png", color: "#1428a0" },const applianceBrands = [
    { id: 1, name: "Beko", logo: "Logos/logo-beko.png", color: "#e2001a" },
    { id: 2, name: "Gorenje", logo: "Logos/logo-gorenje.png", color: "#0056a3" },
    { id: 3, name: "Samsung", logo: "Logos/logo-samsung.png", color: "#1428a0" },
    { id: 4, name: "LG", logo: "Logos/logo-lg.png", color: "#a50034" },
    { id: 5, name: "Bosch", logo: "Logos/logo-bosch.png", color: "#0056a3" },
    { id: 6, name: "Whirlpool", logo: "Logos/logo-whirlpool.png", color: "#ffb612" },
    { id: 7, name: "Indesit", logo: "Logos/logo-indesit.png", color: "#0056a3" },
    { id: 8, name: "Candy", logo: "Logos/logo-candy.png", color: "#0056a3" },
    { id: 9, name: "Miele", logo: "Logos/logo-miele.png", color: "#5d1d1d" },
    { id: 10, name: "Ariston", logo: "Logos/logo-ariston.png", color: "#5d1d1d" },
    { id: 11, name: "Liebherr", logo: "Logos/logo-liebherr.png", color: "#5d1d1d" },
    { id: 12, name: "Siemens", logo: "Logos/logo-siemens.png", color: "#5d1d1d" },
    { id: 13, name: "AEG", logo: "Logos/logo-aeg.png", color: "#5d1d1d" },
    { id: 14, name: "Electrolux", logo: "Logos/logo-electrolux.png", color: "#5d1d1d" },
    { id: 15, name: "Gaggenau", logo: "Logos/logo-gaggenau.png", color: "#5d1d1d" },
    { id: 16, name: "Midea", logo: "Logos/logo-midea.png", color: "#5d1d1d" },
    { id: 17, name: "Haier", logo: "Logos/logo-haier.png", color: "#5d1d1d" },
    { id: 18, name: "Hisense", logo: "Logos/logo-hisense.png", color: "#5d1d1d" },
    { id: 19, name: "Neff", logo: "Logos/logo-neff.png", color: "#5d1d1d" },
    { id: 20, name: "Vivax", logo: "Logos/logo-vivax.png", color: "#5d1d1d" },
    { id: 21, name: "Vox", logo: "Logos/logo-vox.png", color: "#5d1d1d" }
];

const translations = {
    ru: {
        headerTitle: "DOBAR SERVIS d.o.o", title: "Запись на ремонт",
        name: "Имя", phone: "Телефон", city: "Выберите город",
        type: "Тип техники", brand: "Выберите бренд",
        selectSub: "Выберите подраздел",
        brandModalTitle: "Выберите бренд", brandManual: "Или введите вручную:",
        desc: "Описание проблемы, Код ошибки (если есть)", photoBtn: "Фото шильдика или поломки", noFile: "Файл не выбран",
        submit: "Вызвать мастера", success: "Заявка отправлена!",
        cities: ["Podgorica", "Budva", "Bar", "Tivat", "Kotor", "Herceg Novi"],
        types: [
            { value: "Fridge", text: "Холодильники / Морозильники" },
            { value: "Washing", text: "Стирка / Мойка" },
            { value: "AC", text: "Кондиционеры / Сплит системы" }
        ],
        successTitle: "Заявка отправлена!",
        orderLabel: "Номер заявки",
        statusLabel: "Статус",
        btnOk: "Понятно",
        phrases: [
            "Спасибо за обращение! Ваша заявка № {orderNum} принята и передана специалисту. Мы свяжемся с вами в ближайшее время.",
            "Заявка № {orderNum} успешно зарегистрирована. Благодарим за доверие — уже начали обработку.",
            "Ваш запрос № {orderNum} принят в работу. Наш мастер свяжется с вами для согласования деталей.",
            "Спасибо за выбор нашего сервиса. Заявка № {orderNum} зафиксирована и находится в обработке.",
            "Мы получили вашу заявку № {orderNum}. В ближайшее время с вами свяжется сервисный инженер.",
            "Заявка № {orderNum} принята. Мы ценим ваше время и готовим оптимальное решение.",
            "Благодарим за обращение. Ваша заявка № {orderNum} уже передана мастеру.",
            "Ваше обращение № {orderNum} зарегистрировано. Ожидайте обратную связь в ближайшее время.",
            "Спасибо за доверие! Заявка № {orderNum} в работе, мы скоро свяжемся с вами.",
            "Заявка № {orderNum} успешно принята. Наш специалист уже готовится связаться с вами."
        ]
    },
    cnr: {
        headerTitle: "DOBAR SERVIS d.o.o", title: "Prijava popravke", //Naručite popravku
        name: "Ime", phone: "Telefon", city: "Izaberite grad",
        type: "Tip uređaja", brand: "Izaberite marku",
        selectSub: "Izaberite podkategoriju",
        brandModalTitle: "Izaberite marku", brandManual: "Ili unesite ručno:",
        desc: "Opis problema, kod greške (ako postoji)", photoBtn: "Fotografija natpisne pločice ili oštećenja", noFile: "Datoteka nije izabrana",
        submit: "Pozovi majstora", success: "Prijava je poslata!",
        cities: ["Podgorica", "Budva", "Bar", "Tivat", "Kotor", "Herceg Novi"],
        types: [
            { value: "Fridge", text: "Frižideri" },
            { value: "Washing", text: "Veš mašine" },
            { value: "AC", text: "Klima uređaji" }
        ],
        successTitle: "Prijava je poslata!",
        orderLabel: "Broj prijave",
        statusLabel: "Status",
        btnOk: "U redu",
        phrases: [
            "Hvala na obraćanju! Vaša prijava br. {orderNum} je primljena i proslijeđena stručnjaku. Kontaktiraćemo vas uskoro.",
            "Prijava br. {orderNum} je uspješno registrovana. Hvala na povjerenju — obrada je već počela.",
            "Vaš zahtjev br. {orderNum} je prihvaćen. Naš majstor će vas kontaktirati radi dogovora o detaljima.",
            "Hvala što ste odabrali naš servis. Prijava br. {orderNum} je evidentirana i u fazi je obrade.",
            "Primili smo vašu prijavu br. {orderNum}. Servisni inženjer će vas kontaktirati u najkraćem mogućem roku.",
            "Prijava br. {orderNum} je prihvaćena. Cijenimo vaše vrijeme i pripremamo optimalno rješenje.",
            "Hvala na obraćanju. Vaša prijava br. {orderNum} je već proslijeđena majstoru.",
            "Vaša prijava br. {orderNum} je registrovana. Očekujte povratnu informaciju uskoro.",
            "Hvala na povjerenju! Prijava br. {orderNum} je u radu, uskoro ćemo vas kontaktirati.",
            "Prijava br. {orderNum} je uspješno prihvaćena. Naš stručnjak se već priprema da vas kontaktira."
        ]
    },
    en: {
        headerTitle: "DOBAR SERVIS d.o.o", title: "Repair Booking", //Order Repair
        name: "Name", phone: "Phone", city: "Select city",
        type: "Appliance type", brand: "Select brand",
        selectSub: "Select subcategory",
        brandModalTitle: "Select brand", brandManual: "Or type manually:",
        desc: "Description, error code (if any)", photoBtn: "Photo of the nameplate or damage", noFile: "No file chosen",
        submit: "Call a master", success: "Request sent!",
        cities: ["Podgorica", "Budva", "Bar", "Tivat", "Kotor", "Herceg Novi"],
        types: [
            { value: "Fridge", text: "Fridges" },
            { value: "Washing", text: "Washers" },
            { value: "AC", text: "Air Conditioning" }
        ],
        successTitle: "Request sent!",
        orderLabel: "Order ID",
        statusLabel: "Status",
        btnOk: "Got it",
        phrases: [
            "Thank you for contacting us! Your request No. {orderNum} has been accepted and assigned to a specialist. We will contact you shortly.",
            "Request No. {orderNum} successfully registered. Thank you for your trust — processing has already begun.",
            "Your request No. {orderNum} is accepted. Our technician will contact you to coordinate the details.",
            "Thank you for choosing our service. Request No. {orderNum} is recorded and is being processed.",
            "We have received your request No. {orderNum}. A service engineer will contact you shortly.",
            "Request No. {orderNum} is accepted. We value your time and are preparing the best solution.",
            "Thank you for your request. Your application No. {orderNum} has already been handed over to the master.",
            "Your request No. {orderNum} is registered. Expect feedback shortly.",
            "Thank you for your trust! Request No. {orderNum} is in progress, we will contact you soon.",
            "Request No. {orderNum} successfully accepted. Our specialist is already preparing to contact you."
        ]
    }
};

const categoriesData = {
    Refrigeration: {
        icon: "❄️",
        ru: "Холодильное оборудование",
        cnr: "Rashladna oprema",
        en: "Refrigeration",
        items: {
            ru: ["Бытовые", "Коммерческие", "Морозильники", "Сервис и фреон"],
            cnr: ["Kućni", "Komercijalni", "Zamrzivači", "Servis i freon"],
            en: ["Domestic", "Commercial", "Freezers", "Service & refrigerant"]
        }
    },
    Laundry: { 
        icon: "🧺",
        ru: "Стирка и мойка",
        cnr: "Pranje i pranje posuđa",
        en: "Laundry & Wash",
        items: {
            ru: ["Стиральные машины", "Сушилки", "Посудомойки", "Проф. системы"],

            cnr: ["Mašine za veš", "Mašine za sušenje", "Mašine za suđe", "Pro sistemi"],
            en: ["Washers", "Dryers", "Dishwashers", "Pro systems"]
        }
    },
    Climate: {
        icon: "🌬️",
        ru: "Климат и воздух",
        cnr: "Klima i vazduh",
        en: "Climate & Air",
        items: {
            ru: ["Кондиционеры", "Сплит-системы", "HVAC", "Чистка"], 
            cnr: ["Klima uređaji", "Split sistemi", "HVAC", "Čišćenje"],
            en: ["Conditioners", "Splits", "HVAC", "Cleaning"]
        }
    }
};

const modalTranslations = {
    ru: { modalTitle: "Проверьте данные" },
    cnr: { modalTitle: "Proverite podatke" },
    en: { modalTitle: "Check details" }
};

let currentLang = localStorage.getItem('userLanguage') || 'ru';
const form = document.getElementById('orderForm');

// Функция для безопасного получения параметров из URL
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

window.onload = function() {

        // 1. Сначала инициализируем бренды и язык
    if (typeof renderBrandGrid === "function") renderBrandGrid();

    // Инициализация Telegram Mini App
    if (window.Telegram && window.Telegram.WebApp) {
        const tg = window.Telegram.WebApp;
        tg.ready(); // Сообщаем Telegram, что приложение загрузилось
        tg.expand(); // Разворачиваем приложение на весь экран
    }

    if (window.Telegram.WebApp.platform !== 'unknown') {
    document.body.classList.add('is-tg-app');
    }
    
    // 2. Берем параметры из URL
    const urlParams = new URLSearchParams(window.location.search);
    const utmSource = urlParams.get('utm_source');
    const extUserId = urlParams.get('user_id');
    
    // 3. Элементы формы
    const sourceInput = document.getElementById('source');
    const userInput = document.getElementById('user_id');
    
    // 4. Логика: приоритет Telegram, затем UTM
    if (window.Telegram?.WebApp?.initDataUnsafe?.user) {
        const tg = window.Telegram.WebApp;
        sourceInput.value = tg.initDataUnsafe.start_param || 'telegram_miniapp';
        userInput.value = tg.initDataUnsafe.user.username || tg.initDataUnsafe.user.id;
    } else {
        // Если это Viber, FB или обычный браузер
        if (utmSource) sourceInput.value = utmSource;
        if (extUserId) userInput.value = extUserId;
    }
    
    // Проверка языка
    if (typeof changeLang === "function") changeLang(currentLang);
};
    
// Функция обновления подменю
function updateSubMenu() {
    const categorySelect = document.getElementById('type-category');
    const subSelect = document.getElementById('type-subcategory');
    const selectedCat = categorySelect.value;
    const t = translations[currentLang];
    
    if (selectedCat && categoriesData[selectedCat]) {
        const items = categoriesData[selectedCat].items[currentLang];
        subSelect.innerHTML = `<option value="" disabled selected>${t.selectSub}</option>` +
            items.map(item => `<option value="${item}">${item}</option>`).join('');
        subSelect.style.display = 'block';
    } else {
        subSelect.style.display = 'none';
    }
}

function changeLang(lang) {
    currentLang = lang;
    localStorage.setItem('userLanguage', lang);
    const t = translations[lang];

    document.getElementById('header-order-title').innerText = t.headerTitle;
    document.getElementById('title').innerText = t.title;
    document.getElementById('name').placeholder = t.name;
    document.getElementById('phone').placeholder = t.phone;
    document.getElementById('brand').placeholder = t.brand;
    document.getElementById('description').placeholder = t.desc;
    document.getElementById('lbl-photo-btn').innerText = t.photoBtn;
    document.getElementById('btn-submit').innerText = t.submit;
    document.getElementById('brand-modal-title').innerText = t.brandModalTitle;
    document.getElementById('brand-manual-text').innerText = t.brandManual;

    const citySelect = document.getElementById('city');
    citySelect.innerHTML = `<option value="" disabled selected>${t.city}</option>` +
        t.cities.map(c => `<option value="${c}">${c}</option>`).join('');


    const catSelect = document.getElementById('type-category');
    catSelect.innerHTML = `<option value="" disabled selected>${t.type}</option>` +
        Object.keys(categoriesData).map(key => {
            const cat = categoriesData[key];
            return `<option value="${key}">${cat.icon} ${cat[lang]}</option>`;
        }).join('');
    document.getElementById('type-subcategory').style.display = 'none';
    
    if (!document.getElementById('photo').files.length) {
        document.getElementById('file-name-display').innerText = t.noFile;
    }

    document.querySelectorAll('.lang-switch button').forEach(btn => btn.classList.remove('active'));
    document.getElementById(`lang-${lang}`).classList.add('active');
}

function updateFileNameDisplay() {
    const fileInput = document.getElementById('photo');
    const display = document.getElementById('file-name-display');
    display.innerText = fileInput.files.length > 0 ? fileInput.files[0].name : translations[currentLang].noFile;
}

function renderBrandGrid() {
    const grid = document.getElementById('brandSelectorGrid');
    if (!grid) return;
    grid.innerHTML = '';
    
    applianceBrands.forEach(brand => {
        const card = document.createElement('div');
        card.className = 'brand-card';
        card.onclick = () => selectBrand(brand.name);
        //card.innerHTML = `<img src="${brand.logo}" alt="${brand.name}"><span style="color: ${brand.color}">${brand.name}</span>`;
        //grid.appendChild(card);
        
        // Создаем элемент изображения
        
        const img = document.createElement('img');
        img.src = brand.logo;
        img.alt = brand.name; 
        
        // Это текст, который появится, если фото не загрузится
        // ЛОГИКА: Если картинка не нашлась, заменяем её текстовым блоком
        img.onerror = function() {
            this.style.display = 'none'; // Скрываем иконку, если её нет
            const textFallback = document.createElement('div');
            textFallback.className = 'brand-fallback-text';
            textFallback.innerText = brand.name;
            card.appendChild(textFallback);
            // card.innerHTML = '';
            // Очищаем карточку от битой картинки
            card.appendChild(textFallback);
        };
        card.appendChild(img);
        grid.appendChild(card);
    });
}

function openBrandModal() { document.getElementById('brandModal').style.display = 'flex'; }
function closeBrandModal() { document.getElementById('brandModal').style.display = 'none'; }
function selectBrand(name) { document.getElementById('brand').value = name; closeBrandModal(); }
function applyCustomBrand() {
    const custom = document.getElementById('customBrand').value;
    if (custom.trim() !== "") {
        document.getElementById('brand').value = custom;
        document.getElementById('customBrand').value = "";
        closeBrandModal();
    }
}

form.addEventListener('submit', e => {
    e.preventDefault();
    const t = translations[currentLang];
    const mt = modalTranslations[currentLang];
    const formData = new FormData(form);
    
    document.getElementById('summary').innerHTML = `
        <p><b>${t.name}:</b> ${formData.get('name')}</p>
        <p><b>${t.phone}:</b> ${formData.get('phone')}</p>
        <p><b>${t.city}:</b> ${formData.get('city')}</p>
        <p><b>${t.type}:</b> ${formData.get('category')} ${formData.get('subcategory') ? ' / ' + formData.get('subcategory') : ''}</p>
        <p><b>${t.brand}:</b> ${formData.get('brand')}</p>
        <p><b>${t.desc}:</b> ${formData.get('description')}</p>
    `;
    document.getElementById('modal-title').innerText = mt.modalTitle;
    document.getElementById('confirmModal').style.display = 'flex';
});

function closeModal() { document.getElementById('confirmModal').style.display = 'none'; }

function finalSend() {
    closeModal();
    document.getElementById('loader').style.display = 'flex';
    const file = document.getElementById('photo').files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = () => sendData(reader.result.split(',')[1], file.name, file.type);
        reader.readAsDataURL(file);
    } else {
        sendData(null, null, null);
    }
}

function sendData(base64, fname, ftype) {
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
   
    // 1. Получаем текстовые названия вместо технических ключей
    const catSelect = document.getElementById('type-category');
    const subSelect = document.getElementById('type-subcategory');
    
    // Записываем понятные названия категорий
    data.category = catSelect.options[catSelect.selectedIndex].text;
    if (subSelect.style.display !== 'none') {
        data.subcategory = subSelect.options[subSelect.selectedIndex].text;
    }
    // 2. Добавляем файл
    data.base64 = base64;
    data.filename = fname;
    data.filetype = ftype;
    const scriptURL = 'https://script.google.com/macros/s/AKfycbx6YlgFWRrzj11I2wVscwiQLexfKi4U77lQw9RvM4c3o2wKOG0taVw9m_Q1V6z4c9u5/exec';

    fetch(scriptURL, { 
        method: 'POST', 
        mode: 'cors', 
        headers: {
        'Content-Type': 'text/plain;charset=utf-8', // ВАЖНО: используйте text/plain
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.json();
    })
    .then(result => {
        // Вызываем функцию показа красивого окна с номером и фразой
        showFinalStatus(result.orderNumber, "Новая: Ожидает обработки");
        
        form.reset();
        document.getElementById('type-subcategory').style.display = 'none';
        updateFileNameDisplay();
    })
    .catch(err => {
        console.error('Error:', err);
        // Запасной вариант, если сервер не ответил вовремя
        alert(translations[currentLang].success);
    })
    .finally(() => {
        document.getElementById('loader').style.display = 'none';
    });
}

// Функция показа финального статуса с номером заявки и случайной фразой
function showFinalStatus(number, status) {
    const t = translations[currentLang];
    
    // Выбираем случайную фразу
    let randomPhrase = t.phrases[Math.floor(Math.random() * t.phrases.length)];
    
    // Заменяем метку {orderNum} на реальный номер
    randomPhrase = randomPhrase.replace("{orderNum}", number);

    const details = document.getElementById('status-details');
    
    // Обновляем заголовки в модальном окне
    document.getElementById('status-title').innerText = t.successTitle;
    
    // Формируем контент
    details.innerHTML = `
        <div style="margin-bottom: 10px;">
            <span style="color: #8e8e93; font-size: 12px; text-transform: uppercase;">${t.orderLabel}:</span>
            <span style="color: #007aff; font-weight: bold; font-size: 16px; margin-left: 5px;">#${number}</span>
        </div>
        <div style="margin-bottom: 15px;">
            <span style="color: #8e8e93; font-size: 12px; text-transform: uppercase;">${t.statusLabel}:</span>
            <span style="color: #34c759; font-weight: 600; margin-left: 5px;">${status}</span>
        </div>
        <div style="padding: 12px; background: #fff; border-radius: 8px; border: 1px solid #e5e5ea; font-style: italic; color: #1c1c1e;">
            "${randomPhrase}"
        </div>`;
    
    document.getElementById('statusModal').style.display = 'flex';
}

function closeStatusModal() {
    document.getElementById('statusModal').style.display = 'none';
}
    { id: 4, name: "LG", logo: "Logos/logo-lg.png", color: "#a50034" },
    { id: 5, name: "Bosch", logo: "Logos/logo-bosch.png", color: "#0056a3" },
    { id: 6, name: "Whirlpool", logo: "Logos/logo-whirlpool.png", color: "#ffb612" },
    { id: 7, name: "Indesit", logo: "Logos/logo-indesit.png", color: "#0056a3" },
    { id: 8, name: "Candy", logo: "Logos/logo-candy.png", color: "#0056a3" },
    { id: 9, name: "Miele", logo: "Logos/logo-miele.png", color: "#5d1d1d" },
    { id: 10, name: "Ariston", logo: "Logos/logo-ariston.png", color: "#5d1d1d" },
    { id: 11, name: "Liebherr", logo: "Logos/logo-liebherr.png", color: "#5d1d1d" },
    { id: 12, name: "Siemens", logo: "Logos/logo-siemens.png", color: "#5d1d1d" },
    { id: 13, name: "AEG", logo: "Logos/logo-aeg.png", color: "#5d1d1d" },
    { id: 14, name: "Electrolux", logo: "Logos/logo-electrolux.png", color: "#5d1d1d" },
    { id: 15, name: "Gaggenau", logo: "Logos/logo-gaggenau.png", color: "#5d1d1d" },
    { id: 16, name: "Midea", logo: "Logos/logo-midea.png", color: "#5d1d1d" },
    { id: 17, name: "Haier", logo: "Logos/logo-haier.png", color: "#5d1d1d" },
    { id: 18, name: "Hisense", logo: "Logos/logo-hisense.png", color: "#5d1d1d" },
    { id: 19, name: "Neff", logo: "Logos/logo-neff.png", color: "#5d1d1d" },
    { id: 20, name: "Vivax", logo: "Logos/logo-vivax.png", color: "#5d1d1d" },
    { id: 21, name: "Vox", logo: "Logos/logo-vox.png", color: "#5d1d1d" }
];

const translations = {
    ru: {
        headerTitle: "Заказать ремонт", title: "Запись на ремонт",
        name: "Имя", phone: "Телефон", city: "Выберите город",
        type: "Тип техники", brand: "Выберите бренд",
        selectSub: "Выберите подраздел",
        brandModalTitle: "Выберите бренд", brandManual: "Или введите вручную:",
        desc: "Описание проблемы", photoBtn: "Выберите файл", noFile: "Файл не выбран",
        submit: "Вызвать мастера", success: "Заявка отправлена!",
        cities: ["Podgorica", "Budva", "Bar", "Tivat", "Kotor", "Herceg Novi"],
        types: [
            { value: "Fridge", text: "Холодильники / Морозильники" },
            { value: "Washing", text: "Стирка / Мойка" },
            { value: "AC", text: "Кондиционеры / Сплит системы" }
        ],
        successTitle: "Заявка отправлена!",
        orderLabel: "Номер заявки",
        statusLabel: "Статус",
        btnOk: "Понятно",
        phrases: [
            "Спасибо за обращение! Ваша заявка № {orderNum} принята и передана специалисту. Мы свяжемся с вами в ближайшее время.",
            "Заявка № {orderNum} успешно зарегистрирована. Благодарим за доверие — уже начали обработку.",
            "Ваш запрос № {orderNum} принят в работу. Наш мастер свяжется с вами для согласования деталей.",
            "Спасибо за выбор нашего сервиса. Заявка № {orderNum} зафиксирована и находится в обработке.",
            "Мы получили вашу заявку № {orderNum}. В ближайшее время с вами свяжется сервисный инженер.",
            "Заявка № {orderNum} принята. Мы ценим ваше время и готовим оптимальное решение.",
            "Благодарим за обращение. Ваша заявка № {orderNum} уже передана мастеру.",
            "Ваше обращение № {orderNum} зарегистрировано. Ожидайте обратную связь в ближайшее время.",
            "Спасибо за доверие! Заявка № {orderNum} в работе, мы скоро свяжемся с вами.",
            "Заявка № {orderNum} успешно принята. Наш специалист уже готовится связаться с вами."
        ]
    },
    cnr: {
        headerTitle: "Naručite popravku", title: "Prijava popravke",
        name: "Ime", phone: "Telefon", city: "Izaberite grad",
        type: "Tip uređaja", brand: "Izaberite marku",
        selectSub: "Izaberite podkategoriju",
        brandModalTitle: "Izaberite marku", brandManual: "Ili unesite ručno:",
        desc: "Opis problema", photoBtn: "Izaberi datoteku", noFile: "Datoteka nije izabrana",
        submit: "Pozovi majstora", success: "Prijava je poslata!",
        cities: ["Podgorica", "Budva", "Bar", "Tivat", "Kotor", "Herceg Novi"],
        types: [
            { value: "Fridge", text: "Frižideri" },
            { value: "Washing", text: "Veš mašine" },
            { value: "AC", text: "Klima uređaji" }
        ],
        successTitle: "Prijava je poslata!",
        orderLabel: "Broj prijave",
        statusLabel: "Status",
        btnOk: "U redu",
        phrases: [
            "Hvala na obraćanju! Vaša prijava br. {orderNum} je primljena i proslijeđena stručnjaku. Kontaktiraćemo vas uskoro.",
            "Prijava br. {orderNum} je uspješno registrovana. Hvala na povjerenju — obrada je već počela.",
            "Vaš zahtjev br. {orderNum} je prihvaćen. Naš majstor će vas kontaktirati radi dogovora o detaljima.",
            "Hvala što ste odabrali naš servis. Prijava br. {orderNum} je evidentirana i u fazi je obrade.",
            "Primili smo vašu prijavu br. {orderNum}. Servisni inženjer će vas kontaktirati u najkraćem mogućem roku.",
            "Prijava br. {orderNum} je prihvaćena. Cijenimo vaše vrijeme i pripremamo optimalno rješenje.",
            "Hvala na obraćanju. Vaša prijava br. {orderNum} je već proslijeđena majstoru.",
            "Vaša prijava br. {orderNum} je registrovana. Očekujte povratnu informaciju uskoro.",
            "Hvala na povjerenju! Prijava br. {orderNum} je u radu, uskoro ćemo vas kontaktirati.",
            "Prijava br. {orderNum} je uspješno prihvaćena. Naš stručnjak se već priprema da vas kontaktira."
        ]
    },
    en: {
        headerTitle: "Order Repair", title: "Repair Booking",
        name: "Name", phone: "Phone", city: "Select city",
        type: "Appliance type", brand: "Select brand",
        selectSub: "Select subcategory",
        brandModalTitle: "Select brand", brandManual: "Or type manually:",
        desc: "Description", photoBtn: "Choose file", noFile: "No file chosen",
        submit: "Call a master", success: "Request sent!",
        cities: ["Podgorica", "Budva", "Bar", "Tivat", "Kotor", "Herceg Novi"],
        types: [
            { value: "Fridge", text: "Fridges" },
            { value: "Washing", text: "Washers" },
            { value: "AC", text: "Air Conditioning" }
        ],
        successTitle: "Request sent!",
        orderLabel: "Order ID",
        statusLabel: "Status",
        btnOk: "Got it",
        phrases: [
            "Thank you for contacting us! Your request No. {orderNum} has been accepted and assigned to a specialist. We will contact you shortly.",
            "Request No. {orderNum} successfully registered. Thank you for your trust — processing has already begun.",
            "Your request No. {orderNum} is accepted. Our technician will contact you to coordinate the details.",
            "Thank you for choosing our service. Request No. {orderNum} is recorded and is being processed.",
            "We have received your request No. {orderNum}. A service engineer will contact you shortly.",
            "Request No. {orderNum} is accepted. We value your time and are preparing the best solution.",
            "Thank you for your request. Your application No. {orderNum} has already been handed over to the master.",
            "Your request No. {orderNum} is registered. Expect feedback shortly.",
            "Thank you for your trust! Request No. {orderNum} is in progress, we will contact you soon.",
            "Request No. {orderNum} successfully accepted. Our specialist is already preparing to contact you."
        ]
    }
};

const categoriesData = {
    Refrigeration: {
        icon: "❄️",
        ru: "Холодильное оборудование",
        cnr: "Rashladna oprema",
        en: "Refrigeration",
        items: {
            ru: ["Бытовые", "Коммерческие", "Морозильники", "Сервис и фреон"],
            cnr: ["Kućni", "Komercijalni", "Zamrzivači", "Servis i freon"],
            en: ["Domestic", "Commercial", "Freezers", "Service & refrigerant"]
        }
    },
    Laundry: { 
        icon: "🧺",
        ru: "Стирка и мойка",
        cnr: "Pranje i pranje posuđa",
        en: "Laundry & Wash",
        items: {
            ru: ["Стиральные машины", "Сушилки", "Посудомойки", "Проф. системы"],

            cnr: ["Mašine za veš", "Mašine za sušenje", "Mašine za suđe", "Pro sistemi"],
            en: ["Washers", "Dryers", "Dishwashers", "Pro systems"]
        }
    },
    Climate: {
        icon: "🌬️",
        ru: "Климат и воздух",
        cnr: "Klima i vazduh",
        en: "Climate & Air",
        items: {
            ru: ["Кондиционеры", "Сплит-системы", "HVAC", "Чистка"], 
            cnr: ["Klima uređaji", "Split sistemi", "HVAC", "Čišćenje"],
            en: ["Conditioners", "Splits", "HVAC", "Cleaning"]
        }
    }
};

const modalTranslations = {
    ru: { modalTitle: "Проверьте данные" },
    cnr: { modalTitle: "Proverite podatke" },
    en: { modalTitle: "Check details" }
};

let currentLang = localStorage.getItem('userLanguage') || 'ru';
const form = document.getElementById('orderForm');

// Функция для безопасного получения параметров из URL
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

window.onload = function() {

    // 1. Сначала инициализируем бренды и язык
    if (typeof renderBrandGrid === "function") renderBrandGrid();

    // 2. Берем параметры из URL
    const urlParams = new URLSearchParams(window.location.search);
    const utmSource = urlParams.get('utm_source');
    const extUserId = urlParams.get('user_id');
    
    // 3. Элементы формы
    const sourceInput = document.getElementById('source');
    const userInput = document.getElementById('user_id');
    
    // 4. Логика: приоритет Telegram, затем UTM
    if (window.Telegram?.WebApp?.initDataUnsafe?.user) {
        const tg = window.Telegram.WebApp;
        sourceInput.value = tg.initDataUnsafe.start_param || 'telegram_miniapp';
        userInput.value = tg.initDataUnsafe.user.username || tg.initDataUnsafe.user.id;
    } else {
        // Если это Viber, FB или обычный браузер
        if (utmSource) sourceInput.value = utmSource;
        if (extUserId) userInput.value = extUserId;
    }
    
    // Проверка языка
    if (typeof changeLang === "function") changeLang(currentLang);
};
    
// Функция обновления подменю
function updateSubMenu() {
    const categorySelect = document.getElementById('type-category');
    const subSelect = document.getElementById('type-subcategory');
    const selectedCat = categorySelect.value;
    const t = translations[currentLang];
    
    if (selectedCat && categoriesData[selectedCat]) {
        const items = categoriesData[selectedCat].items[currentLang];
        subSelect.innerHTML = `<option value="" disabled selected>${t.selectSub}</option>` +
            items.map(item => `<option value="${item}">${item}</option>`).join('');
        subSelect.style.display = 'block';
    } else {
        subSelect.style.display = 'none';
    }
}

function changeLang(lang) {
    currentLang = lang;
    localStorage.setItem('userLanguage', lang);
    const t = translations[lang];

    document.getElementById('header-order-title').innerText = t.headerTitle;
    document.getElementById('title').innerText = t.title;
    document.getElementById('name').placeholder = t.name;
    document.getElementById('phone').placeholder = t.phone;
    document.getElementById('brand').placeholder = t.brand;
    document.getElementById('description').placeholder = t.desc;
    document.getElementById('lbl-photo-btn').innerText = t.photoBtn;
    document.getElementById('btn-submit').innerText = t.submit;
    document.getElementById('brand-modal-title').innerText = t.brandModalTitle;
    document.getElementById('brand-manual-text').innerText = t.brandManual;

    const citySelect = document.getElementById('city');
    citySelect.innerHTML = `<option value="" disabled selected>${t.city}</option>` +
        t.cities.map(c => `<option value="${c}">${c}</option>`).join('');


    const catSelect = document.getElementById('type-category');
    catSelect.innerHTML = `<option value="" disabled selected>${t.type}</option>` +
        Object.keys(categoriesData).map(key => {
            const cat = categoriesData[key];
            return `<option value="${key}">${cat.icon} ${cat[lang]}</option>`;
        }).join('');
    document.getElementById('type-subcategory').style.display = 'none';
    
    if (!document.getElementById('photo').files.length) {
        document.getElementById('file-name-display').innerText = t.noFile;
    }

    document.querySelectorAll('.lang-switch button').forEach(btn => btn.classList.remove('active'));
    document.getElementById(`lang-${lang}`).classList.add('active');
}

function updateFileNameDisplay() {
    const fileInput = document.getElementById('photo');
    const display = document.getElementById('file-name-display');
    display.innerText = fileInput.files.length > 0 ? fileInput.files[0].name : translations[currentLang].noFile;
}

function renderBrandGrid() {
    const grid = document.getElementById('brandSelectorGrid');
    if (!grid) return;
    grid.innerHTML = '';
    
    applianceBrands.forEach(brand => {
        const card = document.createElement('div');
        card.className = 'brand-card';
        card.onclick = () => selectBrand(brand.name);
        //card.innerHTML = `<img src="${brand.logo}" alt="${brand.name}"><span style="color: ${brand.color}">${brand.name}</span>`;
        //grid.appendChild(card);
        
        // Создаем элемент изображения
        
        const img = document.createElement('img');
        img.src = brand.logo;
        img.alt = brand.name; 
        
        // Это текст, который появится, если фото не загрузится
        // ЛОГИКА: Если картинка не нашлась, заменяем её текстовым блоком
        img.onerror = function() {
            this.style.display = 'none'; // Скрываем иконку, если её нет
            const textFallback = document.createElement('div');
            textFallback.className = 'brand-fallback-text';
            textFallback.innerText = brand.name;
            card.appendChild(textFallback);
            // card.innerHTML = '';
            // Очищаем карточку от битой картинки
            card.appendChild(textFallback);
        };
        card.appendChild(img);
        grid.appendChild(card);
    });
}

function openBrandModal() { document.getElementById('brandModal').style.display = 'flex'; }
function closeBrandModal() { document.getElementById('brandModal').style.display = 'none'; }
function selectBrand(name) { document.getElementById('brand').value = name; closeBrandModal(); }
function applyCustomBrand() {
    const custom = document.getElementById('customBrand').value;
    if (custom.trim() !== "") {
        document.getElementById('brand').value = custom;
        document.getElementById('customBrand').value = "";
        closeBrandModal();
    }
}

form.addEventListener('submit', e => {
    e.preventDefault();
    const t = translations[currentLang];
    const mt = modalTranslations[currentLang];
    const formData = new FormData(form);
    
    document.getElementById('summary').innerHTML = `
        <p><b>${t.name}:</b> ${formData.get('name')}</p>
        <p><b>${t.phone}:</b> ${formData.get('phone')}</p>
        <p><b>${t.city}:</b> ${formData.get('city')}</p>
        <p><b>${t.type}:</b> ${formData.get('category')} ${formData.get('subcategory') ? ' / ' + formData.get('subcategory') : ''}</p>
        <p><b>${t.brand}:</b> ${formData.get('brand')}</p>
        <p><b>${t.desc}:</b> ${formData.get('description')}</p>
    `;
    document.getElementById('modal-title').innerText = mt.modalTitle;
    document.getElementById('confirmModal').style.display = 'flex';
});

function closeModal() { document.getElementById('confirmModal').style.display = 'none'; }

function finalSend() {
    closeModal();
    document.getElementById('loader').style.display = 'flex';
    const file = document.getElementById('photo').files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = () => sendData(reader.result.split(',')[1], file.name, file.type);
        reader.readAsDataURL(file);
    } else {
        sendData(null, null, null);
    }
}

function sendData(base64, fname, ftype) {
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
   
    // 1. Получаем текстовые названия вместо технических ключей
    const catSelect = document.getElementById('type-category');
    const subSelect = document.getElementById('type-subcategory');
    
    // Записываем понятные названия категорий
    data.category = catSelect.options[catSelect.selectedIndex].text;
    if (subSelect.style.display !== 'none') {
        data.subcategory = subSelect.options[subSelect.selectedIndex].text;
    }
    // 2. Добавляем файл
    data.base64 = base64;
    data.filename = fname;
    data.filetype = ftype;
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzBC6gT--PF5izw0yJyIDwm_23NTfSLplZLxIrca5lksUMqMiXi3FTKy9DsSVx6ad7qrw/exec';

    fetch(scriptURL, { 
        method: 'POST', 
        mode: 'cors', 
        headers: {
        'Content-Type': 'text/plain;charset=utf-8', // ВАЖНО: используйте text/plain
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.json();
    })
    .then(result => {
        // Вызываем функцию показа красивого окна с номером и фразой
        showFinalStatus(result.orderNumber, "Новая: Ожидает обработки");
        
        form.reset();
        document.getElementById('type-subcategory').style.display = 'none';
        updateFileNameDisplay();
    })
    .catch(err => {
        console.error('Error:', err);
        // Запасной вариант, если сервер не ответил вовремя
        alert(translations[currentLang].success);
    })
    .finally(() => {
        document.getElementById('loader').style.display = 'none';
    });
}

// Функция показа финального статуса с номером заявки и случайной фразой
function showFinalStatus(number, status) {
    const t = translations[currentLang];
    
    // Выбираем случайную фразу
    let randomPhrase = t.phrases[Math.floor(Math.random() * t.phrases.length)];
    
    // Заменяем метку {orderNum} на реальный номер
    randomPhrase = randomPhrase.replace("{orderNum}", number);

    const details = document.getElementById('status-details');
    
    // Обновляем заголовки в модальном окне
    document.getElementById('status-title').innerText = t.successTitle;
    
    // Формируем контент
    details.innerHTML = `
        <div style="margin-bottom: 10px;">
            <span style="color: #8e8e93; font-size: 12px; text-transform: uppercase;">${t.orderLabel}:</span>
            <span style="color: #007aff; font-weight: bold; font-size: 16px; margin-left: 5px;">#${number}</span>
        </div>
        <div style="margin-bottom: 15px;">
            <span style="color: #8e8e93; font-size: 12px; text-transform: uppercase;">${t.statusLabel}:</span>
            <span style="color: #34c759; font-weight: 600; margin-left: 5px;">${status}</span>
        </div>
        <div style="padding: 12px; background: #fff; border-radius: 8px; border: 1px solid #e5e5ea; font-style: italic; color: #1c1c1e;">
            "${randomPhrase}"
        </div>`;
    
    document.getElementById('statusModal').style.display = 'flex';
}

function closeStatusModal() {
    document.getElementById('statusModal').style.display = 'none';
}

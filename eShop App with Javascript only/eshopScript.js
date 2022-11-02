// JavaScript source code
/* Normal Javascript */

const str1 = 'hitting';
const str2 = 'kitten';
const levenshteinDistance = (str1 = '', str2 = '') => {
    const track = Array(str2.length + 1).fill(null).map(() =>
        Array(str1.length + 1).fill(null));
    for (let i = 0; i <= str1.length; i += 1) {
        track[0][i] = i;
    }
    for (let j = 0; j <= str2.length; j += 1) {
        track[j][0] = j;
    }
    for (let j = 1; j <= str2.length; j += 1) {
        for (let i = 1; i <= str1.length; i += 1) {
            const indicator = str1[i - 1] === str2[j - 1] ? 0 : 1;
            track[j][i] = Math.min(
                track[j][i - 1] + 1, // deletion
                track[j - 1][i] + 1, // insertion
                track[j - 1][i - 1] + indicator, // substitution
            );
        }
    }
    return track[str2.length][str1.length];
};

const levenshteinMultiple = function (str, strSearch, steps) {
    const myArray = str.split(" ");
    for (var i = 0; i < myArray.length; i++) {
        if (levenshteinDistance(myArray[i], strSearch) <= steps) {
            return true;
        }
    }
};

function formatCurrency(value) {
    return Number(value).toFixed(2) + "\u20AC";
}
/* Our products */
var json = sessionStorage.getItem('myShop');
var productData = null;
if (json === null) {
    var testData = [
        {
            title: "Xiaomi Redmi Note A9",
            descriptionShort: "The newest Xiaomi phone of the RedNote series",
            descriptionLong: "The RedNote A9 with a new powerful, high-performance Qualcomm Snapdragon 720G processor. DotDisplay display of 6.67 inches with Full HD+ definition with TUV Rheinland creditibility.",
            category: "Smartphones",
            price: 269.99,
            imgSource: 'Content/xiaomi-redmi-note.jpeg'
        },
        {
            title: "Xiaomi Poco F3",
            descriptionShort: "With 5G and Dual SIM",
            descriptionLong: "Equipped with double speakers Dolby Atmos, a powerful Qualcomm Snapdragon 870 5G processor, wifi 6 and charging speeds of 33W.",
            category: "Smartphones",
            price: 335.99,
            imgSource: 'Content/xiaomi-poco.jpeg'
        },
        {
            title: "Huawei P40 Pro 5G Dual SIM",
            descriptionShort: "The new high-end Huawei smartphone",
            descriptionLong: "With a quadruple Leica Ultra Vision camera, and OLED screen of 6.58 inches and the fast SuperCharge technology of 40W.",
            category: "Smartphones",
            price: 780.00,
            imgSource: 'Content/huawei-p40.jpeg'
        },
        {
            title: "Samsung Galaxy A52s 5G Dual SIM",
            descriptionShort: "The Awesome Black experience",
            descriptionLong: "6.5 inches of wide-screen joy, selfie camera of 32MP and quadruple back-camera of 64MP!",
            category: "Smartphones",
            price: 295.00,
            imgSource: 'Content/samsung-A52s.jpeg'
        },
        {
            title: "Realme 8i Dual SIM",
            descriptionShort: "The newest Realm phone of the i series",
            descriptionLong: "Specs: 6.6 inch 120Hz screen, Octa-core MediaTek Hello processor, Triple back-camera, fast 18W charging.",
            category: "Smartphones",
            price: 168.66,
            imgSource: 'Content/realme-8i.jpeg'
        },
        {
            title: "TCL 306 Dual SIM",
            descriptionShort: "The value for money option by TCL",
            descriptionLong: "6.52 inch screen, 5000mAh battery and a 13MP triple back-camera.",
            category: "Smartphones",
            price: 129.99,
            imgSource: 'Content/TCL-306.jpeg'
        },
        {
            title: "Motorola Defy Dual SIM",
            descriptionShort: "Motorola is back and this is their newest gear",
            descriptionLong: "Equipped with an HD+ 6.5 inch IPS screen, 8-core processor and a 48MP triple back-camera.",
            category: "Smartphones",
            price: 369.99,
            imgSource: 'Content/motorola-defy.jpeg'
        },
        {
            title: "OnePlus 7 Pro",
            descriptionShort: "Best seller",
            descriptionLong: "Crowned and celebrated as the Smartphone of the year.",
            category: "Smartphones",
            price: 624.19,
            imgSource: 'Content/oneplus.jpeg'
        },
        {
            title: "Apple iPhone 11",
            descriptionShort: "The classic",
            descriptionLong: "The classic and slick option for mid-end users. Packed with Apple's best.",
            category: "Smartphones",
            price: 529.99,
            imgSource: 'Content/iphone-11.jpeg'
        },
        {
            title: "Apple iPhone 13 Pro Max 5G TV-Monitors",
            descriptionShort: "The latest iPhone of the Pro Max series",
            descriptionLong: "With 5G mobile internet speed, the new A15 Bionic processor, 12MP cameras, 120Hz screen, loaded with the latest iOS.",
            category: "Smartphones",
            price: 269.99,
            imgSource: 'Content/iphone-13.jpeg'
        },
        {
            title: "Bosch KGN49XIDP",
            descriptionShort: "Deep freeze refridgerator with 438lt NoFrost technology",
            descriptionLong: "The Full NoFrost fridge-refridgerator two-in-one with XXL size has space for even more food and stores them even more comfortably and in advanced conditions.",
            category: "Fridges",
            price: 930.39,
            imgSource: 'Content/bosch-kng.png'
        },
        {
            title: "Pitsos PKNB56VLEP",
            descriptionShort: "Pitsos's stainless fridge",
            descriptionLong: "Pitsos's stainless fridge with Full NoFrost deep-freeze technology and ExtraCold shelves.",
            category: "Fridges",
            price: 200.49,
            imgSource: 'Content/pitsos.jpeg'
        },
        {
            title: "Whirlpool WB70I 952 X",
            descriptionShort: "With a total capacity of 462 Lt",
            descriptionLong: "A total capacity that can easily comply with the needs of a 4 member family. Because it's all about family.",
            category: "Fridges",
            price: 230.69,
            imgSource: 'Content/whirlpool.jpeg'
        },
        {
            title: "LG GBB569NSAFB",
            descriptionShort: "LINEARCooling is here",
            descriptionLong: "For excellent mid-freeze conditions for your vegetables and other bio-products.",
            category: "Fridges",
            price: 1080.99,
            imgSource: 'Content/LG-fridge.jpeg'
        },
        {
            title: "Sharp SJ-UF088M4W",
            descriptionShort: "A compact mini-bar",
            descriptionLong: "For those in requiry of space.",
            category: "Fridges",
            price: 180.09,
            imgSource: 'Content/sharp.jpeg'
        },
        {
            title: "Samsung RB34T671DSA",
            descriptionShort: "The fridge of the year",
            descriptionLong: "Hailed as the fridge of the year, this fridge combines everything and is decked out with cutting-edge technologies.",
            category: "Fridges",
            price: 877.39,
            imgSource: 'Content/samsung-fridge.jpeg'
        },
        {
            title: "Hisense RT267D4ARF",
            descriptionShort: "The value for money option",
            descriptionLong: "With a mixed capacity of 206lt and width of 55cm, it contains 3 adjustable shelves as well as a bottle dispenser.",
            category: "Fridges",
            price: 235.39,
            imgSource: 'Content/hisense.jpeg'
        },
        {
            title: "Teka NFL 342 C",
            descriptionShort: "TEKA's Full NoFrost build",
            descriptionLong: "The users that have tried this product have extensively stated that it is the best option for your vegetables.",
            category: "Fridges",
            price: 488.89,
            imgSource: 'Content/teka-nfl.jpeg'
        },
        {
            title: "Siemens KG49NAXDP",
            descriptionShort: "The widest refridgerator in the market",
            descriptionLong: "The Full NoFrost fridge-refridgerator with XL size has space for even more food and stores them even more comfortably and in advanced conditions.",
            category: "Fridges",
            price: 922.39,
            imgSource: 'Content/siemens.jpeg'
        },
        {
            title: "Morris MRS-31083B",
            descriptionShort: "The slick design, the perfect fit for the aesthetic of your desire",
            descriptionLong: "The classic fridges of the past. The accute detailing and the care to the aesthetic of the product. All here.",
            category: "Fridges",
            price: 324.50,
            imgSource: 'https://d.scdn.gr/images/sku_main_images/018383/18383335/20190430144847_morris_monoporto_psygeio_a_mrs_31083b.jpeg'
        },
        {
            title: "Samsung Smart 43 inch 4K",
            descriptionShort: "Samsung's 43 inch smart-TV with UHD LED and HDR technology",
            descriptionLong: "You can now enjoy excellent 4K UHD definition with the assistance of the brand new Crystal Processor 4K, incredible detail thanks to HDR10+ support and vibrant contrasts due to the Contrast Enhancer.",
            category: "TV-Monitors",
            price: 330.29,
            imgSource: 'Content/samsung-smart.jpg'
        },
        {
            title: "LG Smart 44 inch 4k",
            descriptionShort: "Enjoy the ultimate visual experience",
            descriptionLong: "With an Active HDR definition for you to enjoy all the content in the world, now in 4K.",
            category: "TV-Monitors",
            price: 337.79,
            imgSource: 'https://b.scdn.gr/images/sku_main_images/029012/29012740/20210601151716_lg_43up75003lf_smart_4k_uhd_43.jpeg'
        },
        {
            title: "TCL 4K UHD LED 50P725 HDR",
            descriptionShort: "The value for money option by TCL",
            descriptionLong: "TCL's P725 combines 4K HDR technologies alongside Dolby Vision and Motion clarity of a detailed and transitional quality image.",
            category: "TV-Monitors",
            price: 374.25,
            imgSource: 'https://a.scdn.gr/images/sku_main_images/031748/31748492/20211018120126_tcl_smart_tileorasi_led_4k_uhd_50p725_hdr_50.jpeg'
        },
        {
            title: "Sony Smart Television",
            descriptionShort: "Sony's best pick",
            descriptionLong: "The ultra priced high-end smart TV is here.",
            category: "TV-Monitors",
            price: 1328.00,
            imgSource: 'https://b.scdn.gr/images/sku_main_images/028373/28373930/20210419123414_sony_xr_55a80j_smart_4k_uhd_55.jpeg'
        },
        {
            title: "Hisense Smart UHD QLED",
            descriptionShort: "With 4K resolution",
            descriptionLong: "And Dolby VIsion, Dolby Atmos, sports and game mode.",
            category: "TV-Monitors",
            price: 789.00,
            imgSource: 'https://a.scdn.gr/images/sku_main_images/030875/30875729/20210907114631_hisense_smart_tileorasi_qled_4k_uhd_65a7gq_hdr_65.jpeg'
        },
        {
            title: "Toshiba Smart Television 4K",
            descriptionShort: "4K UHD LED 50U",
            descriptionLong: "With Direct LED, DTS/Dolby Digital, Android TV with Google Assistant",
            category: "TV-Monitors",
            price: 358.99,
            imgSource: 'https://c.scdn.gr/images/sku_main_images/025294/25294293/20210322153648_toshiba_50ua2063dg_smart_4k_uhd_50.jpeg'
        },
        {
            title: "F&U Smart TV",
            descriptionShort: "32 inch HD",
            descriptionLong: "LED technology with slick design and a big lifetime.",
            category: "TV-Monitors",
            price: 169.99,
            imgSource: 'https://b.scdn.gr/images/sku_main_images/031279/31279494/20220211130545_f_u_smart_tileorasi_led_hd_ready_fls32226_32.jpeg'
        },
        {
            title: "Nokia SMART TV",
            descriptionShort: "Full HD LED",
            descriptionLong: "4300B HDR in 43 inches.",
            category: "TV-Monitors",
            price: 410.97,
            imgSource: 'https://a.scdn.gr/images/sku_main_images/032828/32828530/20211206122021_nokia_smart_tileorasi_led_full_hd_4300b_hdr_43.jpeg'
        }
    ];
    /*sessionStorage.setItem('myShop', ko.toJSON(testData));*/
    productData = testData;
} else {
    productData = JSON.parse(json);
}



var productViewModel = function (product, onRemove, onSave) {
    var self = this;
    self.title = ko.observable(product.title);
    self.descriptionShort = ko.observable(product.descriptionShort);
    self.descriptionLong = ko.observable(product.descriptionLong);
    self.category = ko.observable(product.category);
    self.price = ko.observable(product.price);
    self.imgSource = ko.observable(product.imgSource);
    self.quantity = ko.observable(product.quantity === undefined ? 0 : product.quantity);
    self.expanded = ko.observable(false);

    self.imgSource = ko.observable(product.imgSource);
    self.imgText = ko.observable("Alt text");

    self.onRemoveDelegate = onRemove;
    self.onSaveDelegate = onSave;

    self.inCart = ko.pureComputed(function () {
        return self.quantity() > 0;
    });
    self.totalPrice = ko.pureComputed(function () {
        return self.price() * self.quantity();
    });
    /* Functions */
    self.toggle = function () {
        self.expanded(!self.expanded());
    };
    self.addQuantity = function () {
        self.quantity(self.quantity() + 1);
        self.onSaveDelegate();
    }
    self.removeQuantity = function () {
        self.quantity(self.quantity() - 1);
        if (!self.inCart()) {
            self.onRemoveDelegate(self);
        } else {
            self.onSaveDelegate();
        }
    }
}

var generalViewModel = function (products) {
    var self = this;
    /*self.modalShown = ko.observable(false);*/
    /* Delegated Functions */
    self.removeFromCart = function (product) {
        self.productsInCart.remove(product);
        self.setSessionStorage();
    }

    self.setSessionStorage = function () {
        sessionStorage.setItem('myShop', ko.toJSON(self.products));
    }

    /* Constructor */
    self.products = ko.observableArray(ko.utils.arrayMap(products, function (product) {
        return new productViewModel(product, self.removeFromCart, self.setSessionStorage);
    }));
    self.productsInCart = ko.observableArray();
    self.categories = ko.observableArray();
    for (var i = 0; i < self.products().length; i++) {
        /* Re-initialize cart list after page reload */
        if (self.products()[i].inCart()) {
            self.productsInCart.push(self.products()[i]);
        }
        /* Create category list */
        if (self.categories.indexOf(self.products()[i].category()) <= -1) {
            self.categories.push(self.products()[i].category());
        }
    }
    /* Functions */
    self.addToCart = function (product) {
        self.productsInCart.push(product);
        product.addQuantity();
        self.setSessionStorage();
    }

    self.totalCartPrice = ko.computed(function () {
        var total = 0;
        if (self.productsInCart().length > 0) {
            for (var i = 0; i < self.productsInCart().length; i++) {
                total = total + self.productsInCart()[i].totalPrice();
            }
        }
        return total;
    });

    self.sidebarToggle = function () {
        $('#sidebar').toggleClass('active');
    }
    self.modalToggle = function () {
        $("#cardModal").modal('toggle');
    }
    /* Search and Filters */
    self.search_Product = ko.observable('');
    self.search_ProductCategory = ko.observable('');
    self.search_ProductCategoryToggle = function (searchStr) {
        self.search_ProductCategory(searchStr);
    }
    self.removeFilters = function () {
        self.search_Product('');
        self.search_ProductCategory('');
    }
    self.setSearch = function () {
        self.search_Product(self.search_Product());
    }
    self.filteredProducts = ko.computed(function () {
        return ko.utils.arrayFilter(self.products(), function (rec) {
            return (
                (self.search_Product().length === 0 || rec.category().toLowerCase().indexOf(self.search_Product().toLowerCase().replace(/ /g, '')) > -1
                    || levenshteinDistance(rec.category().toLowerCase(), self.search_Product().toLowerCase().replace(/ /g, '')) <= 2
                    || rec.title().toLowerCase().indexOf(self.search_Product().toLowerCase().replace(/ /g, '')) > -1
                    || levenshteinMultiple(rec.title().toLowerCase(), self.search_Product().toLowerCase().replace(/ /g, ''), 1)
                    || rec.descriptionShort().toLowerCase().indexOf(self.search_Product().toLowerCase().replace(/ /g, '')) > -1
                    || rec.descriptionLong().toLowerCase().indexOf(self.search_Product().toLowerCase().replace(/ /g, '')) > -1
                )
                &&
                (self.search_ProductCategory().length === 0 || rec.category().toLowerCase().indexOf(self.search_ProductCategory().toLowerCase()) > -1)
            )
        }); //Edw mporeis na sortareis th lista (se periptwsh poy eixame filter "short by decreasing price) https://www.c-sharpcorner.com/article/knockoutjs-filter-search-sort/
    });
}
this.vm = new generalViewModel(productData);
ko.applyBindings(this.vm);
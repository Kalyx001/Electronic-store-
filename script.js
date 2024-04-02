// Add this to your existing JavaScript or create a new file
// Automatic slideshow for advertisement images
let currentSlide = 0;
const slides = document.querySelectorAll('#advertisementSection img');
const slideCount = slides.length;

function nextSlide() {
    slides[currentSlide].style.display = 'none';
    currentSlide = (currentSlide + 1) % slideCount;
    slides[currentSlide].style.display = 'block';
}

setInterval(nextSlide, 5000); // Change slide every 5 seconds


// Sample product data
const products = [
    { 
        name: "Samsung Galaxy A15", 
        price: 25500.00, 
        image: "a.jpg", 
        description: "[Easter Sale] Samsung Galaxy A15 128GB+6GB 50MP Triple Camera Mediatek Helio G99 6.5 90Hz Display Android 14 5000mAh 25W Type-C Charge Smart Phones",
        images: ["1706692923982209e356d5b4e4838b41f3bf81d7a9d24_720.jpg", "1706692923949f9cfc2808e2d4cc182d07485c9df8e55_720.jpg", "1706692923349173ed8860cee4e439fcef63a20d2af40_720.jpg"] 
    },
    { 
        name: "Tecno Spark 10 5G", 
        price: 15000.99, 
        image: "1701688570867b800b7dd34ab4dddb0ddb38c0c4d3fe7_720.png", 
        description: "TECNO SPARK 10 5G 256GB +16(8+8)GB RAM 50MP Android 13 90Hz 6.6 HD+ Display Dual SIM 5000mAh 18W Fast Charge Side Fingerprint Smart Phones",
        images: ["17016889077144d7a4938c28b48688f9ba0ead83acae4_720.jpg", "17016890202557311859edb6d44aa8ba2f40d469d2f22_720.jpg"] 
    },
    { 
        name: "Xiaomi Redmi 13C", 
        price: 21000.00, 
        image: "101079464.webp", 
        description: "Xiaomi Redmi 13C 128/256GB ROM + 4/8GB RAM 4G Network Dual SIM 6.74inch 90Hz LCD Screen 50MP Camera 18W Tpye-C Charging 5000mAh Battery Fingerprint&Face Smart Phones.",
        images: ["1701830876251484037074c5c455eb791298e418cd8f9_720.jpg.webp", "1701830946678680cc8a285bb4c839e9695480b99a546_720.jpg.webp", "17018310254282f85bdc173b143b6b83e9c5bfd4248c7_720.jpg.webp"] 
    },
    
    { 
        name: "New Arrival Itel A60s", 
        price: 19999.99, 
        image: "1703127107471075c363aac064358961b8e5404028284_720.jpg.webp", 
        description: "New Arrival Itel A60s Dual SIM 64GB/128GB+8(4+4) GB RAM 13MP Camera 5000mAh 6.6 Inch HD + Waterdrop Full Screen Phone Fingerprint and Face Unlock Smart Phones",
        images: ["1699585419997d0cbb1f7e95f4e1fad57a4c0729c65b2.jpg.webp","1693364963769e8ac778c5344405da2909bcd6e2865e8_720.jpg.webp", "1699585346830b34a8fe95997432d81ad153b9e0f0d1b.jpeg.webp", "1699585346830b34a8fe95997432d81ad153b9e0f0d1b.jpeg.webp"] 
    },
    { 
        name: "KGTEL A15 Pro ", 
        price: 8599.99, 
        image: "170494010965967531d980d9d49d7af816945b706417b_720.jpg.webp", 
        description: "New Arrival KGTEL A15 Pro 32GB Storage 5GB（2+3GB） RAM 5000mAh Dual SIM 8MP+8MP Camera 6.3 Screen Fingerprint Smart Phones",
        images: ["1705306771652f30db21c9cdf4a36bdcf09afcbbfdc44.jpg.webp", "170530675171724ab7f1badc24a06b98b2ed407db0666.jpg.webp", "17053067662067cddb273a2ba4e52acacd2b06da544e8.jpg.webp","1701066934649ada87e8cf4334191913723317ab61561.jpeg.webp"] 
    },
    
    { 
        name: "Itel S23 ", 
        price: 18999.99, 
        image: "101085575.webp", 
        description: "Itel S23 128GB ROM + 4GB RAM 6.6 HD+ 90HZ Refresh Rate Screen Phones Dual SIM 4G Network 50MP AI Camera Fingerprint Unlock Smart Phones",
        images: ["1692935015158fa07cb3aabe14a919299a1fd04c06801_720.jpg.webp", "169208084392858dcf9de949c4dafaf9a69a5beb384c1_720.jpg.webp", "169398527849295d1bae9629a4b22b9e83545b7570f6f.jpeg.webp"] 
    },
    { 
        name: "Itel A70", 
        price: 15599.99, 
        image: "170486637040324c7773a9e214db383cc8e37fd66ec15_720.jpg.webp", 
        description: "New Arrival Itel A70 128GB+8(3+5)GB / 256GB+12(4+8)GB RAM 4G Network Dual SIM 13MP Camera 5000mAh 6.6-inch HD+Water Drop Full Screen Smartphone Fingerprint and Face Unlock Smart phone",
        images: ["1700035147949089c984c4b4e478bb758774d4a096bba_720.jpg.webp", "17008275106389d1e893350f447db935701aa33a3506c_720.jpg.webp", "17001335925264c91990726b84a2f9b104062823394db.jpeg.webp"] 
    },
    { 
        name: "Samsung Galaxy A05S", 
        price: 22999.99, 
        image: "101015902.webp", 
        description: "Samsung Galaxy A05S 64GB + 4GB 50MP Triple Camera Snapdragon 680 6.7 90Hz Android 13 5000mAh 25W Type-C Charge Smart Phones",
        images: ["170496342069420c9fb21d3d0460fb5af58c2961c10c7_720.jpg.webp", "1704963421000e1292a8e2b7d4720b9fa95ce3288f0d6_720.jpg.webp", "170669354128586e48c5b775e448986859b3d9eb81528.jpeg.webp"] 
    },
    { 
        name: "Samsung Galaxy A04S", 
        price: 23499.99, 
        image: "16822343235097fafb0eb5fe64bc89e6863571b801e4c_720.jpg.webp", 
        description: "Samsung Galaxy A04S 6.5 90Hz Display 128GB + 4GB RAM (Dual SIM) 50MP Triple Camera 5000mAh Android 12 Smart Phones",
        images: ["167955260094037b34703ccdb4bdca0dd64396f1c525b_720.jpg.webp", "16740366601859cbabb6d7364475fb0d412d177e86079_720.jpg.webp", "1697103091789f5acd01854ee4c24b3630d748596cce3.jpeg.webp"] 
    },
    { 
        name: "Samsung S20 5G Badili", 
        price: 127999.99, 
        image: "170133537438638d4416726504024857ca89db5853582.png.webp", 
        description: "Refurbished Samsung S20 5G Badili Smart Phone12GB/128GB ROM .2 Dynamic AMOLED Display, 64MP Triple Camera 10MP, Android 11, 4000mAh Battery, Dual SIM Smartphone phone.",
        images: ["170133537438638d4416726504024857ca89db5853582.png.webp", "1701335371082756380a653274506a1122e4a150a25bc.png.webp", "170133244115876cdda30aa4744fb84cd4ba941d50eea.png.webp"] 
    },
    { 
        name: "Samsung Galaxy Note9", 
        price: 37099.99, 
        image: "3335_06044346789903872_720.jpg.webp", 
        description: "Samsung Galaxy Note9 Single SIM 6G+128G ROM 6.4 Dual 12MP NFC Note 9 smartphone",
        images: ["3134_06039355769169724_1280.jpg.jpeg", "HTB1U53RasfrK1RkSmLyq6xGApXaw.jpg", "HTB1r7yhX.LrK1Rjy1zbq6AenFXaa.jpg"] 
    },
    { 
        name: "TECNO CAMON 20 PRO", 
        price: 28499.99, 
        image:  "16835161143179d8773edd3a84bbfaf693f7223946dd6_720.png.webp", 
        description: "TECNO CAMON 20 PRO 256GB+8GB 6.67'' 120Hz AMOLED 64MP 5000mAh 33W Flash Charge Dual SIM 4G Andriod 13 Screen Fingerprint Unlock Smart Phones",
        images: ["16914001418480044b3eea78940e0a7602a616c895da8_720.png.webp", "1683516114198a55e6db90cc84da4a16f980ff77c28af_720.png.webp", "1683516190234c7774996f65a4ed98a6ce9b303d307d9.png.webp"] 
    },
    { 
        name: "Samsung Galaxy A04e", 
        price: 13999.99, 
        image: "100890320.webp", 
        description: "Samsung Galaxy A04e 6.5 HD+ 32GB ROM + 3GB RAM Dual SIM 5000mAh Battery Type-C 13MP Camera Android 12 Smart Phones",
        images: ["100890329.webp", "100890332.webp", "100890330.webp"] 
    },
    { 
        name: "Samsung Galaxy S20 plus S20+", 
        price: 44999.99, 
        image: "16768806710620c7e1bdf63264b75b64fceb3a9baecf8_720.jpg.webp", 
        description: "Samsung Galaxy S20 plus S20+ single sim 12GB+128GB 6.7 Original Mobile Phone Samsung s20+",
        images: ["1676880672069347c5ef174444beca214a11e1db2aae5.jpg (1).webp", "16768806710620c7e1bdf63264b75b64fceb3a9baecf8_720.jpg.webp", ""] 
    },
    { 
        name: "iPhone xs max facelift iPhone 13 Pro max ", 
        price: 57499.99, 
        image: "16767128582238a72d0f3ddaf4caa99c11a7e81f15dd5_720.jpg.webp", 
        description: "iPhone xs max facelift iPhone 13 Pro max 3G+64G/128G 6.5 inch 12MP+7MP+7MP 4G network dual card dual standby face ID smartphone",
        images: ["1676712858219e41128bf01e54e40b967f507d670ab2e_720.jpg.webp", "16767128957316623c3079ac347549b71e5c1b3747bb0.jpg.webp", "16767128956867d123d0fbbb942159753a86a60a71d99.jpg.webp"] 
    },
    { 
        name: "", 
        price: 19999.99, 
        image: "", 
        description: "",
        images: ["", "", ""] 
    }
];

// Function to format price in KES with commas
function formatPrice(price) {
    return `KES ${price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`;
}

// Function to shuffle array randomly
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Function to display products randomly
function displayProductsRandomly() {
    const shuffledProducts = shuffleArray(products);
    const productsSection = document.getElementById("products");
    productsSection.innerHTML = ''; // Clear previous products
    shuffledProducts.forEach(product => {
        const productElem = document.createElement("div");
        productElem.classList.add("product");
        productElem.innerHTML = `
            <img src="pics/${product.image}" alt="${product.name}" onclick="displayProductDetails(${JSON.stringify(product)})">
            <h2>${product.name}</h2>
            <p>${formatPrice(product.price)}</p>
            <button class="details-btn" data-product='${JSON.stringify(product)}'>Details</button>
        `;
        productsSection.appendChild(productElem);
    });
}

// Function to display filtered products
function displayFilteredProducts(filteredProducts) {
    const productsSection = document.getElementById("products");
    productsSection.innerHTML = ''; // Clear previous products
    filteredProducts.forEach(product => {
        const productElem = document.createElement("div");
        productElem.classList.add("product");
        productElem.innerHTML = `
            <img src="pics/${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>${formatPrice(product.price)}</p>
            <button class="details-btn" data-product='${JSON.stringify(product)}'>Details</button>
        `;
        productsSection.appendChild(productElem);
    });
}

// Display product details modal
function displayProductDetails(product) {
    const modalContent = document.getElementById("modalContent");
    modalContent.innerHTML = `
        <h2>${product.name}</h2>
        <p>${product.description}</p>
        <img src="pics/${product.image}" alt="${product.name}">
        <div class="additional-images">
            ${product.images.map(img => `<img src="pics/${img}" alt="${product.name}">`).join('')}
        </div>
        <p>${formatPrice(product.price)}</p>
        <div class="btns"> 
          <button>Add to Cart</button>
          <button onclick="orderOnWhatsApp('${product.name}')">Order on WhatsApp</button>
        </div>
        <h3> For inquiry call 📞 0115900068  </h3>
    `;
    document.getElementById("productModal").style.display = "block";
}

// Close modal
document.getElementsByClassName("close")[0].onclick = function() {
    document.getElementById("productModal").style.display = "none";
}

// Event listener for details button
document.addEventListener("click", function(e) {
    if (e.target && e.target.classList.contains("details-btn")) {
        const product = JSON.parse(e.target.getAttribute("data-product"));
        displayProductDetails(product);
    }
});

// Event listener for search input
document.getElementById("searchInput").addEventListener("input", function() {
    const searchValue = this.value.toLowerCase();
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchValue));
    displayFilteredProducts(filteredProducts);
});

// Function to order on WhatsApp
function orderOnWhatsApp(name) {
    // Format the message with product name
    const message = `Hello, I would like to order the product: ${name}`;
    
    // Construct the WhatsApp message link
    const whatsappLink = `https://wa.me/254741766185/?text=${encodeURIComponent(message)}`;

    // Open WhatsApp link in a new tab
    window.open(whatsappLink, '_blank');
}

// Display products randomly when the page loads
window.onload = displayProductsRandomly;

// pictures scrolling automatic left

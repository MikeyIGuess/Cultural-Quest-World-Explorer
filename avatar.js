// Avatar state
let currentAvatar = {
    hats: [],
    clothing: 'default',
    footwear: 'default',
    background: 'default'
};

// Purchased items storage
let purchasedItems = {
    hats: [],
    clothing: [],
    footwear: [],
    background: []
};

// Avatar items database
const avatarItems = {
    clothing: [
        { id: 'kimono', name: 'Japanese Kimono', price: 50, image: 'assets/clothes/kimono.png' },
        { id: 'sari', name: 'Indian Sari', price: 50, image: 'assets/clothes/sari.png' },
        { id: 'kilt', name: 'Scottish Kilt', price: 45, image: 'assets/clothes/kilt.png' },
        { id: 'dashiki', name: 'African Dashiki', price: 40, image: 'assets/clothes/dashiki.png' }
    ],
    hats: [
        { id: 'sombrero', name: 'Mexican Sombrero', price: 30, image: 'assets/hats/sombrero.png' },
        { id: 'turban', name: 'Traditional Turban', price: 35, image: 'assets/hats/turban.png' },
        { id: 'fez', name: 'Traditional Fez', price: 25, image: 'assets/hats/fez.png' },
        { id: 'cowboy', name: 'Cowboy Hat', price: 30, image: 'assets/hats/cowboy.png' },
        { id: 'conical', name: 'Conical Hat', price: 25, image: 'assets/hats/conical.png' }
    ],
    footwear: [
        { id: 'geta', name: 'Japanese Geta', price: 25, image: 'assets/footwear/geta.png' },
        { id: 'huaraches', name: 'Mexican Huaraches', price: 30, image: 'assets/footwear/huaraches.png' },
        { id: 'clogs', name: 'Dutch Clogs', price: 35, image: 'assets/footwear/clogs.png' },
        { id: 'boots', name: 'Cowboy Boots', price: 40, image: 'assets/footwear/boots.png' }
    ],
    background: [
        { id: 'cherry', name: 'Japanese Cherry Blossom Garden', price: 50, image: 'assets/backgrounds/cherry_blossom.png' },
        { id: 'pyramids', name: 'Egyptian Desert Pyramids', price: 50, image: 'assets/backgrounds/pyramid.png' },
        { id: 'eiffel', name: 'Parisian Eiffel Tower View', price: 50, image: 'assets/backgrounds/eiffel_tower.png' },
        { id: 'greatwall', name: 'Chinese Great Wall Scene', price: 50, image: 'assets/backgrounds/wall_of_china.png' }
    ]
};

function updateAvatarDisplay() {
    const avatarPreview = document.querySelector('.avatar-preview');
    avatarPreview.innerHTML = `
        <div class="avatar-base" style="background: ${getBackgroundStyle()}">
            <div class="avatar-main">
                <div class="avatar-hats">
                    ${currentAvatar.hats.map(hat => getItemImage('hats', hat)).join('')}
                </div>
                <div class="avatar-head">
                    <img src="assets/base/Head_final.png" alt="Default Head">
                </div>
                <div class="avatar-body">
                    <img src="assets/base/Body_final.png" alt="Default Body">
                </div>
                <div class="avatar-clothing">${getItemImage('clothing')}</div>
                <div class="avatar-legs">
                    <img src="assets/base/legs_final.png" alt="Default Legs">
                </div>
                <div class="avatar-footwear">${getItemImage('footwear')}</div>
            </div>
        </div>
    `;
}

function getBackgroundStyle() {
    if (currentAvatar.background === 'default') return 'rgba(255, 255, 255, 0.2)';
    const bgItem = avatarItems.background.find(i => i.id === currentAvatar.background);
    return bgItem ? `url(${bgItem.image}) center/cover no-repeat` : 'rgba(255, 255, 255, 0.2)';
}

function getItemImage(category, itemId = currentAvatar[category]) {
    if (itemId === 'default') {
        return category === 'clothing' ? '' :  // Don't show any clothing for default
               category === 'footwear' ? '' : '';  // Don't show any footwear for default
    }
    const item = avatarItems[category]?.find(i => i.id === itemId);
    return item ? `<img src="${item.image}" alt="${item.name}">` : '';
}

function showItemsForCategory(category) {
    const itemsGrid = document.querySelector('.items-grid');
    itemsGrid.dataset.category = category;  // Store current category
    itemsGrid.innerHTML = '';

    avatarItems[category]?.forEach(item => {
        const isPurchased = purchasedItems[category].includes(item.id);
        const isEquipped = category === 'hats' ? 
            currentAvatar.hats.includes(item.id) : 
            currentAvatar[category] === item.id;
        
        const itemCard = document.createElement('div');
        itemCard.className = 'item-card';
        const displayImage = category === 'background' ? 
            `<div class="background-preview" style="background: url(${item.image}) center/cover no-repeat">
            </div>` :
            `<div class="item-image"><img src="${item.image}" alt="${item.name}"></div>`;
        
        itemCard.innerHTML = `
            ${displayImage}
            <div class="item-name">${item.name}</div>
            <div class="item-price">${isPurchased ? 'Purchased' : `${item.price} points`}</div>
            ${isPurchased ? 
                `<button onclick="equipItem('${category}', '${item.id}')" 
                         class="equip-btn ${isEquipped ? 'equipped' : ''}">
                    ${isEquipped ? 'Equipped' : 'Equip'}
                </button>` :
                `<button onclick="purchaseItem('${category}', '${item.id}')" 
                         class="purchase-btn"
                         ${points < item.price ? 'disabled' : ''}>
                    Purchase
                </button>`
            }
        `;
        itemsGrid.appendChild(itemCard);
    });
}

function purchaseItem(category, itemId) {
    const item = avatarItems[category].find(i => i.id === itemId);
    if (!item || points < item.price) return;

    // Deduct points
    points -= item.price;
    document.getElementById('pointsDisplay').textContent = points;
    document.getElementById('avatarPointsDisplay').textContent = points;

    // Add to purchased items
    purchasedItems[category].push(itemId);

    // Update displays
    showItemsForCategory(category);
    playSound('buttonClick');
}

function equipItem(category, itemId) {
    if (category === 'hats') {
        if (currentAvatar.hats.includes(itemId)) {
            // If the hat is already equipped, unequip it
            currentAvatar.hats = [];
        } else {
            // Unequip any existing hat and equip the new one
            currentAvatar.hats = [itemId];
        }
    } else {
        currentAvatar[category] = currentAvatar[category] === itemId ? 'default' : itemId;
    }

    updateAvatarDisplay();
    showItemsForCategory(category);
    playSound('buttonClick');
}

function resetAvatar() {
    currentAvatar = {
        hats: [],
        clothing: 'default',
        footwear: 'default',
        background: 'default'
    };
    updateAvatarDisplay();
    
    // Update all category displays
    const currentlyDisplayedCategory = document.querySelector('.items-grid').dataset.category;
    if (currentlyDisplayedCategory) {
        showItemsForCategory(currentlyDisplayedCategory);
    }
    
    playSound('buttonClick');
}

// Initialize avatar system
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            showItemsForCategory(btn.dataset.category);
            playSound('buttonClick');
        });
    });
    updateAvatarDisplay();
}); 
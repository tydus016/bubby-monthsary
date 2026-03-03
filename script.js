// All images in the assets folder
const images = [
    'assets/images/IMG-20250916-WA0175.jpg',
    'assets/images/IMG-20250916-WA0188.jpg',
    'assets/images/IMG-20250916-WA0205.jpg',
    'assets/images/IMG-20250916-WA0221.jpg',
    'assets/images/IMG-20251007-WA0000.jpg',
    'assets/images/IMG-20251007-WA0002.jpg',
    'assets/images/IMG-20251014-WA0002.jpg',
    'assets/images/IMG-20251014-WA0004.jpg',
    'assets/images/IMG-20251014-WA0005.jpg',
    'assets/images/IMG-20251014-WA0007.jpg',
    'assets/images/IMG-20251023-WA0022.jpg',
    'assets/images/IMG-20251023-WA0029.jpg',
    'assets/images/IMG-20251102-WA0075.jpg',
    'assets/images/IMG-20251102-WA0097.jpg',
    'assets/images/IMG-20251102-WA0105.jpg',
    'assets/images/IMG-20251102-WA0120.jpg',
    'assets/images/IMG-20251102-WA0121.jpg',
    'assets/images/IMG-20251102-WA0134.jpg',
    'assets/images/IMG-20251208-WA0014.jpg',
    'assets/images/IMG-20251208-WA0031.jpg',
    'assets/images/IMG-20251209-WA0024.jpg',
    'assets/images/IMG-20251209-WA0036.jpg',
    'assets/images/IMG-20251222-WA0007.jpg',
    'assets/images/IMG-20251222-WA0016.jpg',
    'assets/images/IMG-20251222-WA0026.jpg',
    'assets/images/IMG-20260118-WA0080.jpg',
    'assets/images/IMG-20260118-WA0088.jpg',
    'assets/images/IMG-20260118-WA0096.jpg',
    'assets/images/IMG-20260118-WA0097.jpg',
    'assets/images/IMG-20260118-WA0102.jpg',
    'assets/images/IMG-20260118-WA0144.jpg',
    'assets/images/IMG-20260118-WA0152.jpg',
    'assets/images/IMG-20260118-WA0285.jpg',
    'assets/images/IMG-20260118-WA0286.jpg',
    'assets/images/IMG-20260126-WA0007.jpg',
    'assets/images/IMG-20260126-WA0011.jpg',
    'assets/images/IMG-20260216-WA0005.jpg',
    'assets/images/IMG-20260216-WA0009.jpg',
    'assets/images/IMG-20260217-WA0001.jpg',
    'assets/images/IMG-20260217-WA0005.jpg',
    'assets/images/IMG-20260217-WA0011.jpg',
    'assets/images/IMG-20260217-WA0022.jpg',
    'assets/images/IMG_0030.JPG',
    'assets/images/IMG_0069.JPG',
    'assets/images/IMG_0071.JPG',
    'assets/images/IMG_0083.JPG',
    'assets/images/IMG_0084.JPG',
    'assets/images/IMG_0096.JPG',
    'assets/images/IMG_0113.JPG',
    'assets/images/IMG_0120.JPG',
    'assets/images/IMG_0124.JPG',
    'assets/images/IMG_0126.JPG',
    'assets/images/IMG_20251122_165817.jpg',
    'assets/images/IMG_20251122_165836.jpg',
    'assets/images/IMG_20251122_165902.jpg',
    'assets/images/IMG_20251219_181126.jpg',
    'assets/images/IMG_20260202_210353.jpg',
    'assets/images/IMG_20260214_122847.jpg',
    'assets/images/IMG_20260223_213913.jpg',
    'assets/images/Messenger_creation_07FFC4B1-01BE-4A18-AA88-FD285AB789FA.jpeg',
    'assets/images/Messenger_creation_2C61F586-4AFA-496F-B3B0-3870F9E4D5F3.jpeg',
    'assets/images/Messenger_creation_39AAE8CB-2498-43B2-9DD7-DF97AE9F3BAE.jpeg',
    'assets/images/Messenger_creation_4AAB86B0-FDE1-4C1A-84E5-ACA5A9A907AA.jpeg',
    'assets/images/Messenger_creation_C36B35EF-DE60-4289-95B8-1B4625FB2014.jpeg',
    'assets/images/Messenger_creation_D9EE6624-EA4C-49E6-981D-E5BCAB8D3078.jpeg',
    'assets/images/Screenshot_20251015_000016.jpg',
    'assets/images/Screenshot_20251105_225427.jpg',
    'assets/images/Screenshot_20251105_225527.jpg',
    'assets/images/Screenshot_20251217_153349.jpg',
    'assets/images/Screenshot_20251217_153353.jpg'
];

// Heart shape pattern - 1 means show image, 0 means empty space
// This creates a heart shape in a 13x13 grid optimized for better display
const heartPattern = [
    [0,0,1,1,1,0,0,0,1,1,1,0,0],
    [0,1,1,1,1,1,0,1,1,1,1,1,0],
    [1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1],
    [0,1,1,1,1,1,1,1,1,1,1,1,0],
    [0,1,1,1,1,1,1,1,1,1,1,1,0],
    [0,0,1,1,1,1,1,1,1,1,1,0,0],
    [0,0,0,1,1,1,1,1,1,1,0,0,0],
    [0,0,0,0,1,1,1,1,1,0,0,0,0],
    [0,0,0,0,0,1,1,1,0,0,0,0,0],
    [0,0,0,0,0,0,1,0,0,0,0,0,0]
];

// Password logic
const CORRECT_PASSWORD = '090323';
let currentPassword = '';
let attempts = 0;
let cooldownActive = false;

const passwordDisplay = document.getElementById('passwordDisplay');
const errorMessage = document.getElementById('errorMessage');
const sadPanda = document.getElementById('sadPanda');
const keypad = document.getElementById('keypad');
const cooldownTimer = document.getElementById('cooldownTimer');
const passwordScreen = document.getElementById('passwordScreen');
const happyPandaScreen = document.getElementById('happyPandaScreen');
const collageScreen = document.getElementById('collageScreen');

// Keypad buttons
document.querySelectorAll('.keypad-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        if (cooldownActive) return;
        const num = btn.dataset.num;
        if (currentPassword.length < 6) {
            currentPassword += num;
            updatePasswordDisplay();
        }
    });
});

// Clear button
document.getElementById('clearBtn').addEventListener('click', () => {
    if (cooldownActive) return;
    currentPassword = '';
    updatePasswordDisplay();
    errorMessage.textContent = '';
});

// Enter button
document.getElementById('enterBtn').addEventListener('click', () => {
    if (cooldownActive) return;
    checkPassword();
});

// Keyboard support
document.addEventListener('keydown', (e) => {
    if (cooldownActive || collageScreen.classList.contains('block')) return;
    
    if (!passwordScreen.classList.contains('hidden')) {
        if (e.key >= '0' && e.key <= '9') {
            if (currentPassword.length < 6) {
                currentPassword += e.key;
                updatePasswordDisplay();
            }
        } else if (e.key === 'Enter') {
            checkPassword();
        } else if (e.key === 'Backspace') {
            currentPassword = currentPassword.slice(0, -1);
            updatePasswordDisplay();
        } else if (e.key === 'Escape') {
            currentPassword = '';
            updatePasswordDisplay();
            errorMessage.textContent = '';
        }
    }
});

function updatePasswordDisplay() {
    passwordDisplay.textContent = '●'.repeat(currentPassword.length);
    passwordDisplay.classList.add('pulse');
    setTimeout(() => passwordDisplay.classList.remove('pulse'), 500);
}

function checkPassword() {
    if (currentPassword.length === 0) return;

    if (currentPassword === CORRECT_PASSWORD) {
        // Correct password!
        showHappyPanda();
    } else {
        // Wrong password
        attempts++;
        if (attempts >= 3) {
            startCooldown();
        } else {
            errorMessage.textContent = `Wrong password! ${3 - attempts} attempt${3 - attempts === 1 ? '' : 's'} remaining.`;
            currentPassword = '';
            updatePasswordDisplay();
        }
    }
}

function startCooldown() {
    cooldownActive = true;
    keypad.style.opacity = '0.3';
    keypad.style.pointerEvents = 'none';
    sadPanda.classList.remove('hidden');
    errorMessage.textContent = 'Too many wrong attempts!';
    
    let timeLeft = 30;
    const interval = setInterval(() => {
        cooldownTimer.textContent = `${timeLeft}s`;
        timeLeft--;
        
        if (timeLeft < 0) {
            clearInterval(interval);
            endCooldown();
        }
    }, 1000);
}

function endCooldown() {
    cooldownActive = false;
    attempts = 0;
    currentPassword = '';
    keypad.style.opacity = '1';
    keypad.style.pointerEvents = 'auto';
    sadPanda.classList.add('hidden');
    errorMessage.textContent = '';
    updatePasswordDisplay();
}

function showHappyPanda() {
    passwordScreen.classList.add('hidden');
    happyPandaScreen.classList.remove('hidden');
    
    // Show for 3 seconds then transition to collage
    setTimeout(() => {
        happyPandaScreen.classList.add('hidden');
        collageScreen.classList.remove('hidden');
        initializeCollage();
    }, 3000);
}

// Gallery logic
let currentImageIndex = 0;
const galleryModal = document.getElementById('galleryModal');
const galleryImage = document.getElementById('galleryImage');
const imageCounter = document.getElementById('imageCounter');

function initializeCollage() {
    const heartGrid = document.getElementById('heartGrid');
    heartGrid.innerHTML = '';
    
    // Calculate total slots needed in heart pattern
    let totalSlots = 0;
    heartPattern.forEach(row => {
        row.forEach(cell => {
            if (cell === 1) totalSlots++;
        });
    });
    
    // Create distributed image array with duplicates but no adjacent duplicates
    const distributedImages = distributeImagesForHeart(images, totalSlots);
    
    let imageIndex = 0;
    
    // Create heart-shaped grid
    heartPattern.forEach((row, rowIndex) => {
        row.forEach((cell, colIndex) => {
            const cellDiv = document.createElement('div');
            cellDiv.className = 'heart-cell';
            
            if (cell === 1 && imageIndex < distributedImages.length) {
                const imgElement = document.createElement('img');
                imgElement.src = distributedImages[imageIndex].src;
                imgElement.alt = `Memory ${imageIndex + 1}`;
                imgElement.className = 'heart-image';
                const originalIndex = distributedImages[imageIndex].originalIndex;
                imgElement.addEventListener('click', () => openGallery(originalIndex));
                cellDiv.appendChild(imgElement);
                imageIndex++;
            } else if (cell === 0) {
                cellDiv.classList.add('empty-cell');
            }
            
            heartGrid.appendChild(cellDiv);
        });
    });
}

function distributeImagesForHeart(originalImages, totalSlots) {
    // Create array with image objects tracking their original index
    const imageObjects = originalImages.map((src, index) => ({ src, originalIndex: index }));
    const result = [];
    const spacing = 3; // Minimum spacing between duplicate images
    
    // Shuffle images for better distribution
    const shuffled = [...imageObjects].sort(() => Math.random() - 0.5);
    
    // Fill the slots
    let currentImageIndex = 0;
    for (let i = 0; i < totalSlots; i++) {
        // Get the next image
        const imageToAdd = shuffled[currentImageIndex % shuffled.length];
        
        // Check if this would create adjacent duplicates
        let isDuplicate = false;
        for (let j = Math.max(0, i - spacing); j < i; j++) {
            if (result[j] && result[j].originalIndex === imageToAdd.originalIndex) {
                isDuplicate = true;
                break;
            }
        }
        
        // If duplicate too close, try next images in sequence
        if (isDuplicate) {
            let foundAlternative = false;
            for (let offset = 1; offset < shuffled.length; offset++) {
                const altImage = shuffled[(currentImageIndex + offset) % shuffled.length];
                let altIsDuplicate = false;
                
                for (let j = Math.max(0, i - spacing); j < i; j++) {
                    if (result[j] && result[j].originalIndex === altImage.originalIndex) {
                        altIsDuplicate = true;
                        break;
                    }
                }
                
                if (!altIsDuplicate) {
                    result.push(altImage);
                    foundAlternative = true;
                    currentImageIndex = (currentImageIndex + offset + 1) % shuffled.length;
                    break;
                }
            }
            
            // If no alternative found, just add it anyway (rare case)
            if (!foundAlternative) {
                result.push(imageToAdd);
                currentImageIndex = (currentImageIndex + 1) % shuffled.length;
            }
        } else {
            result.push(imageToAdd);
            currentImageIndex = (currentImageIndex + 1) % shuffled.length;
        }
    }
    
    return result;
}

function openGallery(index) {
    currentImageIndex = index;
    updateGalleryImage();
    requestAnimationFrame(() => {
        galleryModal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    });
}

function updateGalleryImage() {
    galleryImage.src = images[currentImageIndex];
    imageCounter.textContent = `${currentImageIndex + 1} / ${images.length}`;
}

document.getElementById('closeGallery').addEventListener('click', (e) => {
    e.stopPropagation();
    requestAnimationFrame(() => {
        galleryModal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    });
});

document.getElementById('prevBtn').addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    updateGalleryImage();
});

document.getElementById('nextBtn').addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateGalleryImage();
});

// Keyboard navigation for gallery
document.addEventListener('keydown', (e) => {
    if (!galleryModal.classList.contains('hidden')) {
        if (e.key === 'ArrowLeft') {
            document.getElementById('prevBtn').click();
        } else if (e.key === 'ArrowRight') {
            document.getElementById('nextBtn').click();
        } else if (e.key === 'Escape') {
            requestAnimationFrame(() => {
                galleryModal.classList.add('hidden');
                document.body.style.overflow = 'auto';
            });
        }
    }
});

// Close gallery when clicking outside the image
galleryModal.addEventListener('click', (e) => {
    if (e.target === galleryModal) {
        requestAnimationFrame(() => {
            galleryModal.classList.add('hidden');
            document.body.style.overflow = 'auto';
        });
    }
});

export function distributeImagesForHeart(originalImages, totalSlots) {
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

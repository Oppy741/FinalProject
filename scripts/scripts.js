
// Array to save picture, title, and text data. 
const imageData = [
    { 
      src: 'images/portfolio.png', 
      title: 'Project 1', 
      text: 'I learned how to use columns which was difficult but is integral to making websites. We also just started to learn how to use nav bars and how to link multiple pages together. This was someone difficult for me because I have trouble aligning different items and putting them in specific places where I want them. We also began using css style sheets.  '
    },
    { 
      src: 'images/technology.png', 
      title: 'Project 2', 
      text: 'This is when we started using mobile first design and really started to dive into css stylesheets. We also started using different css perameters such as gradients and we started using dynamic psudo classes.'  
    }, 
   
    { 
      src: 'images/cooking.png', 
      title: 'Project 3', 
      text: 'This taught us about how to use viewports. This was especially difficult because trying to get everything to scale properly is somewhat difficult. We also had to make a form that would submit data. This wasnt too hard for me because its pretty straight forward using text boxes and buttons and making them submit data to a url.  The last thing we had to do for this project was to submit. This is also when we starting making better nav bars and started to use scaling more heavily.' 
    },
    {   
    src: 'images/introduction.png', 
    title: 'Project 0', 
    text: 'This was my first introduction into website making and I have learned a lot since. This was just a very basic wesbite before I learned anything about programing and was my first real attempt at a website.' 
    }
   
   
    
  ];
  
  // Variable to keep track of the current index
  let currentIndex = 0;
  
  // Function to change the image, title, and paragraph
    function changeImage() {
    const img = document.getElementById('image');
    const title = document.getElementById('imageTitle');
    const paragraph = document.getElementById('imageText');
  
    // Update the image, title, and paragraph
    img.src = imageData[currentIndex].src;
    title.textContent = imageData[currentIndex].title;
    paragraph.textContent = imageData[currentIndex].text;
  
    // Increment the index, looping back to 0 if at the end of the array
    currentIndex = (currentIndex + 1) % imageData.length;
  }




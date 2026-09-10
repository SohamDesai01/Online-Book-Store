

let currentIndex = 0; // Tracks the current index of visible books
const booksPerSlide = 1; // Number of books to display at once
const totalBooks = 8; // Total number of books
const bookWidth = 300 + 20; // Width of each book + margin (10px on each side)

function updateSlider() {
    const bookContainer = document.getElementById('book-container');
    
    // Set the transform based on the current index
    bookContainer.style.transform = 'translateX(' + (-currentIndex * bookWidth) + 'px)';

    // Update button visibility based on current position
    updateButtonVisibility();
}

function slideNext() {
    // Ensure the slider doesn't go beyond the total number of books
    if (currentIndex < totalBooks - booksPerSlide) {
        currentIndex++; // Move to the next book
    }
    updateSlider();
}

function slidePrev() {
    // Ensure the slider doesn't go below the first book
    if (currentIndex > 0) {
        currentIndex--; // Move back to the previous book
    }
    updateSlider();
}

//best seller
imagearr = ["fiction.jpg", "manga.jpg","nonfiction.jpg"];
i = 0;
function prev(){
    if(i <= 0 )
        i = imagearr.length;
    i--;
    return setimage();
}
function next(){
    if(i >= imagearr.length-1 )
        i = -1;
    i++;
    return setimage();
}
function setimage(){
    var image1 = document.getElementById('bestbks'); 
    return image1.setAttribute('src', 'images/' + imagearr[i]);
}

//Zoom in and zoom out
function zoomIn(img){
    img.style.width = "880px";
    img.style.height = "480px";
}
function zoomOut(img){
    img.style.width = "850px";
    img.style.height = "450px";
}

function bookZoomIn(img){
    img.style.width = "330px";
    img.style.height = "420px";
}
function bookZoomOut(img){
    img.style.width = "300px";
    img.style.height = "380px";
}

// Change background color on focus
function colorChange() {
    const div = document.getElementById('fiction');
    div.style.backgroundColor = "wheat";
}
function colorChange1() {
    const div = document.getElementById('nonfic');
    div.style.backgroundColor = "wheat";
}
function colorChange2() {
    const div = document.getElementById('manga');
    div.style.backgroundColor = "wheat";
}

// Revert background color on blur
function colorBack() {
    const div = document.getElementById('fiction');
    div.style.backgroundColor = ""; // Resets to default
}
function colorBack1() {
    const div = document.getElementById('nonfic');
    div.style.backgroundColor = ""; // Resets to default
}
function colorBack2() {
    const div = document.getElementById('manga');
    div.style.backgroundColor = ""; // Resets to default
}

function navigateToFiction() {
    window.parent.location.href = "fiction.html"; // Redirects to fiction.html
}
function navigateToNonfic() {
    window.parent.location.href = "nonfic.html"; // Redirects to fiction.html
}
function navigateToManga() {
    window.parent.location.href = "manga.html"; // Redirects to fiction.html
}

function login() {
    window.parent.location.href = "form.html"; // Redirects to fiction.html
}

Banners = new Array('images/author1.jpg','images/author2.jpg', 'images/author3.jpg', 'images/author4.jpg', 'images/author5.jpeg', 'images/author6.jpg'); 
CurrentBanner = 0; //index variable
function DisplayBanners()
{
    if (document.images)
    {
        CurrentBanner++;
        if (CurrentBanner == Banners.length)
        {
        CurrentBanner = 0;
        }
        document.getElementById('RotateBanner').src = Banners[CurrentBanner];
        setTimeout(DisplayBanners,2000); // set timer
    }
}

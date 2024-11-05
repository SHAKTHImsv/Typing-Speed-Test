const sentences = [
    "The quick brown fox jumps over the lazy dog.",
    "Typing tests are a fun way to improve your speed.",
    "This sentence is randomly selected for the typing test.",
    "A quick fox can jump over many obstacles with ease.",
    "Practice makes perfect, especially when typing fast.",
    "She sells seashells by the seashore.",
    "How razorback-jumping frogs can level six piqued gymnasts!",
    "Pack my box with five dozen liquor jugs.",
    "The five boxing wizards jump quickly.",
    "Jinxed wizards pluck ivy from the big quilt.",
    "A mad boxer shot a quick, gloved jab to the jaw of his dizzy opponent.",
    "The beach was beautiful and the weather was perfect.",
    "The movie was full of exciting twists and turns.",
    "I love learning new programming languages and frameworks.",
    "He asked her out on a date at the coffee shop.",
    "The weather forecast predicts rain later this week.",
    "The little girl skipped through the garden, laughing with joy.",
    "The cat sat on the mat, watching the birds outside.",
    "Our trip to the mountains was an unforgettable experience.",
    "A quiet breeze flowed through the open window.",
    "She enjoyed reading books in the peaceful park.",
    "There was a mysterious noise coming from the attic.",
    "The clock struck midnight, and the house was silent.",
    "I can't wait for the weekend to relax and recharge.",
    "The sound of waves crashing against the rocks was soothing.",
    "We visited the museum and saw some incredible artwork.",
    "The team celebrated their victory with cheers and applause.",
    "He finally finished his book after reading for hours.",
    "The dog chased its tail in circles, looking confused.",
    "She decided to take up painting as a new hobby.",
    "The train ride through the countryside was breathtaking.",
    "The stars twinkled brightly in the clear night sky.",
    "The chocolate cake was so delicious that we ate it all.",
    "He spent the entire afternoon at the park with his friends.",
    "The airplane soared through the sky above the clouds.",
    "The library was quiet, filled with people reading books.",
    "The city streets were bustling with people and cars.",
    "The party was full of laughter, music, and dancing.",
    "I can't wait to see the new movie this weekend.",
    "The athlete broke the world record in a stunning performance.",
    "The puppy wagged its tail and ran around the yard.",
    "The concert was an unforgettable experience for all the fans.",
    "The little boy played with his toy truck in the sandbox.",
    "She cooked a delicious meal for her family.",
    "The man in the blue suit walked down the street.",
    "We gathered around the bonfire to share stories.",
    "The mountain trail was steep, but the view was worth it.",
    "He solved the puzzle in record time, impressing everyone.",
    "The beach was crowded with people enjoying the sunny weather.",
    "The night sky was clear, perfect for stargazing.",
    "The sunset over the ocean was a beautiful sight to behold.",
    "The detective solved the case after much investigation.",
    "The little girl smiled as she held her new puppy.",
    "The flowers bloomed in the garden, filling the air with fragrance.",
    "The sound of birds chirping greeted us in the morning.",
    "A red kite flew high in the sky on a windy day.",
    "She painted a picture of the sunset by the beach.",
    "The old house at the end of the street is full of mystery.",
    "I walked through the forest, feeling the cool breeze.",
    "The cake was decorated with fresh strawberries and whipped cream.",
    "The spaceship landed safely on the moon, marking a historic day.",
    "A mysterious package was left on the doorstep.",
    "The aroma of fresh coffee filled the air as we entered the café.",
    "The soft glow of the lanterns lit the garden in the evening.",
    "The orchestra played a beautiful symphony that brought tears to my eyes.",
    "The museum's exhibit on ancient civilizations was fascinating.",
    "He taught me how to swim in the crystal-clear lake.",
    "The puppy slept soundly in its cozy bed after a long day of play.",
    "The train's whistle echoed through the quiet town at dawn.",
    "The fire crackled in the hearth as we sat by the fire.",
    "The children ran through the sprinkler, laughing and shouting.",
    "The snow fell gently, covering the ground in a white blanket.",
    "The cat curled up in a sunny spot by the window, enjoying the warmth.",
    "I took a long walk by the river, listening to the sound of the water.",
    "The wind howled through the trees, signaling the coming storm.",
    "The soft sound of the piano filled the room with warmth.",
    "The beach was lined with colorful umbrellas and beach chairs.",
    "The view from the mountaintop was breathtaking and awe-inspiring.",
    "He took the stage with confidence, ready to give his speech.",
    "The little girl danced with joy, twirling around in her dress.",
    "The eagle soared high above the mountains, hunting for prey.",
    "We enjoyed a picnic in the park, surrounded by nature.",
    "The village was quiet and peaceful, nestled in the valley.",
    "The first snowfall of the season covered the ground in a blanket of white.",
    "She wrote a letter to her friend, telling her all about her summer adventures.",
    "The lighthouse stood tall against the storm, guiding ships to safety.",
    "The birds chirped in the trees, announcing the arrival of spring.",
    "The train chugged along the tracks, passing through lush green fields.",
    "He opened the gift with excitement, eager to see what was inside.",
    "The sunset painted the sky with shades of orange, pink, and purple.",
    "The river flowed gently, winding its way through the valley.",
    "We made a wish as we released the lantern into the night sky.",
    "The autumn leaves fell gently from the trees, covering the ground in color.",
    "The mountains loomed large in the distance, their peaks covered in snow.",
    "The stars sparkled brightly in the clear night sky, guiding us home.",
    "The children's laughter echoed through the playground as they played together.",
    "We watched the fireworks light up the sky, celebrating the New Year.",
    "The old man told us stories of his childhood, each one filled with adventure.",
    "The candle flickered softly in the dark room, casting shadows on the walls.",
    "The sound of the guitar echoed through the empty hall, creating a peaceful ambiance.",
    "The chef prepared a delicious meal using fresh, local ingredients.",
    "The fresh scent of flowers filled the air as we walked through the garden.",
    "The dolphins leapt gracefully out of the water, performing for the audience.",
    "The clock ticked steadily as we waited for the big moment.",
    "The kids ran around the yard, playing tag and laughing loudly.",
    "The train journey took us through mountains, forests, and picturesque towns.",
    "The dog wagged its tail as it played fetch with its owner.",
    "The chef presented the dish with pride, knowing it would be a hit.",
    "We explored the city on foot, discovering new places around every corner.",
    "The moon rose over the horizon, casting a silvery glow over the landscape.",
    "The new book was so captivating that I finished it in one sitting.",
    "The forest was alive with the sounds of chirping birds and rustling leaves.",
    "The city lights twinkled in the distance as we walked through the park.",
    "The school bell rang, signaling the end of another busy day.",
    "The dog barked happily as it chased after the ball.",
    "The flowers in the garden bloomed in vibrant colors, adding beauty to the space."
];

let startTime;
let endTime;
let isTestActive = false;
let typedWords = 0;

const sentenceContainer = document.getElementById('sentence-container');
const userInput = document.getElementById('user-input');
const timeDisplay = document.getElementById('time');
const wpmDisplay = document.getElementById('wpm');
const restartBtn = document.getElementById('restart-btn');

// Function to start the test
function startTest() {
    userInput.value = '';
    userInput.disabled = false;
    userInput.focus();
    restartBtn.style.display = "none";
    typedWords = 0;

    // Pick a random sentence from the list of 100
    const randomSentence = sentences[Math.floor(Math.random() * sentences.length)];
    sentenceContainer.textContent = randomSentence;

    // Reset the results section
    timeDisplay.textContent = "0";
    wpmDisplay.textContent = "0";

    // Start the timer
    if (!isTestActive) {
        startTime = new Date();
        isTestActive = true;
        setInterval(updateTime, 1000);  // Update time every second
    }
}

// Function to update the timer
function updateTime() {
    if (!isTestActive) return;
    const currentTime = new Date();
    const seconds = Math.floor((currentTime - startTime) / 1000); // Elapsed seconds
    timeDisplay.textContent = seconds;
}

// Function to calculate WPM
function calculateWPM() {
    const typedText = userInput.value.trim();
    // Count the number of words typed
    typedWords = typedText.split(/\s+/).length;
    const timeElapsed = (new Date() - startTime) / 1000 / 60; // Convert time to minutes
    const wpm = Math.round(typedWords / timeElapsed);
    return wpm;
}

// Function to check if the user has typed the sentence correctly
userInput.addEventListener('input', function () {
    const typedText = userInput.value.trim();
    const targetText = sentenceContainer.textContent.trim();

    // Check if the text typed matches the target sentence
    if (typedText === targetText) {
        endTime = new Date();
        isTestActive = false;  // Stop the timer

        // Calculate WPM and update the display
        const wpm = calculateWPM();
        wpmDisplay.textContent = wpm;

        // Show the results and the restart button
        restartBtn.style.display = "inline-block";
        userInput.disabled = true;
    }
});

// Disable right-click
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});

// Set user-select to none for the sentence container (to prevent text selection)
document.body.style.userSelect = "none";

// Initialize the test
startTest();

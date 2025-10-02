const questions = [
    // Easy Questions
    {
        question: "What is the capital city of Japan?",
        answers: [
            { text: "Beijing", correct: false },
            { text: "Seoul", correct: false },
            { text: "Tokyo", correct: true },
            { text: "Bangkok", correct: false }
        ],
        difficulty: "easy",
        points: 10
    },
    {
        question: "Which country is known for inventing pizza?",
        answers: [
            { text: "France", correct: false },
            { text: "Greece", correct: false },
            { text: "Italy", correct: true },
            { text: "Spain", correct: false }
        ],
        difficulty: "easy",
        points: 10
    },
    {
        question: "What is the traditional dress of Scotland called?",
        answers: [
            { text: "Kilt", correct: true },
            { text: "Sari", correct: false },
            { text: "Kimono", correct: false },
            { text: "Dashiki", correct: false }
        ],
        difficulty: "easy",
        points: 10
    },
    {
        question: "Which country is famous for the Taj Mahal?",
        answers: [
            { text: "Pakistan", correct: false },
            { text: "India", correct: true },
            { text: "Bangladesh", correct: false },
            { text: "Nepal", correct: false }
        ],
        difficulty: "easy",
        points: 10
    },
    {
        question: "What is the main language of Brazil?",
        answers: [
            { text: "Spanish", correct: false },
            { text: "English", correct: false },
            { text: "Portuguese", correct: true },
            { text: "French", correct: false }
        ],
        difficulty: "easy",
        points: 10
    },
    {
        question: "Which country is famous for the pyramids?",
        answers: [
            { text: "Greece", correct: false },
            { text: "Egypt", correct: true },
            { text: "Mexico", correct: false },
            { text: "Peru", correct: false }
        ],
        difficulty: "easy",
        points: 10
    },
    {
        question: "Which country is home to the Great Barrier Reef?",
        answers: [
            { text: "Australia", correct: true },
            { text: "Indonesia", correct: false },
            { text: "Philippines", correct: false },
            { text: "Thailand", correct: false }
        ],
        difficulty: "easy",
        points: 10
    },
    {
        question: "Which country celebrates Oktoberfest?",
        answers: [
            { text: "Germany", correct: true },
            { text: "Austria", correct: false },
            { text: "Switzerland", correct: false },
            { text: "Netherlands", correct: false }
        ],
        difficulty: "easy",
        points: 10
    },
    {
        question: "What is the traditional Indian dress for women called?",
        answers: [
            { text: "Kimono", correct: false },
            { text: "Sari", correct: true },
            { text: "Hanbok", correct: false },
            { text: "Dashiki", correct: false }
        ],
        difficulty: "easy",
        points: 10
    },
    {
        question: "Which country is famous for sushi?",
        answers: [
            { text: "China", correct: false },
            { text: "Japan", correct: true },
            { text: "Thailand", correct: false },
            { text: "Vietnam", correct: false }
        ],
        difficulty: "easy",
        points: 10
    },
    {
        question: "What is the traditional French bread called?",
        answers: [
            { text: "Baguette", correct: true },
            { text: "Croissant", correct: false },
            { text: "Pretzel", correct: false },
            { text: "Ciabatta", correct: false }
        ],
        difficulty: "easy",
        points: 10
    },
    {
        question: "Which country is known for the Great Wall?",
        answers: [
            { text: "Japan", correct: false },
            { text: "China", correct: true },
            { text: "South Korea", correct: false },
            { text: "Vietnam", correct: false }
        ],
        difficulty: "easy",
        points: 10
    },
    {
        question: "Which country is famous for the Statue of Liberty?",
        answers: [
            { text: "USA", correct: true },
            { text: "France", correct: false },
            { text: "UK", correct: false },
            { text: "Canada", correct: false }
        ],
        difficulty: "easy",
        points: 10
    },
    {
        question: "Which country is famous for the Colosseum?",
        answers: [
            { text: "Greece", correct: false },
            { text: "Italy", correct: true },
            { text: "Turkey", correct: false },
            { text: "Egypt", correct: false }
        ],
        difficulty: "easy",
        points: 10
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        answers: [
            { text: "China", correct: false },
            { text: "Japan", correct: true },
            { text: "South Korea", correct: false },
            { text: "Vietnam", correct: false }
        ],
        difficulty: "easy",
        points: 10
    },
    {
        question: "Which country is home to the Eiffel Tower?",
        answers: [
            { text: "Italy", correct: false },
            { text: "France", correct: true },
            { text: "Spain", correct: false },
            { text: "Germany", correct: false }
        ],
        difficulty: "easy",
        points: 10
    },
    {
        question: "What is 'hello' in Spanish?",
        answers: [
            { text: "Hola", correct: true },
            { text: "Bonjour", correct: false },
            { text: "Ciao", correct: false },
            { text: "Hallo", correct: false }
        ],
        difficulty: "easy",
        points: 10
    },
    {
        question: "What is the national dish of Italy?",
        answers: [
            { text: "Sushi", correct: false },
            { text: "Pizza", correct: true },
            { text: "Tacos", correct: false },
            { text: "Paella", correct: false }
        ],
        difficulty: "easy",
        points: 10
    },
    {
        question: "Who was the first president of the United States?",
        answers: [
            { text: "Thomas Jefferson", correct: false },
            { text: "George Washington", correct: true },
            { text: "Abraham Lincoln", correct: false },
            { text: "John Adams", correct: false }
        ],
        difficulty: "easy",
        points: 10
    },
    {
        question: "Which ancient civilization built the pyramids?",
        answers: [
            { text: "Greeks", correct: false },
            { text: "Romans", correct: false },
            { text: "Egyptians", correct: true },
            { text: "Mayans", correct: false }
        ],
        difficulty: "easy",
        points: 10
    },
    {
        question: "Who wrote the play 'Romeo and Juliet'?",
        answers: [
            { text: "William Shakespeare", correct: true },
            { text: "Charles Dickens", correct: false },
            { text: "Mark Twain", correct: false },
            { text: "Jane Austen", correct: false }
        ],
        difficulty: "easy",
        points: 10
    },
    {
        question: "Which country was the first to land on the moon?",
        answers: [
            { text: "USA", correct: true },
            { text: "Russia", correct: false },
            { text: "China", correct: false },
            { text: "India", correct: false }
        ],
        difficulty: "easy",
        points: 10
    },
    {
        question: "Who painted the Mona Lisa?",
        answers: [
            { text: "Vincent van Gogh", correct: false },
            { text: "Pablo Picasso", correct: false },
            { text: "Leonardo da Vinci", correct: true },
            { text: "Claude Monet", correct: false }
        ],
        difficulty: "easy",
        points: 10
    },
    {
        question: "What is the traditional Mexican holiday 'Day of the Dead' called?",
        answers: [
            { text: "Día de los Muertos", correct: true },
            { text: "Cinco de Mayo", correct: false },
            { text: "Navidad", correct: false },
            { text: "Quinceañera", correct: false }
        ],
        difficulty: "easy",
        points: 10
    },
    {
        question: "Which country is known for the traditional dance 'Flamenco'?",
        answers: [
            { text: "Italy", correct: false },
            { text: "Spain", correct: true },
            { text: "Greece", correct: false },
            { text: "Portugal", correct: false }
        ],
        difficulty: "easy",
        points: 10
    },
    {
        question: "What is the traditional clothing worn by Japanese women called?",
        answers: [
            { text: "Hanbok", correct: false },
            { text: "Qipao", correct: false },
            { text: "Kimono", correct: true },
            { text: "Ao Dai", correct: false }
        ],
        difficulty: "easy",
        points: 10
    },
    {
        question: "What is the capital of South Korea?",
        answers: [
            { text: "Busan", correct: false },
            { text: "Seoul", correct: true },
            { text: "Incheon", correct: false },
            { text: "Daegu", correct: false }
        ],
        difficulty: "easy",
        points: 10
    },
    {
        question: "Which country is famous for the Acropolis?",
        answers: [
            { text: "Italy", correct: false },
            { text: "Greece", correct: true },
            { text: "Turkey", correct: false },
            { text: "Egypt", correct: false }
        ],
        difficulty: "easy",
        points: 10
    },
    {
        question: "What is the traditional Mexican food made with corn dough?",
        answers: [
            { text: "Tortilla", correct: true },
            { text: "Pasta", correct: false },
            { text: "Naan", correct: false },
            { text: "Pita", correct: false }
        ],
        difficulty: "easy",
        points: 10
    },
    {
        question: "Which country is known for creating manga?",
        answers: [
            { text: "China", correct: false },
            { text: "South Korea", correct: false },
            { text: "Japan", correct: true },
            { text: "Thailand", correct: false }
        ],
        difficulty: "easy",
        points: 10
    },
    {
        question: "What is the traditional dress of Vietnam called?",
        answers: [
            { text: "Kimono", correct: false },
            { text: "Ao Dai", correct: true },
            { text: "Hanbok", correct: false },
            { text: "Cheongsam", correct: false }
        ],
        difficulty: "easy",
        points: 10
    },
    {
        question: "Which country is famous for the Machu Picchu?",
        answers: [
            { text: "Brazil", correct: false },
            { text: "Peru", correct: true },
            { text: "Colombia", correct: false },
            { text: "Chile", correct: false }
        ],
        difficulty: "easy",
        points: 10
    },
    {
        question: "What is the traditional Russian soup called?",
        answers: [
            { text: "Borscht", correct: true },
            { text: "Ramen", correct: false },
            { text: "Pho", correct: false },
            { text: "Goulash", correct: false }
        ],
        difficulty: "easy",
        points: 10
    },
    {
        question: "Which country is known for the Northern Lights?",
        answers: [
            { text: "Norway", correct: true },
            { text: "Spain", correct: false },
            { text: "Italy", correct: false },
            { text: "Greece", correct: false }
        ],
        difficulty: "easy",
        points: 10
    },

    // Medium Questions
    {
        question: "What is the longest river in the world?",
        answers: [
            { text: "Amazon River", correct: false },
            { text: "Nile River", correct: true },
            { text: "Yangtze River", correct: false },
            { text: "Mississippi River", correct: false }
        ],
        difficulty: "medium",
        points: 20
    },
    {
        question: "What is the capital of Australia?",
        answers: [
            { text: "Sydney", correct: false },
            { text: "Melbourne", correct: false },
            { text: "Canberra", correct: true },
            { text: "Brisbane", correct: false }
        ],
        difficulty: "medium",
        points: 20
    },
    {
        question: "Which festival involves throwing tomatoes at each other?",
        answers: [
            { text: "La Tomatina", correct: true },
            { text: "Carnival", correct: false },
            { text: "Holi", correct: false },
            { text: "Oktoberfest", correct: false }
        ],
        difficulty: "medium",
        points: 20
    },
    {
        question: "What is the traditional instrument of Australia?",
        answers: [
            { text: "Didgeridoo", correct: true },
            { text: "Banjo", correct: false },
            { text: "Guitar", correct: false },
            { text: "Flute", correct: false }
        ],
        difficulty: "medium",
        points: 20
    },
    {
        question: "Which country is known for the Angkor Wat temple?",
        answers: [
            { text: "Thailand", correct: false },
            { text: "Cambodia", correct: true },
            { text: "Vietnam", correct: false },
            { text: "Laos", correct: false }
        ],
        difficulty: "medium",
        points: 20
    },
    {
        question: "What is the traditional clothing of Kenya called?",
        answers: [
            { text: "Dashiki", correct: false },
            { text: "Kente", correct: false },
            { text: "Shuka", correct: true },
            { text: "Sari", correct: false }
        ],
        difficulty: "medium",
        points: 20
    },
    {
        question: "Which country is known for the haka dance?",
        answers: [
            { text: "New Zealand", correct: true },
            { text: "Australia", correct: false },
            { text: "Fiji", correct: false },
            { text: "Samoa", correct: false }
        ],
        difficulty: "medium",
        points: 20
    },
    {
        question: "Which African country is known as the 'Land of a Thousand Hills'?",
        answers: [
            { text: "Kenya", correct: false },
            { text: "Uganda", correct: false },
            { text: "Rwanda", correct: true },
            { text: "Tanzania", correct: false }
        ],
        difficulty: "medium",
        points: 20
    },
    {
        question: "What is the traditional New Year festival in Iran called?",
        answers: [
            { text: "Nowruz", correct: true },
            { text: "Diwali", correct: false },
            { text: "Eid", correct: false },
            { text: "Holi", correct: false }
        ],
        difficulty: "medium",
        points: 20
    },
    {
        question: "Which indigenous people are native to New Zealand?",
        answers: [
            { text: "Aboriginals", correct: false },
            { text: "Maori", correct: true },
            { text: "Inuit", correct: false },
            { text: "Zulu", correct: false }
        ],
        difficulty: "medium",
        points: 20
    },
    {
        question: "What is the traditional Ethiopian coffee ceremony called?",
        answers: [
            { text: "Buna", correct: true },
            { text: "Kahwa", correct: false },
            { text: "Chai", correct: false },
            { text: "Kopi", correct: false }
        ],
        difficulty: "medium",
        points: 20
    },
    {
        question: "Which Southeast Asian festival involves a water fight?",
        answers: [
            { text: "Songkran", correct: true },
            { text: "Diwali", correct: false },
            { text: "Tet", correct: false },
            { text: "Vesak", correct: false }
        ],
        difficulty: "medium",
        points: 20
    },
    {
        question: "What is the traditional Mongolian dwelling called?",
        answers: [
            { text: "Yurt", correct: true },
            { text: "Igloo", correct: false },
            { text: "Tipi", correct: false },
            { text: "Hogan", correct: false }
        ],
        difficulty: "medium",
        points: 20
    },
    {
        question: "What is the traditional Korean martial art called?",
        answers: [
            { text: "Karate", correct: false },
            { text: "Taekwondo", correct: true },
            { text: "Judo", correct: false },
            { text: "Kung Fu", correct: false }
        ],
        difficulty: "medium",
        points: 20
    },
    {
        question: "Which African country is known for its ancient rock-hewn churches?",
        answers: [
            { text: "Kenya", correct: false },
            { text: "Ethiopia", correct: true },
            { text: "Nigeria", correct: false },
            { text: "Egypt", correct: false }
        ],
        difficulty: "medium",
        points: 20
    },
    {
        question: "What is the traditional Japanese tea ceremony called?",
        answers: [
            { text: "Chanoyu", correct: true },
            { text: "Gongfu", correct: false },
            { text: "Darye", correct: false },
            { text: "Yumcha", correct: false }
        ],
        difficulty: "medium",
        points: 20
    },
    {
        question: "Which country's traditional music features the didgeridoo?",
        answers: [
            { text: "Australia", correct: true },
            { text: "New Zealand", correct: false },
            { text: "Papua New Guinea", correct: false },
            { text: "Fiji", correct: false }
        ],
        difficulty: "medium",
        points: 20
    },
    {
        question: "What is the traditional dress of Tibet called?",
        answers: [
            { text: "Chupa", correct: true },
            { text: "Kimono", correct: false },
            { text: "Hanbok", correct: false },
            { text: "Ao Dai", correct: false }
        ],
        difficulty: "medium",
        points: 20
    },

    // Hard Questions
    {
        question: "Which country was the first to use paper money?",
        answers: [
            { text: "China", correct: true },
            { text: "India", correct: false },
            { text: "Greece", correct: false },
            { text: "Egypt", correct: false }
        ],
        difficulty: "hard",
        points: 30
    },
    {
        question: "Which country was the first to abolish slavery?",
        answers: [
            { text: "USA", correct: false },
            { text: "UK", correct: false },
            { text: "France", correct: false },
            { text: "Haiti", correct: true }
        ],
        difficulty: "hard",
        points: 30
    },
    {
        question: "What is 'sun' in Russian?",
        answers: [
            { text: "Sol", correct: false },
            { text: "Soleil", correct: false },
            { text: "Solntse", correct: true },
            { text: "Sonne", correct: false }
        ],
        difficulty: "hard",
        points: 30
    },
    {
        question: "Which country is known for baklava?",
        answers: [
            { text: "Greece", correct: false },
            { text: "Turkey", correct: false },
            { text: "Lebanon", correct: false },
            { text: "All of the above", correct: true }
        ],
        difficulty: "hard",
        points: 30
    },
    {
        question: "What is 'star' in Swahili?",
        answers: [
            { text: "Estrella", correct: false },
            { text: "Étoile", correct: false },
            { text: "Nyota", correct: true },
            { text: "Stern", correct: false }
        ],
        difficulty: "hard",
        points: 30
    },
    {
        question: "Which Chinese dynasty is known for the creation of the Terracotta Army?",
        answers: [
            { text: "Qin", correct: true },
            { text: "Ming", correct: false },
            { text: "Han", correct: false },
            { text: "Tang", correct: false }
        ],
        difficulty: "hard",
        points: 30
    },
    {
        question: "What is the traditional Korean floor heating system called?",
        answers: [
            { text: "Ondol", correct: true },
            { text: "Tatami", correct: false },
            { text: "Hanok", correct: false },
            { text: "Ryokan", correct: false }
        ],
        difficulty: "hard",
        points: 30
    },
    {
        question: "Which ancient civilization built the city of Teotihuacan?",
        answers: [
            { text: "Mayans", correct: false },
            { text: "Aztecs", correct: false },
            { text: "Olmecs", correct: false },
            { text: "Teotihuacanos", correct: true }
        ],
        difficulty: "hard",
        points: 30
    },
    {
        question: "What is the traditional Vietnamese water puppet theater called?",
        answers: [
            { text: "Mua roi nuoc", correct: true },
            { text: "Kabuki", correct: false },
            { text: "Wayang kulit", correct: false },
            { text: "Nang yai", correct: false }
        ],
        difficulty: "hard",
        points: 30
    },
    {
        question: "What is the traditional Finnish winter swimming in an ice hole called?",
        answers: [
            { text: "Avantouinti", correct: true },
            { text: "Kylmäuinti", correct: false },
            { text: "Jääuinti", correct: false },
            { text: "Talviuinti", correct: false }
        ],
        difficulty: "hard",
        points: 30
    },
    {
        question: "Which traditional Peruvian musical instrument is made from clay and water?",
        answers: [
            { text: "Ocarina", correct: true },
            { text: "Quena", correct: false },
            { text: "Zampoña", correct: false },
            { text: "Charango", correct: false }
        ],
        difficulty: "hard",
        points: 30
    },
    {
        question: "What is the traditional Indonesian art of fabric dyeing called?",
        answers: [
            { text: "Batik", correct: true },
            { text: "Ikat", correct: false },
            { text: "Songket", correct: false },
            { text: "Tapis", correct: false }
        ],
        difficulty: "hard",
        points: 30
    },
    {
        question: "What is the traditional Moroccan architectural style called?",
        answers: [
            { text: "Moorish", correct: true },
            { text: "Gothic", correct: false },
            { text: "Baroque", correct: false },
            { text: "Byzantine", correct: false }
        ],
        difficulty: "hard",
        points: 30
    },
    {
        question: "Which ancient civilization invented the concept of zero?",
        answers: [
            { text: "Maya", correct: false },
            { text: "Indian", correct: true },
            { text: "Egyptian", correct: false },
            { text: "Greek", correct: false }
        ],
        difficulty: "hard",
        points: 30
    },
    {
        question: "What is the traditional Polynesian navigation method called?",
        answers: [
            { text: "Wayfinding", correct: true },
            { text: "Celestial Navigation", correct: false },
            { text: "Dead Reckoning", correct: false },
            { text: "Piloting", correct: false }
        ],
        difficulty: "hard",
        points: 30
    },
    {
        question: "Which ancient civilization first developed the concept of democracy?",
        answers: [
            { text: "Romans", correct: false },
            { text: "Greeks", correct: true },
            { text: "Persians", correct: false },
            { text: "Egyptians", correct: false }
        ],
        difficulty: "hard",
        points: 30
    },
    {
        question: "What is the traditional Chinese musical scale called?",
        answers: [
            { text: "Pentatonic", correct: true },
            { text: "Chromatic", correct: false },
            { text: "Diatonic", correct: false },
            { text: "Modal", correct: false }
        ],
        difficulty: "hard",
        points: 30
    }
]; 
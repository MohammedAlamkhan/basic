
const quotes = [
    "I dream my painting and I paint my dream. -Vincent van Gogh",
    "I would rather die of passion than of boredom. -Vincent van Gogh",
    "The sadness will last forever. -Vincent van Gogh",
    "I put my heart and my soul into my work, and have lost my mind in the process. -Vincent van Gogh",
    "I am still learning. -Vincent van Gogh",
    "I experience a period of frightening clarity in those moments when nature is so beautiful. -Vincent van Gogh",
    "If you truly love nature, you will find beauty everywhere. -Vincent van Gogh",
    "I am not an adventurer by choice but by fate. -Vincent van Gogh",
    "The more I think about it, the more I realize there is nothing more artistic than to love others. -Vincent van Gogh",
    "Love is something eternal; the aspect may change, but not the essence. -Vincent van Gogh"
  ];

  
  const quoteText = document.getElementById('quote-text');
  const quoteAuthor = document.getElementById('quote-author');
  const prevQuoteBtn = document.getElementById('prev-quote');
  const nextQuoteBtn = document.getElementById('next-quote');
  const card = document.querySelector('.card');
  
  let currentQuoteIndex = 0;
  
  function displayQuote() {
    const [quote, author] = quotes[currentQuoteIndex].split(' -');
    quoteText.textContent = quote;
    quoteAuthor.textContent = `- ${author}`;
    card.style.transform = 'rotateY(180deg)';
    setTimeout(() => {
      card.style.transform = 'rotateY(0deg)';
    }, 10);
  }
  
  prevQuoteBtn.addEventListener('click', () => {
    currentQuoteIndex = (currentQuoteIndex === 0) ? quotes.length - 1 : currentQuoteIndex - 1;
    displayQuote();
  });
  
  nextQuoteBtn.addEventListener('click', () => {
    currentQuoteIndex = (currentQuoteIndex === quotes.length - 1) ? 0 : currentQuoteIndex + 1;
    displayQuote();
  });
  
  displayQuote();
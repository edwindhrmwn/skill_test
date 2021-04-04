# MANIPULATING DATA JSON

### SUMMARY
 - I make function with console.log so user can running with nodemon or else to see the result.
 - Overall I use map for looping to get data before every another step.
 - Tasks
    1. I take general data and take data length to filter who don't have phone number, after that I push to result to get data from function.
    2. I make conditional with articles.length to find user have article and push to result to get data from function.
    3. I use regex function to get data by search string, and push it to result to get data from function.
    4. After get data published_at, I used slice function to get year string data from published_at, then comparing with deafult search (2020), last I push to result to get data from function.
    5. After get birthday user, I use slice too to get his year and comparing by default search (1986), last I push to result to get data from function.
    6. After get articles by each user, I use regex to comparing the title and I make conditional when the title same with search default, last I push to result to get data from function.
    7. After get published_at from articles, I use slice function to get data month and convert to number, when month less than 8 (august) I push to result to get data from function.
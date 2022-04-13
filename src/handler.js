module.exports = {
 top3MostLentBooksQ22021: async () => {
    
    const axios = require( 'axios' );
    let url = 'https://hiring.condorlabs.io/api/books/logs';
    const request = await axios.get( url );
    let {data } = request;

    // get items between the selected date
    data = data.filter( book =>{
        const month = book.dateOfLent.split("T")[0].split("-")[1]
        if ((parseInt(month) >= 4) && (parseInt(month) <= 6))  {
            return book; 
        }
    })


    // get unique titles of books
    let books = [];
    data.forEach((book) =>{
        books.push(book.title)
    })

    books = [...new Set(books)]
    // Add counter property

    books.map((b,i) => {return books[i] = {title: b, count:0}})


   

    for (let x = 0; x < books.length; x++) {
        data.map(b =>{
            if ( b.title === books[x].title) books[x].count =  books[x].count + 1;
        })
        
    }
    

    // Order books with more reads
    books.sort( ( bValue , aValue ) => {
        let a = aValue.count;
        let b = bValue.count;
        if ( a < b ) return -1;
            if ( a > b ) return 1;
            return 0;  
        
    } );
    
    const result =[
        books[0].title,
        books[1].title,
        books[2].title,
    ]
    return result;
}
}

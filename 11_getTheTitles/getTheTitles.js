const getTheTitles = function (books) {
    const titles = [books.length];
    for (let i = 0; i < books.length; i++) {
        titles[i] = books[i].title;
    }
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;

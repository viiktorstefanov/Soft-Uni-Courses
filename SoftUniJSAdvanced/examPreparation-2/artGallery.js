class ArtGallery {
    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = { "picture":200,"photo":50,"item":250 };
        this.listOfArticles = [];
        this.guests = [];
    }
    addArticle(articleModel, articleName, quantity ) {
        articleModel = articleModel.toLowerCase();
        quantity = Number(quantity);
        
        if(!this.possibleArticles[articleModel]) {
            throw new Error('This article model is not included in this gallery!')
        }
        
        let check = this.listOfArticles.find(x => x.articleName === articleName && x.articleModel === articleModel);
        if(this.listOfArticles.includes(this.listOfArticles.find(x => x.articleName === articleName && x.articleModel === articleModel))) {
            check.quantity += quantity
        }else {
            this.listOfArticles.push( { articleModel, articleName, quantity });
        }
         
        
        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`
    }
    inviteGuest(guestName, personality) {
        
        if(this.guests.find(x => x.guestName === guestName)) {
            throw new Error(`${guestName} has already been invited.`)
        }else {
            let points = 0;
        if(personality === 'Vip') {
            points = 500;
        }else if(personality === 'Middle') {
            points = 250;
        }else {
            points = 50;
        }
            this.guests.push({guestName, points, purchaseArticle: 0})
        }
        return `You have successfully invited ${guestName}!`
    }
    buyArticle(articleModel, articleName, guestName) {
        let check = this.listOfArticles.find(x => x.articleName === articleName && x.articleModel === articleModel);
        if(!check) {
            throw new Error('This article is not found.')
        }
        if(check.quantity == 0) {
            return `The ${articleName} is not available.`
        }
        if(!this.guests.find(x => x.guestName === guestName)) {
            return `This guest is not invited.`
        }
        let guest = this.guests.find(x => x.guestName === guestName);
        
        
        if(guest.points < this.possibleArticles[articleModel]) {
            return `You need to more points to purchase the article.`
        }else {
            guest.points -= this.possibleArticles[articleModel];
            let remove = this.listOfArticles.find(x => x.articleModel === articleModel);
            remove.quantity -= 1;
            guest.purchaseArticle += 1;
        }

        return `${guestName} successfully purchased the article worth ${this.possibleArticles[articleModel]} points.`
    }
    showGalleryInfo(criteria) {
        if(criteria == "article"){
            let articleInformationString = "Articles information:";
            let articlesArr = this.listOfArticles.map(ar=>`${ar.articleModel} - ${ar.articleName} - ${ar.quantity}`);
            return articleInformationString + "\n" + articlesArr.join("\n");
        }else if(criteria == "guest"){
            let guestsInformation = "Guests information:";
            let guestsArr = this.guests.map(g=>`${g.guestName} - ${g.purchaseArticle}`);
            return guestsInformation + "\n" + guestsArr.join("\n");
        }
    }
}
const artGallery = new ArtGallery('Curtis Mayfield'); 
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
artGallery.buyArticle('picture', 'Mona Liza', 'John');
artGallery.buyArticle('item', 'Ancient vase', 'Peter');
console.log(artGallery.showGalleryInfo('article'));
console.log(artGallery.showGalleryInfo('guest'));





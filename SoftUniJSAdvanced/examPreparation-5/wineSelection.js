class WineSelection {
    constructor(space) {
        this.space = space;
        this.wines = [];
        this.bill = 0;
    }
    reserveABottle(wineName, wineType, price) {
        if(this.space > 0) {
            this.wines.push( { wineName, wineType, price, paid: false} );
            this.space -= 1;
            return `You reserved a bottle of ${wineName} ${wineType} wine.`
        }else {
            throw new Error('Not enough space in the cellar.')
        }
    }
    payWineBottle(wineName, price) {
        let currWine = this.wines.find(x => x.wineName === wineName);
        if(currWine === undefined) {
            throw new Error(`${wineName} is not in the cellar.`)
        }
        if(currWine.paid === true) {
            throw new Error(`${wineName} has already been paid.`)
        }
        currWine.paid = true;
        this.bill += price;
        return `You bought a ${wineName} for a ${price}$.`
    }
    openBottle(wineName) {
        let currWine = this.wines.find(x => x.wineName === wineName);
        if(!this.wines.find(x => x.wineName === wineName)) {
            throw new Error(`The wine, you're looking for, is not found.`)
        }
        if(currWine.paid === false) {
            throw new Error(`${wineName} need to be paid before open the bottle.`)
        }
        let removeIndex = this.wines.indexOf(this.wines.find(x => x.wineName === wineName));
        this.wines.splice(removeIndex,1);
        return `You drank a bottle of ${wineName}.`
    }
    cellarRevision(wineType) {
        if(wineType === undefined) {
            let sorted = this.wines.sort((a,b) => a.wineName.localeCompare(b.wineName));
            let result = [];
            let sortWines = sorted.map(x => {
                let paidNotPaid = null;
                if(x.paid === true) {
                    paidNotPaid = 'Has Paid';
                }else {
                    paidNotPaid = 'Not Paid';
                }
                result.push(`${x.wineName} > ${x.wineType} - ${paidNotPaid}`)
            })
            return `You have space for ${this.space} bottles more.` + '\n' + `You paid ${this.bill}$ for the wine.` + '\n' + result.join('\n')
        }else {
            let findWine = this.wines.find(b => b.wineType == wineType);

            if (findWine) {
                let result = [];
                let paid = findWine.payed ? 'Has Paid' : 'Not Paid';
                result.push(`${findWine.wineName} > ${findWine.wineType} - ${paid}.`);
                return result.join('\n').trim();
            } else {
                throw new Error(`There is no ${wineType} in the cellar.`)
            }
        }
    }
}

let selection = new WineSelection(5);

selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144);
selection.payWineBottle('Bodegas Godelia Mencía', 144);
selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120);









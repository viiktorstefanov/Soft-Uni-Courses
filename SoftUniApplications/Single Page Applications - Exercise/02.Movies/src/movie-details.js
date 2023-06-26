let section ;

export function initialize(domElement) {
    section = domElement;
}

export async function getView(id) {
    return section;
}

let movieDetailsPage = {
    initialize,
    getView,
};

export default movieDetailsPage;
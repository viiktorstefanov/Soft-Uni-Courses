let section ;

export function initialize(domElement) {
    section = domElement;
}

export async function getView() {
    return section;
}

let nav = {
    initialize,
    getView,
};

export default nav;
export function removeOldPost(oldPosts) {
    if(oldPosts.length > 0) {
        oldPosts.forEach(x => x.remove());
    }
}
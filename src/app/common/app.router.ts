export const router = {
  getUrl(): string {
    return window.location.hash.slice(1);
  },
  deactivateLink(itemClass: string, itemActiveClass: string): void {
    const navMenuLinks = document.getElementsByClassName(itemClass);
    if (navMenuLinks)
      [...navMenuLinks].forEach((element) => {
        if (element && element.classList.contains(itemActiveClass)) {
          element.classList.remove(itemActiveClass);
        }
      });
  },
  activateLink(itemClass: string, itemActiveClass: string): void {
    const navMenuLinks = document.getElementsByClassName(itemClass);
    const hashToActivate = this.getUrl() === '' ? 'about' : this.getUrl();
    if (navMenuLinks)
      [...navMenuLinks].forEach((element) => {
        if (element && element.innerHTML.includes(hashToActivate)) {
          element.classList.add(itemActiveClass);
        }
      });
  },
};

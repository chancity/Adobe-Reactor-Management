export class PathHandler {
	constructor(pathname) {
		this.parts = pathname.substring(1, pathname.length).split('/');
		this.slice = this.parts.length % 2 === 0 ? 2 : 3;
		this.resourceUri = `/${this.parts.slice(this.parts.length-this.slice).join('/')}`
	}
}

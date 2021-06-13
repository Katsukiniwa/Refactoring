// P. 168~

// 至る所で使われている
const organization = new Organization({ name: 'sample', country: "GB" });

const result = `<h1>${getOrganization().name}</>h1`;

const newName = 'newSample'
getOrganization().name = newName;

function getOrganization() {
	return organization;
}

class Organization {
	constructor(data) {
		this._name = data.name;
		this._country = data.country;
	}

	/**
	 * @param {string} aString
	 */
	set name(aString) {
		this._name = aString;
	}

	get name() {
		return this._name;
	}

	/**
	 * @param {string} aString
	 */
	set country(aString) {
		this._country = aString;
	}

	get country() {
		return this._country;
	}
}

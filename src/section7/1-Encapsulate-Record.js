// P. 168~

// 至る所で使われている
const organization = { name: 'sample', country: "GB" };

const result = `<h1>${getRawDataOfOrganization.name}</>h1`;

const newName = 'newSample'
getRawDataOfOrganization.name = newName;

// 変数のカプセル化
function getRawDataOfOrganization() {
  return organization;
}
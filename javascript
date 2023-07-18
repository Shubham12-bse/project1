const NFTs = []

function mintNFT(_name, _age, _experience, _department) {
    const NFT = {
        "name": _name,
        "age": _age,
        "experience": _experience,
        "department": _department
    }
    NFTs.push(NFT);
    console.log("Minted:" + _name);
}

function listNFTs() {
    for (let i = 0; i < NFTs.length; i++) {
        console.log("\nName: " + NFTs[i].name);
        console.log("\nAge: " + NFTs[i].age);
        console.log("\nExperience: " + NFTs[i].experience);
        console.log("\nDepartment: " + NFTs[i].department);
    }
}

function getTotalSupply() {
    console.log(NFTs.length);
}

mintNFT("Shubham", "21", "2 years", "Software Development");
listNFTs();
getTotalSupply();

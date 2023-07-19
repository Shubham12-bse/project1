const NFTs = []

function mintNFT(_name, _age, _bodyshape, _skincolor) {
    const NFT = {
        "name": _name,
        "age": _age,
        "bodyshape": _bodyshape,
        "skincolor": _skincolor
    }
    NFTs.push(NFT);
    console.log("Minted:" + _name);
}

function listNFTs() {
    for (let i = 0; i < NFTs.length; i++) {
        console.log("\nName: " + NFTs[i].name);
        console.log("\nAge: " + NFTs[i].age);
        console.log("\nBodyshape: " + NFTs[i].bodyshape);
        console.log("\nSkincolor: " + NFTs[i].skincolor);
    }
}

function getTotalSupply() {
    console.log(NFTs.length);
}

mintNFT("Shubham", "21", "Oval", "fair");
mintNFT("Aman", "24", "Rectangle", "dark");
mintNFT("Ayush", "27", "Triangle", "fair");

listNFTs();
getTotalSupply();

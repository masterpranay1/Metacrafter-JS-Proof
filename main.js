const NftStore = []

function mintNFT (name, pitch, dynamics, timbre, duration) {
  const musicNFT = {
    name, pitch, dynamics, timbre, duration
  }

  musicNFT.id = NftStore.length + 1

  NftStore.push(musicNFT)
  console.log(`NFT ${name} minted!!`)
}

function listNFTs () {
  NftStore.forEach(nft => {
    console.log(`ID : ${nft.id}`)
    console.log(`Name : ${nft.name}`)
    console.log(`Pitch : ${nft.pitch}`);
    console.log(`Dynamics : ${nft.dynamics}`)
    console.log(`Timbre : ${nft.timbre}`)
    console.log(`Duration : ${nft.duration}`)
    console.log('\t')
  })
}

function getTotalSupply() {
  console.log(`\nCurrently there are total of ${NftStore.length} NFT's\n`)
}

mintNFT('Beethoven\'s Symphony No. 5', 'Varied', 'Orchestral', '30 Minutes')
mintNFT('AC/DC\'s "Thunderstuck"', 'High', 'Loud', 'Electric guitars and drums', '4 Minutes')
mintNFT('Miles Davis\'s "So What"', 'Moderate', 'Soft', 'Jazz quintet', '9 Minutes')

getTotalSupply()
listNFTs()

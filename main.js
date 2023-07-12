const MusicNftStore = []

function mintNFT (name, pitch, dynamics, timbre, duration) {
  const musicNFT = {
    name, pitch, dynamics, timbre, duration
  }

  musicNFT.id = MusicNftStore.length + 1

  MusicNftStore.push(musicNFT)
  console.log(`NFT ${name} minted!!`)
}

function listNFTs () {
  MusicNftStore.forEach(nft => {
    console.log(`ID\t: ${nft.id}`)
    console.log(`Name\t: ${nft.name}`)
    console.log(`Pitch\t: ${nft.pitch}`);
    console.log(`Dynamics: ${nft.dynamics}`)
    console.log(`Timbre\t: ${nft.timbre}`)
    console.log(`Duration: ${nft.duration}`)
    console.log('\n')
  })
}

function getTotalSupply() {
  console.log(`\nCurrently there are total of ${MusicNftStore.length} NFT's\n`)
}

mintNFT('Beethoven\'s Symphony No. 5', 'Varied', 'Orchestral', '30 Minutes')
mintNFT('AC/DC\'s "Thunderstuck"', 'High', 'Loud', 'Electric guitars and drums', '4 Minutes')
mintNFT('Miles Davis\'s "So What"', 'Moderate', 'Soft', 'Jazz quintet', '9 Minutes')

getTotalSupply()
listNFTs()

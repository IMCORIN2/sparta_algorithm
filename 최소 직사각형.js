function solution(sizes) {
    let walletCollection = [];
    sizes.forEach((size,i)=>{
        sizes.splice(i,1,size.reverse())
        console.log("1",sizes)
        const width = sizes.map((size)=>size[0]);
        const height = sizes.map((size)=>size[1]);
        const wallet = [Math.max(...width),Math.max(...height)];
        walletCollection.push(wallet);
    })
    console.log(walletCollection)
};
solution([[60, 50], [30, 70], [60, 30], [80, 40]]);
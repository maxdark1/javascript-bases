const getImagenPromesa = () => {
    const promesa = new Promise((res, rej) => {
        res('http://sdasdasdasdasd.com');
    })

    return promesa;
}

getImagenPromesa().then(console.log);

const getImage = async () => {
    const apiKey = 'iCGnrIvrEWG5W0EqcWTYdYWvJBmsD4sd';
    const request = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    const {data} = await request.json();
    console.log(data);
    const {url} = data.images.original;
    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);
}

getImage();
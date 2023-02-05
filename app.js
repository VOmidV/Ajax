console.log("Let's get this party started!");


$("#form").on('submit', async function(e) {
  e.preventDefault();
  const text = $("#text").val();
  const rand = Number(random());
  const gif = await getGif(text, rand);
  const img = document.createElement("iframe");
  img.src = gif;
  $('#gifs').append(img);
})

async function getGif(gif, num){
const res = await axios.get("http://api.giphy.com/v1/gifs/search", {params: {api_key: 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym', 
q: gif}});
const {data} = res;
console.log(data.data[num].url)

return data.data[num].embed_url;
}

function random() {
  return (Math.random() * 50).toFixed(0);
}

$("#remove").on('click', function(e){
  $('#gifs').text("");
})

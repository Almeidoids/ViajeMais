import axios from "axios";

// Função que pega o conteudo do Engpoint
export default async function getPosts() {
    try {
        const res = await axios.get("https://dev.to/api/articles?tag=travel");
        const data = [];

        // formata a data e passa os demais valores para a var data por meio de loop
        // Pega apenas os vinte primeiros blogs
        res.data.forEach(function (item, i) {
            if (i < 20)  {
                const date = new Date(Date(item.published_at));
                
                // formatar a data
                const day = date.getDay()
                const month = date.getMonth();
                const year = date.getFullYear();

                // passsa os valores para data
                data.push({
                    title: item.title,
                    description: item.description,
                    url: item.url,
                    data: `${day < 10 ? "0" + day : day}/${month < 10 ? "0" + month : month}/${year}`
                })
            }
        })

        return data;
    }
    catch (err) {
        console.log(err);
    }
}

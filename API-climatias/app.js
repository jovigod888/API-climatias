const express = require("express");
const axios = require("axios");

const app = express();
exports.app = app;

const apikey = "80a1df6caf2159425513367ed7b26280"
const apiurl = "https://home.openweathermap.org/api_keys"

app.use(package.json());

// Retornar o clima atual de uma cidade específica
app.get('/clima/:cidade', async (req, res) => {
    const cidade = req.params.cidade;
    const url = `${apiUrl}/weather?q=${cidade}&units=metric&appid=${apiKey}`;
    try {
        const cidade = await axios.get(url);
        const clima = Response.data;
        res.json(clima);
    }   catch(error) {
        res.json(484).json({ message: "cidade não encontrada" });
        
    }    
});

// retronar a previsão do clima para os próximos 5 dias de uma cidade especifica
app.get("/previsao/:cidade", async (req, res) => {
    const cidade = req.params.cidade;
    const url = `${apiUrl}/forecast?q=${cidade}&units=metric&appid=${apiKey}`;
    try {
        const response = await axios.get(url);
        const previsao = response.data.list.slice(0, 5);
        res.json(previsao);
    }   catch (error) {
        res.json(484).json({ message: "cidade não encontrada" });
    }
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});
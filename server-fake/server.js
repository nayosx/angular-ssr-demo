const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const app = express();

app.use(cors());

const dataPath = path.join(__dirname, 'data.json');

const SECRET_KEY = '12345678901234567890123456789012';
const IV = '1234567890123456';

function encrypt(text) {
  const cipher = crypto.createCipheriv('aes-256-cbc', SECRET_KEY, IV);
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted;
}

function decrypt(encryptedText) {
  const decipher = crypto.createDecipheriv('aes-256-cbc', SECRET_KEY, IV);
  let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}

app.get('/data/encript', (req, res) => {
  fs.readFile(dataPath, 'utf8', (err, fileData) => {
    if (err) {
      console.error('Error al leer el archivo:', err);
      return res.status(500).json({ error: 'Error al leer datos' });
    }
    try {
      const data = JSON.parse(fileData);
      const encryptedData = data.map(item => ({
        name: encrypt(item.name),
        phone: encrypt(item.phone)
      }));
      res.json(encryptedData);
    } catch (e) {
      console.error('Error al parsear JSON:', e);
      res.status(500).json({ error: 'Error al procesar datos' });
    }
  });
});

app.get('/data/decript', (req, res) => {
  fs.readFile(dataPath, 'utf8', (err, fileData) => {
    if (err) {
      console.error('Error al leer el archivo:', err);
      return res.status(500).json({ error: 'Error al leer datos' });
    }
    try {
      const data = JSON.parse(fileData);
      res.json(data);
    } catch (e) {
      console.error('Error al parsear JSON:', e);
      res.status(500).json({ error: 'Error al procesar datos' });
    }
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

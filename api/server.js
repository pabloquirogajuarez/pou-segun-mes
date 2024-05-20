const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

// Configura la conexión a tu base de datos Postgres
const pool = new Pool({
  connectionString: 'ep-bitter-water-a4t4hpr7-pooler.us-east-1.aws.neon.tech', // Reemplaza esto con tu URL de conexión
  ssl: {
    rejectUnauthorized: false
  }
});

app.use(cors());
app.use(express.json());

// Endpoint para obtener comentarios
app.get('/comentarios', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM comentarios');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error al obtener comentarios');
  }
});

// Endpoint para agregar un comentario
app.post('/comentarios', async (req, res) => {
  const { usuario, comentario } = req.body;
  try {
    await pool.query('INSERT INTO comentarios (usuario, comentario) VALUES ($1, $2)', [usuario, comentario]);
    res.status(201).send('Comentario agregado');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error al agregar comentario');
  }
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let items = [];

// POST 
app.post('/items', (req, res) => {
  const item = req.body;  
  item.id = items.length + 1;  
  items.push(item); 
  res.status(201).send('Item ajouté avec succès');
});

// GET all
app.get('/items', (req, res) => {
  res.json(items);  
});

// get id
app.get('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);  
  const item = items.find(i => i.id === id); 
  
  if (item) {
    res.json(item);  
  } else {
    res.status(404).send('Item non trouvé');
  }
});

// PUT
app.put('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  let item = items.find(i => i.id === id);
  
  if (item) { //update if u find item
    Object.assign(item, req.body);  
    res.send('Item mis à jour avec succès');
  } else {
    res.status(404).send('Item non trouvé');
  }
});

// delete
app.delete('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = items.findIndex(i => i.id === id);

  if (index !== -1) {
    items.splice(index, 1);  
    res.send('Item supprimé avec succès');
  } else {
    res.status(404).send('Item non trouvé');
  }
});


app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});

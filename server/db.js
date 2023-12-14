const Pool = require('pg').Pool
const pool = new Pool({
user: 'student',
host: 'localhost',
database: 'linksapi',
password: 'studentPassword123',
port: 5432,
})

const createLink = (req, res) => {
    
    const { name , url } = req.body;
    pool.query('INSERT INTO favlinks (name, url) VALUES ($1, $2) RETURNING *',
    [name, url],
     
    (error, result) => {
        if (error) throw error;
        else res.status(201).json(result.rows[0]);
    });
};

const getLinks = (req, res) => {
    
    pool.query('SELECT * FROM favlinks ORDER BY id ASC',
    
    (error, result) => {
        if (error) throw error;
        else res.status(200).json(result.rows);
    })
}

const updateLink = (req, res) => {
    
    const id = parseInt(req.params.id)
    const { name, url } = req.body

    pool.query('UPDATE favlinks SET name = $1, url = $2 WHERE id = $3',
    [name, url, id],
    
    (error, result) => {
        if (error) throw error;
        else res.status(200).json(result.rows);
    })
  };
  
const deleteLink = (req, res) => {
    
    const id = parseInt(req.params.id)

    pool.query('DELETE FROM favlinks WHERE id = $1',
    [id], 

    (error, result) =>{
        if (error) throw error;
        else res.status(200).json(result.rows)
    })

  };

module.exports = {
    createLink,
    getLinks,
    updateLink,
    deleteLink
}
const Pool = require('pg').Pool
const pool = new Pool({
user: 'student',
host: 'localhost',
database: 'linksapi',
password: 'studentPassword123',
port: 5432,
})

const createLink = (req, res) => {
    /*
    const { url, description } = req.body;

    // Validate input data
    if (!url || !description) {
        return res.status(400).json({ error: 'URL and description are required.' });
    }

    pool.query('INSERT INTO favlinks (url, description) VALUES ($1, $2) RETURNING *', [url, description], (error, result) => {
        if (error) throw error
        res.status(201).json(result.rows[0]);
    });
    */
};

const getLinks = (req, res) => {
    pool.query('SELECT * FROM favlinks ORDER BY id ASC', (error, result) => {
        if (error) throw error
        res.status(200).json(result.rows)
    })
}

const updateLink = (req, res) => {
    
  };
  
  const deleteLink = (req, res) => {
    
  };

module.exports = {
    createLink,
    getLinks,
    updateLink,
    deleteLink
}
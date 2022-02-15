import path from 'path';
import fs from 'fs/promises';

const handler = async (req, res) => {
  const filePath = path.join(
    process.cwd(),
    'data',
    'heroes.json'
  );
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  if (req.method === 'GET') {
    try {
      const heroes = data.heroes
      res.status(200).json(heroes);

      return;
    } catch (error) {

      res.status(500).json({ message: 'error' });

      return;
    }
  }
};

export default handler;
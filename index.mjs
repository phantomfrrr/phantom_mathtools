import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// 1. Tell Express where the folder is
app.use(express.static(path.join(__dirname, 'static')));

// 2. EXPLICITLY send the file when someone hits the home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'index.html'));
});

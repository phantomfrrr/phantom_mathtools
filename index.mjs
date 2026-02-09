import express from 'express';
import { createServer } from 'node:http';
import { uvPath } from '@titaniumnetwork-dev/ultraviolet';
import path from 'node:path';

const app = express();
const server = createServer(app);

// 1. Serve the Ultraviolet proxy scripts
app.use('/uv/', express.static(uvPath));

// 2. Serve your "educational" frontend
app.use(express.static(path.join(process.cwd(), 'public')));

// 3. Fallback for the proxy's internal routing
app.use((req, res) => {
    res.status(404).sendFile(path.join(process.cwd(), 'public/404.html'));
});

const port = process.env.PORT || 8080;
server.listen(port, () => {
    console.log(`Research portal active on port ${port}`);
});

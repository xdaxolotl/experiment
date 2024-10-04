document.getElementById('generateButton').addEventListener('click', () => {
    const title = document.getElementById('pageTitle').value;
    const content = document.getElementById('pageContent').value;

    if (title && content) {
        const newPage = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${title}</title>
            <style>
                body { font-family: Arial, sans-serif; padding: 20px; }
                h1 { color: #333; }
            </style>
        </head>
        <body>
            <h1>${title}</h1>
            <p>${content}</p>
        </body>
        </html>
        `;

        const blob = new Blob([newPage], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `${title}.html`;
        link.innerHTML = 'Download your page';
        document.getElementById('output').innerHTML = '';
        document.getElementById('output').appendChild(link);
    } else {
        alert('Please enter both title and content.');
    }
});

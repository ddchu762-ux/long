module.exports = (req, res) => {
  // 替换为你实际可访问的图片 URL（绝对 URL）
  const images = [
    'https://ddchu762-ux.github.io/long/3.jpg',
    'https://ddchu762-ux.github.io/long/4.jpg',
    'https://ddchu762-ux.github.io/long/5.jpg'
  ];

  const i = parseInt(req.query && req.query.i, 10);
  if (!Number.isNaN(i) && i >= 0 && i < images.length) {
    const target = images[i];
    res.writeHead(302, { Location: target });
    return res.end();
  }

  const idx = Math.floor(Math.random() * images.length);
  const target = images[idx];

  res.writeHead(302, { Location: target });
  res.end();
};

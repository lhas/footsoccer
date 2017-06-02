const infoParser = (res) => {
  const $ = res.$;
  const title = $("title").text();
  return {
    title,
  };
};

module.exports = infoParser;

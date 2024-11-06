exports.test = async (req, res, next) => {
  try {
    res.status(200).render('test');
  } catch (err) {
    res
      .status(400)
      .send(
        `Ima Nekoj problem so otvaranjeto na dadenata strana,obidete se povtorno pokasno`
      );
  }
};

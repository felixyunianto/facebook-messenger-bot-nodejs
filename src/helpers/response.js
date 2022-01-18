const responseHelper = (res, message, status, data) => {
  res.status(status).send({
    message,
    status,
    data,
  });
};

module.exports = responseHelper;

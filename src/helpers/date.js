module.exports = {
  isValidDate: (date) => {
    let regEx = /^\d{4}-\d{2}-\d{2}$/;

    if (!date.match(regEx)) return false;

    let day = new Date(date);
    let dayNum = day.getTime();

    if (!dayNum && !dayNum !== 0) return false;

    return day.toISOString().slice(0, 10) === date;
    Î;
  },

  calculateNextBirthday: (date) => {
    let oneDay = 1000 * 3600 * 24;

    let today = new Date();
    let arrayDate = date.split("-");
    arrayDate[0] = today.getFullYear();
    let birthDay = new Date(arrayDate.join("-"));

    console.log("TODAY", today);
    console.log("BIRTH", birthDay);

    console.log(today.getTime() - birthDay.getTime());
    console.log("DIFF", (today.getTime() - birthDay.getTime()) / oneDay);

    return Math.ceil((birthDay.getTime() - today.getTime()) / oneDay);
  },
};

const { ifElse, always } = require('ramda');
const versionCtrl = async () => {
  try {
    return ifElse(
      () => Math.random() < 0.5,
      always({
        versionId: '1',
        homePageTitle: "Version 1",
        checkout: [
          {
            basket: {
              nextAction: "account",
              title: "Version 1 : Basket is the first step"
            }
          },
          {
            account: {
              nextAction: "submit",
              title: "Version 1 : Account is the second step"
            }
          }
        ]
      }),
      always({
        versionId: '2',
        homePageTitle: "Version 2",
        checkout: [
          {
            basket: {
              nextAction: "submit",
              title: "Version 2 : Basket is the second step"
            }
          },
          {
            account: {
              nextAction: "basket",
              title: "Version 2 : Account is the first step"
            }
          }
        ]
      }),
    )();

  } catch (err) {
   console.error(`Error in getVersion controller : ${err}`);
    return null;
  }
};

module.exports = versionCtrl;

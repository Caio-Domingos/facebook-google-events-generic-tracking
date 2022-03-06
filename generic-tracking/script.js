// Id tracker

// genericEventTracker
// ${eventtype}&${eventname}
// ${eventcategory}&${eventaction}

const trackingItens = document.querySelectorAll('[id|=genericEventTracker]');

console.log('trackings => ', trackingItens);

trackingItens.forEach((element) => {
    console.log('atual element => ', element);

    element.onclick = function (t) {
        console.log('Clicked!');

        console.log('My ID => ', t.target.id);
        const splittedID = t.target.id.split('-');
        console.log('My ID splited => ', splittedID);
        const fbData = splittedID[1];
        console.log('FB values => ', fbData);
        const gaData = splittedID[2];
        console.log('GA values => ', gaData);

        // fb tracking
        if (fbData) {
            console.log('Dispatch fbq ====>');
            const fbEvent = fbData.split('&')[0];
            const fbValue = fbData.split('&')[1];

            console.log(`fbq('${fbEvent}', '${fbValue}');`);
            // fbq(fbEvent, fbValue);
        }

        // ga tracking
        if (gaData) {
            console.log('Dispatch ga ====>');
            const gaCategory = gaData.split('&')[0];
            const gaAction = gaData.split('&')[1];

            console.log(`ga('send', 'event', '${gaCategory}', '${gaAction}');`);
            // ga('send', 'event', gaCategory, gaAction);
        }
    };
});

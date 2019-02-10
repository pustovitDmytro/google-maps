import SaveMap from './lib/services/SaveMap';
import Runner from './lib/Runner';

(new Runner()).run(SaveMap, {
    top    : 49.59821,
    bottom : 49.5859085,
    right  : 34.5860448,
    left   : 34.5429603,
    zoom   : 17
});

// async function doJob() {
//     if (!jobs.length) return;
//     console.log('job', jobs[0]);
//     try {
//         await driver.get(jobs[0]);
//         const title = await driver.findElement(By.css('div.offer-titlebox > h1'));

//         console.log('title: ', await title.getText());
//         const text = await driver.findElement(By.id('textContent'));

//         console.log('text: ', await text.getText());
//     } finally {
//         jobs.shift();
//     }
// }

// function run() {
//     setTimeout(async () => {
//         try {
//             await doJob();
//             run();
//         } catch (e) {
//             console.error(e);
//             run();
//         }
//     }, 1000);
// }

// run();

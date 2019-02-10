import { URL } from 'url';
import driver from '../driver';
import Map from '../models/Map';
import Runner from '../Runner';
import sequelize from '../sequelize';


const  { By, Key, until } = require('selenium-webdriver');

const url = 'https://www.google.com/maps/';

export default async function saveMap({ left, top, bottom, right, zoom }) {
    console.log('left, top, bottom, right, zoom: ', left, top, bottom, right, zoom);
    try {
        // await driver.manage();
        // await driver.window().setSize(1280, 1000);
        await driver.get(`${url}@${top},${left},${zoom}z`);
        // await driver.executeAsyncScript('window.scrollBy(3000,0)');
        console.log(await driver.getCurrentUrl());
        await driver.wait(until.elementLocated(By.tagName('canvas')));
        await driver.wait(until.elementLocated(By.id('runway-expand-button')));
        const canvas = await driver.findElement(By.tagName('canvas'));
        // const sideBarButton = await driver.findElement(By.css('button.widget-pane-toggle-button'));
        // full-screen

        // await sideBarButton.click();
        console.log(await canvas.getAttribute('style'));
        await canvas.click();
        // const actions = driver.actions({ bridge: true });
        // console.log('actions: ', actions);
        await canvas.sendKeys(Key.ARROW_RIGHT);
        // await actions.move({ duration: 5000, origin: canvas, x: 300, y: 300 }).perform();
        // await driver.actions().dragAndDrop(canvas, { x: 300, y: 300 }).perform();
        console.log(await driver.getCurrentUrl());

        // const items = await driver.findElements(By.css('div.offer-wrapper'));
        // const transaction = await sequelize.transaction();
        // const urls = await Promise.all(items.map(async i => {
        //     const link = await i.findElement(By.css('a.detailsLink'));
        //     const href = await link.getAttribute('href');
        //     const { pathname } = new URL(href);


        //     return pathname;
        // }));
        // const postsInDb = await Post.findAll();
        // const linksInDb = postsInDb.map(p => p.link);
        // const newLinks = [ ...new Set(urls) ]
        //     .filter(u => u && !linksInDb.find(l => l === u))
        //     .map(u => ({ link: u }));

        // if (newLinks.length) {
        //     await Post.bulkCreate(newLinks);
        // }
        // const nextPageSpan = await driver.findElement(By.css('span.fbold.next.abs.large'));
        // const nextPageLink = await nextPageSpan.findElement(By.tagName('a'));

        // if (nextPageLink) {
        //     const nextPageUrl = await nextPageLink.getAttribute('href');

        //     setTimeout(() => {
        //         findPostsRunner.run(findPosts, nextPageUrl);
        //     }, 1000);
        // } else {
        //     await driver.quit();
        // }
    } catch (error) {
        await driver.quit();
        throw error;
    }
}

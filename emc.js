// @ts-check
import { BeHive, seed, MountObserver } from 'be-hive/be-hive.js';
import { emc as baseEMC } from 'be-render-neutral/emc.js';
/** @import {EMC, EventListenerOrFn} from './ts-refs/trans-render/be/types' */
/** @import {Actions, PAP,  AP} from './ts-refs/be-render-neutral/types' */;
/** @import {CSSQuery} from './ts-refs/trans-render/types.js' */

/**
 * @type {Partial<EMC<any, AP>>}
 */
export const emc = {
    ...baseEMC,
    base: 'be-preactive',
    enhPropKey: 'bePreactive',
    importEnh: async () => {
        const { BePreactive } = 
        /** @type {{new(): IEnhancement<Element>}} */ 
        /** @type {any} */
        (await import('./be-preactive.js'));
        return BePreactive;
    },
};

const mose = seed(emc);
MountObserver.synthesize(document, BeHive, mose);

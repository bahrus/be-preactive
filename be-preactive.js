// @ts-check
import { render } from 'preact';
import { html } from 'htm/preact';
import {dispatchEvent as de} from 'trans-render/positractions/dispatchEvent.js';
import {BeRenderNeutral} from 'be-render-neutral/be-render-neutral.js';

/** @import {BEConfig, IEnhancement, BEAllProps} from './ts-refs/be-enhanced/types' */
/** @import {Actions, PAP,  AP, BAP} from './ts-refs/be-render-neutral/types' */;
/** @import {Specifier} from './ts-refs/trans-render/dss/types' */

/**
 * @implements {Actions}
 * 
 */
class BePreactive extends BeRenderNeutral {

    /**
     * 
     * @param {BAP} self 
     */
    doRender(self) {
        const {renderer, vm, enhancedElement} = self;
        const {parentElement} = enhancedElement;
        if(parentElement === null) throw 400;
        render(renderer(vm, html), parentElement);
    }

}

await BePreactive.bootUp();
export {BePreactive}
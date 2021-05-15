/* tslint:disable */
/* eslint-disable */
/**
 * Museum
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface Exhibition
 */
export interface Exhibition {
    /**
     * 
     * @type {string}
     * @memberof Exhibition
     */
    name_exhibi?: string;
    /**
     * 
     * @type {string}
     * @memberof Exhibition
     */
    image_exhibi?: string;
    /**
     * 
     * @type {string}
     * @memberof Exhibition
     */
    cost_exhibi?: string;
    /**
     * 
     * @type {string}
     * @memberof Exhibition
     */
    name_guide?: string;
    /**
     * 
     * @type {string}
     * @memberof Exhibition
     */
    image_guide?: string;
    /**
     * 
     * @type {string}
     * @memberof Exhibition
     */
    ratio_guide?: string;
}

export function ExhibitionFromJSON(json: any): Exhibition {
    return ExhibitionFromJSONTyped(json, false);
}

export function ExhibitionFromJSONTyped(json: any, ignoreDiscriminator: boolean): Exhibition {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name_exhibi': !exists(json, 'name-exhibi') ? undefined : json['name-exhibi'],
        'image_exhibi': !exists(json, 'image-exhibi') ? undefined : json['image-exhibi'],
        'cost_exhibi': !exists(json, 'cost-exhibi') ? undefined : json['cost-exhibi'],
        'name_guide': !exists(json, 'name-guide') ? undefined : json['name-guide'],
        'image_guide': !exists(json, 'image-guide') ? undefined : json['image-guide'],
        'ratio_guide': !exists(json, 'ratio-guide') ? undefined : json['ratio-guide'],
    };
}

export function ExhibitionToJSON(value?: Exhibition | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name-exhibi': value.name_exhibi,
        'image-exhibi': value.image_exhibi,
        'cost-exhibi': value.cost_exhibi,
        'name-guide': value.name_guide,
        'image-guide': value.image_guide,
        'ratio-guide': value.ratio_guide,
    };
}



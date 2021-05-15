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
 * @interface Shop
 */
export interface Shop {
    /**
     * 
     * @type {string}
     * @memberof Shop
     */
    name_product?: string;
    /**
     * 
     * @type {string}
     * @memberof Shop
     */
    image_product?: string;
    /**
     * 
     * @type {string}
     * @memberof Shop
     */
    cost_exhibi?: string;
    /**
     * 
     * @type {string}
     * @memberof Shop
     */
    price?: string;
}

export function ShopFromJSON(json: any): Shop {
    return ShopFromJSONTyped(json, false);
}

export function ShopFromJSONTyped(json: any, ignoreDiscriminator: boolean): Shop {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name_product': !exists(json, 'name-product') ? undefined : json['name-product'],
        'image_product': !exists(json, 'image-product') ? undefined : json['image-product'],
        'cost_exhibi': !exists(json, 'cost-exhibi') ? undefined : json['cost-exhibi'],
        'price': !exists(json, 'price') ? undefined : json['price'],
    };
}

export function ShopToJSON(value?: Shop | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name-product': value.name_product,
        'image-product': value.image_product,
        'cost-exhibi': value.cost_exhibi,
        'price': value.price,
    };
}



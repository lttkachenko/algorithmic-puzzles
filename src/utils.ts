import { faker } from '@faker-js/faker';

import { ObjectLiteral } from './types';
import { dateStart } from "./constants";

export type ArrayItem = string | number | ObjectLiteral;
export const day = 60 * 60 * 24 * 1000;

export const isJSON = (str: string): boolean => {
  if (!str || !str.length) return false;

  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }

  return true;
};

export const arraySelectRandom = (arr: ArrayItem[]): ArrayItem => arr[Math.floor(Math.random() * arr.length)];

export const objectSelectRandomProp = (obj: ObjectLiteral): unknown => {
  const keys: string[] = Object.keys(obj);
  return obj[arraySelectRandom(keys) as string];
}

export const dateCreateRandom = (startsFrom: string = dateStart, timeZone = 'utc'): string => {
  return faker.date.between(startsFrom, new Date()).toISOString();
};

export const dateAddDay = (originalDate: string, timeZone = 'utc'): string => {
  const date = new Date(originalDate);
  return new Date(date.getTime() + day).toISOString();
};

export const dateRemoveDay = (originalDate: string, timeZone = 'utc'): string => {
  const date = new Date(originalDate);
  return new Date(date.getTime() - day).toISOString();
};

export const randomIntBetween = (min: number, max: number) => Math.floor(Math.random() * max) + min;

export const toJSONB = (input: ObjectLiteral | ObjectLiteral[]): string => {
  return JSON.stringify(input, null, '  ').replace(/"/g, "'").replace(/\\'/g, '"');
}

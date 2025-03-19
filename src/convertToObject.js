'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  if (!sourceString || !sourceString.trim()) {
    return {};
  }

  const result = {};
  const declarations = sourceString.split(';');

  for (const declaration of declarations) {
    const trimmedDecl = declaration.trim();

    if (!trimmedDecl) {
      continue;
    }

    const colonIndex = trimmedDecl.indexOf(':');

    if (colonIndex === -1) {
      continue;
    }

    const property = trimmedDecl.substring(0, colonIndex).trim();
    const value = trimmedDecl.substring(colonIndex + 1).trim();

    result[property] = value;
  }

  return result;
}

module.exports = convertToObject;

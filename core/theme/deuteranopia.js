/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Deuteranopia theme.
 * A color palette for people that have deuteranopia(the inability to perceive
 * green light). This can also be used for people that have protanopia(the
 * inability to perceive red light).
 */
'use strict';

goog.provide('Blockly.Themes.Deuteranopia');

goog.require('Blockly.Theme');


// Temporary holding object.
Blockly.Themes.Deuteranopia = {};

Blockly.Themes.Deuteranopia.defaultBlockStyles = {
  "colour_blocks": {
    "colourPrimary": "#f2a72c",
    "colourSecondary": "#f1c170",
    "colourTertiary": "#da921c"
  },
  "list_blocks": {
    "colourPrimary": "#7d65ab",
    "colourSecondary": "#a88be0",
    "colourTertiary": "#66518e"
  },
  "logic_blocks": {
    "colourPrimary": "#9fd2f1",
    "colourSecondary": "#c0e0f4",
    "colourTertiary": "#74bae5"
  },
  "loop_blocks": {
    "colourPrimary": "#795a07",
    "colourSecondary": "#ac8726",
    "colourTertiary": "#c4a03f"
  },
  "math_blocks": {
    "colourPrimary": "#e6da39",
    "colourSecondary": "#f3ec8e",
    "colourTertiary": "#f2eeb7"
  },
  "procedure_blocks": {
    "colourPrimary": "#590721",
    "colourSecondary": "#8c475d",
    "colourTertiary": "#885464"
  },
  "text_blocks": {
    "colourPrimary": "#058863",
    "colourSecondary": "#5ecfaf",
    "colourTertiary": "#04684c"
  },
  "variable_blocks": {
    "colourPrimary": "#47025a",
    "colourSecondary": "#820fa1",
    "colourTertiary": "#8e579d"
  },
  "variable_dynamic_blocks": {
    "colourPrimary": "#47025a",
    "colourSecondary": "#820fa1",
    "colourTertiary": "#8e579d"
  }
};

Blockly.Themes.Deuteranopia.categoryStyles = {
  "colour_category": {
    "colour": "#f2a72c"
  },
  "list_category": {
    "colour": "#7d65ab"
  },
  "logic_category": {
    "colour": "#9fd2f1"
  },
  "loop_category": {
    "colour": "#795a07"
  },
  "math_category": {
    "colour": "#e6da39"
  },
  "procedure_category": {
    "colour": "#590721"
  },
  "text_category": {
    "colour": "#058863"
  },
  "variable_category": {
    "colour": "#47025a"
  },
  "variable_dynamic_category": {
    "colour": "#47025a"
  }
};

Blockly.Themes.Deuteranopia =
    new Blockly.Theme(Blockly.Themes.Deuteranopia.defaultBlockStyles,
        Blockly.Themes.Deuteranopia.categoryStyles);

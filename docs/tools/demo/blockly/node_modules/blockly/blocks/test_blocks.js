goog.provide('Blockly.TestBlocks');

goog.require('Blockly');
goog.require('Blockly.Blocks');

Blockly.Blocks['test'] = {
  init: function() {
    this.appendValueInput();
  }
};

Blockly.defineBlocksWithJsonArray([
  {
    'type': 'test_block',
    'message0': '%1',
    'args0': [{'type': 'field_colour', 'name': 'COLOUR', 'colour': '#ff0000'}],
    'output': 'Colour',
    'helpUrl': '%{BKY_COLOUR_PICKER_HELPURL}',
    'style': 'colour_blocks',
    'tooltip': '%{BKY_COLOUR_PICKER_TOOLTIP}',
    'extensions': ['parent_tooltip_when_inline']
  },
]);

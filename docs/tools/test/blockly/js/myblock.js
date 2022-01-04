Blockly.defineBlocksWithJsonArray(
    [{
        "type": "entrypoint",
        "message0": "%1",
        "args0": [
            {
                "type": "input_statement",
                "name": " Entry"
            }
        ],
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "events",
        "message0": "キー／マウスの状態が変更されたら %1 %2",
        "args0": [
            {
                "type": "input_dummy"
            },
            {
                "type": "input_statement",
                "name": "NAME"
            }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 60,
        "tooltip": "イベント",
        "helpUrl": ""
    },
    {
        "type": "action_tap",
        "message0": "%1 を押した後 %2 %3 ms待機 %4 離した後 %5 ms待機 %6",
        "args0": [
            {
                "type": "field_input",
                "name": "key",
                "text": "A"
            },
            {
                "type": "input_dummy"
            },
            {
                "type": "field_input",
                "name": "wait1",
                "text": "0"
            },
            {
                "type": "input_dummy"
            },
            {
                "type": "field_input",
                "name": "wait2",
                "text": "0"
            },
            {
                "type": "field_checkbox",
                "name": "NAME",
                "checked": true
            }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 210,
        "tooltip": "説明",
        "helpUrl": "URL?"
    },
    {
        "type": "variable",
        "message0": "変数 %1 に %2 を代入",
        "args0": [
            {
                "type": "input_value",
                "name": "name",
                "check": [
                    "ABC",
                    "DEF"
                ]
            },
            {
                "type": "input_value",
                "name": "value"
            }
        ],
        "inputsInline": true,
        "colour": 330,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "statement_loop_by_num",
        "message0": "ループ %1 回 %2 %3",
        "args0": [
            {
                "type": "field_input",
                "name": "loopCount",
                "text": "10"
            },
            {
                "type": "input_dummy"
            },
            {
                "type": "input_statement",
                "name": "blocks"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
    }]
);


Blockly.JavaScript['entrypoint'] = function (block) {
    var statements__entry = Blockly.JavaScript.statementToCode(block, ' Entry');
    // TODO: Assemble JavaScript into code variable.
    var code = `[Action]\nvoid Main()\n{\n${statements__entry}}\n`;
    return code;
};

Blockly.JavaScript['events'] = function (block) {
    var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return 'KeyStatusChanged += (sender, e) =>\n{\n' + statements_name + '};\n';
};

Blockly.JavaScript['action_tap'] = function (block) {
    var text_key = block.getFieldValue('key');
    var wait1 = block.getFieldValue('wait1');
    var wait2 = block.getFieldValue('wait2');
    var isChecked = block.getFieldValue('NAME') == 'TRUE';
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    //return 'Tap(Keys.' + text_key + ', ' + text_wait1 + ', ' + text_wait2 + ', ' + checkbox_name + ');';
    return `Tap(Keys.${text_key}, ${wait1}, ${wait2}, ${isChecked});\n`;
};

Blockly.JavaScript['variable'] = function (block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'name', Blockly.JavaScript.ORDER_ATOMIC);
    var value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};

Blockly.JavaScript['statement_loop_by_num'] = function (block) {
    var loopcount = block.getFieldValue('loopCount');
    var blocks = Blockly.JavaScript.statementToCode(block, 'blocks');
    // TODO: Assemble JavaScript into code variable.
    var code = `for (var i = 0; i < ${loopcount}; i++)\n{\n${blocks}}\n`;
    return code;
};
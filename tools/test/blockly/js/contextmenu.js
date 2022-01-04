
function registerFirstContextMenuOptions() {
    const workspaceItem = {
        displayText: "Hello World!",
        preconditionFn: function (scope) {
            const now = new Date(Date.now());
            return now.getSeconds() % 2 == 0 ? "enabled" : "disabled";
        },
        callback: function (scope) {
            console.log("You clicked context menu item!");
            console.log(scope);
        },
        //scopeType: Blockly.ContextMenuRegistry.ScopeType.BLOCK,
        scopeType: Blockly.ContextMenuRegistry.ScopeType.WORKSPACE,
        id: "hello_world",
        weight: 100,
    };
    Blockly.ContextMenuRegistry.registry.register(workspaceItem);
}
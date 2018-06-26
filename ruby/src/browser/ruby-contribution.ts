import { injectable, inject } from "inversify";
import { CommandContribution, CommandRegistry, MenuContribution, MenuModelRegistry, MessageService } from "@theia/core/lib/common";
import { CommonMenus } from "@theia/core/lib/browser";

export const RubyCommand = {
    id: 'ruby.command',
    label: "Shows a message"
};

@injectable()
export class RubyCommandContribution implements CommandContribution {

    constructor(
        @inject(MessageService) private readonly messageService: MessageService,
    ) { }

    registerCommands(registry: CommandRegistry): void {
        registry.registerCommand(RubyCommand, {
            execute: () => this.messageService.info('Hello World!')
        });
    }
}

@injectable()
export class RubyMenuContribution implements MenuContribution {

    registerMenus(menus: MenuModelRegistry): void {
        menus.registerMenuAction(CommonMenus.EDIT_FIND, {
            commandId: RubyCommand.id,
            label: 'Say Hello'
        });
    }
}
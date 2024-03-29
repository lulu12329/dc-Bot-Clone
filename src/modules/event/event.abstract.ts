import { Events } from 'discord.js';

export abstract class AEvent {
  abstract readonly event: Events;
  abstract readonly once: boolean;

  public abstract execute(arg: any): Promise<boolean>;

  protected async run(command: () => any): Promise<boolean> {
    try {
      await command();
      return true;
    } catch (e) {
      console.error(e);
      return false;
    }
  }
}

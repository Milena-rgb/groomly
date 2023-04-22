import { GuestDto } from './guest.model';
import { Guest, IGuest } from './guest.schema';

export class GuestService {

  static async getAll(): Promise<GuestDto[]> {
    const guests: IGuest[] | void = await Guest.find().catch(console.log);
    return (guests || []).map((guest: IGuest) => ({ id: guest.id, name: guest.name }))
  }

  static async create(todo: GuestDto): Promise<GuestDto> {
    const newGuest: IGuest | void = await Guest.create(todo).catch(console.log);
    if (newGuest) {
      return { id: newGuest?.id, name: newGuest?.name };
    }
    return null;
  }

  static async delete(id: string): Promise<boolean> {
    const deletedGuest: IGuest | void = await Guest.findByIdAndDelete(id).catch(console.log);
    return !!deletedGuest;
  }
}

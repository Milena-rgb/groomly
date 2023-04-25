import { GuestDto } from './guest.model';
import { Guest, IGuest } from './guest.schema';

export class GuestService {

  static async getAll(): Promise<GuestDto[]> {
    const guests: IGuest[] | void = await Guest.find().catch(console.log);
    return (guests || []).map((guest: IGuest) => (
      {
        id: guest.id,
        name: guest.name,
        accepted: guest.accepted,
        needsAccommodation: guest.needsAccommodation,
        vegetarien: guest.vegetarien,
        vegan: guest.vegan,
        lactoseIntolerant: guest.lactoseIntolerant,
        eatsPork: guest.eatsPork,
        song: guest.song,
        comment: guest.comment
      }))
  }

  static async create(guest: GuestDto): Promise<GuestDto> {
    const newGuest: IGuest | void = await Guest.create(guest).catch(console.log);
    if (newGuest) {
      return {
        id: newGuest?.id,
        name: newGuest?.name,
        accepted: newGuest?.accepted,
        needsAccommodation: newGuest?.needsAccommodation,
        vegetarien: newGuest?.vegetarien,
        vegan: newGuest?.vegan,
        lactoseIntolerant: newGuest?.lactoseIntolerant,
        eatsPork: newGuest?.eatsPork,
        song: newGuest?.song,
        comment: newGuest?.comment
      };
    }
    return null;
  }

  static async update(id: string): Promise<boolean> {
    const updatedGuest: IGuest | void = await Guest.findByIdAndUpdate(id).catch(console.log);
    return !!updatedGuest;
  }

  static async delete(id: string): Promise<boolean> {
    const deletedGuest: IGuest | void = await Guest.findByIdAndDelete(id).catch(console.log);
    return !!deletedGuest;
  }
}

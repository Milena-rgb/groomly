import { EventDto } from './event.model';
import { IEvent, Event } from './event.schema';

export class EventService {

  static async create(event: EventDto): Promise<EventDto> {
    const newEvent: IEvent | void = await Event.create(event).catch(console.log);
    if (newEvent) {
      return {
        id: newEvent?.id,
        name: newEvent?.name,
        host: newEvent?.host,
        eventLocation: newEvent?.eventLocation,
        eventDateTime: newEvent?.eventDateTime,
        description: newEvent?.description
      };
    }
    return null;
  }

  static async update(id: string): Promise<boolean> {
    const updatedEvent: IEvent | void = await Event.findByIdAndUpdate(id).catch(console.log);
    return !!updatedEvent;
  }

  static async delete(id: string): Promise<boolean> {
    const deletedEvent: IEvent | void = await Event.findByIdAndDelete(id).catch(console.log);
    return !!deletedEvent;
  }
}

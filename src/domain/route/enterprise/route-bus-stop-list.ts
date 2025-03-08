import { WatchedList } from "src/core/entities/watched-list";
import type { RouteBusStop } from "./route-bus-stop";

export class RouteBusStopList extends WatchedList<RouteBusStop> {
    compareItems(a: RouteBusStop, b: RouteBusStop): boolean {
        return a.id === b.id
    }
}
import { User } from "./User";
import { Company } from "./Company";
import { CustomMap } from "./CustomMap";

const user = new User();
const company = new Company();
const customMap = new CustomMap("map");

// Typescript performs an implicit check. It checks that user or company
// obey the Mappable interface (having a location)
customMap.addMarker(user);
customMap.addMarker(company);

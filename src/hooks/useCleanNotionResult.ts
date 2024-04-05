interface BasicObjectInterface {
  object: string;
  id: string;
}

interface NotionPropertyInterface extends BasicObjectInterface {
  created_time: Date;
  last_edited_time: Date;
  created_by: BasicObjectInterface;
  last_edited_by: BasicObjectInterface;
  cover?: never;
  icon?: never;
  parent: {
    type: string;
    database_id: string;
  };
  archived: boolean;
  properties: never;
  url: string;
  public_url?: string;
}

export function cleanNotionResult(results: NotionPropertyInterface[]) {
  return results.map(({ properties }) => ({
    allImages: [
      ...(properties['Files & media']?.files.map(({ file }) => file?.url) ||
        ''),
      ...(properties['Main Image']?.files.map(({ file }) => file?.url) || ''),
    ],
    images: properties['Files & media']?.files.map(({ file }) => file?.url),
    mainImage: properties['Main Image']?.files.map(({ file }) => file?.url),
    location: properties?.Location.rich_text?.map((loc) => loc.text)[0],
    bathrooms: properties.Bathrooms.rich_text?.map((bath) => bath.text)[0],
    phoneNumber: properties['Phone Number'].rich_text?.map((pn) => pn.text)[0],
    purpose: properties.Purpose.select.name,
    price: properties.Price.rich_text?.map((pr) => pr.text)[0],
    active: properties.Active.checkbox,
    rooms: properties.Rooms.rich_text?.map((r) => r.text)[0],
    title: properties.Property.title?.map((p) => p.text)[0],
    houseSize: properties['SQFT (House)']?.rich_text?.map(
      (sqft) => sqft.text
    )[0],
    lotSize: properties['Lot Size']?.rich_text?.map((lS) => lS.text)[0],
    builtIn: properties['Built In']?.rich_text?.map((b) => b.text)[0],
    hoa: properties.HOA?.rich_text.map((hoa) => hoa.text)[0],
    description: properties.Description?.rich_text?.map((d) => d.text)[0],
    features: properties.Features?.rich_text?.map((f) => f.text)[0],
  }));
}

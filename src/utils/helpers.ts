export const parseLinkHeader = (header: string | null) => {
  if (!header) return {};
  return header.split(",").reduce((acc: Record<string, string>, part) => {
    const section = part.split(";");
    if (section.length < 2) return acc;
    const url = section[0].trim().replace(/<(.*)>/, "$1");
    const rel = section[1].trim().replace(/rel="(.*)"/, "$1");
    acc[rel] = url;
    return acc;
  }, {});
};

export const columnWidths = new Array(1000)
  .fill(true)
  .map(() => 150 + Math.round(Math.random() * 100));

export const getItemSize = (index: number) => columnWidths[index];

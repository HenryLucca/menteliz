export default function dateToLocaleString(ISODate: string) {
  // return new Date(ISODate).toLocaleDateString("pt-BR", {
  //   year: "numeric",
  //   month: "long",
  //   day: "numeric",
  // });

  // return ISODate.replace(/T.*/, "").split("-").reverse().join("-");

  const currentDate = new Date().toISOString();
  const date = new Date(ISODate);
  const diff = new Date(currentDate).getTime() - date.getTime();

  const minutes = Math.floor(diff / 1000 / 60);
  const hours = Math.floor(diff / 1000 / 60 / 60);
  const days = Math.floor(hours / 24);

  if (minutes < 5) {
    return "Agora";
  }

  if (minutes < 60) {
    return `${minutes} minutos atrás`;
  }

  if (hours < 24) {
    return `${hours} horas atrás`;
  }

  if (days < 7) {
    return `${days} dias atrás`;
  }

  return new Date(ISODate).toLocaleDateString("pt-BR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export const openDiv = (name: string) => {
  const div = document.getElementById(name)!!;
  const arrow = document.getElementById(name + "-arrow")!!;
  arrow.style.transform =
    arrow.style.transform == "rotate(180deg)"
      ? "rotate(0deg)"
      : "rotate(180deg)";
  setTimeout(() => {
    div.style.display = div.style.display == "block" ? "none" : "block";
  }, 100);
};

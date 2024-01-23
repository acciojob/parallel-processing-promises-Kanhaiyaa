

const imageLoad = (url) => {
  return `<img src='${url}' />`;
};

const all = async () => {
  try {
    const gallery = await Promise.all(images.map((val) => fetch(val.url)));
    gallery.forEach((val) => {
      output.insertAdjacentHTML("beforeend", imageLoad(val.url));
    });

    return gallery;
  } catch (err) {
    return "failed to load images";
  }
};

btn.addEventListener("click", () => {
  images.forEach((val) => {
      output.insertAdjacentHTML("beforeend", imageLoad(val.url));
    });
});




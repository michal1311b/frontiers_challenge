export function testImage(url: string) {
  return new Promise(function (resolve, reject) {
    let timer: any;
    const img = new Image();
    img.onerror = img.onabort = function () {
      clearTimeout(timer);
      resolve(false);
    };
    img.onload = function () {
      clearTimeout(timer);
      resolve(true);
    };
    img.src = url;
  });
}

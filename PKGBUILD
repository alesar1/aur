# Maintainer: Adler Neves <adlerosn@gmail.com>

provides=('pathio')
conflicts=('pathio')
_channel=alpha
pkgver=0.5.4_1
pkgname=pathio-alpha-bin
pkgrel=0
pkgdesc="A modern slicer for extrusion 3D printing provided by E3D Skunkworks (binary AppImage)."
arch=('x86_64')
makedepends=('elinks')
url="https://pathio.xyz/"
options=('!strip')
license=('custom:Pathio Software License Agreement')
_filename="pathio-$pkgver-$_channel.AppImage"
source=("$_filename::https://api.pathio.xyz/api/asset/download/76"
        license.html::https://docs.pathio.xyz/pathio/latest/legal/termsAndConditions.html
        pathio.sh)
sha512sums=('fd02ae261279ec11c8147a27fa322564f9c44940d7fc105ae4770f8c7bcb9ea75e7b910c41aeba578a3b3baebd5be164ad8cfbfad6294be50735da52a10a68fc'
            '355bbabd3dfed0816aebe12c10efa2743ab588a2b7d5ad7543da7a11d4ce4b5e6e591d2a80d153ac3715f044e71dd1e9695e20c5a10e1d9c45b1fdc6bc4a21bc'
            '7cee7ed780dbe2f0a7e7221836bc40da0d5e295a40e2689ffc6f9da0fc11a9edfba12dd3d8214cd5f1bed30fe9755cb4742f7c36d12573e6a9f97b39c0b69981')

bluearrow() {
  echo -n -e "  \e[1m\e[34m->\e[39m\e[0m "
  echo $@
}

prepare() {
  cd "${srcdir}"

  bluearrow Converting license to plain text
  cat license.html | xargs echo | sed -re "s/^.*(<article.*?<\/article>).*$/\1/mg" | elinks -dump -dump-width 80 -no-references -no-numbering -force-html > LICENSE
  
  bluearrow Extracting AppImage
  chmod +x ${_filename}
  ./${_filename} --appimage-extract &>/dev/null

  bluearrow Creating CLI launcher
  sed -i "s/\${_filename}/${_filename}/" "${srcdir}/pathio.sh"

  bluearrow Setting desktop entry to use CLI launcher
  sed -i "s/^Exec=.*$/Exec=\/usr\/bin\/pathio %U/" "${srcdir}/squashfs-root/pathio.desktop"
}

package() {
  bluearrow License
  install -Dm644 "${srcdir}/LICENSE" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"

  bluearrow AppImage
  install -D -m 755  "${srcdir}/${_filename}" "${pkgdir}/opt/appimages/${_filename}"

  bluearrow CLI launcher
  install -D -m 755  "${srcdir}/pathio.sh" "${pkgdir}/usr/bin/pathio"

  bluearrow Application icon
  cp -r --no-preserve=mode,ownership "${srcdir}/squashfs-root/usr/share/icons" "${pkgdir}/usr/share/"
  mkdir -p "${pkgdir}/usr/share/pixmaps/"
  install -D -m 644  "${srcdir}/squashfs-root/usr/share/icons/hicolor/0x0/apps/pathio.png" "${pkgdir}/usr/share/pixmaps/"

  bluearrow Desktop entry
  install -Dm644 "${srcdir}/squashfs-root/pathio.desktop" "${pkgdir}/usr/share/applications/pathio.desktop"
}

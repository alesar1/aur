# Maintainer: Adler Neves <adlerosn@gmail.com>

provides=('pathio')
conflicts=('pathio')
_channel=alpha
pkgver=0.6.3_1
pkgname=pathio-alpha-bin
pkgrel=4
_upstream_version=0.6.3
_upstream_channel=beta
pkgdesc="A modern slicer for extrusion 3D printing provided by E3D Skunkworks (binary AppImage)."
arch=('x86_64')
makedepends=('elinks')
url="https://pathio.xyz/"
options=('!strip')
license=('custom:Pathio Software License Agreement')
_filename="pathio-$_channel-v$_upstream_version-$_upstream_channel$pkgrel.AppImage"
source=("$_filename::https://api.pathio.xyz/api/asset/download/112"
        license.html::https://docs.pathio.xyz/pathio/latest/legal/termsAndConditions.html
        pathio.sh)
sha512sums=('36ff273b6f04d821e6917fcfb18277486416c215762bca4cae9b6a139565e22b3d0434bd25f0b33539b0813676462326959499f42aec1a44bb869f1a616c9cb7'
            '5e44b28f94ede17e3e2caee0245790d45e122a3811da73168e41c582011bd96ead46d83482ef9f163832aa2102e98672059c1c7775e763464068796cf41826cf'
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

# Maintainer: Hilton Medeiros <medeiros.hilton@gmail.com>
pkgname=material-maker-bin
_pkgname=material_maker
pkgver=1.1
_pkgver='1_1'
pkgrel=1
pkgdesc="A tool for procedural texture generation and 3D model painting"
arch=('x86_64')
url="https://rodzilla.itch.io/material-maker"
license=('MIT')
depends=('libxi' 'libxrandr' 'libglvnd' 'libxcursor' 'libxinerama' 'hicolor-icon-theme')
options=(!strip)
provides=('material-maker')
conflicts=('material-maker' 'material-maker-git')
source=(https://github.com/RodZill4/material-maker/releases/download/${pkgver}/${_pkgname}_${_pkgver}_linux.tar.gz
        io.github.RodZill4.Material-Maker.appdata.xml
        io.github.RodZill4.Material-Maker.desktop
        material-maker.png
        LICENSE)
sha256sums=('e4935ec6022e0e75fa898ee695db4248f6206d9dd72b47ffbc7738adcac70f7f'
            '5fd1ce940d5c5d2d8203dbe8f9d363f8f7afb65dc4dd2824b79b13c8e6a09dc3'
            '381e6425233d0aa3786c5583a2415d0d20b828481fa93dceac1e4376481d1330'
            '72ee1a0fc59b798b8849eb9bd0cb7b67fd9ee3ff41645f90c2ca98168f3619ef'
            'ac9c6450c84132fca73c423dee07c4793f72e6a2d6f6eb4701cbbd226fccd548')

package() {
  install -d "$pkgdir/opt/$pkgname"
  install -d "$pkgdir/usr/bin"
  install -d "$pkgdir/usr/share/metainfo"
  install -d "$pkgdir/usr/share/applications"
  install -d "$pkgdir/usr/share/icons/hicolor/64x64/apps"

  cp -Trf "$srcdir/${_pkgname}_${_pkgver}_linux" "$pkgdir/opt/$pkgname"
  install -Dm644 "$srcdir/io.github.RodZill4.Material-Maker.desktop" "$pkgdir/usr/share/applications"
  install -Dm644 "$srcdir/io.github.RodZill4.Material-Maker.appdata.xml" "$pkgdir/usr/share/metainfo"
  install -Dm644 "$srcdir/LICENSE" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
  install -Dm644 "$srcdir/material-maker.png" "$pkgdir/usr/share/icons/hicolor/64x64/apps"

  ln -s /opt/${pkgname}/${_pkgname}.${CARCH} "$pkgdir/usr/bin/material-maker"
}

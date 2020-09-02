# Maintainer: Volk_Milit (aka Ja'Virr-Dar) <javirrdar@gmail.com>
# Maintainer: Gennadiy Chernyshyk <genaloner@gmail.com>
# PKGBUILD source: https://github.com/TES3MP/openmw-tes3mp
# Special thanks to Grim Kriegor who provide tarball and make special script for easy build TES3MP: https://github.com/GrimKriegor/TES3MP-deploy/tree/development   

pkgname=openmw-tes3mp
pkgver=0.7.0
pkgrel=3
pkgdesc="TES3MP is a project aiming to add multiplayer functionality to OpenMW, a free and open source recreation of the popular Bethesda Softworks game \"The Elder Scrolls III: Morrowind\"."
arch=('x86_64')
url="http://tes3mp.com"
license=('GPL3' 'custom')
depends=('qt5-base' 'libxt')
optdepends=('openmw: create initial engine configuration files')
conflicts=("${pkgname%-git}")
provides=("${pkgname%-git}")

source=("$pkgname.tar.gz"::"https://github.com/TES3MP/openmw-tes3mp/releases/download/0.7.0-alpha/tes3mp-GNU+Linux-x86_64-release-0.7.0-alpha-abc4090a0f-01d297f5c6.tar.gz"
        "https://raw.githubusercontent.com/TES3MP/openmw-tes3mp/$pkgver/files/tes3mp/tes3mp_logo.png"
        "tes3mp-browser.desktop")
sha256sums=("c6a7a98fb8fe87f8d049a1f40b6474d4e92b7cc6d5119ac4b66e667c4e8b1820"
          "861e5e8cc7ddec2dbfb842d68cdd45e7cc564079b9cb37ad113ff140bf424fd9"
          "ddccf2f35e41c2cbb35816f3bbfc53a9dd5809cd2830e8e324f45550852f6408")

prepare() {
  cd "$srcdir/TES3MP"

  # Remove all .git files
  find . -name "*git*" -exec rm -rf {} +

  # Remove all *.a files from lib
  rm -f lib/*.a

  # Remove junk files
  rm CoreScripts/README.md
  rm CoreScripts/Tutorial.md
  rm tes3mp-package-info.txt

  # Remove OpenMW junk files
  rm bsatool*
  rm esmtool*
  rm openmw*
}

package() {
  
  # Install .desktop files
  install -Dm644 tes3mp-browser.desktop "$pkgdir/usr/share/applications/tes3mp-browser.desktop"
  
  # Icon for .desktop files
  install -Dm644 tes3mp_logo.png "$pkgdir/usr/share/pixmaps/tes3mp.png"
  
  # Copy files into /usr/local/etc/openmw to make TES3MP works with home settings
  cd "$srcdir/TES3MP"
  install -d "$pkgdir/usr/local/etc/openmw"
  install -Dm644 tes3mp-server-default.cfg "$pkgdir/usr/local/etc/openmw/"
  install -Dm644 tes3mp-client-default.cfg "$pkgdir/usr/local/etc/openmw/"
  
  # Copy licenses
  install -d "$pkgdir/usr/share/licenses"
  install -Dm 644 "CoreScripts/LICENSE" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
  install -Dm 644 tes3mp-credits.md "$pkgdir/usr/share/licenses/$pkgname/tes3mp-credits.md"

  # Change copying in launcher script for /usr/local/etc/openmw/ directory
  sed -i '18c\\t\tcp -f /usr/local/etc/openmw/tes3mp-server-default.cfg "$TES3MP_HOME"/tes3mp-server.cfg' tes3mp-prelaunch
  sed -i '43c\\t\tcp -f /usr/local/etc/openmw/tes3mp-client-default.cfg "$TES3MP_HOME"/tes3mp-client.cfg' tes3mp-prelaunch

  # Main
  cd "${srcdir}"
  install -d "$pkgdir/opt"
  mv TES3MP "$pkgdir/opt/$pkgname"
  
  install -d "$pkgdir/usr/bin"
  ln -s "$pkgdir/opt/$pkgname/tes3mp" "${pkgdir}/usr/bin"
  ln -s "$pkgdir/opt/$pkgname/tes3mp-server" "$pkgdir/usr/bin"
  ln -s "$pkgdir/opt/$pkgname/tes3mp-browser" "$pkgdir/usr/bin"
}

# vim:set ts=2 sw=2 et:

# Maintainer: Emilien Devos (unixfox) <contact@emiliendevos.be>
pkgname=copay-bin
pkgver=3.13.1
pkgrel=1
pkgdesc="Copay is a secure bitcoin wallet platform for both desktop and mobile devices."
arch=('x86_64')
url="https://github.com/bitpay/copay"
license=('MIT')
groups=()
makedepends=()
optdepends=()
depends=('unzip')
provides=("copay")
conflicts=("copay")
replaces=()
backup=()
options=('!strip')
source=("Copay-linux.zip::https://github.com/bitpay/copay/releases/download/v"$pkgver"/Copay-linux.zip"
        "copay.desktop")
md5sums=('439ca6a7db9fd57edab987ee982bcfe7'
         'e05610d1b08a2c688efccf9d687b8b92')

package() {
  mkdir -p ${pkgdir}/opt/copay
  cd ${pkgdir}/opt/copay
  
  unzip "${srcdir}/Copay-linux.zip"
 
  mv Copay-linux/* .
  rmdir Copay-linux
 
  find ${pkgdir}/opt/copay/ -type f -print0 | xargs -0 chmod a+r

  mkdir -p ${pkgdir}/usr/bin
  ln -s /opt/copay/Copay ${pkgdir}/usr/bin/copay

  mkdir -p "${pkgdir}/usr/share/applications" "${pkgdir}/usr/share/pixmaps"
  install -m644 "${srcdir}/copay.desktop" "$pkgdir/usr/share/applications/copay.desktop"
  ln -s "../../../opt/copay/512x512.png" "$pkgdir/usr/share/pixmaps/copay.png" 
}

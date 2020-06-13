# Maintainer: maniacata <maniaciachao at gmail dot com>
# Contributor: sdvcrx <memory.silentvoyage at gmail dot com>

pkgname=clashr-bin
_pkgname=clashr
pkgver=0.20.02
pkgrel=1
pkgdesc="A rule based proxy in Go with SSR protocol support."
url="https://github.com/frainzy1477/clashrdev"
license=("MIT")
arch=("x86_64")
provides=("clashr")
conflicts=("clashr")
depends=("glibc")
source=(clashr@.service
        clashr_user.service
        "$_pkgname-$pkgver.gz::${url}/releases/download/v${pkgver}/clashr-linux-amd64-v${pkgver}.gz")
noextract=("$_pkgname-$pkgver.gz")
sha256sums=('7aa265e329a54c9a1c86464a0a4567d332f04de3a618a85b71934d04e0210343'
            'ea8c4bfb4291e0fa6442644a233e168302c186ef36a39ef56fc75989b56213d9'
            '9fab97d1bbfc4aacaf81a66a54c3c530b4b8ab6c99389b6d5bbd8fb0569cc7cc')

install=$_pkgname.install

prepare() {
  cd "${srcdir}/"
  gunzip -k -f "$_pkgname-$pkgver.gz"
}

package() {
  cd "${srcdir}/"

  install -Dm755 "$_pkgname-$pkgver" "${pkgdir}/usr/bin/${_pkgname}"
  install -Dm644 clashr@.service ${pkgdir}/usr/lib/systemd/system/clashr@.service
  install -Dm644 clashr_user.service ${pkgdir}/usr/lib/systemd/user/clashr.service
}


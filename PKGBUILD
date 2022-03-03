# Maintainer: Connor Etherington <connor@concise.cc>
# ---
_pkgname=Nu1LL1nuX
pkgname=nu1ll1nux
pkgver=1.1.174
pkgrel=1
pkgdesc='ArchLinux install scripts for the Nu1LL1nuX platform.'
arch=(x86_64)
url="https://gitlab.com/qYp/$pkgname"
license=('MIT')
depends=(dialog)
makedepends=(git)                 
source=("git+${url}.git")
md5sums=('SKIP')

pkgver() {
  cd "${pkgname}"
  printf "1.1.""$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

package() {
    cd ${pkgname}
    mkdir -p "${pkgdir}/opt/${_pkgname}"
    mkdir -p "${pkgdir}/usr/share/licenses/${pkgname}"
    install -Dm755 Nu1LL1nuX.sh pre-install.sh -t "${pkgdir}/opt/${_pkgname}"
    install -Dm644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}

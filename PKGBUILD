# Maintainer: "Amhairghin" Oscar Garcia Amor (https://ogarcia.me)

pkgname=timeline
pkgver=1.3
pkgrel=1
pkgdesc="A plain-text based distributed social network build on top of git configuration manager"
arch=('any')
url="https://ajdiaz.me/timeline/"
license=('GPLv3')
depends=('bash' 'git')
conflicts=('timeline-git')
source=("https://github.com/ajdiaz/${pkgname}/archive/${pkgver}.tar.gz")
sha256sums=('8e6d0cfdd2ebbb17704e88ef954b4e13155800bc235c7eb0da17ca1ef88e7440')

build() {
  cd "${pkgname}-${pkgver}"
  make clean && make
}

package() {
  cd "${pkgname}-${pkgver}"

  # binary
  install -D -m755 "tl" "${pkgdir}/usr/bin/tl"  

  # docs
  install -D -m644 README "${pkgdir}/usr/share/doc/${_pkgname}/README"
}

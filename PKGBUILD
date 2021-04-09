# Maintainer: "Amhairghin" Oscar Garcia Amor (https://ogarcia.me)

pkgname=timeline
pkgver=1.7
pkgrel=1
pkgdesc="A plain-text based distributed social network build on top of git configuration manager"
arch=('any')
url="https://ajdiaz.me/timeline/"
license=('GPLv3')
depends=('bash' 'git')
conflicts=('timeline-git')
source=("https://github.com/ajdiaz/${pkgname}/archive/${pkgver}.tar.gz"
        "${pkgname}.service")
sha256sums=('63ef34c4f5252ccc711a8efb96419feea8b1657afb2d9c7cf41604f927c4292b'
            'ef063a64b2e38988cf7b7395161351e537e50719f4d77fa3d180e25b911371fd')

prepare() {
  cd "${pkgname}-${pkgver}"
  sed -i "s/\$(shell git describe --tags)/${pkgver}/g" Makefile
}

build() {
  cd "${pkgname}-${pkgver}"
  make clean && make
}

package() {
  cd "${pkgname}-${pkgver}"

  # user service file
  install -D -m644 "${srcdir}/${pkgname}.service" \
   "${pkgdir}/usr/lib/systemd/user/${pkgname}.service"

  # binary
  install -D -m755 "tl" "${pkgdir}/usr/bin/tl"

  # docs
  install -D -m644 README "${pkgdir}/usr/share/doc/${_pkgname}/README"
}

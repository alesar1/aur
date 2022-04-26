# Maintainer: Alberto Redondo <albertomost at gmail dot com>

pkgname=lyrics-in-terminal
pkgver=1.4.4
pkgrel=1
pkgdesc='Shows lyrics of songs from your favourite music player in terminal'
arch=('any')
url='https://github.com/Jugran/lyrics-in-terminal'
license=('MIT')
depends=('python>=3.6' 'dbus-python' 'ncurses')
makedepends=('python-setuptools')
source=(${url}/archive/${pkgver}/${pkgname}-${pkgver}.tar.gz)
md5sums=('59969e2e25804449c39b75ce448dc660')

build() {

  cd ${pkgname}-${pkgver}

  python setup.py build

}

package() {

  cd ${pkgname}-${pkgver}

  python setup.py install \
    -O1 \
    --root="${pkgdir}" \
    --skip-build

  install -Dm644 LICENSE \
    -t "${pkgdir}/usr/share/licenses/${pkgname}"

}

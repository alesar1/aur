# Maintainer: Tom Hacohen <tom@stosb.com>
# Contributor: David Runge <dave@sleepmap.de>

pkgname=etesync-dav
pkgver=0.32.1
pkgrel=1
pkgdesc="A CalDAV and CardDAV adapter for EteSync"
arch=('any')
url="https://pypi.python.org/pypi/${pkgname}/"
license=('GPL')
depends=('python-appdirs'
         'python-etesync'
         'python-etebase'
         'radicale>=3.0.0'
         'python-flask'
         'python-flask-wtf'
)
replaces=('python-radicale-storage-etesync')
makedepends=('python-setuptools')
source=("https://pypi.org/packages/source/e/${pkgname}/${pkgname}-${pkgver}.tar.gz"
        "etesync-dav.service")
sha256sums=('a4e2ee83932755d29ac39c1e74005ec289880fd2d4d2164f09fe2464a294d720'
            'f1a76ba3038f89019c4d3f206824dc5e471d3707ab5b2fb27802215ea6d6bc8c')

build() {
  cd "${pkgname}-${pkgver}"
  python setup.py build
}

package() {
  cd "${pkgname}-${pkgver}"
  python setup.py install --skip-build \
    --optimize=1 \
    --prefix=/usr \
    --root="${pkgdir}"
  install -t "${pkgdir}/usr/share/doc/${pkgname}" \
    -vDm644 {DESCRIPTION.rst,README.md}

# FIXME: replace with the one in the etesync-dav repo once released
  mkdir -p "${pkgdir}/usr/lib/systemd/user/"
  install -Dm644 ../etesync-dav.service "${pkgdir}/usr/lib/systemd/user/"
}


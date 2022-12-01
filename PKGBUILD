# Maintainer: Claudia Pellegrino <aur ät cpellegrino.de>

pkgname=python-norbert
pkgver=0.2.1
pkgrel=1
pkgdesc='Painless Wiener filters for audio separation'
arch=('any')
url='https://github.com/sigsep/norbert'
license=('MIT')
depends=('python-scipy')
checkdepends=('python-pytest')
makedepends=(
  'python-build'
  'python-installer'
  'python-setuptools'
  'python-wheel'
)

source=(
  "${pkgname}-${pkgver}.tar.gz::https://github.com/sigsep/norbert/archive/v${pkgver}.tar.gz"
)

sha512sums=(
  'd10abce6d06377def4b4fcec22ffe1a0bde74600b6d90f6a87d9f726284ba895c26af088ba78b537b82bc4797af5d5d924e8deeea3f88e3af119c1f9396058ea'
)

build() {
    cd "${srcdir}/${pkgname#python-}-${pkgver}"
    python -m build --wheel --no-isolation
}

check() {
    cd "${srcdir}/${pkgname#python-}-${pkgver}"
    python -m pytest -o addopts= # Exclude doctests and pep8
}

package() {
    cd "${srcdir}/${pkgname#python-}-${pkgver}"
    python -I -m installer --destdir="${pkgdir}" dist/*.whl
    install -D -m 644 -t "${pkgdir}/usr/share/licenses/${pkgname}" LICENSE
}

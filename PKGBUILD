# Contributor: Marcell Meszaros < marcell.meszaros AT runbox.eu >
# Contributor: Felix Yan <felixonmars@archlinux.org>
# Contributor: Patrice Peterson <runiq at archlinux dot us>
# Contributor: Chris Brannon <cmbrannon79@gmail.com>
# Contributor: BorgHunter <borghunter at gmail dot com>

pkgname='python2-urllib3'
_name="${pkgname#python2-}"
pkgver=1.26.7
pkgrel=2
pkgdesc='HTTP library with thread-safe connection pooling and file post support'
arch=('any')
url="https://github.com/${_name}/${_name}"
license=('MIT')
depends=('python2')
optdepends=(
# 'python2-brotli: Brotli support'
  'python2-idna: support for internationalized domain names (IDNA)'
  'python2-pyopenssl: security support'
  'python2-pysocks: SOCKS support'
  'python-urllib3-doc: urllib3 documentation'
)
makedepends=(
# 'python2-brotli'
  'python2-ndg-httpsclient'
  'python2-pyasn1'
  'python2-pyopenssl'
  'python2-pysocks'
  'python2-setuptools'
)
checkdepends=(
  'python2-dateutil'
  'python2-flaky'
  'python2-gcp-devrel-py-tools'
  'python2-nose'
  'python2-psutil'
  'python2-pytest-runner'
  'python2-tornado'
  'python2-trustme'
)
_tarname="${_name}-${pkgver}"
source=("${url}/archive/${pkgver}/${_tarname}.tar.gz"
#       "${_name}-use-brotli-or-brotli-cffi.patch::${url}/pull/2099.patch"
)
b2sums=('f5f2a6797836ef3f9fdfcce4fc6b927c74bc0c7e91d8f9321a3375db9a143214c8253b3c45cd860c747053bf621dfe6586bb6f6c6ce7d91ec8333586b6c75e70')

# prepare() {
#   patch -d "${_tarname}" -p1 -i "../${_name}-use-brotli-or-brotli-cffi.patch" || :
# }

build() {
  cd "${_tarname}"
  python2 setup.py build
}

check() {
  cd "${_tarname}"
  LC_ALL=C.UTF-8 python2 setup.py pytest --addopts "--deselect test/test_retry.py::TestRetry::test_respect_retry_after_header_sleep --deselect test/test_retry_deprecated.py::TestRetry::test_respect_retry_after_header_sleep"
}

package() {
  cd "${_tarname}"
  python2 setup.py install --root="${pkgdir}" --prefix='/usr' --optimize=1 --skip-build
  install -Dm 644 LICENSE.txt "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}

pkgbase=('python-gmusicapi-git')
pkgname=('python-gmusicapi-git')

pkgver='11.0.0'
pkgrel=1
pkgdesc="An unofficial api for Google Play Music."

_gitver="$pkgver"
url="https://github.com/simon-weber/gmusicapi"

provides=('python-gmusicapi')

depends=(
    'python'
    'python-future'
    'python-gpsoauth>=0.2.0'
    'python-mechanicalsoup>=0.4.0'
    'python-mock>=0.7.0'
    'python-validictory>=0.8.0'
    'python-oauth2client>=1.1'
    'python-appdirs>=1.1.0'
    'python-requests>=1.1.0'
    'python-proboscis>=1.2.5.1'
    'python-dateutil>=1.3'
    'mutagen>=1.34'
    'python-six>=1.9.0'
    'python-protobuf>=3.0.0'
    'python-decorator>=3.3.1'
)
makedepends=('python-setuptools' 'git')
license=('BSD')
arch=('any')
source=("${pkgname}::git+$url#tag=${_gitver}")
sha256sums=('SKIP')

build() {
    cd "${pkgname}"
    python setup.py build
}

package() {
    depends+=()
    cd "${pkgname}"
    python setup.py install --root="${pkgdir}" --optimize=1 --skip-build
    install -Dm644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}

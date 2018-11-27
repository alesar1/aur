# Maintainer: Michael Polidori <michaelapolidori at gmail dot com>
# Author: Michael Polidori

pkgname=pykgbuild
_pkgname=py-pkgbuild-version
pkgver=0.1.6
pkgrel=1
pkgdesc="Compare a users Python PKGBUILD version(s) with respective PyPI version(s)."
url="https://github.com/mpolidori/py-pkgbuild-version"
depends=('python')
license=('MIT')
arch=('any')
source=('git+https://github.com/mpolidori/py-pkgbuild-version.git')
md5sums=(SKIP)

package() {
    cd $_pkgname
    mv pykgbuild.py pykgbuild
    install -Dm 0755 -t ${pkgdir}/usr/bin pykgbuild
    install -D -m644 LICENSE "$pkgdir/usr/share/licenses/$_pkgname/LICENSE"
}

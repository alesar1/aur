# Maitainer: a821
# Contributor: Antony Lee <anntzer dot lee at gmail dot com>

pkgname=python-versioneer
_name=${pkgname#python-}
pkgver=0.28
pkgrel=1
pkgdesc='Easy VCS-based management of project version strings'
url="https://github.com/$pkgname/$pkgname"
depends=('python-setuptools')
optdepends=('python-cx-freeze: Executable generation support')
license=('custom:CC0')
arch=(any)
source=("https://files.pythonhosted.org/packages/source/${_name::1}/${_name}/${_name}-${pkgver}.tar.gz")
sha256sums=('7175ca8e7bb4dd0e3c9779dd2745e5b4a6036304af3f5e50bd896f10196586d6')

build() {
    cd "${_name}-${pkgver}"
    python setup.py build
}

package() {
    cd "${_name}-${pkgver}"
    python setup.py install --root "${pkgdir}" --optimize=1 --skip-build
    install -Dm644 LICENSE -t "${pkgdir}/usr/share/licenses/${pkgname}"
}

# vim: set ts=4 sw=4 et:

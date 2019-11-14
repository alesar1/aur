# Maintainer: Richard Neumann aka. schard <mail at richard dash neumann period de>

pkgname='ldaptools'
pkgver=1.0.0
pkgrel=2
pkgdesc='Easily manage LDAP users and groups'
arch=('any')
url="https://github.com/coNQP/${pkgname}"
license=('GPLv3')
depends=('python')
makedepends=('git')
source=("git+${url}.git#tag=${pkgver}")
md5sums=('SKIP')


package() {
    cd "${pkgname}"
    python setup.py install --root "${pkgdir}" --optimize=1
}

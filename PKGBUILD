# Maintainer: Johannes Wienke <languitar@semipol.de>

pkgname=pass-git-helper-git
pkgver=r1.25e2c47
pkgrel=1
pkgdesc="A git credential helper interfacing with pass, the standard unix password manager"
arch=(any)
url="https://github.com/languitar/pass-git-helper"
license=('LGPL3')
depends=('python3' 'pass')
makedepends=('git' 'python-setuptools')
source=("${pkgname}::git://github.com/languitar/pass-git-helper.git")
md5sums=('SKIP')

pkgver() {
    cd "$pkgname"
    printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

package() {
    cd "$pkgname"
    python3 setup.py install --root="$pkgdir/"
}

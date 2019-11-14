# Maintainer: Richard Neumann aka. schard <mail at richard dash neumann period de>

_pkgbase='peeweeplus'
pkgname="python-${_pkgbase}-git"
pkgver=r364.7c06464
pkgrel=2
pkgdesc='Practical extension of a small, expressive ORM'
arch=('any')
url="https://gitlab.com/HOMEINFO/${_pkgbase}"
license=('GPLv3')
depends=('python' 'python-peewee' 'python-argon2_cffi' 'python-timelib-git' 'python-strflib' 'python-configlib' 'python-functoolsplus')
makedepends=('git' 'python')
provides=("python-${_pkgbase}")
conflicts=("python-${_pkgbase}")
source=("${_pkgbase}::git+${url}.git")
md5sums=('SKIP')
pkgdir='pkg'
srcdir='src'


pkgver() {
  cd "${_pkgbase}" || exit 1
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}


package() {
    cd "${srcdir}/${_pkgbase}"
    python setup.py install --root "${pkgdir}" --optimize=1
}

# vim: set filetype=sh:
# Maintainer: Yen Chi Hsuan <yan12125@gmail.com>

pkgname=python2-jedihttp-git
pkgver=r144.33082a3
pkgrel=1
pkgdesc="Simple http wrapper around jedi (with yan12125's packaging patch)"
license=('Apache')
arch=('any')
url='https://github.com/vheon/JediHTTP'
depends=('python2-bottle' 'python2-jedi' 'python2-waitress')
makedepends=('python2-setuptools' 'git')
source=('git+https://github.com/vheon/JediHTTP'
        'setup.py'
        'allow-missing-vendor.patch')
sha256sums=('SKIP'
            '6454c24288fad1a79ed0b3c7fa70902b87084384037ce5edab5be4eb4e4138d1'
            '865e91d405de332c128c53d901702fd621000868f78482602874d254abb755a3')
conflicts=('python-jedihttp-git')

pkgver() {
  cd "$srcdir/JediHTTP"
  ( set -o pipefail
    git describe --long 2>/dev/null | sed 's/\([^-]*-g\)/r\1/;s/-/./g' ||
    printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
  )
}

prepare() {
    cd "${srcdir}/JediHTTP"
    patch -i ../allow-missing-vendor.patch -p1
    ln -s ../setup.py
    mv jedihttp{,-main}.py
}

package() {
    cd "${srcdir}/JediHTTP"
    python2 setup.py install --root="${pkgdir}" --optimize=1
}

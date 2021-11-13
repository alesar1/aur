# Maintainer: Angel Velasquez <angvp@archlinux.org>
# Maintainer: Felix Yan <felixonmars@archlinux.org>
# Contributor: damir <damir@archlinux.org>

pkgname=mysql-python
pkgver=1.2.5
pkgrel=4
pkgdesc="MySQL support for Python"
arch=("x86_64")
url="http://mysql-python.sourceforge.net/"
license=('GPL2')
depends=('python2' 'mariadb-libs')
makedepends=('python2-setuptools')
source=("https://pypi.python.org/packages/a5/e9/51b544da85a36a68debe7a7091f068d802fc515a3a202652828c73453cad/MySQL-python-1.2.5.zip"
        mariadb-10.2-reconnect.patch)
sha512sums=('37521c6fd855c4cde495cc8ec085aca79c2d441a6e3710759385bf2e2c17f43d3311cf1166663892829d2e3999c419443c358c7031cdda225ac44611ced188d0'
            'c46e3efdb856d1d083204cd3216be2996941b49a6bae7cfc774bd0b86f7e5344bcb0035e17acc6bb17740047bf1827d1a92af8c8971908e741e1e6dda8c868e2')

prepare() {
  cd "${srcdir}/MySQL-python-${pkgver}"

  # https://github.com/PyMySQL/mysqlclient-python/issues/176
  sed -i 's/\r//' _mysql.c
  patch -Np1 -i ../mariadb-10.2-reconnect.patch
}

package() {
  cd "${srcdir}/MySQL-python-${pkgver}"
  python2 setup.py install --root="${pkgdir}" --optimize=1
}

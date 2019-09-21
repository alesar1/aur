# Maintainer: Anthony25 <Anthony Ruhier>
#
# Thanks to Jeremy "Ichimonji10" Audet <ichimonji10 at gmail dot com> for
# his PKGBUILD that served as a base for this one

pkgbase=python-django-debug-toolbar
_pkgbase="${pkgbase#python-}"
pkgname=(python-django-debug-toolbar python2-django-debug-toolbar)
pkgver=2.0
pkgrel=1
pkgdesc='A configurable set of panels that display various debug information about the current request/response.'
arch=(any)
url='https://github.com/jazzband/django-debug-toolbar'
license=(BSD-3)
makedepends=(
  'python-django>=1.11'
  python-setuptools
  'python2-django>=1.11'
  python2-setuptools
)
options=(!emptydirs)
source=("https://github.com/jazzband/${_pkgbase}/archive/${pkgver}.tar.gz")
sha256sums=('b0147dc4b8dac624ca9cce686ff839d5eaf78d3ff5acc597ee7a393ed2a26850')

package_python-django-debug-toolbar() {
  depends=('python-django>=1.11' 'python-sqlparse')
  conflicts=('python-django-debug-toolbar-git')
  cd "${srcdir}/${_pkgbase}-${pkgver}"
  python setup.py install --root="${pkgdir}/" --optimize=1
  install -Dm 644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}

package_python2-django-debug-toolbar() {
  depends=('python2-django>=1.11' 'python2-sqlparse')
  conflicts=('python2-django-debug-toolbar-git')
  cd "${srcdir}/${_pkgbase}-${pkgver}"
  python2 setup.py install --root="${pkgdir}/" --optimize=1
  install -Dm 644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}

# vim:set ts=2 sw=2 et:

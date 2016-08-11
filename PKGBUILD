# Maintainer: Jeremy "Ichimonji10" Audet <ichimonji10 at gmail dot com>
# Contributor: Dominik Kozaczko <dominik@kozaczko.info>
# Contributor: Alper Kanat <alperkanat@raptiye.org>
# Contributor: Apkawa <apkawa@gmail.com>
# Contributor: Schnouki <thomas.jost@gmail.com>
#
# namcap incorrectly states that python{,2}-{django,six} are unnecessary deps.

pkgbase=python-django-extensions
_pkgbase="${pkgbase#python-}"
pkgname=(python-django-extensions python2-django-extensions)
pkgver=1.7.1
pkgrel=1
pkgdesc='A collection of custom extensions for the Django Framework.'
arch=(any)
url='http://github.com/django-extensions/django-extensions'
license=(MIT)
makedepends=(
  python-django
  python-setuptools
  python-six
  python2-django
  python2-setuptools
  python2-six
)
options=(!emptydirs)
source=("https://github.com/${_pkgbase}/${_pkgbase}/archive/${pkgver}.tar.gz")
sha256sums=('d6592063078ad62eb5f459b13ca5f956119fbfa54659a487059d22a6dbbb0ed3')

package_python-django-extensions() {
  depends=(python-django python-six)
  optdepends=(
    'graphviz: to graph Django models'
    'python-werkzeug: to use the Werkzeug debugger in the embedded web server'
  )

  cd "${srcdir}/${_pkgbase}-${pkgver}"
  python setup.py install --root="${pkgdir}/" --optimize=1
  install -Dm 644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}

package_python2-django-extensions() {
  depends=(python2-django python2-six)
  optdepends=(
    'graphviz: to graph Django models'
    'python2-werkzeug: to use the Werkzeug debugger in the embedded web server'
  )

  cd "${srcdir}/${_pkgbase}-${pkgver}"
  python2 setup.py install --root="${pkgdir}/" --optimize=1
  install -Dm 644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}

# vim:set ts=2 sw=2 et:

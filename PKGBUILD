# Contributor: Jakob Gahde <j5lx@fmail.co.uk>
# Maintainer: Simon Hanna<simon DOT Hanna AT serve-me DOT info>

pkgbase=django-allauth
pkgname=('python-django-allauth' 'python2-django-allauth')
pkgver=0.33.0
pkgrel=1
pkgdesc="Integrated set of Django applications addressing authentication, registration, account management as well as 3rd party (social) account authentication."
arch=('any')
license=('MIT')
url="http://www.intenct.nl/projects/django-allauth/"
makedepends=('python-setuptools'
             'python2-setuptools')
source=("https://github.com/pennersr/${pkgbase}/archive/${pkgver}.tar.gz")
sha256sums=('9c935d7d9aab8f01f2e857408e6a5e389e44745804b87b739903e878f0bbaf06')

package_python-django-allauth() {
  depends=('python' 'python-django>=1.10' 'python-openid' 'python-requests-oauthlib'
           'python-requests')

  cd "${srcdir}/${pkgbase}-${pkgver}"

  python setup.py install --root="${pkgdir}" -O1
  install -Dm644 "LICENSE" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}

package_python2-django-allauth() {
  depends=('python2' 'python2-django>=1.10' 'python2-openid'
           'python2-requests-oauthlib' 'python2-requests')

  cd "${srcdir}/${pkgbase}-${pkgver}"

  python2 setup.py install --root="${pkgdir}" -O1
  install -Dm644 "LICENSE" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}

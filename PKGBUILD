# Maintainer: Peter Mattern <pmattern at arcor dot de>

pkgbase=python-social-auth-app-django
pkgname=(${pkgbase} 'python2-social-auth-app-django')
pkgver=2.1.0
pkgrel=1
pkgdesc='Django component of the python-social-auth ecosystem'
arch=('any')
url='https://github.com/python-social-auth/social-app-django'
license=('BSD')
makedepends=('python-setuptools' 'python2-setuptools' 'python-social-auth-core' 'python2-social-auth-core')
source=("${pkgbase}-${pkgver}.tar.gz::https://github.com/python-social-auth/social-app-django/archive/${pkgver}.tar.gz")
sha256sums=('9587984a317bbec2c8246db28404f064598ed8fea9b06af0b7337fe300569606')

prepare() {
    cp -r social-app-django-${pkgver} social-app-django-${pkgver}-python2
}

build() {

    cd ${srcdir}/social-app-django-${pkgver}
    python setup.py build

    cd ${srcdir}/social-app-django-${pkgver}-python2
    python2 setup.py build

}

package_python-social-auth-app-django() {

    depends=('python-social-auth-core')

    cd social-app-django-${pkgver}
    python setup.py install --root ${pkgdir} --optimize=1

    install -Dm644 ${srcdir}/social-app-django-${pkgver}/LICENSE ${pkgdir}/usr/share/licenses/${pkgname}/LICENSE

}

package_python2-social-auth-app-django() {

    depends=('python2-social-auth-core')

    cd social-app-django-${pkgver}-python2
    python2 setup.py install --root ${pkgdir} --optimize=1

    install -Dm644 ${srcdir}/social-app-django-${pkgver}-python2/LICENSE ${pkgdir}/usr/share/licenses/${pkgname}/LICENSE

}

#Maintainer: Dakota marshalldakota549@pm.me

pkgname=('wifi-password')
_module='wifi-password'
pkgver='1.0.6'
pkgrel=1
pkgdesc="Quickly fetch your WiFi password and if needed, generate a QR code of your WiFi to allow phones to easily connect"
url="https://github.com/sdushantha/wifi-password"
depends=('python' 'python-qrcode')
makedepends=('python-setuptools')
license=('MIT')
arch=('any')
source=("https://files.pythonhosted.org/packages/source/${_module::1}/$_module/$_module-$pkgver.tar.gz")
sha256sums=('7da1c6cab6ed3fcc8279b3098b4171d8553cdb245eef0d6eefcaeb80e1153370')

build() {
    cd "${srcdir}/${_module}-${pkgver}"
    python setup.py build
}

package() {
    depends+=()
    cd "${srcdir}/${_module}-${pkgver}"
    python setup.py install --root="${pkgdir}" --optimize=1 --skip-build
}



#Automatically generated by pip2arch on 2017-03-03

pkgname=python-flask-socketio
pkgver=2.8.5
pkgrel=1
pkgdesc="Socket.IO integration for Flask applications"
url="http://github.com/miguelgrinberg/Flask-SocketIO/"
depends=('python' 'python-flask' 'python-socketio' 'python-engineio')
makedepends=('python3' )
license=('MIT')
arch=('any')
source=('https://pypi.python.org/packages/41/79/e4872a3c8dab0ed51258dec370677f03276eea5161333be1d5be18bcc15f/Flask-SocketIO-2.8.5.tar.gz')
md5sums=('0b59cc04a3efb0dd6922d162b8bbf88e')

build() {
    cd $srcdir/Flask-SocketIO-2.8.5
    python setup.py build
}

package() {
    cd $srcdir/Flask-SocketIO-2.8.5
    python setup.py install --root="$pkgdir" --optimize=1 
}

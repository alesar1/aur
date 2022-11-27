# Maintainer: Zen Wen <zen.8841@gmail.com>

pkgbase=pyqt5
pkgname=('python-pyqt5-webkit')
pkgdesc="A set of Python bindings for the Qt5 toolkit with Qt5WebKit support"
pkgver=5.15.7
pkgrel=1
arch=('x86_64')
url="https://riverbankcomputing.com/software/pyqt/intro"
license=('GPL')
groups=(pyqt5)
depends=('python-pyqt5-sip' 'qt5-base')
optdepends=('python-opengl: enable OpenGL 3D graphics in PyQt applications'
            'python-dbus: for python-dbus mainloop support'
            'qt5-multimedia: QtMultimedia, QtMultimediaWidgets'
            'qt5-tools: QtHelp, QtDesigner'
            'qt5-svg: QtSvg'
            'qt5-webkit: QtWebKit, QtWebKitWidgets'
            'qt5-xmlpatterns: QtXmlPatterns'
            'qt5-declarative: QtQml, qmlplugin'
            'qt5-serialport: QtSerialPort'
            'qt5-websockets: QtWebSockets'
            'qt5-connectivity: QtNfc, QtBluetooth'
            'qt5-x11extras: QtX11Extras'
            'qt5-remoteobjects: QtRemoteObjects'
            'qt5-speech: QtTextToSpeech'
            'qt5-quick3d: QtQuick3D')
provides=('qt5-python-bindings' 'python-pyqt5=5.15.7')
makedepends=('sip' 'pyqt-builder' 'python-opengl' 'python-dbus'
             'qt5-connectivity' 'qt5-multimedia' 'qt5-tools' 'qt5-serialport' 'qt5-speech' 'qt5-svg'
             'qt5-webkit' 'qt5-websockets' 'qt5-x11extras' 'qt5-xmlpatterns' 'qt5-remoteobjects' 'qt5-quick3d')
conflicts=('pyqt5-common' 'python-pyqt5')
source=("https://pypi.python.org/packages/source/P/PyQt5/PyQt5-$pkgver.tar.gz")
sha256sums=('755121a52b3a08cb07275c10ebb96576d36e320e572591db16cfdbc558101594')
options=(debug)

build() {
  cd PyQt5-$pkgver
  sip-build \
    --confirm-license \
    --no-make \
    --api-dir /usr/share/qt/qsci/api/python \
    --pep484-pyi
  cd build
  make
}

package_python-pyqt5-webkit(){
  cd PyQt5-$pkgver/build
  make INSTALL_ROOT="$pkgdir" install -j1

  # Remove unused py2 version of uic modules:
  rm -r "$pkgdir"/usr/lib/python*/site-packages/PyQt5/uic/port_v2

  # compile Python bytecode
  python -m compileall -d / "$pkgdir"/usr/lib
  python -O -m compileall -d / "$pkgdir"/usr/lib
}

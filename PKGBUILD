# Maintainer: willemw <willemw12@gmail.com>

_pkgname2=spyder
_pkgname3=spyder3
pkgbase=$_pkgname2-git
pkgname=($_pkgname2-git $_pkgname3-git)
pkgver=3.0.0b2.r130.gb269751
pkgrel=1
arch=('any')
url="https://github.com/spyder-ide/spyder"
license=('MIT')
makedepends=('python2-sphinx' 'python2-setuptools' 
             'python-sphinx' 'python-setuptools'
             'git')
install=$pkgname.install
source=($_pkgname2::git://github.com/spyder-ide/spyder.git)
md5sums=('SKIP')

pkgver() {
  cd $_pkgname2
  git describe --long | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
} 

prepare() {
  rm -rf $_pkgname3
  cp -a $_pkgname2 $_pkgname3
}

build() {
  cd "$srcdir/$_pkgname2"
  python2 setup.py build

  cd "$srcdir/$_pkgname3"
  python setup.py build
}

package_spyder-git() {
  pkgdesc="Scientific PYthon Development EnviRonment providing MATLAB-like features (Python 2 version)"
  # Note: 'ipython2-notebook' contains QTConsole
  # Note: 'ipython2' (dependency of 'ipython2-notebook') contains Pickleshare
  # Note: 'ipython2-notebook' nor 'jupyter' contain a Python 2 version of Nbconvert
  # 'icu'
  depends=('python2-pyqt5'
           'ipython2-notebook'
           'python2-pyflakes'
           'python2-sphinx'
           'python2-pygments'
           'python2-pylint'
           'python2-pep8'
           'python2-psutil'
           'python2-qtawesome'

           'python2-pyzmq'
           'desktop-file-utils'
           'gtk-update-icon-cache')
  optdepends=('python2-pyqt4: Qt-Python bindings'
              'python2-pyside: Qt-Python bindings'
              'python2-rope: editor code completion, calltips and go-to-definition'
              'python2-jedi: editor code completion, calltips and go-to-definition'
              'python2-matplotlib: 2D/3D plotting'
              'python2-pandas: DataFrame and Series support'
              'python2-numpy: N-dimensional arrays'
              'python2-sympy: symbolic mathematics'
              'python2-scipy: signal/image processing'

              'python2-h5py: HDF5 support')
  provides=($_pkgname2)
  conflicts=($_pkgname2)

  cd $_pkgname2
  python2 setup.py install --prefix=/usr --root="$pkgdir" --optimize=1
  # Install a scalable icon for the spyder.desktop file
  install -Dm644 spyderlib/images/spyder.svg "$pkgdir/usr/share/icons/hicolor/scalable/apps/spyder.svg"
  install -Dm644 LICENSE "$pkgdir/usr/share/licenses/$_pkgname2/LICENSE"
  rm -f "$pkgdir/usr/bin/spyder_win_post_install.py"
}

package_spyder3-git() {
  pkgdesc="Scientific PYthon Development EnviRonment providing MATLAB-like features (Python 3 version)"
  # Note: 'jupyter' contains QTConsole and Nbconvert
  # Note: 'ipython' (dependency of 'jupyter') contains Pickleshare
  # 'icu'
  depends=('python-pyqt5'
           'jupyter'
           'python-pyflakes'
           'python-sphinx'
           'python-pygments'
           'python-pylint'
           'pep8'
           'python-psutil'
           'python-qtawesome'

           'python-pyzmq'
           'desktop-file-utils'
           'gtk-update-icon-cache')
  optdepends=('python-pyqt4: Qt-Python bindings'
              'python-pyside: Qt-Python bindings'
              'python-rope: editor code completion, calltips and go-to-definition'
              'python-jedi: editor code completion, calltips and go-to-definition'
              'python-matplotlib: 2D/3D plotting'
              'python-pandas: DataFrame and Series support'
              'python-numpy: N-dimensional arrays'
              'python-sympy: symbolic mathematics'
              'python-scipy: signal/image processing'

              'python-h5py: HDF5 support')
  provides=($_pkgname3)
  conflicts=($_pkgname3)

  cd $_pkgname3
  python setup.py install --prefix=/usr --root="$pkgdir" --optimize=1
  # Install a scalable icon for the spyder3.desktop file
  install -Dm644 spyderlib/images/spyder.svg "$pkgdir/usr/share/icons/hicolor/scalable/apps/spyder3.svg"
  install -Dm644 LICENSE "$pkgdir/usr/share/licenses/$_pkgname3/LICENSE"
  rm -f "$pkgdir/usr/bin/spyder_win_post_install.py"
}


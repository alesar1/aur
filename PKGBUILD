# Maintainer: willemw <willemw12@gmail.com>

pkgname=spyder-git
pkgver=5.1.1.r252.g0a86dcdc5
pkgrel=1
pkgdesc="The Scientific Python Development Environment"
arch=('any')
url="https://www.spyder-ide.org/"
license=('MIT')
makedepends=('git' 'python-setuptools' 'python-sphinx')
#'icu'
depends=('jupyter-nbconvert'
         'python-atomicwrites'
         'python-chardet'
         'python-cloudpickle'
         'python-diff-match-patch'
         'python-intervaltree'
         'python-jedi'
         'python-keyring'
         'python-language-server'
         'python-lsp-black'
         'python-lsp-server'
         'python-numpydoc'
         'python-paramiko'
         'python-parso'
         'python-pexpect'
         'python-pickleshare'
         'python-psutil'
         'python-pycodestyle'
         'python-pyflakes'
         'python-pygments'
         'python-pylint'
         'python-pympler'
         'python-pyqt5'
         'python-pyzmq'
         'python-qdarkstyle'
         'python-qstylizer'
         'python-qtawesome'
         'python-qtconsole'
         'python-rope'
         'python-rtree'
         'python-sphinx'
         'python-spyder-kernels'
         'python-textdistance'
         'python-three-merge'
         'python-watchdog'
         'python-xdg'

         'autopep8'
         'flake8'
         'python-cookiecutter'
         'python-pydocstyle'
         'python-pyqtwebengine'
         'qt5-webkit'
         'yapf')
#'pyside2: Qt-Python bindings'
optdepends=('cython: run Cython files'
            'python-matplotlib: 2D/3D plotting'
            'python-numpy: N-dimensional arrays'
            'python-pandas: DataFrame and Series support'
            'python-scipy: signal/image processing'
            'python-sympy: symbolic mathematics'

            'python-h5py: HDF5 support')
provides=("${pkgname%-git}")
conflicts=("${pkgname%-git}" 'spyder3-git')
replaces=('spyder3-git')
source=($pkgname::git+https://github.com/spyder-ide/spyder.git)
md5sums=('SKIP')

pkgver() {
  cd $pkgname
  git describe --long | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

prepare() {
  find $pkgname -type f -iname \*.py -exec sed -i -e 's|"pep8"|"pycodestyle"|g' -e "s|'pep8'|'pycodestyle'|g" '{}' \;
}

build() {
  cd $pkgname
  python setup.py build
}

package() {
  cd $pkgname

  python setup.py install --prefix=/usr --root="$pkgdir" --optimize=1

  install -Dm644 LICENSE.txt -t "$pkgdir/usr/share/licenses/${pkgname%-git}"
  # Install a scalable icon for the spyder3.desktop file
  install -Dm644 spyder/images/spyder.svg "$pkgdir/usr/share/icons/hicolor/scalable/apps/spyder3.svg"

  rm -f "$pkgdir/usr/bin/spyder_win_post_install.py"
}


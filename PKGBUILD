# Maintainer: Tomislav Ivek <tomislav.ivek@gmail.com>

pkgname=conan-git
pkgver=1.21.0.r128.ge7ed0f58
pkgrel=1
pkgdesc="A distributed, open source, C/C++ package manager."
arch=('any')
url="https://conan.io"
license=('MIT')
makedepends=('python-setuptools')
depends=('python-pyjwt>=1.4.0'
         'python-requests>=2.8.1'
         'python-urllib3>=1.25.6'
         'python-colorama>=0.3.3'
         'python-yaml>=3.11'
         'python-patch-ng>=1.17.2'
         'python-fasteners>=0.14.1'
         'python-six>=1.10.0'
         'python-node-semver>=0.6.1'
         'python-bottle>=0.12.8'
         'python-distro>=1.0.2'
         'python-pluginbase>=0.5'
         'python-future>=0.16.0'
         'python-pygments>=2.0'
         'python-deprecation>=2.0'
         'python-tqdm>=4.28.1'
         'python-jinja>=2.3'
         'python-dateutil>=2.7.0')
provides=('conan')
conflicts=('conan')
source=("conan-git::git+https://github.com/conan-io/conan.git" "arch-reqs.patch")
md5sums=('SKIP'
         '47aa1de692d5aa3be8767a42e5cff295')


pkgver() {
  cd "$pkgname"
  git describe --long | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

prepare() {
  cd "$pkgname"
  patch -Np1 -i "${srcdir}/arch-reqs.patch"
}

build() {
  cd "$srcdir/$pkgname"
  python setup.py build
}

package() {
  cd "$srcdir/$pkgname"
  python setup.py install --optimize=1 --root=${pkgdir}
  install -m755 -d "${pkgdir}/usr/share/licenses/conan"
  install -m644 LICENSE.md "${pkgdir}/usr/share/licenses/conan/"
  install -m755 -d "${pkgdir}/usr/share/doc/conan"
  install -m644 contributors.txt "${pkgdir}/usr/share/doc/conan/"
}

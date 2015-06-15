# Contributor: Bug <bug2000@gmail.com>
# Maintainer: Bug <bug2000@gmail.com>
pkgname=xpra-winswitch
pkgver=0.15.0
pkgrel=1
pkgdesc="Modified version of xpra by Winswitch"
arch=('i686' 'x86_64')
url='http://xpra.org/'
license=('GPL2')
depends=('python2' 'pygtk' 'libxtst' 'python2-imaging' 'python2-lz4'
         'ffmpeg' 'libvpx' 'xf86-video-dummy' 'libwebp')
optdepends=('x264: Codec')
conflicts=('parti-all')
provides=('parti-all')
makedepends=('python2-setuptools' 'cython2')
backup=('etc/xpra/xpra.conf' 'etc/xpra/xorg.conf')
install=xpra-winswitch.install
source=("https://xpra.org/src/xpra-$pkgver.tar.xz"
        "xpra-winswitch.install"
        'xpra@.service')
sha256sums=('bfa12806b245697b799a157f7882d0fa6abcb242a9937c3b0837cc779c0c519c'
            '1b1f8c58e1e8e5aa9816bffb1611a8a704a482ddfe789512159d5727035468f0'
            'b882f72380ca6bdee9580e839440dd5bd3523b9db804095887127b9cce6cfaf2')

build() {
  cd ${srcdir}/xpra-$pkgver
  python2 setup.py build || return 1
  cd rencode
  python2 setup.py build || return 1
}

package() {
  install -Dm644 'xpra@.service' "$pkgdir/usr/lib/systemd/user/xpra@.service"
  cd ${srcdir}/xpra-$pkgver
  python2 setup.py install --root=${pkgdir} || return 1
  cd rencode
  python2 setup.py install --root=${pkgdir} || return 1
}
